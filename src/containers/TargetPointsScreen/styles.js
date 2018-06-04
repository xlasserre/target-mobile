import { StyleSheet } from 'react-native';

import { yellow } from '../../constants/styleConstants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  mapView: {
    flex: 1,
    backgroundColor: yellow
  },

  createTargetView: {
    alignItems: 'center',
    height: 100,
    justifyContent: 'center'
  },

  newTarget: {
    paddingTop: 5,
    fontWeight: 'bold'
  }
});

export default styles;
