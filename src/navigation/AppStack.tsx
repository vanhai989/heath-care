import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabHome from './TabHome';
import DietDetailScreen from '../screens/DietScreenGroup/DietDetailScreen';
import ChangeDietScreen from '../screens/DietScreenGroup/ChangeDietScreen';
import SearchDietScreen from '../screens/DietScreenGroup/SearchDietScreen';
import EditAccountScreen from '../screens/AccountScreenGroup/EditAccountScreen';
import WelcomeMuscleGroupScreen from '../screens/WelcomeScreenGroup/WelcomeMuscleGroupScreen';
import WelcomePhysicalStateScreen from '../screens/WelcomeScreenGroup/WelcomePhysicalStateScreen';
import ExerciseScheduleScreen from '../screens/ExerciseScreenGroup/ExerciseScheduleScreen';
import PlayVideoScreen from '../screens/ExerciseScreenGroup/PlayVideoScreen';
import ExerciseDetailScreen from '../screens/ExerciseScreenGroup/ExerciseDetailScreen';
import ChangePasswordScreen from '../screens/AccountScreenGroup/ChangePasswordScreen';
import NewsDetailScreen from '../screens/NewsScreenGroup/NewsDetailScreen';
import ListWorkOutScreen from '../screens/ExerciseScreenGroup/ListWorkOutScreen';
import HowYouFeelScreen from '../screens/ExerciseScreenGroup/HowYouFeelScreen';

const Stack = createStackNavigator();

const _renderItemStack = (name: string, component: any) => (
  <Stack.Screen name={name} component={component} />
);

const AppStack = () => (
  <Stack.Navigator headerMode="none">
    {_renderItemStack('HomeStack', TabHome)}
    {_renderItemStack('DietDetailScreen', DietDetailScreen)}
    {_renderItemStack('ChangeDietScreen', ChangeDietScreen)}
    {_renderItemStack('SearchDietScreen', SearchDietScreen)}
    {_renderItemStack('EditAccountScreen', EditAccountScreen)}
    {_renderItemStack('WelcomeMuscleGroupScreen', WelcomeMuscleGroupScreen)}
    {_renderItemStack('WelcomePhysicalStateScreen', WelcomePhysicalStateScreen)}
    {_renderItemStack('ExerciseScheduleScreen', ExerciseScheduleScreen)}
    {_renderItemStack('ChangePasswordScreen', ChangePasswordScreen)}
    {_renderItemStack('ListWorkOutScreen', ListWorkOutScreen)}
    {_renderItemStack('NewsDetailScreen', NewsDetailScreen)}
    {_renderItemStack('ExerciseDetailScreen', ExerciseDetailScreen)}
    {_renderItemStack('PlayVideoScreen', PlayVideoScreen)}
    {_renderItemStack('HowYouFeelScreen', HowYouFeelScreen)}
  </Stack.Navigator>
);

export default AppStack;
