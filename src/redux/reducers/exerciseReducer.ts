import Types from '../types';

type actionType = {
  type: string;
  payload: any;
};

const initState = {
  timeExercise: 10,
};

const exerciseReducer = (state = initState, action: actionType) => {
  const {type, payload} = action;
  switch (type) {
    case Types.ADD_TIME_EXERCISE:
      return {
        ...state,
        timeExercise: payload,
      };
    case Types.CLEAR_TIME_EXERCISE:
      return initState;
    default:
      return state;
  }
};

export default exerciseReducer;
