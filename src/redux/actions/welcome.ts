import Types from '../types';
import {PhysicalStateType} from '../../screens/WelcomeScreenGroup/WelcomePhysicalStateScreen';

const setGender = (payload: any) => ({
  type: Types.GENDER,
  payload,
});

const setName = (payload: any) => ({
  type: Types.NAME,
  payload,
});

const setDob = (payload: string) => ({
  type: Types.DOB,
  payload,
});

const setWeight = (payload: string | number) => ({
  type: Types.WEIGHT,
  payload,
});

const setHeight = (payload: string | number) => ({
  type: Types.HEIGHT,
  payload,
});

const setTargetWeight = (payload: string | number) => ({
  type: Types.TARGET_WEIGHT,
  payload,
});

const setStomach = (payload: boolean) => ({
  type: Types.BODY,
  payload,
});

const setHand = (payload: boolean) => ({
  type: Types.HAND,
  payload,
});

const setFoot = (payload: boolean) => ({
  type: Types.FOOT,
  payload,
});

const setComplete = (payload: boolean) => ({
  type: Types.WELCOME_COMPLETE,
  payload,
});

const setPhysicalState = (payload: PhysicalStateType) => ({
  type: Types.PHYSICAL_STATE,
  payload,
});

const clearWelcome = () => ({
  type: Types.CLEAR_WELCOME,
});

export {
  setGender,
  setName,
  setDob,
  setWeight,
  setHeight,
  setTargetWeight,
  setPhysicalState,
  setStomach,
  setHand,
  setFoot,
  setComplete,
  clearWelcome,
};
