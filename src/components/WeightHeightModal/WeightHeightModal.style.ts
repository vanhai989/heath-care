import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black08,
  },
  body: {
    flex: 1,
    marginTop: 78,
    backgroundColor: Colors.white,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: 'hidden',
  },
  header: {
    width: '100%',
    height: 57,
    backgroundColor: Colors.grey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    overflow: 'hidden',
  },
  cancel: {
    fontSize: 18,
    fontFamily: Fonts.CabinRegular,
    color: Colors.red,
  },
  update: {
    fontSize: 18,
    fontFamily: Fonts.CabinBold,
    color: Colors.accent_color,
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.CabinBold,
    color: Colors.black,
  },
  wrapInput: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.white2,
    marginTop: 35,
    borderWidth: 1,
    borderColor: Colors.grey3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  unit: {
    fontSize: 18,
    fontFamily: Fonts.CabinRegular,
    color: Colors.grey2,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    fontFamily: Fonts.CabinRegular,
    color: Colors.black,
    textAlign: 'right',
  },
});
