import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from './LoginWithPhoneScreen.style';
import {
  IC_BACK_GROUND,
  IC_APP,
  IC_ARROW_BACK,
  IC_PEOPLE,
  IC_LOCK,
} from '../../../assets';
import MyStatusBar from '../../../components/MyStatusBar';
import Input from '../../../components/Input';
import API from '../../../api';
import LoaderIndicator from '../../../components/LoaderIndicator';
import {loginSuccess} from '../../../redux/actions/User';
import {useDispatch} from 'react-redux';
import {MALE, PASSWORD_INVALID} from '../../../constants';
import {
  setWeight,
  setHeight,
  setGender,
  setPhysicalState,
  setName,
  setTargetWeight,
  setDob,
  setHand,
  setFoot,
  setStomach,
} from '../../../redux/actions/welcome';
import {UserModel} from '../../../models';
import {PhysicalState} from '../../../mocks';
import checkMuscle from '../../../utils/checkMuscle';

interface Props {
  navigation: any;
}
const LoginScreen = (props: Props) => {
  const {navigation} = props;
  //redux
  const dispatch = useDispatch();
  // state
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const _goBack = () => {
    navigation.goBack();
  };

  const _updateWelcome = (data: UserModel) => {
    dispatch(setHeight(data.height));
    dispatch(setWeight(data.weight));
    dispatch(setGender(data.gender === MALE));
    dispatch(setName(data.full_name));
    dispatch(setTargetWeight(data.target_weight));
    dispatch(setDob(data.dob));
    const item = PhysicalState.find((e) => e.key === data.physical);
    if (item) {
      dispatch(setPhysicalState(item));
    }
    if (Array.isArray(data.muscle)) {
      data.muscle.forEach((element) => {
        const val = checkMuscle.stringToBool(element);
        dispatch(setHand(val.isHand));
        dispatch(setFoot(val.isFoot));
        dispatch(setStomach(val.isStomach));
      });
    }
  };

  const _checkNumberChar = (value: string) => {
    if (value.length === 10) {
      return true;
    }
    return false;
  };

  const _onPressLogin = async () => {
    switch ('') {
      case phone:
        return Alert.alert('B???n vui l??ng nh???p s??? ??i???n tho???i');
      case password:
        return Alert.alert('B???n vui l??ng nh???p m???t kh???u');
      default:
        break;
    }
    const regEx = /^(\+?84|0|\(\+?84\))[1-9]\d{8,9}$/g;
    if (!regEx.test(phone.trim()) && !_checkNumberChar(phone)) {
      return Alert.alert('S??? ??i???n tho???i kh??ng ch??nh x??c');
    }
    try {
      setLoading(true);
      const params = {
        phone,
        password,
      };
      const res = await API.user.loginPhone(params);
      await dispatch(loginSuccess(res.data));
      _updateWelcome(res.data);
      navigation.navigate('AppStack');
    } catch (error) {
      if (error.response && error.response.status === 404) {
        return Alert.alert(
          'T??i kho???n kh??ng ???? t???n t???i',
          'xin vui l??ng th??? l???i',
        );
      }
      if (error.response && error.response.data.code === PASSWORD_INVALID) {
        return Alert.alert('M???t kh???u kh??ng ch??nh x??c', 'xin vui l??ng th??? l???i');
      }
      return Alert.alert('Kh??ng c?? k???t n???i internet', 'xin vui l??ng th??? l???i');
    } finally {
      setLoading(false);
    }
  };

  const _onchangePhone = (text: string) => {
    setPhone(text);
  };

  const _onchangePass = (text: string) => {
    setPassword(text);
  };

  const _renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={_goBack} style={styles.wrapIconBack}>
        <Image source={IC_ARROW_BACK} style={styles.iconBack} />
      </TouchableOpacity>
      <Text style={styles.login}>????ng nh???p</Text>
    </View>
  );

  const _renderGroundInput = () => (
    <View style={styles.groundInput}>
      <Input
        icon={IC_PEOPLE}
        placeholder="S??? ??i???n tho???i"
        onChangeText={_onchangePhone}
        isCheck={false}
        keyboardType="numeric"
        value={phone}
      />
      <Input
        icon={IC_LOCK}
        placeholder="M???t kh???u"
        style={styles.input}
        onChangeText={_onchangePass}
        isCheck={false}
        secureTextEntry
        value={password}
      />
    </View>
  );

  const _renderButton = () => (
    <View style={styles.wrapButton}>
      <TouchableOpacity onPress={_onPressLogin} style={styles.button}>
        <Text style={styles.titleButton}>????ng nh???p</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <MyStatusBar barStyle="dark-content" />
      <ImageBackground
        resizeMode="contain"
        style={styles.icon_backGround}
        source={IC_BACK_GROUND}>
        <Image source={IC_APP} style={styles.icon} />
        <Text style={styles.title}>Gi???m c??n t???i nh??</Text>
      </ImageBackground>
      <View style={styles.body}>
        {_renderHeader()}
        {_renderGroundInput()}
        {_renderButton()}
      </View>
      <LoaderIndicator isLoading={isLoading} />
    </View>
  );
};
export default LoginScreen;
