import Types from '../types';
import {PhysicalState} from '../../mocks';
import moment from 'moment';

type actionType = {
  type: string;
  payload: any;
};

const initState = {
  id: 0,
  access_token: null,
  full_name: '',
  email: '',
  phone: '',
  avatar: '',
  address: '',
  dob: moment().format('YYYY-MM-DD'),
  gender: '',
  height: 0,
  weight: 0,
  target_weight: 0,
  physical: PhysicalState[2].key,
  muscle: '',
};

const UserReducers = (state = initState, action: actionType) => {
  const {type, payload} = action;
  switch (type) {
    case Types.LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
      };
    case Types.CLEAR_USER:
      return initState;
    default:
      return state;
  }
};

export default UserReducers;
