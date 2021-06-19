import {StyleSheet} from 'react-native';
import {Fonts, Colors} from '../../themes';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 45 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.CabinSemiBold,
    color: Colors.white,
  },
  right: {
    fontSize: 14,
    fontFamily: Fonts.CabinRegular,
    color: Colors.accent_color,
  },
  wrapContinue: {
    height: 50,
    justifyContent: 'center',
  },
});
