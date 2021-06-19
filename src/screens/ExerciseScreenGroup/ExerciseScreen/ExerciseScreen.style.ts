import {StyleSheet} from 'react-native';
import {Fonts, Colors} from '../../../themes';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_color,
  },

  titleHeader: {
    fontSize: 18,
    fontFamily: Fonts.CabinBold,
    color: Colors.white,
    marginBottom: 3,
  },
  Header: {
    height: 50 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    alignItems: 'center',
  },
  line: {
    width: 150,
    height: 4,
    backgroundColor: Colors.accent_color,
    borderRadius: 10,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
  },
  wrapExc: {
    flex: 1,
  },
  buttonStart: {
    backgroundColor: Colors.accent_color,
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 25,
    fontFamily: Fonts.CabinRegular,
  },
  wrapButtonStart: {
    width: '100%',
    paddingHorizontal: 50,
    paddingVertical: 50,
  },
  beginNow: {
    fontFamily: Fonts.CabinRegular,
  },
});
