import React, {useState, useEffect} from 'react';
import styles from './ExerciseScheduleScreen.style';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  Alert,
} from 'react-native';
import Header from '../../../components/Header';
import {IC_ARROW_BACK} from '../../../assets';
import {Colors} from '../../../themes';
import ExerciseItem, {ExerciseType} from '../../../components/ExerciseItem';
import LoaderIndicator from '../../../components/LoaderIndicator';
import LoadMoreIndicator from '../../../components/LoadMoreIndicator';
import API from '../../../api';
import {
  FRIDAY,
  MONDAY,
  SATURDAY,
  SUNDAY,
  THURSDAY,
  TUESDAY,
  WEDNESDAY,
} from '../../../constants/diets';
import ExerciseEmpty from '../../../components/ExerciseEmpty';
import moment from 'moment';
import {Slogan} from '../../../mocks';
import {ExerciseDetailType} from '../../../components/ExerciseDetailItem';

interface Props {
  navigation: any;
}
const ExerciseScheduleScreen = (props: Props) => {
  const {navigation} = props;
  const [indexRoot, setIndex] = useState(0);
  const [routes] = useState([
    {key: 0, title: 'Hai', day: MONDAY, code: 2},
    {key: 1, title: 'Ba', day: TUESDAY, code: 3},
    {key: 2, title: 'Tư', day: WEDNESDAY, code: 4},
    {key: 3, title: 'Năm', day: THURSDAY, code: 5},
    {key: 4, title: 'Sáu', day: FRIDAY, code: 6},
    {key: 5, title: 'Bảy', day: SATURDAY, code: 7},
    {key: 6, title: 'CN', day: SUNDAY, code: 8},
  ]);
  const [data, setData] = useState<ExerciseType[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isLoadMore, setLoadMore] = useState(false);
  const [nextPage, setNextPage] = useState(true);
  let page = 1;
  let dataDetail: ExerciseDetailType[] = [];

  useEffect(() => {
    _initData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routes[indexRoot].code]);

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
      page,
      page_size: 15,
    };
    try {
      var id = setTimeout(() => {
        !loadMore && setLoading(true);
      }, 250);
      loadMore && setLoadMore(true);
      const res = await API.exercise.exerciseRegimes(params);
      setNextPage(res.data.nextPage);
      loadMore
        ? setData([...data, ...res.data.data])
        : setData([...res.data.data]);
    } catch (error) {
      setData([]);
      Alert.alert(
        `Chưa có bài tập cho thứ ${routes[indexRoot].title}`,
        'Xin vui lòng thử lại',
      );
    } finally {
      setLoading(false);
      setLoadMore(false);
      clearTimeout(id);
    }
  };

  const _onRefresh = () => {
    page = 1;
    _initData();
  };

  const _onLoadMore = () => {
    if (nextPage) {
      page = page + 1;
      _initData(true);
    }
  };

  const _goBack = () => {
    navigation.navigate('AccountScreen');
  };

  const _renderHeaderLeft = () => (
    <TouchableOpacity onPress={_goBack} style={styles.horizontal}>
      <Image source={IC_ARROW_BACK} style={styles.iconBack} />
      <Text style={styles.yellowText}>Quay lại</Text>
    </TouchableOpacity>
  );

  const _renderHeader = () => (
    <Header
      style={styles.Header}
      renderHeaderLeft={_renderHeaderLeft}
      renderCenter={_renderCenter}
    />
  );

  const _renderCenter = () => (
    <View style={styles.textContainer}>
      <Text style={styles.titleHeader}>Lịch tập luyện</Text>
      <View style={styles.line} />
    </View>
  );

  const _renderButton = (e: {key: number; title: string}, i: number) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => setIndex(i)}
      style={[
        styles.buttonTab,
        {backgroundColor: i === indexRoot ? Colors.accent_color : Colors.white},
      ]}>
      <Text style={styles.titleButtonTab}>{e.title}</Text>
    </TouchableOpacity>
  );

  const _onPressItem = (item: ExerciseType) => {
    _initDataDetail(item.id);
    _slogan(item.id);
  };

  const _slogan = (exerciseId: number) => {
    const ramdomIndex = Math.floor(Math.random() * 30);
    Alert.alert('Phương châm', Slogan[ramdomIndex], [
      {
        text: 'Đóng',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Luyện tập', onPress: () => _start(exerciseId)},
    ]);
  };

  const _start = (exerciseId: number) => {
    navigation.navigate('PlayVideoScreen', {
      itemRoot: 0,
      data: dataDetail,
      exerciseId: exerciseId,
      target: 'ExerciseScheduleScreen',
    });
  };

  const _initDataDetail = async (exerciseId: number) => {
    const params = {
      exercise_id: exerciseId,
      date: _checkDate(),
      page: 1,
      page_size: 1000,
    };
    try {
      const res = await API.exercise.exerciseRegimesDetail(params);
      dataDetail = [...res.data.data];
    } catch (error) {
      dataDetail = [];
    }
  };

  const _renderItem = ({item}: {item: ExerciseType}) => (
    <ExerciseItem onPress={_onPressItem} data={item} />
  );

  const _renderExercise = () => (
    <FlatList
      data={data}
      renderItem={_renderItem}
      refreshing={false}
      onRefresh={_onRefresh}
      onEndReached={_onLoadMore}
      onEndReachedThreshold={0.2}
    />
  );

  const _renderEmpty = () => (
    <ExerciseEmpty
      title={`Chưa có bài tập cho thứ ${routes[indexRoot].title}`}
      onRefresh={_onRefresh}
    />
  );

  return (
    <View style={styles.container}>
      {_renderHeader()}
      <View style={styles.body}>
        <View style={styles.wrapButtonTab}>{routes.map(_renderButton)}</View>
        {data.length === 0 ? _renderEmpty() : _renderExercise()}
      </View>
      <LoaderIndicator isLoading={isLoading} />
      <LoadMoreIndicator loadMore={isLoadMore} />
    </View>
  );
};

export default ExerciseScheduleScreen;
