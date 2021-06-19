import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './RegisterScreen.style';
import {
  IC_BACK_GROUND,
  IC_APP,
  IC_ARROW_BACK,
  IC_PEOPLE,
  IC_LOCK,
  IC_LOCATION,
  IC_EMAIL,
  IC_PHONE,
} from '../../../assets';
import MyStatusBar from '../../../components/MyStatusBar';
import Input from '../../../components/Input';
import {useDispatch, useSelector} from 'react-redux';
import {WelComeModel} from '../../../models';
import API from '../../../api';
import {MALE, FEMALE} from '../../../constants';
import LoaderIndicator from '../../../components/LoaderIndicator';
import checkMuscle from '../../../utils/checkMuscle';
import {loginSuccess} from '../../../redux/actions/User';

interface Props {
  navigation: any;
}
const RegisterScreen = (props: Props) => {
  const {navigation} = props;
  //redux
  const dispatch = useDispatch();
  const welcome: WelComeModel = useSelector((state: any) => state.welcome);
  // state
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState(welcome.name);
  const [isLoading, setLoading] = useState(false);
  const _goBack = () => {
    navigation.goBack();
  };

  const checkNumberChar = (value: string) => {
    if (value.length === 10) {
      return true;
    }
    return false;
  };

  const validateEmail = (mail: string) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(mail).toLowerCase());
  };

  const _onPressRegister = async () => {
    switch ('') {
      case name:
        return Alert.alert('Bạn vui lòng nhập họ và tên');
      case phone:
        return Alert.alert('Bạn vui lòng nhập số điện thoại');
      case password:
        return Alert.alert('Bạn vui lòng nhập mật khẩu');
      case email:
        return Alert.alert('Bạn vui lòng nhập Email');
      case address:
        return Alert.alert('Bạn vui lòng nhập địa chỉ');
      default:
        break;
    }
    const regEx = /^(\+?84|0|\(\+?84\))[1-9]\d{8,9}$/g;
    if (!regEx.test(phone.trim()) && !checkNumberChar(phone)) {
      return Alert.alert('Số điện thoại không chính xác');
    }
    if (!validateEmail(email)) {
      return Alert.alert('Email không chính xác');
    }
    try {
      setLoading(true);
      const params = {
        phone,
        password,
        email,
        address,
        dob: welcome.dob,
        name,
        gender: welcome.isMale ? MALE : FEMALE,
        height: welcome.height,
        weight: welcome.weight,
        target_weight: welcome.targetWeight,
        physical: welcome.physicalState.key,
        muscle: checkMuscle.boolToString(welcome).code,
      };
      const res = await API.user.register(params);
      await dispatch(loginSuccess(res.data));
      navigation.navigate('AppStack');
    } catch (error) {
      if (error.response && error.response.status === 409) {
        Alert.alert('Tài khoản này đã tồn tại', 'xin vui lòng thử lại');
      } else {
        Alert.alert('Không có kết nối internet', 'xin vui lòng thử lại');
      }
    } finally {
      setLoading(false);
    }
  };

  const _renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={_goBack} style={styles.wrapIconBack}>
        <Image source={IC_ARROW_BACK} style={styles.iconBack} />
      </TouchableOpacity>
      <Text style={styles.login}>Đăng kí</Text>
    </View>
  );

  const _onchangePhone = (text: string) => {
    setPhone(text);
  };

  const _onchangePass = (text: string) => {
    setPassword(text);
  };

  const _onchangeAddress = (text: string) => {
    setAddress(text);
  };

  const _onchangeMail = (text: string) => {
    setEmail(text);
  };

  const _renderGroundInput = () => (
    <View style={styles.groundInput}>
      <Input
        icon={IC_PEOPLE}
        placeholder="Họ và tên"
        onChangeText={(text: string) => setName(text)}
        isCheck={false}
        value={name}
      />
      <Input
        icon={IC_PHONE}
        style={styles.input}
        placeholder="Số điện thoại"
        onChangeText={_onchangePhone}
        isCheck={false}
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
      <Input
        icon={IC_EMAIL}
        placeholder="Email"
        style={styles.input}
        onChangeText={_onchangeMail}
        isCheck={false}
        value={email}
      />
      <Input
        icon={IC_LOCATION}
        placeholder="Địa chỉ"
        style={styles.input}
        onChangeText={_onchangeAddress}
        isCheck={false}
        value={address}
      />
    </View>
  );

  const _renderButton = () => (
    <View style={styles.wrapButton}>
      <TouchableOpacity onPress={_onPressRegister} style={styles.button}>
        <Text style={styles.titleButton}>Đăng kí</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <MyStatusBar barStyle="dark-content" />
      <ImageBackground
        resizeMode="contain"
        style={styles.icon_backGround}
        source={IC_BACK_GROUND}>
        <Image source={IC_APP} style={styles.icon} />
        <Text style={styles.title}>Giảm cân tại nhà</Text>
      </ImageBackground>
      <ScrollView style={styles.body}>
        {_renderHeader()}
        {_renderGroundInput()}
        {_renderButton()}
      </ScrollView>
      <LoaderIndicator isLoading={isLoading} />
    </KeyboardAvoidingView>
  );
};
export default RegisterScreen;
