import API from './configAPI';
interface registerType {
  phone: string;
  password: string;
  email: string;
  address: string;
  dob: string;
  gender: string;
  height: string;
  weight: string;
  target_weight: string;
  physical: string;
  muscle: string[];
}

interface loginFacebookType {
  height: string;
  weight: string;
  target_weight: string;
  physical: string;
  muscle: string[];
  facebook_id: string;
}

export interface changePasswordType {
  old_pass: string;
  new_pass: string;
  confirm_pass: string;
}

export default {
  loginPhone(params: {phone: string; password: string}) {
    const url = '/users/login';
    return API.post(url, params, {});
  },
  register(params: registerType) {
    const url = '/users/register';
    return API.post(url, params, {});
  },

  changePassword(param: changePasswordType) {
    const url = 'users/change-password';
    return API.put(url, param);
  },

  editAccount(param: FormData) {
    const url = '/users/infor';
    return API.put(url, param, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
  home(params: {from_date: string; to_date: string}) {
    const url = '/users/home';
    return API.get(url, {
      params,
    });
  },
  loginFacebook(params: loginFacebookType) {
    const url = '/users/facebook/login';
    return API.post(url, params, {});
  },
};
