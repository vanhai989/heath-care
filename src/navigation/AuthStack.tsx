import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/AuthScreenGroup/LoginScreen';
import LoginWithPhoneScreen from '../screens/AuthScreenGroup/LoginWithPhoneScreen';
import RegisterScreen from '../screens/AuthScreenGroup/RegisterScreen';
const Stack = createStackNavigator();

const _renderItemStack = (name: string, component: any) => (
  <Stack.Screen name={name} component={component} />
);

const AuthStack = () => (
  <Stack.Navigator headerMode="none">
    {_renderItemStack('LoginScreen', LoginScreen)}
    {_renderItemStack('LoginWithPhoneScreen', LoginWithPhoneScreen)}
    {_renderItemStack('RegisterScreen', RegisterScreen)}
  </Stack.Navigator>
);
export default AuthStack;
