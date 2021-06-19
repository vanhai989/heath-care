import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ExerciseScreen from '../screens/ExerciseScreenGroup/ExerciseScreen';
const Stack = createStackNavigator();

const _renderItemStack = (name: string, component: any) => (
  <Stack.Screen name={name} component={component} />
);

const AppStack = () => (
  <Stack.Navigator headerMode="none">
    {_renderItemStack('ExerciseScreen', ExerciseScreen)}
  </Stack.Navigator>
);

export default AppStack;
