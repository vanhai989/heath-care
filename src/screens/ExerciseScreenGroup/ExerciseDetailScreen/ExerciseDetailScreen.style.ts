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
  header: {
    height: 45 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 17,
    alignItems: 'center',
    overflow: 'hidden',
    width: '100%',
  },
  line: {
    width: 110,
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
  wrapper_goBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon_back: {
    width: 9,
    height: 15,
    marginRight: 5,
  },
  back: {
    fontSize: 16,
    fontFamily: Fonts.CabinRegular,
    color: Colors.accent_color,
  },
  cascaded: {
    width: 100,
  },
  group_center_header: {
    flex: 1,
    alignItems: 'center',
  },
});
