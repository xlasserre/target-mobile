import { Navigation } from 'react-native-navigation';

import LoginScreen from './containers/LoginScreen';
import TargetPointsScreen from './containers/TargetPointsScreen';
import ProfileScreen from './containers/ProfileScreen';

const registerScreens = (store, Provider) => {
  Navigation.registerComponent('targetmobile.LoginScreen', () => LoginScreen, store, Provider);
  Navigation.registerComponent('targetmobile.TargetPointsScreen', () => TargetPointsScreen, store, Provider);
  Navigation.registerComponent('targetmobile.ProfileScreen', () => ProfileScreen, store, Provider);
};

export default registerScreens;
