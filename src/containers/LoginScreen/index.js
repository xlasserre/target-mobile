import React from 'react';
import {
  View,
  Text,
} from 'react-native';

import styles from './styles';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
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
