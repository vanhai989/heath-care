import React, {useState} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import styles from './DietSearchItem.style';
import {DietModel} from '../../models';
import {IC_CHECK_CIRCLE, IC_KCAL, IC_HEART, IC_STAR} from '../../assets';
interface Props {
  onPressItem: (item: DietModel, isCheck: boolean) => void;
  index: number;
  item: DietModel;
  length: number;
}

const DietSearchItem = (props: Props) => {
  const {onPressItem, index, item, length} = props;
  const [isCheck, setCheck] = useState(false);

  const _renderItem = () => {
    const isOdd = length - 1 === index && length % 2 !== 0;
    if (isOdd) {
      return (
        <View style={styles.wrapItem}>
          {_renderItemContent()}
          <View style={styles.viewRight} />
        </View>
      );
    }
    return _renderItemContent();
  };

  const _renderIconCheck = () => (
    <Image source={IC_CHECK_CIRCLE} style={styles.iconDeleteCircle} />
  );

  const _onPressItem = () => {
    onPressItem(item, !isCheck);
    setCheck(!isCheck);
  };

  const _renderItemContent = () => (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={_onPressItem}
      style={styles.item}>
      <View style={styles.wrapImage}>
        <Image source={{uri: item.image}} style={styles.imageItem} />
      </View>
      <View style={styles.bodyItem}>
        <Text style={styles.name}>{item.name}</Text>
        {_renderKcal()}
        <View style={styles.wrapDelete}>
          {_renderStar()}
          {isCheck && _renderIconCheck()}
        </View>
      </View>
    </TouchableOpacity>
  );

  const _renderKcal = () => (
    <View style={styles.kcal}>
      <View style={styles.horizontal}>
        <Image resizeMode="contain" source={IC_KCAL} style={styles.icon_kcal} />
        <Text style={styles.titleKcal}>{`${item.calo} kcal`}</Text>
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

  const _renderStar = () => {
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

  return _renderItem();
};
export default DietSearchItem;
