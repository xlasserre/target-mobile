import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
  }

  login() {
    // code for login to be added later
  }

  render() {
    return (
      <View style={styles.color}>
        <Text>Login</Text>
      </View>
    );
  }
}

export default LoginScreen;
