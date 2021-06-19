import React, {memo} from 'react';
import {StatusBar} from 'react-native';

type StatusBarStyle = 'default' | 'light-content' | 'dark-content';
type optionalProps = {
  backgroundColor: any;
  barStyle: StatusBarStyle;
};

const defaultProps: optionalProps = {
  barStyle: 'light-content',
  backgroundColor: 'transparent',
};

const MyStatusBar = (props: optionalProps) => {
  const {barStyle, backgroundColor} = props;
  return (
    <StatusBar
      translucent
      backgroundColor={backgroundColor}
      hidden={false}
      barStyle={barStyle}
    />
  );
};
MyStatusBar.defaultProps = defaultProps;
export default memo(MyStatusBar);
