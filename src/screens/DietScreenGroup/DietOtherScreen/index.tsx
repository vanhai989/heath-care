import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import styles from './DietOtherScreen.style';
import {Colors} from '../../../themes';
import {DietModel} from '../../../models';
import API from '../../../api/diets';
import LoaderIndicator from '../../../components/LoaderIndicator';
import LoadMoreSpinner from '../../../components/LoadMoreIndicator';
import DietToday from '../../../components/DietToday';
import {useNavigation} from '@react-navigation/native';
import {
  FOOD_LIKE,
  FOOD_SIMPLE,
  FOOD_EXPEDITED,
  FOOD_PROTEIN,
  SIDE_MEAL,
  OTHER_DIETS,
} from '../../../constants/diets';
import DietsEmpty from '../../../components/DietsEmpty';
import EventBus from '../../../services/EventBus';
import {REFRESH_FOODS_OTHER} from '../../../constants';

type category = {key: number; title: string; code: string};

const DietOtherScreen = () => {
  const [indexRoot, setIndex] = useState(0);
  const [data, setData] = useState<DietModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [nextPage, setNextPage] = useState(true);
  const [category, setCategory] = useState('food-like');

  const [routes] = useState([
    {key: 2, title: 'Món ăn yêu thích', code: FOOD_LIKE},
    {key: 5, title: 'Món ăn đơn giản', code: FOOD_SIMPLE},
    {key: 6, title: 'Bữa phụ', code: SIDE_MEAL},
    {key: 3, title: 'Món ăn giảm cân cấp tốc', code: FOOD_EXPEDITED},
    {key: 4, title: 'Món ăn nhiều protein', code: FOOD_PROTEIN},
  ]);
  let page = 1;

  const navigation = useNavigation();

  useEffect(() => {
    initData();
    const listener = async () => initData();
    EventBus.addListener(REFRESH_FOODS_OTHER, listener);
    return () => EventBus.removeListener(listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    initData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);

  const initData = async (loadMore: boolean = false) => {
    const params = {
      category: category,
      limit: 5,
      page: page,
    };
    try {
      loadMore && setIsLoadMore(true);
      var id = setTimeout(() => {
        !loadMore && setIsLoading(true);
      }, 250);
      const res = await API.otherDiet(params);
      loadMore
        ? setData([...data, ...res.data.data])
        : setData([...res.data.data]);
      setNextPage(res.data.nextPage);
    } catch (error) {
      setData([]);
      Alert.alert(
        `Chưa có món ăn trong ${routes[indexRoot].title}`,
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
      initData(true);
    }
  };

  const _onRefreshing = () => {
    page = 1;
    initData();
  };

  const _handleCategory = (e: category, index: number) => {
    setIndex(index);
    setCategory(e.code);
  };

  const _renderButton = (
    e: {key: number; title: string; code: string},
    index: number,
  ) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => _handleCategory(e, index)}
      style={[
        styles.buttonTab,
        {
          backgroundColor:
            index === indexRoot ? Colors.accent_color : Colors.grey,
        },
      ]}
      key={index}>
      <Text style={styles.titleButtonTab}>{e.title}</Text>
    </TouchableOpacity>
  );

  const setMenu = () => {};

  const _onPressItem = (item: DietModel) => {
    navigation.navigate('DietDetailScreen', {
      food_id: item.id,
      type: REFRESH_FOODS_OTHER,
    });
  };

  const _renderDietsDay = () => (
    <DietToday
      onPressItem={_onPressItem}
      data={data}
      loadMore={loadMore}
      onRefresh={_onRefreshing}
      setMenu={setMenu}
      type={OTHER_DIETS}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.wrapButtonTab}>{routes.map(_renderButton)}</View>
      {data.length > 0 ? (
        _renderDietsDay()
      ) : (
        <DietsEmpty onRefresh={_onRefreshing} />
      )}
      <LoaderIndicator isLoading={isLoading} />
      <LoadMoreSpinner loadMore={isLoadMore} />
    </View>
  );
};
export default DietOtherScreen;
