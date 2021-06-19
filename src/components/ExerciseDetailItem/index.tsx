import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import {IC_TICK_CICLE} from '../../assets';
import styles from './ExerciseDetailItem.style';

interface Props {
  data: ExerciseDetailType;
  onPress: (data: ExerciseDetailType) => void;
  isShowFinish: boolean;
}
const defaultProps = {
  isShowFinish: false,
};
export interface ExerciseDetailType {
  id: number;
  image: string;
  name: string;
  video: string;
  is_finished: boolean;
  description: string;
}

const ExerciseDetailItem = (props: Props) => {
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

  return (
    <TouchableOpacity onPress={_onPress} style={styles.container}>
      <View style={styles.leftItemContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: data.image}}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <View style={styles.contentContainer}>
          <Text style={styles.titleText}>{data.name}</Text>
          <Text style={styles.smallText}>{data.description}</Text>
        </View>
      </View>
      {_checkShow() && (
        <Image
          source={IC_TICK_CICLE}
          resizeMode="contain"
          style={styles.iconCheck}
        />
      )}
    </TouchableOpacity>
  );
};
ExerciseDetailItem.defaultProps = defaultProps;
export default ExerciseDetailItem;
