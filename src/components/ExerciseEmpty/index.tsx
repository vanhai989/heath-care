import React from 'react';
import {Text, Image, ScrollView, RefreshControl} from 'react-native';
import styles from './ExerciseEmpty.style';
import {IC_EXERCISE} from '../../assets';

interface Props {
  onRefresh: () => void;
  title: string;
}

const defaultProps = {
  title: 'Chưa có bài tập cho mục này',
};

const ExerciseEmpty = (props: Props) => {
  const {onRefresh, title} = props;
  return (
    <ScrollView
      contentContainerStyle={styles.container_scrollView}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={onRefresh} />
      }>
      <Image style={styles.ic_eat_empty} source={IC_EXERCISE} />
      <Text style={styles.text_diets_empty}>{title}</Text>
    </ScrollView>
  );
};
ExerciseEmpty.defaultProps = defaultProps;
export default ExerciseEmpty;
