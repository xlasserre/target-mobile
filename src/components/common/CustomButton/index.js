import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import { red, black } from '../../../constants/styleConstants';
import styles from './styles';

const CustomButton = ({
  type, title, onPress, disabled
}) => {
  const color = type === 'danger' ? red : black;

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
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default CustomButton;
