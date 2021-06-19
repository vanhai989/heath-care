import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../themes';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_color,
  },

  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  Header: {
    height: 75 + getStatusBarHeight(),
    justifyContent: 'center',
  },

  iconBack: {
    height: 18,
    width: 11,
    tintColor: Colors.accent_color,
    marginRight: 7,
  },

  textContainer: {
    alignItems: 'center',
    paddingVertical: 10,
  },

  titleHeader: {
    fontSize: 18,
    fontFamily: Fonts.CabinBold,
    color: Colors.white,
  },

  titleContainer: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
  },

  line: {
    width: '100%',
    height: 4,
    backgroundColor: Colors.accent_color,
    borderRadius: 10,
    marginTop: 2,
  },

  yellowText: {
    color: Colors.accent_color,
    fontSize: 16,
  },

  iconPen: {
    height: 18,
    width: 18,
    tintColor: Colors.accent_color,
    marginRight: 10,
  },

  rightHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },

  body: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
  },

  wrapButtonTab: {
    flexDirection: 'row',
    width: '100%',
    height: 45,
    borderBottomWidth: 1,
    borderColor: Colors.gray3,
  },

  buttonTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },

  bodyContainer: {
    flex: 1,
  },

  titleButtonTab: {
    fontSize: 14,
    fontFamily: Fonts.CabinRegular,
    color: Colors.gray2,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  textGray: {
    color: Colors.grey2,
    marginHorizontal: 5,
    fontSize: 12,
  },

  iconDot: {
    width: 4,
    height: 4,
  },
});
