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
        return Alert.alert('Bạn vui lòng nhập số điện thoại');
      case password:
        return Alert.alert('Bạn vui lòng nhập mật khẩu');
      default:
        break;
    }
    const regEx = /^(\+?84|0|\(\+?84\))[1-9]\d{8,9}$/g;
    if (!regEx.test(phone.trim()) && !_checkNumberChar(phone)) {
      return Alert.alert('Số điện thoại không chính xác');
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
          'Tài khoản không đã tồn tại',
          'xin vui lòng thử lại',
        );
      }
      if (error.response && error.response.data.code === PASSWORD_INVALID) {
        return Alert.alert('Mật khẩu không chính xác', 'xin vui lòng thử lại');
      }
      return Alert.alert('Không có kết nối internet', 'xin vui lòng thử lại');
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
      <Text style={styles.login}>Đăng nhập</Text>
    </View>
  );

  const _renderGroundInput = () => (
    <View style={styles.groundInput}>
      <Input
        icon={IC_PEOPLE}
        placeholder="Số điện thoại"
        onChangeText={_onchangePhone}
        isCheck={false}
        keyboardType="numeric"
        value={phone}
      />
      <Input
        icon={IC_LOCK}
        placeholder="Mật khẩu"
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
        <Text style={styles.titleButton}>Đăng nhập</Text>
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
        <Text style={styles.title}>Giảm cân tại nhà</Text>
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
