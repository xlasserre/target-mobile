import { Navigation } from 'react-native-navigation';

import LoginScreen from './containers/LoginScreen';
import MainScreen from './containers/MainScreen';

const registerScreens = (store, Provider) => {
  Navigation.registerComponent('targetmobile.LoginScreen', () => LoginScreen, store, Provider);
  Navigation.registerComponent('targetmobile.MainScreen', () => MainScreen, store, Provider);
};

export default registerScreens;
