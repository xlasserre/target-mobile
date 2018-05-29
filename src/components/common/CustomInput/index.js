import React from 'react';
import { View, Text, TextInput } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const CustomInput = ({
  input: { onChange }, inputLabel, inputType, placeholder,
  meta: { touched, error }
}) => {
  const uppercaseLabel = inputLabel.toUpperCase();
  let keyboardType = 'default';
  let secureText = false;

  switch (inputType) {
    case 'email':
      keyboardType = 'email-address';
      break;

    case 'password':
      secureText = true;
      break;

    default:
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
          onChangeText={onChange}
          secureTextEntry={secureText}
          autoCapitalize="none"
        />
        {touched && (error && <Text style={styles.inputError}>{error}</Text>) }
      </View>
    </View>
  );
};

CustomInput.propTypes = {
  inputLabel: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  placeholder: PropTypes.string,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
};

export default CustomInput;
