import { Navigation } from 'react-native-navigation';

import LoginScreen from './containers/LoginScreen';

const registerScreens = (store, Provider) => {
  Navigation.registerComponent('targetmobile.LoginScreen', () => LoginScreen, store, Provider);
};

export default registerScreens;
