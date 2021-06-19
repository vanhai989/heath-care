import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    marginBottom: 10,
    backgroundColor: Colors.white,
    paddingTop: 20,
    paddingBottom: 8,
  },
  wrapImage: {
    width: '100%',
    flex: 1,
  },
  imageTop: {
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 3,
  },
  imageBottom: {
    flexDirection: 'row',
    width: '100%',
  },
  ImageBottomLeft: {
    flex: 1,
    height: 100,
    marginRight: 3,
  },
  ImageBottomRight: {
    flex: 1,
    height: 100,
  },
  ImageTopLeft: {
    flex: 1,
    height: 147,
    marginRight: 3,
  },
  ImageTopRight: {
    flex: 1,
    height: 147,
  },
  wrapImagelast: {
    flex: 1,
    height: 100,
  },
  ImageOne: {
    flex: 1,
    height: 150,
  },
  more: {
    color: Colors.white,
    fontSize: 18,
    fontFamily: Fonts.CabinSemiBold,
  },
  wrapMore: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    height: 100,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    fontSize: 14,
    fontFamily: Fonts.CabinRegular,
    color: Colors.gray2,
    marginTop: 14,
  },
  title: {
    fontSize: 18,
    fontFamily: Fonts.CabinBold,
    color: Colors.black,
    marginBottom: 8,
  },
  heart: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: Colors.gray4,
  },
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon_heart: {
    width: 12,
    height: 12,
    marginRight: 2,
    tintColor: Colors.red_heart,
  },
  title_heart: {
    fontSize: 14,
    fontFamily: Fonts.CabinRegular,
    color: Colors.red_heart,
  },
  count_view: {
    fontSize: 14,
    fontFamily: Fonts.CabinMedium,
    color: Colors.gray2,
  },
  wrapMoreView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 47,
    paddingTop: 7,
  },
  title_love: {
    fontSize: 14,
    fontFamily: Fonts.CabinSemiBold,
    color: Colors.gray2,
  },
  icon_love: {
    width: 16,
    height: 14,
    marginRight: 2,
    tintColor: Colors.gray2,
  },
  icon_more: {
    width: 18,
    height: 18,
    marginRight: 2,
    tintColor: Colors.gray2,
  },

  liked: {
    tintColor: Colors.red,
  },

  likeText: {
    color: Colors.red,
  },

  descriptionContainer: {
    marginTop: 10,
    maxHeight: 72,
    overflow: 'hidden',
  },
});
