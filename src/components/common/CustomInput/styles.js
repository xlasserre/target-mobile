import { StyleSheet } from 'react-native';

import { black } from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  inputView: {
    alignItems: 'center',
    padding: 5
  },

  inputLabel: {
    fontSize: 12,
    paddingBottom: 3
  },

  inputBox: {
    borderColor: black,
    borderWidth: 1,
    borderStyle: 'solid',
    width: 188,
    height: 37,
    margin: 5
  }
});

export default styles;
