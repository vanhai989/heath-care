import {StyleSheet} from 'react-native';
import {Colors} from '../../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: 21,
    height: 21,
    tintColor: Colors.green,
    marginRight: 5,
  },
  button: {
    height: 40,
    width: 92,
    justifyContent: 'center',
    alignItems: 'center',
    ...Colors.baseShadow,
    backgroundColor: Colors.grey,
    position: 'absolute',
    bottom: 21,
    right: 16,
    borderRadius: 20,
    flexDirection: 'row',
  },
  buttonAte: {
    height: 40,
    width: 92,
    justifyContent: 'center',
    alignItems: 'center',
    ...Colors.baseShadow,
    backgroundColor: Colors.accent_color,
    position: 'absolute',
    bottom: 21,
    right: 16,
    borderRadius: 20,
    flexDirection: 'row',
  },
  iconAte: {
    width: 21,
    height: 21,
    marginRight: 5,
  },
});
