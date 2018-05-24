import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import { red, black } from '../../../constants/styleConstants';
import styles from './styles';

const CustomButton = ({ type, title, onPress }) => {
  const color = type === 'danger' ? red : black;

  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, { backgroundColor: color }]}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

CustomButton.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default CustomButton;
