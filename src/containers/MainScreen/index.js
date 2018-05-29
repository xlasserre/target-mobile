import React from 'react';
import { View, Text } from 'react-native';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    console.log('this is to avoid useless-constructor eslint rule. Ill remove it later');
  }

  render() {
    return (
      <View>
        <Text>
          Main
        </Text>
      </View>
    );
  }
}

export default MainScreen;
