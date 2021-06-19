import React, {useState, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './DietTodayScreen.style';
import DietToday from '../../../components/DietToday';
import {useNavigation} from '@react-navigation/native';
import {IC_CHECK_CIRCLE, IC_SMILE} from '../../../assets';
import API from '../../../api/diets';
import LoaderIndicator from '../../../components/LoaderIndicator';
import moment from 'moment';
import LoadMoreSpinner from '../../../components/LoadMoreIndicator';
import {DietModel} from '../../../models';
import {DIETS_TODAY, BREAKFAST} from '../../../constants/diets';
import EventBus from '../../../services/EventBus';
import {REFRESH_HOME} from '../../../constants';

const DietTodayScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState<DietModel[]>([]);
  const [isFinish, setFinish] = useState(false);
  const [menu, setMenu] = useState(BREAKFAST);
  const [isLoading, setIsLoading] = useState(false);
  let page = 1;
  const [nextPage, setNextPage] = useState(true);
  const [isLoadMore, setIsLoadMore] = useState(false);

  useEffect(() => {
    _initData();
    const listener = async () => _onRefreshing();
    EventBus.addListener(DIETS_TODAY, listener);
    return () => EventBus.removeListener(listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [menu]);

  const dow = () => {
    return moment().format('dddd').toLowerCase();
  };

  const _initData = async (loadMore: boolean = false) => {
    const params = {
      date: moment().format('YYYY-MM-DD'),
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
      setFinish(res.data.is_finish);
      loadMore
        ? setData([...data, ...res.data.data])
        : setData([...res.data.data]);
    } catch (error) {
      setData([]);
      Alert.alert('Chưa có món ăn cho hôm nay', 'Xin vui lòng thử lại');
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

  const _onRefreshing = () => {
    page = 1;
    _initData();
  };

  const _onPressItem = (item: DietModel) => {
    navigation.navigate('DietDetailScreen', {
      food_id: item.id,
      type: DIETS_TODAY,
    });
  };

  const _onPressAte = async () => {
    const params = {
      menu_code: menu,
      dow: moment().format('YYYY-MM-DD'),
    };
    try {
      setIsLoading(true);
      await API.finishedEating(params);
      setFinish(true);
      EventBus.fireEvent(REFRESH_HOME);
    } catch (error) {
      Alert.alert('Không có kết nối mạng', 'Xin vui lòng thử lại');
    } finally {
      setIsLoading(false);
    }
  };

  const _renderButtonFinish = () => (
    <View style={styles.button}>
      <Image source={IC_CHECK_CIRCLE} style={styles.icon} />
      <Text>Đã ăn</Text>
    </View>
  );

  const _renderButtonAte = () => (
    <TouchableOpacity onPress={_onPressAte} style={styles.buttonAte}>
      <Image source={IC_SMILE} style={styles.iconAte} />
      <Text>Ăn xong</Text>
    </TouchableOpacity>
  );

  const _renderDietsDay = () => (
    <DietToday
      onPressItem={_onPressItem}
      data={data}
      setMenu={setMenu}
      loadMore={loadMore}
      onRefresh={_onRefreshing}
      type={DIETS_TODAY}
      dow={dow()}
    />
  );

  return (
    <View style={styles.container}>
      {_renderDietsDay()}
      {data.length > 0 && !isFinish && _renderButtonAte()}
      {data.length > 0 && isFinish && _renderButtonFinish()}
      <LoaderIndicator isLoading={isLoading} />
      <LoadMoreSpinner loadMore={isLoadMore} />
    </View>
  );
};
export default DietTodayScreen;
