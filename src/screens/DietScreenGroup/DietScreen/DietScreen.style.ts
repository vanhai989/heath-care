import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../themes';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_color,
  },
  wrapTabBar: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
  },
  tabView: {
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    backgroundColor: Colors.white,
    overflow: 'hidden',
  },
  titleHeader: {
    fontSize: 18,
    fontFamily: Fonts.CabinBold,
    color: Colors.white,
  },
  line: {
    width: 78,
    height: 4,
    backgroundColor: Colors.accent_color,
    borderRadius: 10,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    height: 45 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
  },
  itemTabBar: {
    backgroundColor: Colors.grey,
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 0.5,
    borderColor: Colors.blue,
  },
  titleItemTabBar: {
    fontSize: 14,
    fontFamily: Fonts.CabinMedium,
    color: Colors.black,
  },
});
