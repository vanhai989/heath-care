import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import styles from './ExerciseDetailScreen.style';
import ExerciseDetailItem, {
  ExerciseDetailType,
} from '../../../components/ExerciseDetailItem';
import {BACK} from '../../../assets';
import ExerciseEmpty from '../../../components/ExerciseEmpty';
import API from '../../../api';
import LoaderIndicator from '../../../components/LoaderIndicator';
import LoadMoreIndicator from '../../../components/LoadMoreIndicator';
import {useRoute} from '@react-navigation/native';
import {ExerciseType} from '../../../components/ExerciseItem';
import moment from 'moment';
import EventBus from '../../../services/EventBus';
import {REFRESH_EXERCISE_DETAIL} from '../../../constants';

interface Props {
  navigation: any;
}
const ExerciseDetailScreen = (props: Props) => {
  const {navigation} = props;
  const route: any = useRoute();
  const exerciseId: ExerciseType = route.params.exerciseId
    ? route.params.exerciseId
    : 0;
  const target: string = route.params.target ? route.params.target : '';
  const date: string = route.params.date
    ? route.params.date
    : moment().format('YYYY-MM-DD');
  const _goBack = () => navigation.goBack();
  const [data, setData] = useState<ExerciseDetailType[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isLoadMore, setLoadMore] = useState(false);
  const [nextPage, setNextPage] = useState(true);
  let page = 1;

  useEffect(() => {
    _initData();
    const listener = async () => _onRefresh();
    EventBus.addListener(REFRESH_EXERCISE_DETAIL, listener);
    return () => EventBus.removeListener(listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _initData = async (loadMore: boolean = false) => {
    const params = {
      exercise_id: exerciseId,
      date,
      page,
      page_size: 1000,
    };
    try {
      !loadMore && setLoading(true);
      loadMore && setLoadMore(true);
      const res = await API.exercise.exerciseRegimesDetail(params);
      setNextPage(res.data.nextPage);
      loadMore
        ? setData([...data, ...res.data.data])
        : setData([...res.data.data]);
    } catch (error) {
      setData([]);
      Alert.alert('Không có kết nối mạng', 'Xin vui lòng thử lại');
    } finally {
      setLoading(false);
      setLoadMore(false);
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

  const _renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={_goBack} style={styles.wrapper_goBack}>
        <Image style={styles.icon_back} source={BACK} resizeMode="contain" />
        <Text style={styles.back}>Quay lại</Text>
      </TouchableOpacity>
      <View style={styles.group_center_header}>
        <Text style={styles.titleHeader}>Lịch tập luyện</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.cascaded} />
    </View>
  );

  const _onPressItem = (item: ExerciseDetailType) => {
    navigation.navigate('PlayVideoScreen', {
      itemRoot: item,
      data: data,
      exerciseId: exerciseId,
      target,
    });
  };

  const _renderItem = ({item}: {item: ExerciseDetailType}) => (
    <ExerciseDetailItem
      isShowFinish={target === 'ExerciseScreen'}
      onPress={_onPressItem}
      data={item}
    />
  );

  const _renderEmpty = () => <ExerciseEmpty onRefresh={_onRefresh} />;

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

  return (
    <View style={styles.container}>
      {_renderHeader()}
      <View style={styles.body}>
        {data.length === 0 ? _renderEmpty() : _renderExercise()}
      </View>
      <LoaderIndicator isLoading={isLoading} />
      <LoadMoreIndicator loadMore={isLoadMore} />
    </View>
  );
};
export default ExerciseDetailScreen;
