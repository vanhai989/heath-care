import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../themes';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_color,
  },
  titleHeader: {
    fontSize: 18,
    fontFamily: Fonts.CabinBold,
    color: Colors.white,
  },
  line: {
    width: 78,
    height: 4,
    backgroundColor: Colors.accent_color,
    borderRadius: 10,
    marginTop: 2,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    height: 45 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
    paddingTop: 23,
    paddingHorizontal: 16,
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  back: {
    color: Colors.accent_color,
    fontSize: 16,
    fontFamily: Fonts.CabinRegular,
  },
  empty: {
    width: 60,
    height: 2,
  },
  iconBack: {
    height: 18,
    width: 11,
    tintColor: Colors.accent_color,
    marginRight: 7,
  },
  nameDiet: {
    color: Colors.black,
    fontSize: 18,
    fontFamily: Fonts.CabinBold,
  },

  textContainer: {
    alignItems: 'center',
  },

  iconFire: {
    height: 16,
    width: 16,
  },
  iconHeart: {
    height: 17,
    width: 17,
  },
  red_heart: {
    tintColor: Colors.red_heart,
  },
  iconStar: {
    height: 20,
    width: 20,
  },
  reported: {
    tintColor: Colors.accent_color,
  },
  titleLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 15,
  },

  imageContainer: {
    height: 190,
    width: '100%',
    backgroundColor: Colors.grey,
  },

  image: {
    height: 190,
    width: '100%',
  },

  timelineContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    paddingRight: 20,
    height: 41,
  },

  normalFont: {
    fontSize: 16,
  },

  heartText: {
    fontSize: 15,
    color: Colors.red,
    marginLeft: 8,
  },

  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconClock: {
    height: 17,
    width: 17,
  },

  grayText: {
    color: Colors.gray2,
  },

  centerText: {
    alignItems: 'center',
  },

  smallText: {
    color: Colors.gray2,
    fontSize: 14,
  },

  clockContainer: {
    height: 41,
    justifyContent: 'center',
  },

  itemContainer: {
    height: 41,
    justifyContent: 'space-between',
  },

  descriptionContainer: {
    marginTop: 20,
    marginBottom: 20,
  },

  smallFont: {
    fontSize: 13,
    lineHeight: 20,
  },

  bigFont: {
    fontSize: 18,
  },

  iconDot: {
    height: 4,
    width: 4,
    marginRight: 10,
  },

  recipeRowContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  cookingRowContainer: {
    marginVertical: 10,
    flexDirection: 'row',
  },
  number: {
    marginRight: 10,
    fontSize: 14,
    color: Colors.accent_color,
  },
  wrap_star: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  wrap_modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.black08,
    paddingHorizontal: 10,
  },
  wrap_button: {
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
  starHollow: {
    width: 25,
    height: 25,
    marginLeft: 3,
    tintColor: Colors.grey,
  },
  wrape_rate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrap_setStar: {
    flexDirection: 'row',
    height: 200,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    paddingVertical: 5,
    borderRadius: 10,
    marginVertical: 30,
  },
  wraper_close_modal: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 20,
    height: 20,
    backgroundColor: 'red',
    borderRadius: 20 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  close_modal: {
    color: Colors.white,
  },
  star: {
    width: 12,
    height: 12,
    marginLeft: 3,
  },
  starHollowSum: {
    width: 12,
    height: 12,
    marginLeft: 3,
    tintColor: Colors.grey,
  },
  wrapStar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 6,
  },
});
