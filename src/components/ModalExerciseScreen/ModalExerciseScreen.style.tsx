import {StyleSheet} from 'react-native';
import { Colors } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.blackOpacity,
  },

  modalView: {
    width: '80%',
    backgroundColor: Colors.white,
    paddingVertical: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    
  },

  normalText: {
    fontSize: 14,
    alignSelf: 'center',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '80%',
    marginTop: 20,
  },

  button: {
    width: 95,
    borderWidth: 1,
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 8,
    backgroundColor: Colors.accent_color,
  }
});
