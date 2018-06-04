import { StyleSheet } from 'react-native';

import { regularFontSize, black } from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  label: {
    fontSize: regularFontSize,
    alignSelf: 'center'
  },

  inputBox: {
    borderColor: black,
    borderWidth: 1,
    borderStyle: 'solid',
    height: 37,
    margin: 10,
    width: 188,
    alignSelf: 'center'
  },

  pickerStyle: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: 'white',
    color: 'black',
  }
});

export default styles;
