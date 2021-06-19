import React, {useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './LoginScreen.style';
import {setSplash} from '../../../redux/actions/auth';
import {setComplete} from '../../../redux/actions/welcome';
import {useDispatch} from 'react-redux';
import {IC_BACK_GROUND, IC_APP, IC_VEGETABLE} from '../../../assets';
import MyStatusBar from '../../../components/MyStatusBar';

interface Props {
  navigation: any;
}
const LoginScreen = (props: Props) => {
  const {navigation} = props;
  const dispatch = useDispatch();

  useEffect(() => {
    _removeStack();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _removeStack = async () => {
    // loại bỏ màn splash khỏi stack
    await dispatch(setSplash(false));
    await dispatch(setComplete(true));
  };

  const _onPressButton = () => {
    navigation.navigate('LoginWithPhoneScreen');
  };

  const _renderButtonFacebook = () => (
    <TouchableOpacity onPress={_onPressRegister} style={styles.buttonFacebook}>
      <Text style={styles.titleButtonFacebook}>Đăng kí với số điện thoại</Text>
    </TouchableOpacity>
  );

  const _renderButton = () => (
    <TouchableOpacity onPress={_onPressButton} style={styles.button}>
      <Text style={styles.titleButton}>Đăng nhập với số điện thoại</Text>
    </TouchableOpacity>
  );

  const _onPressRegister = () => {
    navigation.navigate('RegisterScreen');
  };

  const _renderGroupButton = () => (
    <View style={styles.groupButton}>
      {_renderButton()}
      {_renderButtonFacebook()}
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
      <ScrollView showsVerticalScrollIndicator={false} style={styles.body}>
        <View style={styles.wrapVegetable}>
          <Image
            resizeMode="contain"
            source={IC_VEGETABLE}
            style={styles.iconVegetable}
          />
          <Text style={styles.titleVegetable}>
            {'Tính toán lượng calo phù hợp \n cho mỗi bữa ăn của bạn'}
          </Text>
        </View>
        {_renderGroupButton()}
      </ScrollView>
    </View>
  );
};
export default LoginScreen;
