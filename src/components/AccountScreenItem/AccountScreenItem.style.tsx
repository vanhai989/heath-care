import {StyleSheet} from 'react-native';
import {Fonts, Colors} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  itemLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
    paddingVertical: 12,
  },

  normalText: {
    fontSize: 14,
    fontFamily: Fonts.CabinRegular,
  },

  itemRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  yellowText: {
    color: Colors.accent_color,
    fontSize: 14,
    fontFamily: Fonts.CabinRegular,
    marginRight: 15,
  },

  iconArrow: {
    height: 15,
    width: 10,
  },

  row: {
    flexDirection: 'row',
    paddingLeft: 20,
    marginTop: 10,
    alignItems: 'center',
    paddingBottom: 10,
  },

  icon: {
    width: 14,
    height: 14,
    marginRight: 10,
  },

  rotate: {
    transform: [{rotate: '90deg'}],
  },

  boldText: {
    fontFamily: Fonts.CabinBold,
    marginTop: 10,
    paddingLeft: 40,
    color: Colors.gray2,
    paddingBottom: 10,
  },

  changePassContainer: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey,
  },
});
