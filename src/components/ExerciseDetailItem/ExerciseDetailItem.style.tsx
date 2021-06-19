import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },

  leftItemContainer: {
    flexDirection: 'row',
  },

  imageContainer: {
    width: 73,
    height: 73,
    marginRight: 20,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: Colors.gray,
  },

  contentContainer: {
    paddingVertical: 10,
  },

  image: {
    width: 73,
    height: 73,
  },

  titleText: {
    fontFamily: Fonts.CabinBold,
    fontSize: 14,
    marginBottom: 5,
  },

  opacityItem: {
    position: 'absolute',
    zIndex: 1,
    height: 73,
    width: 73,
    backgroundColor: Colors.black,
    opacity: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  whiteText: {
    color: Colors.white,
    fontFamily: Fonts.CabinBold,
    position: 'absolute',
    zIndex: 2,
    right: 20,
    top: 25,
  },

  itemRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  arrowRight: {
    tintColor: Colors.grey2,
    height: 13,
    width: 13,
  },

  iconCheck: {
    height: 30,
    width: 80,
  },

  smallText: {
    fontSize: 12,
    fontFamily: Fonts.CabinRegular,
    color: Colors.gray2,
  },
})