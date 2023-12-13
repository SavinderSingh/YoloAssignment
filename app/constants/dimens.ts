import {Dimensions} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;
export const WIDTH_50 = SCREEN_WIDTH / 2;

export const dimens = {
  MAX_WIDTH: Dimensions.get('screen').width - 96,
  MAX_HEIGHT: Dimensions.get('screen').height,
  XR: Dimensions.get('screen').width / 667,
  REELS: 3,
  SYMBOL: 3,
  REELS_REPEAT: 10,
};
