import { SubmissionError } from 'redux-form/immutable';

import userApi from '../api/userApi';
import authUtils from '../utils/authUtils';
import * as types from './actionTypes';

export const loginSuccess = () => {
  return {
    type: types.LOGIN_SUCCESS
  };
};

export const login = (user) => {
  return (dispatch) => {
    return userApi.login(user)
      .then((response) => {
        return authUtils.saveUserInStorage(response.data.id.toString());
      }).then(() => dispatch(loginSuccess()))
      .catch((err) => {
        const { errors } = err;

        if (errors && errors.length === 1) {
          throw new SubmissionError({
            _error: errors[0],
          });
        } else {
          throw new SubmissionError({
            _error: 'Error logging in',
          });
        }
      });
  };
};
