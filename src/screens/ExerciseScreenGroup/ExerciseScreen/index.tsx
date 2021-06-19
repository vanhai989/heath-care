import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, Alert, TouchableOpacity} from 'react-native';
import styles from './ExerciseScreen.style';
import ExerciseItem, {ExerciseType} from '../../../components/ExerciseItem';
import LoaderIndicator from '../../../components/LoaderIndicator';
import LoadMoreIndicator from '../../../components/LoadMoreIndicator';
import API from '../../../api';
import moment from 'moment';
import ExerciseEmpty from '../../../components/ExerciseEmpty';
import EventBus from '../../../services/EventBus';
import {REFRESH_EXERCISE} from '../../../constants';
import {Slogan} from '../../../mocks';
import {ExerciseDetailType} from '../../../components/ExerciseDetailItem';
import {Colors} from '../../../themes';

interface Props {
  navigation: any;
}
const ExerciseScreen = (props: Props) => {
  const {navigation} = props;
  const [data, setData] = useState<ExerciseType[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isLoadMore, setLoadMore] = useState(false);
  const [nextPage, setNextPage] = useState(true);
  let page = 1;
  let dataDetail: ExerciseDetailType[] = [];

  useEffect(() => {
    _initData();
    const listener = async () => _onRefresh();
    EventBus.addListener(REFRESH_EXERCISE, listener);
    return () => EventBus.removeListener(listener);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _checkDate = () => {
    return moment().format('YYYY-MM-DD');
  };

  const _initData = async (loadMore: boolean = false) => {
    const params = {
      date: _checkDate(),
      page,
      page_size: 15,
    };
    try {
      !loadMore && setLoading(true);
      loadMore && setLoadMore(true);
      const res = await API.exercise.exerciseRegimes(params);
      setNextPage(res.data.nextPage);
      loadMore
        ? setData([...data, ...res.data.data])
        : setData([...res.data.data]);
    } catch (error) {
      setData([]);
      Alert.alert('Chưa có bài tập trong hôm nay', 'Xin vui lòng thử lại');
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

  const _onPressItem = (item: ExerciseType) => {
    _initDataDetail(item.id);
    _slogan(item.id);
  };

  const _renderItem = ({item}: {item: ExerciseType}) => (
    <ExerciseItem onPress={_onPressItem} isShowFinish={true} data={item} />
  );

  const _renderHeader = () => (
    <View style={styles.Header}>
      <View>
        <Text style={styles.titleHeader}>Luyện tập hôm nay</Text>
        <View style={styles.line} />
      </View>
    </View>
  );

  const _onStart = () => {
    let indexItem = data.findIndex((e) => !e.is_finished);
    if (indexItem === -1) {
      indexItem = 0;
    }
    _initDataDetail(data[indexItem].id);
    _slogan(data[indexItem].id);
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
      target: 'ExerciseScreen',
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

  const _renderButton = () => {
    const indexItem = data.findIndex((e) => !e.is_finished);
    let _finished = false;
    if (indexItem === -1) {
      _finished = true;
    }
    const title = _finished ? 'Hoàn thành' : 'Bắt đầu ngay';
    return (
      <View style={styles.wrapButtonStart}>
        <TouchableOpacity
          onPress={_onStart}
          style={[
            styles.buttonStart,
            {backgroundColor: _finished ? Colors.green : Colors.accent_color},
          ]}>
          <Text
            style={[
              styles.beginNow,
              {color: _finished ? Colors.white : Colors.main_color},
            ]}>
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const _renderExercise = () => (
    <View style={styles.wrapExc}>
      <FlatList
        data={data}
        renderItem={_renderItem}
        refreshing={false}
        onRefresh={_onRefresh}
        onEndReached={_onLoadMore}
        onEndReachedThreshold={0.2}
      />
      {_renderButton()}
    </View>
  );

  const _renderEmpty = () => (
    <ExerciseEmpty title="Chưa có bài tập cho hôm nay" onRefresh={_onRefresh} />
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
export default ExerciseScreen;
