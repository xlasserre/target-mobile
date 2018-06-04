import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view';
import { object, func } from 'prop-types';

import SignUpForm from '../../components/SignUpForm';
import { signUp } from '../../actions/userActions';
import styles from './styles';

class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.signUp = this.signUp.bind(this);
    this.navigateToLogin = this.navigateToLogin.bind(this);
  }

  signUp(userData) {
    const jsUser = userData.toJS();
    jsUser.gender = jsUser.gender.toLowerCase();
    const user = {
      user: jsUser
    };
    this.props.userSignUp(user);
  }

  navigateToLogin() {
    this.props.navigator.push({
      screen: 'targetmobile.LoginScreen',
      backButtonHidden: true
    });
  }

  render() {
    return (
      <KeyboardAwareView animated>
        <ScrollView>
          <ImageBackground source={require('../../assets/images/groupTop.png')} style={styles.backImage}>
            <View style={styles.content}>
              <Text style={styles.title}>TARGET MVD</Text>
              <View>
                <SignUpForm signUp={this.signUp} />
              </View>
              <TouchableOpacity style={styles.signUp} onPress={this.navigateToLogin}>
                <Text style={styles.signUpText}>SIGN IN</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </ScrollView>
      </KeyboardAwareView>
    );
  }
}

SignUpScreen.propTypes = {
  navigator: object.isRequired,
  userSignUp: func.isRequired
};

const mapDispatchToProps = dispatch => ({
  userSignUp: user => dispatch(signUp(user)),
});

export default connect(null, mapDispatchToProps)(SignUpScreen);
