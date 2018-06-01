import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  screen: {
    alignItems: 'stretch',
    flex: 1,
    width: '100%'
  },

  topScreen: {
    flex: 1
  },

  bottomScreen: {
    flex: 1.5
  },

  backgroundImg: {
    width: '73%',
    height: '80%',
    marginLeft: 15,
    alignItems: 'flex-end'
  },

  innerImage: {
    top: '35%',
    right: '15%'
  },

  logOutButton: {
    marginTop: 20
  },

  logOutTxt: {
    alignSelf: 'center',
    fontWeight: 'bold'
  }
});

export default styles;
