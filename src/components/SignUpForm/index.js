import React from 'react';
import { View, Text } from 'react-native';
import { reduxForm, Field } from 'redux-form/immutable';
import { func, string, bool } from 'prop-types';

import CustomButton from '../common/CustomButton';
import CustomInput from '../common/CustomInput';
import CustomPicker from '../common/CustomPicker';
import { black } from '../../constants/styleConstants';
import { validations, signUp } from '../../utils/constraints';
import styles from './styles';

const pickerItems = ['Female', 'Male', 'Other'];

const SignUpForm = ({
  handleSubmit, error, submitting, signUp
}) => (
  <View style={styles.form}>
    <Field
      name="username"
      inputLabel="Username"
      inputType="text"
      component={CustomInput}
    />
    <Field
      name="email"
      inputLabel="Email"
      inputType="email"
      component={CustomInput}
    />
    <Field
      name="password"
      inputLabel="Password"
      inputType="password"
      component={CustomInput}
    />
    <Field
      name="confirmPassword"
      inputLabel="Confirm Password"
      inputType="password"
      component={CustomInput}
    />
    <Field
      name="gender"
      pickerLabel="Gender"
      pickerItems={pickerItems}
      component={CustomPicker}
    />
    { error && <Text>{error}</Text> }
    <CustomButton
      title="SIGN UP"
      color={black}
      onPress={handleSubmit(signUp)}
      disabled={submitting}
      customStyle={styles.signUpButton}
    />
  </View>
);

SignUpForm.propTypes = {
  handleSubmit: func.isRequired,
  error: string,
  submitting: bool.isRequired,
  signUp: func.isRequired
};

export default reduxForm({
  form: 'signUp',
  validate: validations(signUp)
})(SignUpForm);
