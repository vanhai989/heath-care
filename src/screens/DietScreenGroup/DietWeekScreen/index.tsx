import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './DietWeekScreen.style';
import {Colors} from '../../../themes';
import DietToday from '../../../components/DietToday';
import API from '../../../api/diets';
import LoaderIndicator from '../../../components/LoaderIndicator';
import LoadMoreSpinner from '../../../components/LoadMoreIndicator';
import {useNavigation} from '@react-navigation/native';
import {DietModel} from '../../../models';
import {
  FRIDAY,
  MONDAY,
  SATURDAY,
  SUNDAY,
  THURSDAY,
  TUESDAY,
  WEDNESDAY,
  DIETS_WEEK,
  BREAKFAST,
} from '../../../constants/diets';
import EventBus from '../../../services/EventBus';
import moment from 'moment';

const DietWeekScreen = () => {
  const navigation = useNavigation();
  const [indexRoot, setIndex] = useState(0);
  const [menu, setMenu] = useState(BREAKFAST);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<DietModel[]>([]);
  let page = 1;
  const [nextPage, setNextPage] = useState(true);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [routes] = useState([
    {key: 0, title: 'Hai', day: MONDAY, code: 2},
    {key: 1, title: 'Ba', day: TUESDAY, code: 3},
    {key: 2, title: 'Tư', day: WEDNESDAY, code: 4},
    {key: 3, title: 'Năm', day: THURSDAY, code: 5},
    {key: 4, title: 'Sáu', day: FRIDAY, code: 6},
    {key: 5, title: 'Bảy', day: SATURDAY, code: 7},
    {key: 6, title: 'CN', day: SUNDAY, code: 8},
  ]);

  useEffect(() => {
    _initData();
    const listener = () => _onRefresh();
    EventBus.addListener(DIETS_WEEK, listener);
    return () => EventBus.removeListener(listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menu, indexRoot]);

  const _checkDate = () => {
    const currentDay = moment().day() + 1;
    if (currentDay > routes[indexRoot].code) {
      return moment()
        .subtract(Math.abs(currentDay - routes[indexRoot].code), 'days')
        .format('YYYY-MM-DD');
    }
    if (currentDay < routes[indexRoot].code) {
      return moment()
        .add(Math.abs(currentDay - routes[indexRoot].code), 'days')
        .format('YYYY-MM-DD');
    }
    return moment().format('YYYY-MM-DD');
  };

  const _initData = async (loadMore: boolean = false) => {
    const params = {
      date: _checkDate(),
      menu: menu,
      limit: 15,
      page: page,
    };
    try {
      loadMore && setIsLoadMore(true);
      var id = setTimeout(() => {
        !loadMore && setIsLoading(true);
      }, 250);
      const res = await API.todayDietsFoods(params);
      setNextPage(res.data.nextPage);
      loadMore
        ? setData([...data, ...res.data.data])
        : setData([...res.data.data]);
    } catch (error) {
      setData([]);
      Alert.alert(
        `Chưa có món ăn cho thứ ${routes[indexRoot].title}`,
        'Xin vui lòng thử lại',
      );
    } finally {
      setIsLoading(false);
      setIsLoadMore(false);
      clearTimeout(id);
    }
  };

  const loadMore = () => {
    if (nextPage) {
      page = page + 1;
      _initData(true);
    }
  };

  const _onRefresh = () => {
    page = 1;
    _initData();
  };

  const _onPressItem = (item: DietModel) => {
    navigation.navigate('DietDetailScreen', {
      food_id: item.id,
      type: DIETS_WEEK,
    });
  };

  const _handleDateDiet = (e: {
    key: number;
    title: string;
    code: number;
    day: string;
  }) => {
    setIndex(e.key);
  };

  const _renderButton = (
    e: {key: number; title: string; code: number; day: string},
    i: number,
  ) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => _handleDateDiet(e)}
      style={[
        styles.buttonTab,
        {backgroundColor: i === indexRoot ? Colors.accent_color : Colors.white},
      ]}
      key={i}>
      <Text style={styles.titleButtonTab}>{e.title}</Text>
    </TouchableOpacity>
  );

  const _renderDietsDay = () => (
    <DietToday
      data={data}
      setMenu={setMenu}
      loadMore={loadMore}
      onPressItem={_onPressItem}
      onRefresh={_onRefresh}
      type={DIETS_WEEK}
      dow={routes[indexRoot].day}
      date={_checkDate()}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.wrapButtonTab}>{routes.map(_renderButton)}</View>
      {_renderDietsDay()}
      <LoaderIndicator isLoading={isLoading} />
      <LoadMoreSpinner loadMore={isLoadMore} />
    </View>
  );
};
export default DietWeekScreen;
