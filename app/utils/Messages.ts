import Toast from 'react-native-toast-message';

export const showAlert = (type, msg) => {
  Toast.show({
    type: type,
    position: 'bottom',
    text1: msg,
    visibilityTime: 3000,
    autoHide: true,
    topOffset: 48,
    bottomOffset: 40,
  });
};
