import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { object } from 'prop-types';

import navigatorStyles from '../../components/common/Navigator/styles';
import styles from './styles';

class MainScreen extends React.Component {
  static navigatorStyle = navigatorStyles;

  constructor(props) {
    super(props);
    props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.type == 'NavBarButtonPress') {
      if (event.id == 'profile') {
        this.props.navigator.push({
          screen: 'targetmobile.ProfileScreen',
          title: 'Profile',
          backButtonTitle: ''
        });
      }
      if (event.id == 'chat') {
        // do nothing for now
      }
    }
  }

  render() {
    return (
      <View style={styles.screen}>
        <View style={styles.mapView}>
          Map
        </View>
        <View style={styles.createTargetView}>
          <Image source={require('../../assets/images/targetIcon.png')} />
          <TouchableOpacity>
            <Text style={styles.newTarget}>
              CREATE NEW TARGET
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

MainScreen.propTypes = {
  navigator: object
};

export default MainScreen;
