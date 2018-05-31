import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { string, func, bool } from 'prop-types';

import styles from './styles';

const CustomButton = ({
  color, title, onPress, disabled
}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, { backgroundColor: color }]}
        disabled={disabled}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

CustomButton.defaultProps = {
  disabled: false
};

CustomButton.propTypes = {
  color: string,
  title: string.isRequired,
  onPress: func.isRequired,
  disabled: bool
};

export default CustomButton;
