import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from '../../../themes';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const windowHeight = Dimensions.get('screen').height;
const windowHWidth = Dimensions.get('screen').width;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_color,
  },

  textContainer: {
    alignItems: 'center',
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

  titleHeader: {
    fontSize: 18,
    fontFamily: Fonts.CabinBold,
    color: Colors.white,
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },

  iconDot: {
    width: 4,
    height: 4,
  },

  textGray: {
    color: Colors.grey2,
    marginHorizontal: 5,
    fontSize: 12,
  },

  body: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 30,
    backgroundColor: Colors.white,
    borderRadius: 15,
    overflow: 'hidden',
    paddingHorizontal: 16,
  },

  Header: {
    height: 75 + getStatusBarHeight(),
  },

  bodyContainer: {
    marginTop: windowHeight * 0.15,
    alignItems: 'center',
  },

  boldText: {
    fontSize: 24,
    fontFamily: Fonts.CabinBold,
  },

  contentContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
    width: '80%',
  },

  boxContainer: {
    flexDirection: 'row',
    padding: 10,
    width: windowHWidth * 0.45,
    backgroundColor: Colors.grey,
    borderRadius: 10,
    marginBottom: 10,
  },

  iconFace: {
    width: 18,
    height: 18,
    marginRight: 10,
  },

  itemRight: {
    paddingTop: 20,
    paddingBottom: 10,
  },

  wrapper: {
    marginTop: windowHeight * 0.1,
    alignItems: 'center',
  },

  commentContainer: {
    width: '80%',
    backgroundColor: Colors.white,
    shadowColor: '#000',
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 20,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    borderRadius: 15,
    borderWidth: 1,
    borderBottomWidth: 0.1,
    borderColor: Colors.grey,
    zIndex: -1,
  },

  marginBot: {
    marginBottom: 5,
  },

  largeText: {
    fontSize: 18,
  },

  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: 30,
    borderRightWidth: 15,
    borderBottomWidth: 0,
    borderLeftWidth: 30,
    borderTopColor: Colors.white,
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    marginLeft: '40%',
  },
  wrapButton: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  titleButton: {
    fontSize: 16,
    fontFamily: Fonts.CabinMediumItalic,
    color: Colors.main_color,
  },
  titleButtonClose: {
    fontSize: 16,
    fontFamily: Fonts.CabinMediumItalic,
    color: Colors.red,
  },
});
