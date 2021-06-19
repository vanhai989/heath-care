import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const SMALL_SCREEN = width < 375 || height < 667;
const BIG_SCREEN = width > 375 || height > 667;
const STANDARD_SCREEN = width === 375 || height === 667;

export {SMALL_SCREEN, BIG_SCREEN, STANDARD_SCREEN};
