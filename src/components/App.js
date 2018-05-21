import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import registerScreens from '../screens';
import configureStore from '../store/configureStore';

const store = configureStore();
registerScreens(store, Provider);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.startApp();
  }

  startApp() {
    Navigation.startSingleScreenApp({
      screen: {
        screen: 'targetmobile.LoginScreen',
        title: 'Login'
      }
    });
  }
}

export default App;
