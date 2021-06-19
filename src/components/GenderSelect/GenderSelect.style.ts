import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes';

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 37,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapButton: {
    borderRadius: 20,
    width: 128,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.white,
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  name: {
    color: Colors.white,
    fontSize: 16,
    fontFamily: Fonts.CabinRegular,
  },
});
