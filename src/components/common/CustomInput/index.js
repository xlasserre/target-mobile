import React from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const CustomInput = ({ inputLabel, inputType, placeholder }) => {
  const uppercaseLabel = inputLabel.toUpperCase();
  let keyboardType;

  switch (inputType) {
    case 'email':
      keyboardType = 'email-address';
      break;

    default:
      keyboardType = 'default';
      break;
  }

  return (
    <View style={styles.inputView}>
      <Text style={styles.inputLabel}>
        {uppercaseLabel}
      </Text>
      <View>
        <TextInput
          keyboardType={keyboardType}
          placeholder={placeholder}
          style={styles.inputBox}
        />
      </View>
    </View>
  );
};

CustomInput.propTypes = {
  inputLabel: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  placeholder: PropTypes.string
};

export default CustomInput;
