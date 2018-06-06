import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import { connect } from 'react-redux';
import { func, object } from 'prop-types';

import styles from './styles';
import LoginForm from '../../components/LoginForm';
import { login } from '../../actions/userActions';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.signIn = this.signIn.bind(this);
    this.navigateToSignup = this.navigateToSignup.bind(this);
  }

  signIn = (userData) => {
    const user = {
      user: userData.toJS()
    };
    return this.props.loginUser(user);
  }

  navigateToSignup() {
    this.props.navigator.push({
      screen: 'targetmobile.SignUpScreen'
    });
  }

  render() {
    return (
      <KeyboardAwareView animated>
        <View style={styles.screen}>
          <ImageBackground
            style={styles.backgroundImage}
            source={require('../../assets/images/groupTop.png')}
          >
            <View>
              <Text style={styles.appTitle}>TARGET MVD</Text>
            </View>
          </ImageBackground>
          <View style={styles.formView}>
            <View style={styles.loginView}>
              <LoginForm signIn={this.signIn} />
              <Text style={styles.forgotPwd}>
                Forgot your password?
              </Text>
            </View>
            <View style={styles.signUpAndFbView}>
              <Text style={styles.connectFB}>
                CONNECT WITH FACEBOOK
              </Text>
              <TouchableOpacity style={styles.signUp} onPress={this.navigateToSignup}>
                <Text style={styles.signUpText}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareView>
    );
  }
}

LoginScreen.propTypes = {
  loginUser: func.isRequired,
  navigator: object.isRequired
};

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(login(user))
});

export default connect(null, mapDispatchToProps)(LoginScreen);
