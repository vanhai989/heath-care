import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent_color,
    paddingTop: getStatusBarHeight(),
  },
  wrapAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: Colors.grey,
  },
  avatar: {
    width: 50,
    height: 50,
  },
  header: {
    width: '100%',
    paddingTop: 27,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hello: {
    fontSize: 14,
    fontFamily: Fonts.CabinRegular,
    color: Colors.main_color,
  },
  WapName: {
    marginLeft: 13,
  },
  name: {
    fontSize: 18,
    fontFamily: Fonts.CabinBold,
    color: Colors.main_color,
  },
  headerRight: {
    paddingVertical: 10,
  },
  logout: {
    fontSize: 14,
    fontFamily: Fonts.CabinRegular,
    color: Colors.main_color,
    textDecorationLine: 'underline',
  },
  body: {
    flex: 1,
    backgroundColor: Colors.main_color,
    marginTop: 12,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 15,
    paddingTop: 28,
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconTitleTodayItem: {
    width: 15,
    height: 15,
    marginRight: 6,
  },
  titleTodayItem: {
    fontSize: 14,
    fontFamily: Fonts.CabinMedium,
  },
  todayItem: {
    backgroundColor: Colors.white,
    flex: 1,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  today: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  todayIn: {
    marginRight: 14,
  },
  contentToday: {
    fontSize: 30,
    fontFamily: Fonts.CabinBold,
    color: Colors.black,
    marginBottom: 10,
  },
  kcal: {
    fontSize: 14,
    fontFamily: Fonts.CabinMedium,
    color: Colors.grey2,
  },
  iconFire: {
    width: 24,
    height: 24,
  },
  titleToday: {
    fontSize: 16,
    fontFamily: Fonts.CabinMedium,
    color: Colors.white,
    marginLeft: 6,
  },
  bodyIndex: {
    paddingTop: 20,
  },
  titleBodyIndexItem: {
    fontSize: 14,
    fontFamily: Fonts.CabinMedium,
    color: Colors.gray2,
  },
  contentBodyIndexItem: {
    fontSize: 24,
    fontFamily: Fonts.CabinBold,
    color: Colors.black,
    marginBottom: 10,
  },
  iconUpDown: {
    width: 9,
    height: 14,
    marginLeft: 12,
  },
  unit: {
    fontSize: 14,
    fontFamily: Fonts.CabinBold,
    color: Colors.black,
  },
  bmi: {
    width: '100%',
    backgroundColor: Colors.white,
    height: 107,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    marginTop: 14,
    paddingLeft: 47,
    paddingRight: 13,
  },
  iconBmi: {
    width: 18,
    height: 18,
    marginRight: 6,
  },
  titleBmi: {
    fontSize: 14,
    color: Colors.gray2,
    fontFamily: Fonts.CabinRegular,
  },
  wrapLeftBmi: {
    alignItems: 'center',
  },
  contentBmi: {
    fontSize: 24,
    fontFamily: Fonts.CabinBold,
    color: Colors.black,
    marginTop: 7,
  },
  wrapRightBmi: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: 7,
  },
  iconBmiBar: {
    height: 20,
    width: 200,
  },
  normal: {
    fontFamily: Fonts.CabinBold,
    fontSize: 14,
    color: Colors.black,
    width: 200,
    textAlign: 'center',
    marginTop: 6,
  },
  iconBmiIndex: {
    width: 28,
    height: 23,
    alignItems: 'center',
    paddingTop: 2,
    position: 'absolute',
    bottom: 0,
    left: 20,
  },
  contentBmiIndex: {
    fontFamily: Fonts.CabinBold,
    fontSize: 11,
    color: Colors.white,
  },
  wrapBmiIndex: {
    width: 200,
  },
  statistical: {
    paddingTop: 15,
    paddingBottom: 50,
  },
  statisticalBody: {
    marginTop: 15,
    height: 242,
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  chartLine: {
    flex: 1,
    marginTop: 0,
  },
  chartRevenue: {
    // height: 100,
    // borderWidth: 1,
    // width: '100%',
    // flexDirection: 'row',
    backgroundColor: 'blue',
    zIndex: 100,
  },
});
