import React from 'react';
import {Text, Image, ScrollView, RefreshControl} from 'react-native';
import styles from './DietsEmpty.style';
import {IC_EAT} from '../../assets';

interface Props {
  onRefresh: () => void;
}

const DietsEmpty = (props: Props) => {
  const {onRefresh} = props;
  return (
    <ScrollView
      contentContainerStyle={styles.container_scrollView}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={onRefresh} />
      }>
      <Image style={styles.ic_eat_empty} source={IC_EAT} />
      <Text style={styles.text_diets_empty}>Chưa có món ăn cho ngày này</Text>
    </ScrollView>
  );
};

export default DietsEmpty;
