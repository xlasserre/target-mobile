import React from 'react';
import { View, Text } from 'react-native';
import { reduxForm, Field } from 'redux-form/immutable';
import { func, string, bool } from 'prop-types';

import CustomInput from '../common/CustomInput';
import CustomButton from '../common/CustomButton';
import { validations, editProfile } from '../../utils/constraints';
import { black } from '../../constants/styleConstants';
import styles from './styles';

const ProfileForm = ({
  handleSubmit, error, submitting, editProfile
}) => (
  <View>
    <Field
      name="username"
      inputLabel="Username"
      inputType="username"
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
    <CustomButton
      title="SAVE CHANGES"
      color={black}
      onPress={handleSubmit(editProfile)}
      disabled={submitting}
      customStyle={styles.changeButton}
    />
    { error && <Text>{error}</Text>}
  </View>
);

ProfileForm.propTypes = {
  handleSubmit: func.isRequired,
  editProfile: func.isRequired,
  error: string,
  submitting: bool
};

export default reduxForm({
  form: 'editProfile',
  validate: validations(editProfile)
})(ProfileForm);
