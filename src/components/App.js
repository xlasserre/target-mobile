import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import Immutable from 'immutable';

import registerScreens from '../screens';
import configureStore from '../store/configureStore';

const store = configureStore(Immutable.Map());
registerScreens(store, Provider);

class App {
  constructor() {
    this.startApp();
  }

  startApp() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'targetmobile.LoginScreen',
      }
    });
  }
}

export default App;
