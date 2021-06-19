import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import styles from './ChangeDietScreen.style';
import {DietModel} from '../../../models';
import {
  IC_KCAL,
  IC_HEART,
  IC_STAR,
  IC_ARROW_BACK,
  IC_CHECK,
  IC_ADD,
  IC_DELETE_CIRCLE,
} from '../../../assets';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {DIETS_TODAY, MONDAY} from '../../../constants/diets';
import API from '../../../api';
import LoaderIndicator from '../../../components/LoaderIndicator';
import LoadMoreIndicator from '../../../components/LoadMoreIndicator';
import {addListDiet, addDiet} from '../../../redux/actions/diet';
import EventBus from '../../../services/EventBus';
import DietsEmpty from '../../../components/DietsEmpty';
import moment from 'moment';

interface Props {
  navigation: any;
}
interface Routes {
  key: number;
  title: string;
  code: string;
}
const ChangeDietScreen = (props: Props) => {
  const {navigation} = props;
  const [isLoading, setLoading] = useState(false);
  const [isLoadMore, setLoadMore] = useState(false);
  const [isFirst, setFirst] = useState(true);
  const [nextPage, setNextPage] = useState(true);
  const [foodDeletes, setFoodDeletes] = useState<DietModel[]>([]);
  let page = 1;
  const route: any = useRoute();
  //redux
  const dispatch = useDispatch();
  const data: DietModel[] = useSelector((state: any) => state.diet.ListDiet);
  const foodAdds: DietModel[] = useSelector(
    (state: any) => state.diet.foodAdds,
  );
  const dataDiet: DietModel[] = route.params.data ? route.params.data : [];
  const routes: Routes = route.params.routes ? route.params.routes : {};
  const dow: string = route.params.dow ? route.params.dow : MONDAY;
  const type: string = route.params.type ? route.params.type : DIETS_TODAY;
  const date: string = route.params.date
    ? route.params.date
    : moment().format('YYYY-MM-DD');
  useEffect(() => {
    _initData();
    dispatch(addDiet([]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataDiet]);

  const _initData = async (loadMore: boolean = false) => {
    const params = {
      date,
      menu: routes.code,
      limit: 15,
      page,
    };
    try {
      !loadMore && setLoading(true);
      loadMore && setLoadMore(true);
      const res = await API.diets.todayDietsFoods(params);
      loadMore
        ? dispatch(addListDiet([...data, ...res.data.data]))
        : dispatch(addListDiet(res.data.data));
      setNextPage(res.data.nextPage);
    } catch (error) {
      Alert.alert('Không có kết nối Internet', 'xin vui lòng thử lại');
    } finally {
      setLoading(false);
      setLoadMore(false);
      setFirst(false);
    }
  };

  const _onRefresh = () => {
    page = 1;
    _initData();
  };

  const _onLoadMore = () => {
    if (nextPage && !isFirst) {
      page = page + 1;
      _initData(true);
    }
  };

  const _goBack = () => {
    navigation.goBack();
  };
  const _renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={_goBack} style={styles.horizontal}>
        <Image source={IC_ARROW_BACK} style={styles.iconBack} />
        <Text style={styles.back}>Quay lại</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.titleHeader}>{routes.title}</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.empty} />
    </View>
  );

  const _renderListDiet = () => (
    <FlatList
      style={styles.listDiet}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      renderItem={_renderItem}
      data={data}
      refreshing={false}
      onRefresh={_onRefresh}
      onEndReached={_onLoadMore}
      onEndReachedThreshold={0.2}
    />
  );

  const _renderKcal = (item: DietModel) => (
    <View style={styles.kcal}>
      <View style={styles.horizontal}>
        <Image resizeMode="contain" source={IC_KCAL} style={styles.icon_kcal} />
        <Text style={styles.titleKcal}>{`${item.calo}kcal`}</Text>
      </View>
      <View style={styles.horizontal}>
        <Image
          resizeMode="contain"
          source={IC_HEART}
          style={styles.icon_heart}
        />
        <Text style={styles.heart}>{item.heart}</Text>
      </View>
    </View>
  );

  const _renderStar = (item: DietModel) => {
    switch (item.star) {
      case 1:
        return (
          <View style={styles.wrapStar}>
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.starHollow} />
            <Image source={IC_STAR} style={styles.starHollow} />
            <Image source={IC_STAR} style={styles.starHollow} />
            <Image source={IC_STAR} style={styles.starHollow} />
          </View>
        );
      case 2:
        return (
          <View style={styles.wrapStar}>
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.starHollow} />
            <Image source={IC_STAR} style={styles.starHollow} />
            <Image source={IC_STAR} style={styles.starHollow} />
          </View>
        );
      case 3:
        return (
          <View style={styles.wrapStar}>
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.starHollow} />
            <Image source={IC_STAR} style={styles.starHollow} />
          </View>
        );
      case 4:
        return (
          <View style={styles.wrapStar}>
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.starHollow} />
          </View>
        );
      case 5:
        return (
          <View style={styles.wrapStar}>
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.star} />
            <Image source={IC_STAR} style={styles.star} />
          </View>
        );
      default:
        return (
          <View style={styles.wrapStar}>
            <Image source={IC_STAR} style={styles.starHollow} />
            <Image source={IC_STAR} style={styles.starHollow} />
            <Image source={IC_STAR} style={styles.starHollow} />
            <Image source={IC_STAR} style={styles.starHollow} />
            <Image source={IC_STAR} style={styles.starHollow} />
          </View>
        );
    }
  };

  const _onPressItem = (item: DietModel) => {
    navigation.navigate('DietDetailScreen', {food_id: item.id});
  };

  const _onDelete = (item: DietModel) => {
    const newData = data.filter((e) => e.id !== item.id);
    const newFoodAdds = foodAdds.filter((e) => e.id !== item.id);
    dispatch(addListDiet(newData));
    dispatch(addDiet(newFoodAdds));
    setFoodDeletes([...foodDeletes, item]);
  };

  const _handleDelete = (item: DietModel) => {
    Alert.alert(
      `Món ăn này sẽ bị xoá khỏi ${routes.title}`,
      'Bạn có muốn xoá không?',
      [
        {
          text: 'Huỷ',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Đồng ý', onPress: () => _onDelete(item)},
      ],
    );
  };

  const _renderItemContent = (item: DietModel) => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => _onPressItem(item)}
      style={styles.item}>
      <View style={styles.wrapImage}>
        <Image source={{uri: item.image}} style={styles.imageItem} />
      </View>
      <View style={styles.bodyItem}>
        <Text style={styles.name}>{item.name}</Text>
        {_renderKcal(item)}
        <View style={styles.wrapDelete}>
          {_renderStar(item)}
          <TouchableOpacity
            onPress={() => _handleDelete(item)}
            style={styles.delete}>
            <Image source={IC_DELETE_CIRCLE} style={styles.iconDeleteCircle} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  const _renderItem = ({item, index}: {item: DietModel; index: number}) => {
    const isOdd = data.length - 1 === index && data.length % 2 !== 0;
    if (isOdd) {
      return (
        <View style={styles.wrapItem} key={index}>
          {_renderItemContent(item)}
          <View style={styles.viewRight} />
        </View>
      );
    }
    return _renderItemContent(item);
  };

  const _onComplete = async () => {
    const food_delete_ids = foodDeletes.map((e: DietModel) => e.id);
    const food_add_ids = foodAdds.map((e: DietModel) => e.id);
    const params = {
      food_delete_ids,
      food_add_ids,
      dow,
      menu_code: routes.code,
    };
    try {
      setLoading(true);
      await API.diets.changeDiets(params);
      EventBus.fireEvent(type);
      navigation.goBack();
    } catch (error) {
      Alert.alert('Không có kết nối Internet', 'xin vui lòng thử lại');
    } finally {
      setLoading(false);
    }
  };

  const _onAddDiet = () => {
    navigation.navigate('SearchDietScreen', {title: routes.title});
  };

  const _renderButton = () => (
    <View style={styles.button}>
      <TouchableOpacity onPress={_onAddDiet} style={styles.wrapButtonAdd}>
        <Image source={IC_ADD} style={[styles.iconCheck, styles.wrap_ic]} />
        <Text style={[styles.complete, styles.fix]}>
          Thêm món vào danh sách
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={_onComplete} style={styles.wrapButtonComplete}>
        <Image source={IC_CHECK} style={styles.iconCheck} />
        <Text style={styles.complete}>Hoàn Thành</Text>
      </TouchableOpacity>
    </View>
  );

  const _renderEmpty = () => <DietsEmpty onRefresh={_onRefresh} />;

  return (
    <View style={styles.container}>
      {_renderHeader()}
      <View style={styles.body}>
        {_renderButton()}
        {data.length > 0 && _renderListDiet()}
        {data.length === 0 && _renderEmpty()}
      </View>
      <LoaderIndicator isLoading={isLoading} />
      <LoadMoreIndicator loadMore={isLoadMore} />
    </View>
  );
};
export default ChangeDietScreen;
