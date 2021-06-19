import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  RefreshControl,
} from 'react-native';
import styles from './SearchDietScreen.style';
import {DietModel} from '../../../models';
import {IC_ARROW_BACK, IC_ADD, IC_ARROW_DOWN, IC_SEARCH} from '../../../assets';
import {useRoute} from '@react-navigation/native';
import {typeOfDish} from '../../../mocks';
import DietSearchItem from '../../../components/DietSearchItem';
import AddFoodModal from '../../../components/AddFoodModal';
import DietCategoryModal from '../../../components/DietCategoryModal';
import EventBus from '../../../services/EventBus';
import {SHOW_DIET_CATEGORY} from '../../../constants';
import {useDispatch, useSelector} from 'react-redux';
import {addDiet, addListDiet} from '../../../redux/actions/diet';
import API from '../../../api/diets';
import DelayInput from 'react-native-debounce-input';
import LoaderIndicator from '../../../components/LoaderIndicator';
import LoadMoreSpinner from '../../../components/LoadMoreIndicator';

interface Props {
  navigation: any;
}

const SearchDietScreen = (props: Props) => {
  const {navigation} = props;
  const route: any = useRoute();
  //redux
  const dispatch = useDispatch();
  const listDiet: DietModel[] = useSelector(
    (state: any) => state.diet.ListDiet,
  );
  const foodAdds: DietModel[] = useSelector(
    (state: any) => state.diet.foodAdds,
  );
  const title = route.params.title ? route.params.title : '';
  const [data, setData] = useState<DietModel[]>([]);
  const [search, setSearch] = useState('');
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(typeOfDish[0]);
  const [dataSelect, setDataSelect] = useState<DietModel[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [nextPage, setNextPage] = useState(true);

  let page = 1;

  const _goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    _initData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, value]);

  const _initData = async (LoadMore: boolean = false) => {
    const params = {
      search_text: search,
      category: value.key,
      limit: 10,
      page: page,
    };
    try {
      if (LoadMore) {
        setIsLoadMore(true);
      } else {
        setLoading(true);
      }
      const res = await API.DietSearch(params);
      setNextPage(res.data.nextPage);
      LoadMore
        ? setData([...data, ...res.data.data])
        : setData([...res.data.data]);
    } catch (error) {
      Alert.alert('Không có kết nối Internet', 'xin vui lòng thử lại');
    } finally {
      setLoading(false);
      setIsLoadMore(false);
    }
  };

  const loadMore = () => {
    if (nextPage) {
      page += 1;
      _initData(true);
    }
  };

  const onRefresh = () => {
    page = 1;
    _initData();
  };

  const _renderHeader = () => (
    <View style={styles.header}>
      <TouchableOpacity onPress={_goBack} style={styles.horizontal}>
        <Image source={IC_ARROW_BACK} style={styles.iconBack} />
        <Text style={styles.back}>Quay lại</Text>
      </TouchableOpacity>
      <View>
        <Text style={styles.titleHeader}>{title}</Text>
        <View style={styles.line} />
      </View>
      <TouchableOpacity style={styles.empty} onPress={_onPressSave}>
        <Text style={styles.back}>Lưu</Text>
      </TouchableOpacity>
    </View>
  );

  const _onPressSave = () => {
    dispatch(addListDiet([...listDiet, ...dataSelect]));
    dispatch(addDiet([...foodAdds, ...dataSelect]));
    _goBack();
  };

  const _renderItem = ({item, index}: {item: DietModel; index: number}) => (
    <DietSearchItem
      onPressItem={_onPressItem}
      item={item}
      index={index}
      length={data.length}
      key={index}
    />
  );
  const _renderListDiet = () => (
    <FlatList
      style={styles.listDiet}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      renderItem={_renderItem}
      data={data}
      onEndReached={loadMore}
      onEndReachedThreshold={0.1}
      refreshing={false}
      onRefresh={() => onRefresh()}
    />
  );

  const _onPressItem = (item: DietModel, isCheck: boolean) => {
    if (isCheck) {
      setDataSelect([...dataSelect, item]);
    } else {
      const newData = dataSelect.filter((e) => e.id !== item.id);
      setDataSelect(newData);
    }
  };

  const _onPressModel = () => {
    const params = {visible: true, value};
    EventBus.fireEvent(SHOW_DIET_CATEGORY, params);
  };

  const _onAddDiet = () => {
    setVisible(true);
  };

  const _renderButton = () => (
    <View style={styles.button}>
      <TouchableOpacity onPress={_onPressModel} style={styles.wrapButtonAdd}>
        <Image
          resizeMode="contain"
          source={IC_ARROW_DOWN}
          style={styles.iconCheck}
        />
        <Text style={[styles.complete, styles.wrap]}>{value.title}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={_onAddDiet} style={styles.wrapButtonComplete}>
        <Image resizeMode="contain" source={IC_ADD} style={styles.iconAdd} />
        <Text style={styles.complete}>Thêm món</Text>
      </TouchableOpacity>
    </View>
  );

  const _onChangeText = (text: string) => {
    setSearch(text);
  };

  const _renderSearch = () => (
    <View style={styles.wrapSearch}>
      <View style={styles.search}>
        <View style={styles.wrapIconSearch}>
          <Image
            resizeMode="contain"
            source={IC_SEARCH}
            style={styles.iconSearch}
          />
        </View>
        <DelayInput
          style={styles.input}
          minLength={1}
          onChangeText={(text: any) => _onChangeText(text)}
          placeholder="Tìm kiếm"
          delayTimeout={2000}
        />
      </View>
    </View>
  );

  const _onCloseAddFoodModal = () => {
    setVisible(false);
  };

  const _onSelectCategory = (e: {id: number; title: string; key: string}) => {
    setValue(e);
  };

  return (
    <View style={styles.container}>
      {_renderHeader()}
      <View style={styles.body}>
        {_renderSearch()}
        {_renderButton()}
        {_renderListDiet()}
        <AddFoodModal
          onRefresh={() => onRefresh()}
          onCancel={_onCloseAddFoodModal}
          visible={visible}
        />
        <DietCategoryModal onSelectCategory={_onSelectCategory} />
      </View>
      <LoaderIndicator isLoading={isLoading} />
      <LoadMoreSpinner loadMore={isLoadMore} />
    </View>
  );
};
export default SearchDietScreen;
