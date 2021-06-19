import {PhysicalStateType} from '../screens/WelcomeScreenGroup/WelcomePhysicalStateScreen';

export interface WelComeModel {
  isMale: boolean;
  name: string;
  dob: string;
  weight: string;
  height: string;
  targetWeight: string;
  physicalState: PhysicalStateType;
  isStomach: boolean;
  isHand: boolean;
  isFoot: boolean;
}

export interface ExerciseModel {
  timeExercise: number;
}

export interface UserModel {
  id: number;
  access_token: null | string;
  full_name: string;
  email: string;
  phone: string;
  avatar: string;
  address: string;
  dob: string;
  gender: string;
  height: number;
  weight: number;
  target_weight: number;
  physical: string;
  muscle: string[];
}

export interface DietModel {
  id: number;
  name: string;
  heart: string;
  star: number;
  image: string;
  description: string;
  user_star: number;
  calo: number;
}

export interface NewsModel {
  image_url_list: string;
  description: string;
  title: string;
  id: number;
  total_like: string | number;
  total_views: string | number;
  like_flag: string;
}

export interface NewsDetail {
  description: string;
  id: number;
  image_url_list: string | null;
  title: string;
  like_flag: string;
  total_like: string;
  total_views: string;
}

export interface ExerciseArea {
  description: string;
  id: number;
  image: string;
  kcal: number;
  name: string;
  video: string;
}
