import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles';
import LoginForm from '../../components/LoginForm';
import { login } from '../../actions/userActions';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.signIn = this.signIn.bind(this);
  }

  signIn = (userData) => {
    const user = {
      user: userData.toJS()
    };
    console.log('user submitting form: ', user);
    return this.props.loginUser(user);
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
            <LoginForm signIn={this.signIn} />
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

LoginScreen.propTypes = {
  loginUser: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  loginUser: (user) => {
    return dispatch(login(user));
  }
});

export default connect(null, mapDispatchToProps)(LoginScreen);
