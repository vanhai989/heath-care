import React from 'react';
import styles from './EmptyItem.style';
import {View, Image, Text} from 'react-native';
import {IC_NEWS} from '../../assets';

const EmptyItem = () => {
  return (
    <View style={styles.container}>
      <Image source={IC_NEWS} style={styles.imageContainer} />
      <Text>Không có tin tức mới.</Text>
    </View>
  );
};

export default EmptyItem;
