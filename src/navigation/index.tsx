import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import WelcomeStack from './WelcomeStack';
import SplashScreen from '../screens/SplashScreen';
import {useSelector} from 'react-redux';

const _renderItemStack = (name: string, component: any) => (
  <Stack.Screen name={name} component={component} />
);

const AppNavigation = () => {
  const {isSplash, isLogin} = useSelector((state: any) => state.auth);
  const {isComplete} = useSelector((state: any) => state.welcome);
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {isSplash && _renderItemStack('SplashScreen', SplashScreen)}
        {!isComplete && _renderItemStack('WelcomeStack', WelcomeStack)}
        {isLogin && _renderItemStack('AuthStack', AuthStack)}
        {_renderItemStack('AppStack', AppStack)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
