import { StyleSheet } from 'react-native';

import { regularFontSize } from '../../../constants/styleConstants';

const styles = StyleSheet.create({

  buttonContainer: {
    alignItems: 'center'
  },

  button: {
    height: 37,
    width: 114,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: regularFontSize
  }

});

export default styles;
