import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';

import CustomButton from '../../components/common/CustomButton';
import CustomInput from '../../components/common/CustomInput';
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
      <View style={styles.screen}>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('../../assets/images/group.png')}
        >
          <View style={styles.titleView}>
            <Text style={styles.appTitle}>TARGET MVD</Text>
          </View>
        </ImageBackground>
        <View style={styles.formView}>
          <View style={styles.loginView}>
            <CustomInput inputLabel="Email" inputType="email" />
            <CustomInput inputLabel="Password" inputType="password" />
            <CustomButton title="SIGN IN" onPress={this.login} type="default" />
            <Text style={styles.forgotPwd}>
              Forgot your password?
            </Text>
          </View>
          <View style={styles.signUpAndFbView}>
            <Text style={styles.connectFB}>
              CONNECT WITH FACEBOOK
            </Text>
            <TouchableOpacity style={styles.signUp}>
              <Text style={styles.signUpText}>SIGN UP</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
