import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeYourInfoScreen from '../screens/WelcomeScreenGroup/WelcomeYourInfoScreen';
import WelcomeWeightHeightScreen from '../screens/WelcomeScreenGroup/WelcomeWeightHeightScreen';
import WelcomeTargetWeightScreen from '../screens/WelcomeScreenGroup/WelcomeTargetWeightScreen';
import WelcomePhysicalStateScreen from '../screens/WelcomeScreenGroup/WelcomePhysicalStateScreen';
import WelcomeMuscleGroupScreen from '../screens/WelcomeScreenGroup/WelcomeMuscleGroupScreen';
const Stack = createStackNavigator();

const _renderItemStack = (name: string, component: any) => (
  <Stack.Screen name={name} component={component} />
);

const WelcomeStack = () => (
  <Stack.Navigator headerMode="none">
    {_renderItemStack('WelcomeYourInfoScreen', WelcomeYourInfoScreen)}
    {_renderItemStack('WelcomeWeightHeightScreen', WelcomeWeightHeightScreen)}
    {_renderItemStack('WelcomeTargetWeightScreen', WelcomeTargetWeightScreen)}
    {_renderItemStack('WelcomePhysicalStateScreen', WelcomePhysicalStateScreen)}
    {_renderItemStack('WelcomeMuscleGroupScreen', WelcomeMuscleGroupScreen)}
  </Stack.Navigator>
);
export default WelcomeStack;
