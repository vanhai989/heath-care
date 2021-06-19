import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from '../../../themes';
import {getStatusBarHeight} from 'react-native-status-bar-height';
const windowHeight = Dimensions.get('screen').height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_color,
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
  body: {
    flex: 1,
    backgroundColor: Colors.grey,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
  },

  scrollViewContainer: {
    paddingTop: windowHeight / 2.5,
  },
});
