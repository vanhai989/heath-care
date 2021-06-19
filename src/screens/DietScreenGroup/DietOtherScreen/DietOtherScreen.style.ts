import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonTab: {
    paddingHorizontal: 13,
    paddingVertical: 6,
    backgroundColor: Colors.grey,
    borderRadius: 20,
    marginLeft: 10,
    marginTop: 10,
  },
  wrapButtonTab: {
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    paddingBottom: 10,
  },
  titleButtonTab: {
    fontSize: 14,
    fontFamily: Fonts.CabinMedium,
    color: Colors.black,
  },
  iconPencil: {
    width: 12,
    height: 12,
    marginRight: 5,
  },
  buttonChange: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapButtonChange: {
    width: '100%',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
  },
  changeTitle: {
    fontSize: 14,
    fontFamily: Fonts.CabinMedium,
  },
  imageItem: {
    width: '100%',
    height: 138,
  },
  name: {
    fontSize: 14,
    fontFamily: Fonts.CabinBold,
    color: Colors.black,
  },
  item: {
    flex: 1,
    borderRadius: 10,
    marginLeft: 15,
    marginBottom: 15,
    ...Colors.baseShadow,
    backgroundColor: Colors.white,
    paddingBottom: 10,
  },
  listDiet: {
    flex: 1,
    paddingRight: 15,
    paddingTop: 14,
  },
  kcal: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon_kcal: {
    width: 12,
    height: 12,
    marginRight: 2,
  },
  titleKcal: {
    fontSize: 14,
    fontFamily: Fonts.CabinRegular,
    color: Colors.black,
  },
  heart: {
    fontSize: 14,
    fontFamily: Fonts.CabinRegular,
    color: Colors.red_heart,
  },
  icon_heart: {
    width: 12,
    height: 12,
    marginRight: 2,
    tintColor: Colors.red_heart,
  },
  star: {
    width: 12,
    height: 12,
    marginLeft: 3,
  },
  wrapStar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 6,
  },
  bodyItem: {
    flex: 1,
    paddingHorizontal: 8,
    paddingTop: 4,
  },
  wrapImage: {
    width: '100%',
    height: 138,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  wrapItem: {
    width: '100%',
    flexDirection: 'row',
  },
  viewRight: {
    flex: 1,
  },
});
