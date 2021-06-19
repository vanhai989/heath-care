import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
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
  titleButtonTab: {
    fontSize: 14,
    fontFamily: Fonts.CabinRegular,
    color: Colors.gray2,
  },
});
