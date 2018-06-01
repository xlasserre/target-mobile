import React from 'react';
import { View, Text } from 'react-native';
import { reduxForm, Field } from 'redux-form/immutable';
import { func, string, bool } from 'prop-types';

import CustomButton from '../../components/common/CustomButton';
import CustomInput from '../../components/common/CustomInput';
import { validations, login } from '../../utils/constraints';
import { black } from '../../constants/styleConstants';
import styles from './styles';

const LoginForm = ({
  handleSubmit, error, submitting, signIn
}) => (
  <View behavior="padding" enabled>
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
    <CustomButton
      title="SIGN IN" color={black}
      onPress={handleSubmit(signIn)} disabled={submitting}
    />
    {error && <Text style={styles.loginError}>{error}</Text>}
  </View>
);

LoginForm.propTypes = {
  handleSubmit: func.isRequired,
  signIn: func.isRequired,
  error: string,
  submitting: bool
};

export default reduxForm({
  form: 'logIn',
  validate: validations(login)
})(LoginForm);
