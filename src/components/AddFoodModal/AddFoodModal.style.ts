import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes';
import {getStatusBarHeight} from 'react-native-status-bar-height';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_color,
  },
  body: {
    flex: 1,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingBottom: 20,
  },
  group_header: {
    height: 57,
    backgroundColor: Colors.grey,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 22,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  header: {
    height: 45 + getStatusBarHeight(),
    paddingTop: getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 16,
    alignItems: 'center',
    overflow: 'hidden',
    width: '100%',
  },
  back: {},
  center: {},
  save: {},
  cancel: {
    color: Colors.accent_color,
    fontFamily: Fonts.CabinRegular,
    fontSize: 18,
  },
  title: {
    fontFamily: Fonts.CabinBold,
    fontSize: 18,
    color: Colors.black,
  },
  text_save: {
    fontFamily: Fonts.CabinBold,
    color: Colors.accent_color,
    fontSize: 18,
  },
  wrapper_add_camera: {
    width: '100%',
    height: 190,
    backgroundColor: Colors.grey,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 18,
    marginBottom: 12,
    overflow: 'hidden'
  },
  padding_body: {
    paddingHorizontal: 16,
  },
  img_camera: {
    width: 60,
    height: 52,
    marginBottom: 15,
  },
  text_add_img: {
    fontFamily: Fonts.CabinRegular,
    fontSize: 16,
    color: Colors.grey2,
  },
  wrapper_textInput: {
    marginBottom: 10,
  },
  style_textInput: {
    borderWidth: 1,
    borderColor: Colors.grayCCC,
    borderRadius: 15,
    justifyContent: 'flex-start',
    fontSize: 14,
    fontFamily: Fonts.CabinRegular,
    lineHeight: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 40,
    color: Colors.black,
  },
  title_TextInput: {
    marginBottom: 5,
    fontSize: 14,
    fontFamily: Fonts.CabinRegular,
  },
  textarea: {
    borderWidth: 1,
    borderColor: Colors.grayCCC,
    borderRadius: 15,
    justifyContent: 'flex-start',
    fontSize: 14,
    fontFamily: Fonts.CabinRegular,
    lineHeight: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 122,
    color: Colors.black,
  },
  wrapper_group_add: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon_add: {
    marginRight: 5,
    width: 14,
    height: 14,
  },
  text_Add: {
    fontFamily: Fonts.CabinRegular,
    fontSize: 14,
    color: Colors.accent_color,
  },
  title_field: {
    marginVertical: 9,
    fontFamily: Fonts.CabinRegular,
    fontSize: 18,
    color: Colors.black,
  },
  item_text: {
    fontSize: 14,
    fontFamily: Fonts.CabinRegular,
    color: Colors.black,
  },
  no_requirement: {
    color: Colors.grey2,
    fontFamily: Fonts.CabinRegular,
    fontSize: 18,
  },
  dot_yellow: {
    width: 4,
    height: 4,
    backgroundColor: Colors.accent_color,
    borderRadius: 2,
    marginRight: 9,
  },
  wrapper_dotYellow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colo_number: {
    color: Colors.accent_color,
    marginRight: 9,
  },
  wrapper_numberYellow: {
    flexDirection: 'row',
  },
  visible: {
    marginTop: 250,
    alignItems: 'center',
  },
  image_food: {
    height: 190,
    width: '100%',
    marginVertical: 20,
    borderRadius: 5
  },
  wraper_image: {
    overflow: "hidden"
  }
});
