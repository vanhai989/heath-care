import {MUSCLE} from '../constants';

interface WelComeType {
  isStomach: boolean;
  isFoot: boolean;
  isHand: boolean;
}

const boolToString = (welcome: WelComeType) => {
  if (welcome.isStomach && welcome.isHand && welcome.isFoot) {
    return {
      code: [MUSCLE.BODY],
      title: 'Toàn thân',
    };
  }
  if (welcome.isStomach && welcome.isHand) {
    return {
      code: [MUSCLE.STOMACH, MUSCLE.HAND],
      title: 'Bụng và Tay',
    };
  }
  if (welcome.isStomach && welcome.isFoot) {
    return {
      code: [MUSCLE.STOMACH, MUSCLE.FOOT],
      title: 'Bụng và Chân',
    };
  }
  if (welcome.isFoot && welcome.isHand) {
    return {
      code: [MUSCLE.HAND, MUSCLE.FOOT],
      title: 'Tay và Chân',
    };
  }
  if (welcome.isStomach) {
    return {
      code: [MUSCLE.STOMACH],
      title: 'Bụng',
    };
  }
  if (welcome.isHand) {
    return {
      code: [MUSCLE.HAND],
      title: 'Tay',
    };
  }
  if (welcome.isFoot) {
    return {
      code: [MUSCLE.FOOT],
      title: 'Chân',
    };
  }
  return {
    code: [MUSCLE.BODY],
    title: 'Toàn thân',
  };
};

const stringToBool = (key: string) => {
  switch (key) {
    case MUSCLE.BODY:
      return {
        isStomach: true,
        isHand: true,
        isFoot: true,
      };
    case MUSCLE.STOMACH:
      return {
        isStomach: true,
        isHand: false,
        isFoot: false,
      };
    case MUSCLE.HAND:
      return {
        isStomach: false,
        isHand: true,
        isFoot: false,
      };
    case MUSCLE.FOOT:
      return {
        isStomach: false,
        isHand: false,
        isFoot: true,
      };
    default:
      return {
        isStomach: true,
        isHand: true,
        isFoot: true,
      };
  }
};
export default {
  boolToString,
  stringToBool,
};
