import {AsyncStorage} from 'react-native';

const ReduxPersist = {
  active: true,
  reducerVersion: '0.5',
  storeConfig: {
    key: 'primary',
    storage: AsyncStorage,
    whitelist: ['user', 'welcome', 'exercise'],
  },
};

export default ReduxPersist;
