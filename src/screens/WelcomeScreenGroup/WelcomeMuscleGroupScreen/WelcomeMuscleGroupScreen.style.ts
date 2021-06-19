import {StyleSheet} from 'react-native';
import {Colors} from '../../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.main_color,
    paddingRight: 14,
    paddingLeft: 16,
  },
  wrapPeople: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  people: {
    height: 554,
    width: 151,
  },
  headIcon: {
    width: 53,
    height: 82,
  },
  bodyIcon: {
    width: 84,
    height: 137,
  },
  leftHandIcon: {
    width: 40,
    height: 230,
  },
  wrapHead: {
    position: 'absolute',
    top: 0,
    left: 52,
  },
  wrapBody: {
    position: 'absolute',
    top: 77,
    left: 36,
  },
  warpLeftHand: {
    position: 'absolute',
    top: 89,
    left: 3,
  },
  warpRightHand: {
    position: 'absolute',
    top: 89,
    right: -2,
  },
  warpFoot: {
    position: 'absolute',
    top: 206,
    right: 22,
  },
  footIcon: {
    width: 101,
    height: 326,
  },
  footIconGirl: {
    width: 94,
    height: 352,
  },
  warpFootGirl: {
    position: 'absolute',
    top: 185,
    right: 25,
  },
  wrapBodyGirl: {
    position: 'absolute',
    top: 77,
    left: 41,
  },
  bodyIconGirl: {
    width: 75,
    height: 114,
  },
  leftHandIconGirl: {
    width: 40,
    height: 211,
  },
  warpRightHandGirl: {
    position: 'absolute',
    top: 90,
    right: 1,
  },
  warpLeftHandGirl: {
    position: 'absolute',
    top: 90,
    left: 7,
  },
  rightHandIconGirl: {
    width: 40,
    height: 211,
  },
});
