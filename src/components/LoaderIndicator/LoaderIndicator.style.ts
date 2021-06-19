import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 0, 0, .5)',
  },
  activityIndicatorWrapper: {
    height: 50,
    width: 100,
    borderRadius: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
