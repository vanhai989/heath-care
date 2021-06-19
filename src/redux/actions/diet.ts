import Types from '../types';

const addListDiet = (payload: any) => ({
  type: Types.ADD_LIST_DIET,
  payload,
});

const addDiet = (payload: any) => ({
  type: Types.ADD_DIET,
  payload,
});

const clearDiet = () => ({
  type: Types.CLEAR_LIST_DIET,
});

export {addDiet, clearDiet, addListDiet};
