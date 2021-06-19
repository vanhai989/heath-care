import {FAKE_AVATAR} from '../assets';

export default {
  format(avatar: string | null) {
    if (
      avatar === null ||
      avatar === '' ||
      avatar === 'null' ||
      avatar === 'avatar'
    ) {
      return FAKE_AVATAR;
    }
    return {uri: avatar};
  },
};
