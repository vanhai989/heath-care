import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.white,
    height: 50,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 19,
  },
  iconCheck: {
    width: 18,
    height: 18,
  },
  textInput: {
    flex: 1,
    marginLeft: 16,
    fontSize: 14,
    fontFamily: Fonts.CabinRegular,
    color: Colors.black,
  },
});
