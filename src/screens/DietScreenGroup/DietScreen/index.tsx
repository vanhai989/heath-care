import React, {useState} from 'react';
import {View, Text, Dimensions, TouchableOpacity} from 'react-native';
import styles from './DietScreen.style';
import DietTodayScreen from '../DietTodayScreen';
import DietWeekScreen from '../DietWeekScreen';
import DietOtherScreen from '../DietOtherScreen';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Colors} from '../../../themes';

interface Props {
  navigation: any;
}
const initialLayout = {width: Dimensions.get('window').width};
const borderRightWidth = 0.5;
const notBorderRightWidth = 0;
const DietScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Hôm nay'},
    {key: 'second', title: 'Kế hoạch tuần'},
    {key: 'third', title: 'Các món khác'},
  ]);

  const _renderScene = SceneMap({
    first: DietTodayScreen,
    second: DietWeekScreen,
    third: DietOtherScreen,
  });

  const _renderTabBar = (props: any) => {
    return (
      <View style={styles.wrapTabBar}>
        {props.navigationState.routes.map(_renderItemTabBar)}
      </View>
    );
  };

  const _renderItemTabBar = (e: {key: string; title: string}, i: number) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => setIndex(i)}
      style={[
        styles.itemTabBar,
        {
          backgroundColor: i === index ? Colors.white : Colors.grey,
          borderRightWidth: i === 2 ? notBorderRightWidth : borderRightWidth,
        },
      ]}
      key={i}>
      <Text style={styles.titleItemTabBar}>{e.title}</Text>
    </TouchableOpacity>
  );

  const _renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.titleHeader}>Chế độ ăn</Text>
      <View style={styles.line} />
    </View>
  );

  return (
    <View style={styles.container}>
      {_renderHeader()}
      <TabView
        style={styles.tabView}
        renderTabBar={_renderTabBar}
        navigationState={{index, routes}}
        renderScene={_renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </View>
  );
};
export default DietScreen;
