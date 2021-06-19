import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../themes';
import {getStatusBarHeight} from 'react-native-status-bar-height';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_color,
  },
  iconBack: {
    width: 18,
    height: 18,
  },
  title: {
    fontSize: 18,
    color: Colors.white,
    fontFamily: Fonts.CabinBold,
  },
  wrapHeader: {
    height: 45 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  headerRight: {
    width: 10,
  },
  viewPager: {
    flex: 1,
  },
  iconButtonControl: {
    width: 55,
    height: 55,
    marginRight: 37,
  },
  wrapButtonControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  body: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 30,
    paddingBottom: 33,
  },
  wrapBar: {
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 12,
    paddingBottom: 12,
    paddingRight: 7,
  },
  bar: {
    height: 5,
    flex: 1,
    marginRight: 5,
    backgroundColor: Colors.grey,
    borderRadius: 3,
  },
});
