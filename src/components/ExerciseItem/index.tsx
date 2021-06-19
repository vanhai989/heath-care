import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './ExerciseItem.style';
import {ICON_ARROW_RIGHT, IC_TICK_CICLE} from '../../assets';
import {Colors} from '../../themes';

interface Props {
  data: ExerciseType;
  isShowFinish: boolean;
  onPress: (data: ExerciseType) => void;
}
const defaultProps = {
  isShowFinish: false,
};
export interface ExerciseType {
  id: number;
  name: string;
  image: string;
  total_items: string;
  is_finished: boolean;
}

const ExerciseItem = (props: Props) => {
  const {data, onPress, isShowFinish} = props;
  const _onPress = () => {
    onPress(data);
  };
  const _checkShow = () => {
    const isFinished = data.is_finished ? data.is_finished : false;
    if (isShowFinish) {
      return isFinished;
    }
    return false;
  };

  const _checkColor = () => {
    if (_checkShow()) {
      return Colors.black;
    }
    if (isShowFinish) {
      return Colors.gray;
    }
    return Colors.black;
  };

  return (
    <TouchableOpacity onPress={_onPress} style={styles.container}>
      <View style={styles.leftItemContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: data.image}}
            style={styles.image}
            resizeMode="contain"
          />
          <View
            style={[styles.opacityItem, {backgroundColor: _checkColor()}]}
          />
        </View>

        <View style={styles.contentContainer}>
          <Text style={[styles.titleText, {color: _checkColor()}]}>
            {data.name}
          </Text>
          <Text style={[styles.smallText, {color: _checkColor()}]}>
            {data.total_items} bài tập
          </Text>
        </View>
      </View>
      <View style={styles.itemRightContainer}>
        {_checkShow() && (
          <Image
            source={IC_TICK_CICLE}
            resizeMode="contain"
            style={styles.iconCheck}
          />
        )}
        <Image
          style={styles.arrowRight}
          source={ICON_ARROW_RIGHT}
          resizeMode="contain"
        />
      </View>
    </TouchableOpacity>
  );
};
ExerciseItem.defaultProps = defaultProps;
export default ExerciseItem;
