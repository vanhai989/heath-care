/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  RefreshControl,
} from 'react-native';
import styles from './DietToday.style';
import {Colors} from '../../themes';
import {IC_PENCIL, IC_KCAL, IC_HEART, IC_STAR} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {
  BREAKFAST,
  DINNER,
  LUNCH,
  MONDAY,
  OTHER_DIETS,
} from '../../constants/diets';
import {DietModel} from '../../models';
import DietsEmpty from '../DietsEmpty';
import moment from 'moment';

interface Props {
  data: DietModel[];
  onPressItem: (item: DietModel) => void;
  setMenu: (type: string) => void;
  loadMore: () => void;
  onRefresh: () => void;
  type: string;
  dow: string;
  date: string;
}
const defaultProps = {
  onPressItem: () => null,
  dow: MONDAY,
  date: moment().format('YYYY-MM-DD'),
};

const DietToday = (props: Props) => {
  const {
    onPressItem,
    data,
    setMenu,
    loadMore,
    onRefresh,
    type,
    dow,
    date,
  } = props;
  const navigation = useNavigation();
  const [indexRoot, setIndex] = useState(0);
  const [routes] = useState([
    {key: 0, title: 'Bữa sáng', code: BREAKFAST},
    {key: 1, title: 'Bữa trưa', code: LUNCH},
    {key: 2, title: 'Bữa tối', code: DINNER},
  ]);

  const _handleTabView = (e: {key: number; title: string; code: string}) => {
    setIndex(e.key);
    setMenu(e.code);
  };

  const _renderButton = (
    e: {key: number; title: string; code: string},
    i: number,
  ) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => _handleTabView(e)}
        style={[
          styles.buttonTab,
          {
            backgroundColor:
              i === indexRoot ? Colors.accent_color : Colors.grey,
          },
        ]}
        key={i}>
        <Text style={styles.titleButtonTab}>{e.title}</Text>
      </TouchableOpacity>
    );
  };

  const _onRefresh = () => {
    onRefresh();
  };

  const _onChangeDiet = () => {
    navigation.navigate('ChangeDietScreen', {
      data: data,
      routes: routes[indexRoot],
      dow,
      date,
      type,
    });
  };

  const _renderButtonChange = () => (
    <View style={styles.wrapButtonChange}>
      <TouchableOpacity onPress={_onChangeDiet} style={styles.buttonChange}>
        <Image
          resizeMode="contain"
          source={IC_PENCIL}
          style={styles.iconPencil}
        />
        <Text style={styles.changeTitle}>Đổi món</Text>
      </TouchableOpacity>
    </View>
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
      onRefresh={_onRefresh}
      keyExtractor={(item) => item.id.toString()}
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
    onPressItem(item);
  };

  const _renderItemContent = (item: DietModel) => (
    <TouchableOpacity onPress={() => _onPressItem(item)} style={styles.item}>
      <View style={styles.wrapImage}>
        <Image source={{uri: item.image}} style={styles.imageItem} />
      </View>
      <View style={styles.bodyItem}>
        <Text style={styles.name}>{item.name}</Text>
        {_renderKcal(item)}
        {_renderStar(item)}
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

  const _renderEmpty = () => <DietsEmpty onRefresh={onRefresh} />;

  return (
    <View style={styles.container}>
      <View style={styles.wrapButtonTab}>
        {type === OTHER_DIETS ? null : routes.map(_renderButton)}
      </View>
      {type === OTHER_DIETS ? null : _renderButtonChange()}
      {data.length > 0 && _renderListDiet()}
      {data.length === 0 && _renderEmpty()}
    </View>
  );
};
DietToday.defaultProps = defaultProps;
export default DietToday;
