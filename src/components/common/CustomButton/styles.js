import { StyleSheet } from 'react-native';

import { regularFontSize, white } from '../../../constants/styleConstants';

const styles = StyleSheet.create({
  button: {
    height: 37,
    width: 114,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },

  buttonText: {
    color: white,
    fontSize: regularFontSize
  }
});

export default styles;
