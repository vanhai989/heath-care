import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default StyleSheet.create({
  header: {
    alignItems: 'center',
    height: 45 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    flexDirection: 'row',
    paddingHorizontal: 16,
  },
});
