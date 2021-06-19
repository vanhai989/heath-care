import React from 'react';
import {Image, ImageSourcePropType, Text} from 'react-native';
import NewsScreen from '../screens/NewsScreenGroup/NewsScreen';
import DietScreen from '../screens/DietScreenGroup/DietScreen';
import ExerciseStack from './ExerciseStack';
import AccountScreen from '../screens/AccountScreenGroup/AccountScreen';
import HomeScreen from '../screens/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const BotTab = createBottomTabNavigator();
import {IC_HOME, IC_EAT, IC_EXERCISE, IC_NEWS, IC_PEOPLE} from '../assets';
import {Colors, Fonts} from '../themes';

const fontSize = 14;
const _renderItemHome = (
  name: string,
  tabBarLabel: string,
  component: any,
  icon: ImageSourcePropType,
) => (
  <BotTab.Screen
    name={name}
    component={component}
    options={{
      tabBarLabel: ({focused}) => (
        <Text
          style={{
            fontSize,
            fontFamily: Fonts.CabinRegular,
            color: focused ? Colors.accent_color : Colors.gray2,
          }}>
          {tabBarLabel}
        </Text>
      ),
      tabBarIcon: ({size, focused}) => (
        <Image
          source={icon}
          style={{
            height: size,
            width: size,
            tintColor: focused ? Colors.accent_color : Colors.gray2,
          }}
          resizeMode="contain"
        />
      ),
    }}
  />
);

const HomeApp = () => (
  <BotTab.Navigator lazy initialRouteName={'HomeScreen'}>
    {_renderItemHome('HomeScreen', 'Trang chủ', HomeScreen, IC_HOME)}
    {_renderItemHome('DietScreen', 'Chế độ ăn', DietScreen, IC_EAT)}
    {_renderItemHome('ExerciseStack', 'Chế độ tập', ExerciseStack, IC_EXERCISE)}
    {_renderItemHome('NewsScreen', 'Tin tức', NewsScreen, IC_NEWS)}
    {_renderItemHome('AccountScreen', 'Cá nhân', AccountScreen, IC_PEOPLE)}
  </BotTab.Navigator>
);

export default HomeApp;
