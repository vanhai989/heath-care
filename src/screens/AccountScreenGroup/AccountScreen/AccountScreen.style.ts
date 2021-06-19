import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../themes';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_color,
  },

  body: {
    flex: 1,
    backgroundColor: Colors.white2,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
    paddingTop: 30,
    paddingHorizontal: 16,
  },

  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  iconBack: {
    height: 18,
    width: 11,
    tintColor: Colors.accent_color,
    marginRight: 7,
  },

  back: {
    color: Colors.accent_color,
    fontSize: 16,
    fontFamily: Fonts.CabinRegular,
  },

  titleHeader: {
    fontSize: 18,
    fontFamily: Fonts.CabinBold,
    color: Colors.white,
  },

  line: {
    width: 140,
    height: 4,
    backgroundColor: Colors.accent_color,
    borderRadius: 10,
  },

  empty: {
    width: 60,
    height: 2,
  },

  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  name: {
    marginVertical: 20,
    fontFamily: Fonts.CabinBold,
    fontSize: 16,
  },

  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  peopleIcon: {
    height: 14,
    width: 14,
  },

  titleText: {
    fontSize: 14,
    marginLeft: 5,
    fontFamily: Fonts.CabinBold,
  },

  iconArrow: {
    height: 15,
    width: 10,
  },

  itemLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },

  normalText: {
    fontSize: 14,
    fontFamily: Fonts.CabinRegular,
  },

  yellowText: {
    color: Colors.accent_color,
    fontSize: 14,
    fontFamily: Fonts.CabinRegular,
    marginRight: 15,
  },

  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  personal: {
    marginBottom: 20,
  },

  logoutIcon: {
    height: 14,
    width: 18,
  },

  contentContainer: {
    backgroundColor: Colors.white,
    marginTop: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  wrapHeader: {
    alignItems: 'center',
    height: 50 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: 16,
  },
  signOut: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 60,
  },
});
