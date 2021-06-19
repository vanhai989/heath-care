import {StyleSheet} from 'react-native';
import {Colors} from '../../themes';

export default StyleSheet.create({
  container: {
    height: 98,
    width: 98,
  },

  avatarContainer: {
    height: 98,
    width: 98,
  },

  camera: {
    height: 15,
    width: 15,
  },

  cameraContainer: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    height: 31,
    width: 31,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 31 / 2,
  },
  wrapImage: {
    height: 98,
    width: 98,
    borderRadius: 98 / 2,
    overflow: 'hidden',
    backgroundColor: Colors.grey,
  },
});
