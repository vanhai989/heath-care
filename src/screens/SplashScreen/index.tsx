import React, {useEffect} from 'react';
import {ImageBackground, StatusBar} from 'react-native';
import {SPLASH} from '../../assets';
import styles from './SplashScreen.style';
import {Colors} from '../../themes';
import {useSelector} from 'react-redux';
import {UserModel} from '../../models';
interface Props {
  navigation: any;
}
const SplashScreen = (props: Props) => {
  const {navigation} = props;
  const {isComplete} = useSelector((state: any) => state.welcome);
  const user: UserModel = useSelector((state: any) => state.user);
  useEffect(() => {
    setTimeout(() => {
      if (isComplete) {
        if (user.access_token) {
          return navigation.navigate('AppStack');
        }
        return navigation.navigate('AuthStack');
      }
      return navigation.navigate('WelcomeStack');
    }, 1000);
  });

  return (
    <ImageBackground source={SPLASH} style={styles.container}>
      <StatusBar translucent backgroundColor={Colors.transparent} />
    </ImageBackground>
  );
};

export default SplashScreen;
