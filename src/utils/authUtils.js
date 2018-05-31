import { AsyncStorage } from 'react-native';

import { USER_ID } from '../constants/constants';

class authUtils {
  static saveUserInStorage = id =>
    new Promise((resolve, reject) => {
      AsyncStorage.setItem(USER_ID, id)
        .then(() => { resolve(); })
        .catch((error) => { reject(error); });
    });

  static removeUserFromStorage = () =>
    new Promise((resolve, reject) => {
      AsyncStorage.removeItem(USER_ID)
        .then(() => { resolve(); })
        .catch((error) => { reject(error); });
    });
}

export default authUtils;
