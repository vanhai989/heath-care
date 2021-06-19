import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black08,
    justifyContent: 'flex-end',
  },
  body: {
    backgroundColor: Colors.grey,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: 'hidden',
    height: 300,
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 18,
  },
  wrapLine: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 7,
  },
  line: {
    height: 6,
    width: 50,
    backgroundColor: Colors.grey,
    borderRadius: 3,
  },
  item: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 10,
  },
  titleItem: {
    fontSize: 14,
    fontFamily: Fonts.CabinBold,
    color: Colors.black,
  },
});
