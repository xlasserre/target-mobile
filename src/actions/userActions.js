import { SubmissionError } from 'redux-form';

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
    userApi.login(user)
      .then((response) => {
        console.log('response: ', response);
        return authUtils.saveUserInStorage(response.user.id);
      }).then(() => dispatch(loginSuccess()))
      .catch((error) => {
        throw new SubmissionError({
          _error: error,
        });
      });
  };
};
