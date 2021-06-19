/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import styles from './ListWorkOutScreen.style';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  FlatList,
  ImageSourcePropType,
  Alert,
  RefreshControl,
} from 'react-native';
import Header from '../../../components/Header';
import {
  IC_ARROW_BACK,
  IC_ALL_PERSON,
  IC_HAND_ONLY,
  IC_LEG_ONLY,
  IC_CHEST_ONLY,
} from '../../../assets';
import {Colors} from '../../../themes';
import ExerciseItem, {ExerciseType} from '../../../components/ExerciseItem';
import API from '../../../api';
import {MUSCLE} from '../../../constants';
import LoaderIndicator from '../../../components/LoaderIndicator';
import LoadMoreSpinner from '../../../components/LoadMoreIndicator';
import ExerciseEmpty from '../../../components/ExerciseEmpty';
import moment from 'moment';
import {Slogan} from '../../../mocks';
import {ExerciseDetailType} from '../../../components/ExerciseDetailItem';

interface Props {
  navigation: any;
}

const ListWorkOutScreen = (props: Props) => {
  const {navigation} = props;
  const [indexRoot, setIndex] = useState(0);
  const [routes] = useState([
    {key: 2, title: 'Toàn thân', image: IC_ALL_PERSON, code: MUSCLE.BODY},
    {key: 3, title: 'Tay', image: IC_HAND_ONLY, code: MUSCLE.HAND},
    {key: 4, title: 'Chân', image: IC_LEG_ONLY, code: MUSCLE.FOOT},
    {key: 5, title: 'Bụng', image: IC_CHEST_ONLY, code: MUSCLE.STOMACH},
  ]);
  const [data, setData] = useState<ExerciseType[]>([]);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPage, setNextPage] = useState(true);
  let page = 1;
  let dataDetail: ExerciseDetailType[] = [];

  useEffect(() => {
    _initData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routes[indexRoot].code]);

  const _initData = async (LoadMore: boolean = false) => {
    const params = {
      area: routes[indexRoot].code,
      page: page,
      limit: 10,
    };
    try {
      LoadMore && setIsLoadMore(true);
      var id = setTimeout(() => {
        !LoadMore && setIsLoading(true);
      }, 250);
      const res = await API.exercise.exerciseRegimesArea(params);
      setNextPage(res.data.nextPage);
      LoadMore
        ? setData([...data, ...res.data.data])
        : setData([...res.data.data]);
    } catch (error) {
      Alert.alert(
        `Chưa có bài tập cho ${routes[indexRoot].title}`,
        'Xin vui lòng thử lại',
      );
    } finally {
      setIsLoading(false);
      setIsLoadMore(false);
      clearTimeout(id);
    }
  };

  const onLoadMore = () => {
    if (nextPage) {
      page += 1;
      _initData(true);
    }
  };

  const _onRefreshing = () => {
    page = 1;
    _initData();
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
      <Text style={styles.titleHeader}>Danh sách bài tập</Text>
      <View style={styles.line} />
    </View>
  );

  const _renderButton = (
    e: {key: number; image: ImageSourcePropType},
    i: number,
  ) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => setIndex(i)}
      style={[
        styles.buttonTab,
        {backgroundColor: i === indexRoot ? Colors.black : Colors.white},
      ]}>
      <Image
        source={e.image}
        resizeMode="contain"
        style={styles.imageContainer}
      />
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
      target: 'ListWorkOutScreen',
    });
  };

  const _initDataDetail = async (exerciseId: number) => {
    const params = {
      exercise_id: exerciseId,
      date: moment().format('YYYY-MM-DD'),
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
      onEndReached={onLoadMore}
      onEndReachedThreshold={0.1}
      refreshing={false}
      onRefresh={_onRefreshing}
    />
  );

  const _renderEmpty = () => (
    <ExerciseEmpty
      title={`Chưa có bài tập cho vùng ${routes[indexRoot].title}`}
      onRefresh={_onRefreshing}
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
      <LoadMoreSpinner loadMore={isLoadMore} />
    </View>
  );
};

export default ListWorkOutScreen;
