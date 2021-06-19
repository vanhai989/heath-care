import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './LoadMoreIndicator.style';
import {Colors} from '../../themes';

interface Props {
  loadMore: boolean;
}

const LoadMoreSpinner = (props: Props) => {
  const {loadMore} = props;
  if (!loadMore) {
    return null;
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator
        style={styles.spinner}
        size="large"
        color={Colors.green}
      />
    </View>
  );
};

export default LoadMoreSpinner;
