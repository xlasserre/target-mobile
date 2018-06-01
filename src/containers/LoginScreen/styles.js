import { StyleSheet } from 'react-native';

import { black, regularFontSize } from '../../constants/styleConstants';

const styles = StyleSheet.create({
  screen: {
    alignItems: 'center',
    flex: 1
  },

  backgroundImage: {
    alignItems: 'center',
    height: '40%',
    justifyContent: 'center',
    width: '100%'
  },

  backgroundImageInnerView: {
    flex: 1
  },

  formView: {
    flex: 2
  },

  appTitle: {
    fontSize: 20,
    fontWeight: '800'
  },

  loginView: {
    alignItems: 'center'
  },

  signUpAndFbView: {
    alignItems: 'center'
  },

  forgotPwd: {
    fontSize: regularFontSize,
    marginBottom: 10,
    marginTop: 10
  },

  connectFB: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 15
  },

  signUp: {
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: black,
    marginTop: 10,
    padding: 10,
    width: 121,
  },

  signUpText: {
    fontSize: regularFontSize
  }
});

export default styles;
