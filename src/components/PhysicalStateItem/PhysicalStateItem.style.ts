import {StyleSheet} from 'react-native';
import {Fonts, Colors} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingVertical: 15,
    borderRadius: 10,
  },
  icon: {
    width: 29,
    height: 47,
    margin: 18,
  },
  title: {
    fontSize: 16,
    fontFamily: Fonts.CabinBold,
    color: Colors.main_color,
  },
  content: {
    fontSize: 14,
    fontFamily: Fonts.CabinRegular,
    color: Colors.black,
  },
  wrapRight: {
    flex: 1,
  },
});
