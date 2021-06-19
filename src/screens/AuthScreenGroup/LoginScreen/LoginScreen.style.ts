import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../themes';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent_color,
    paddingTop: getStatusBarHeight(),
  },
  icon_backGround: {
    width: '100%',
    height: 182,
    alignItems: 'center',
    paddingTop: 35,
  },
  icon: {
    width: 62,
    height: 72,
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.CabinBold,
    marginTop: 11,
    color: Colors.main_color,
  },
  body: {
    backgroundColor: Colors.main_color,
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  wrapVegetable: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 84,
  },
  iconVegetable: {
    width: 144,
    height: 96,
  },
  titleVegetable: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: Fonts.CabinRegular,
    color: Colors.white,
    marginTop: 20,
  },
  button: {
    height: 50,
    width: '100%',
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  titleButton: {
    fontSize: 14,
    fontFamily: Fonts.CabinBold,
    color: Colors.black,
  },
  groupButton: {
    paddingHorizontal: 16,
    paddingTop: 97,
  },
  buttonFacebook: {
    height: 50,
    width: '100%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.accent_color,
    flexDirection: 'row',
    paddingHorizontal: 28,
    marginTop: 15,
  },
  titleButtonFacebook: {
    fontSize: 14,
    fontFamily: Fonts.CabinBold,
    color: Colors.white,
    flex: 1,
    textAlign: 'center',
  },
  iconFacebook: {
    width: 20,
    height: 20,
  },
  buttonRegister: {
    fontSize: 14,
    fontFamily: Fonts.CabinMediumItalic,
    textDecorationLine: 'underline',
    color: Colors.accent_color,
  },
  wrapButtonRegister: {
    width: '100%',
    paddingVertical: 10,
    alignItems: 'center',
  },
});
