import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_color,
    paddingRight: 14,
    paddingLeft: 16,
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.CabinSemiBold,
    color: Colors.white,
    textAlign: 'center',
    marginTop: 71,
  },
  wrapInput: {
    width: '100%',
    paddingTop: 40,
  },
  input: {
    marginTop: 10,
  },
});
