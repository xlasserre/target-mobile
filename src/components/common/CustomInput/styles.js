import { StyleSheet } from 'react-native';

import { black, red, regularFontSize } from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  inputView: {
    alignItems: 'center',
    padding: 5
  },

  inputLabel: {
    fontSize: regularFontSize,
    paddingBottom: 3
  },

  inputBox: {
    borderColor: black,
    borderWidth: 1,
    borderStyle: 'solid',
    width: 188,
    height: 37,
    margin: 5,
    alignSelf: 'center'
  },

  inputError: {
    color: red,
    fontSize: 10,
    paddingLeft: 5,
    alignSelf: 'center'
  }
});

export default styles;
