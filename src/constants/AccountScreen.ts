import {IC_FB, IC_YOUTUBE, IC_EARTH, IC_PHONE} from '../assets';
import {ACCOUNT_SCREEN_LIST} from '.';

export const Setting = [
  {
    title: 'Danh sách bài tập',
    code: ACCOUNT_SCREEN_LIST.LIST_EXERCISE,
  },
  {
    title: 'Cài đặt',
    code: ACCOUNT_SCREEN_LIST.SETTING,
  },
  {
    title: 'Đánh giá',
    code: ACCOUNT_SCREEN_LIST.RATE,
  },
  {
    title: 'Xem thêm ứng dụng',
    code: ACCOUNT_SCREEN_LIST.MORE,
  },
  {
    title: 'Liên hệ',
    code: ACCOUNT_SCREEN_LIST.CONTACT,
  },
];

export const Contacts = [
  {content: 'fb.com/giamcantainha', image: IC_FB},
  {content: 'youtube.com/giamcantainha', image: IC_YOUTUBE},
  {content: 'giamcantainha.com', image: IC_EARTH},
  {content: '19001001', image: IC_PHONE},
];
