import { StyleSheet } from 'react-native';

import { black, regularFontSize } from '../../constants/styleConstants';

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    height: 600
  },

  backImage: {
    width: '100%',
    height: '40%'
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '10%'
  },

  signUp: {
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderTopColor: black,
    marginTop: 15,
    paddingTop: 15,
    width: 121
  },

  signUpText: {
    fontSize: regularFontSize
  }
});

export default styles;
