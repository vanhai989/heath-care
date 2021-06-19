import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import logger from 'redux-logger';
import ReduxPersist from '../../config/ReduxPersist';

const persistedReducer = persistReducer(ReduxPersist.storeConfig, rootReducer);
const store = createStore(
  persistedReducer,
  applyMiddleware(thunkMiddleware, logger),
);
const persistor = persistStore(store);
export {store, persistor};
