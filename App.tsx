import React from 'react';
import AppNavigation from './src/navigation';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
