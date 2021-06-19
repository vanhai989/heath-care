import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes';
import {getStatusBarHeight} from 'react-native-status-bar-height';
export default StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundVideo: {
    width: '100%',
    height: 200,
    backgroundColor: Colors.grey,
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
  body: {
    flex: 1,
  },
  wrapButtonControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconButtonControl: {
    width: 55,
    height: 55,
    marginRight: 37,
  },
  blank: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: Colors.gray,
    marginRight: 37,
  },
  blankNext: {
    width: 48,
    height: 48,
    borderRadius: 48 / 2,
    backgroundColor: Colors.gray,
  },
  wrapProgress: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progress: {
    width: 170,
    height: 170,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    fontSize: 35,
    fontFamily: Fonts.CabinRegular,
    position: 'absolute',
    left: 170 / 4.7,
    top: 170 / 2.7,
  },
  wrapReady: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
  },
  ready: {
    fontSize: 20,
    color: Colors.main_color,
    fontFamily: Fonts.CabinBold,
  },
});
