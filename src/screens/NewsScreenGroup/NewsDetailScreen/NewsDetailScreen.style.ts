import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../themes';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_color,
  },
  header: {
    height: 45 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 17,
    alignItems: 'center',
    overflow: 'hidden',
    width: '100%',
  },
  icon_back: {
    width: 9,
    height: 15,
    marginRight: 5,
  },
  visible: {
    marginTop: 250,
    alignItems: 'center',
  },
  titleHeader: {
    fontSize: 18,
    fontFamily: Fonts.CabinBold,
    color: Colors.white,
  },
  back: {
    fontSize: 16,
    fontFamily: Fonts.CabinRegular,
    color: Colors.accent_color,
  },

  wrapper_goBack: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    width: 80,
    height: 4,
    backgroundColor: Colors.accent_color,
    borderRadius: 10,
  },
  group_center_header: {
    flex: 1,
    alignItems: 'center',
  },
  cascaded: {
    width: 100,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.grey,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
  },
  wrapper_content: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
    paddingTop: 22,
  },
  wrapper_img: {},
  paddingBottom: {
    marginBottom: 20,
  },
  wrapper_Status_posts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: Colors.grayCCC,
    marginBottom: 8,
    paddingTop: 10,
    paddingBottom: 5,
  },
  wrapper_item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heart: {
    width: 14,
    height: 12,
    marginRight: 5,
  },
  text_care: {
    fontFamily: Fonts.CabinRegular,
    fontSize: 14,
    // lineHeight: 15,
    color: Colors.black,
  },
  wrapper_item_right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item_right: {
    marginLeft: 30,
  },
  image: {
    marginVertical: 10,
    height: 193,
  },
  text_content: {
    lineHeight: 20,
    color: Colors.black,
    fontFamily: Fonts.CabinRegular,
  },
  titlePost: {
    lineHeight: 24,
    fontFamily: Fonts.CabinBold,
    color: Colors.black,
    fontSize: 18,
  },
  title_task: {
    lineHeight: 20,
    color: Colors.black,
    fontFamily: Fonts.CabinRegular,
    fontSize: 16,
    marginVertical: 10,
  },
  text_content_number: {
    lineHeight: 20,
    color: Colors.black,
    fontFamily: Fonts.CabinRegular,
    marginLeft: 10,
  },

  liked: {
    tintColor: Colors.red,
  },

  likeText: {
    color: Colors.red,
  },
});
