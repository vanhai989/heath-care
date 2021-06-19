import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './LoaderIndicator.style';
import {Colors} from '../../themes';

type Props = {
  isLoading: boolean;
};

const LoaderIndicator = (props: Props) => {
  const {isLoading} = props;

  const _renderLoader = () => (
    <View style={styles.container}>
      <View style={[styles.modalBackground]}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator size="large" color={Colors.accent_color} />
        </View>
      </View>
    </View>
  );

  return isLoading ? _renderLoader() : null;
};

export default LoaderIndicator;
