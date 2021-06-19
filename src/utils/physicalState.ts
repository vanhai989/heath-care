import {NORMAL, SICK, LITTLE_WEAK, STRONGER, VERY_STRONGER} from '../constants';
const check = (key: string) => {
  switch (key) {
    case SICK:
      return 'Kém';
    case NORMAL:
      return 'Bình thường';
    case LITTLE_WEAK:
      return 'Hơi kém';
    case STRONGER:
      return 'Khoẻ';
    case VERY_STRONGER:
      return 'Rất khoẻ';
    default:
      return 'Bình thường';
  }
};
export default {
  check,
};
