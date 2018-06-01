import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { AsyncStorage } from 'react-native';
import Immutable from 'immutable';

import registerScreens from '../screens';
import configureStore from '../store/configureStore';
import { USER_ID } from '../constants/constants';
import { appInitialized } from '../actions/appActions';

const store = configureStore(Immutable.Map());
registerScreens(store, Provider);

class App {
  appRoot = 'loading';

  constructor() {
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(appInitialized());
  }

  onStoreUpdate() {
    let authenticated;
    AsyncStorage.getItem(USER_ID)
      .then((result) => {
        authenticated = result;

        const newAppRoot = authenticated ? 'main' : 'login';
        if (newAppRoot !== this.appRoot) {
          this.appRoot = newAppRoot;
          this.startApp();
        }
      });
  }

  startApp() {
    switch (this.appRoot) {
      case 'login':
        Navigation.startSingleScreenApp({
          screen: {
            screen: 'targetmobile.LoginScreen',
          }
        });
        break;

      case 'main':
        Navigation.startSingleScreenApp({
          screen: {
            label: 'Target Points',
            screen: 'targetmobile.TargetPointsScreen',
            title: 'Target Points',
            navigatorButtons: {
              leftButtons: [
                {
                  title: 'Profile',
                  icon: require('../assets/images/profileIcon.png'),
                  iconInsets: { bottom: -11 },
                  id: 'profile',
                }
              ],
              rightButtons: [
                {
                  id: 'chat',
                  title: 'Chat',
                  icon: require('../assets/images/chatIcon.png'),
                  iconInsets: { bottom: -11 },
                }
              ]
            }
          }
        });
        break;

      default:
        console.error('App init went wrong');
        break;
    }
  }
}

export default App;
