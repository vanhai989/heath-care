import Types from '../types';

type actionType = {
  type: string;
  payload: any;
};

const initState = {
  ListDiet: [],
  foodAdds: [],
};

const dietReducer = (state = initState, action: actionType) => {
  const {type, payload} = action;
  switch (type) {
    case Types.ADD_LIST_DIET:
      return {
        ...state,
        ListDiet: payload,
      };
    case Types.ADD_DIET:
      return {
        ...state,
        foodAdds: payload,
      };
    case Types.CLEAR_LIST_DIET:
      return initState;
    default:
      return state;
  }
};

export default dietReducer;
