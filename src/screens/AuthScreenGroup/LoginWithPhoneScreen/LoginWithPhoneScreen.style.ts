import {StyleSheet, Dimensions} from 'react-native';
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
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.accent_color,
  },
  titleButton: {
    fontSize: 14,
    fontFamily: Fonts.CabinBold,
    color: Colors.white,
  },
  groupButton: {
    paddingHorizontal: 16,
    paddingTop: 97,
  },
  buttonFacebook: {
    height: 50,
    width: '100%',
    borderRadius: 23,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#4267B2',
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
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 28,
    paddingRight: 16,
  },
  iconBack: {
    width: 11,
    height: 18,
    tintColor: Colors.accent_color,
  },
  login: {
    color: Colors.white,
    fontSize: 18,
    fontFamily: Fonts.CabinBold,
    flex: 1,
    textAlign: 'center',
  },
  wrapIconBack: {
    paddingLeft: 26,
    justifyContent: 'center',
  },
  input: {
    marginTop: 15,
  },
  groundInput: {
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  wrapButton: {
    width: '100%',
    paddingHorizontal: Dimensions.get('window').width / 4,
    paddingTop: 45,
  },
});
