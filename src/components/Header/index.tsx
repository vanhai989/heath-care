/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import styles from './Header.style';

interface Props {
  renderHeaderRight?: any;
  renderHeaderLeft?: any;
  renderCenter?: any;
  style?: any;
}

const Header = (props: Props) => {
  const {renderHeaderRight, renderHeaderLeft, renderCenter, style} = props;

  const _renderHeaderLeft = () => {
    if (renderHeaderLeft) {
      return renderHeaderLeft();
    }
    return <View />;
  };

  const _renderCenter = () => {
    if (renderCenter) {
      return renderCenter();
    }
    return <View />;
  };

  const _renderHeaderRight = () => {
    if (renderHeaderRight) {
      return renderHeaderRight();
    }
    return <View style={{flex: 1}} />;
  };
  return (
    <View style={[styles.header, style]}>
      {_renderHeaderLeft()}
      {_renderCenter()}
      {_renderHeaderRight()}
    </View>
  );
};

export default Header;
