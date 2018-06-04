import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { string, func, bool, number } from 'prop-types';

import styles from './styles';

const CustomButton = ({
  color, title, onPress, disabled, customStyle
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.button, { backgroundColor: color }, customStyle]}
    disabled={disabled}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

CustomButton.defaultProps = {
  disabled: false
};

CustomButton.propTypes = {
  color: string,
  title: string.isRequired,
  onPress: func.isRequired,
  disabled: bool,
  customStyle: number
};

export default CustomButton;
