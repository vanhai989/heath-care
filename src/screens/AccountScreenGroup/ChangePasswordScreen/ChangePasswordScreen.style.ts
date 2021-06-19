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
    width: 105,
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
    paddingTop: 40,
    paddingBottom: 8,
  },
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
  title_TextInput: {
    marginBottom: 5,
    fontSize: 14,
    fontFamily: Fonts.CabinRegular,
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
    marginTop: 43,
    marginBottom: 10,
  },
});
