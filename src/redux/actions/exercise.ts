import Types from '../types';

const addTimeExercise = (payload: any) => ({
  type: Types.ADD_TIME_EXERCISE,
  payload,
});

const clearTimeExercise = () => ({
  type: Types.CLEAR_TIME_EXERCISE,
});

export {clearTimeExercise, addTimeExercise};
