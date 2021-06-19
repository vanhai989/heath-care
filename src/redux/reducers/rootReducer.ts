import {combineReducers} from 'redux';
import user from './UserReducer';
import auth from './authReducer';
import welcome from './welcomeReducer';
import diet from './dietReducer';
import exercise from './exerciseReducer';

const rootReducer = combineReducers({
  user,
  auth,
  welcome,
  diet,
  exercise,
});

export default rootReducer;
