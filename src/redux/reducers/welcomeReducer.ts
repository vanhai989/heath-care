import Types from '../types';
import {PhysicalState} from '../../mocks';
import moment from 'moment';

type actionType = {
  type: any;
  payload: any;
};

const initState = {
  isMale: false,
  name: '',
  dob: moment().format('YYYY-MM-DD'),
  weight: '0',
  height: '0',
  targetWeight: '0',
  physicalState: PhysicalState[2],
  isStomach: true,
  isHand: false,
  isFoot: false,
  isComplete: false,
};

const welcomeReducer = (state = initState, action: actionType) => {
  const {type, payload} = action;
  switch (type) {
    case Types.GENDER: {
      return {
        ...state,
        isMale: payload,
      };
    }
    case Types.NAME: {
      return {
        ...state,
        name: payload,
      };
    }
    case Types.DOB: {
      return {
        ...state,
        dob: payload,
      };
    }
    case Types.WEIGHT: {
      return {
        ...state,
        weight: payload,
      };
    }
    case Types.HEIGHT: {
      return {
        ...state,
        height: payload,
      };
    }
    case Types.TARGET_WEIGHT: {
      return {
        ...state,
        targetWeight: payload,
      };
    }
    case Types.PHYSICAL_STATE: {
      return {
        ...state,
        physicalState: payload,
      };
    }
    case Types.BODY: {
      return {
        ...state,
        isStomach: payload,
      };
    }
    case Types.HAND: {
      return {
        ...state,
        isHand: payload,
      };
    }
    case Types.FOOT: {
      return {
        ...state,
        isFoot: payload,
      };
    }
    case Types.WELCOME_COMPLETE: {
      return {
        ...state,
        isComplete: payload,
      };
    }
    case Types.CLEAR_WELCOME:
      return initState;
    default:
      return state;
  }
};

export default welcomeReducer;
