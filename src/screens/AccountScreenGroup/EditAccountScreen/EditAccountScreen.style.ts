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
  back: {
    fontSize: 16,
    fontFamily: Fonts.CabinRegular,
    color: Colors.accent_color,
  },

  wrapper_goback: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    width: 137,
    height: 4,
    backgroundColor: Colors.accent_color,
    borderRadius: 10,
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
  cascader: {
    width: 100,
  },
  group_center_header: {
    flex: 1,
    alignItems: 'center',
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
    paddingTop: 20,
    paddingBottom: 8,
  },
  flex: {
    flex: 1,
  },
  avatar: {
    width: 98,
    height: 98,
    borderRadius: 49,
  },
  change_avatar: {
    width: 31,
    height: 31,
    borderRadius: 15.5,
  },
  wrapper_group_avatar: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 37,
  },
  wrapper_addAvatar: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 2,
    borderRadius: 15.5,
  },
  wrapper_avatar: {},
  wrapper_textInput: {
    marginBottom: 11,
  },
  style_textInput: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    paddingLeft: 18,
    fontSize: 14,
    lineHeight: 18,
    fontFamily: Fonts.CabinBold,
    borderWidth: 1,
    borderColor: Colors.grayCCC,
  },
  enter_info: {
    flex: 1,
    paddingBottom: 10,
  },
  submit: {
    paddingVertical: 10,
    backgroundColor: Colors.accent_color,
    width: 143,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22.5,
  },
  text_submit: {
    fontSize: 14,
    fontFamily: Fonts.CabinRegular,
    alignContent: 'center',
    color: Colors.black,
  },
  wrapper_submit: {
    alignItems: 'center',
    marginTop: 82,
    marginBottom: 20,
  },
  title_TextInput: {
    marginBottom: 5,
    fontSize: 14,
    fontFamily: Fonts.CabinRegular,
  },
  dob_title: {
    marginBottom: 5,
    fontSize: 14,
    fontFamily: Fonts.CabinBold,
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
  wrapAvatar: {
    width: '100%',
    alignItems: 'center',
  },
});
