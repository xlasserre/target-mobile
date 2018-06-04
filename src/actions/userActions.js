import formUtils from '../utils/formUtils';
import userApi from '../api/userApi';
import authUtils from '../utils/authUtils';
import * as types from './actionTypes';

export const loginSuccess = () => ({
  type: types.LOGIN_SUCCESS
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS
});

export const login = user => dispatch =>
  userApi.login(user)
    .then(response => authUtils.saveUserInStorage(response.data.id.toString()))
    .then(() => dispatch(loginSuccess()))
    .catch(({ errors }) => {
      if (errors && errors.length === 1) {
        formUtils.throwGeneralSubmissionError(errors[0]);
      } else {
        formUtils.throwGeneralSubmissionError('Error logging in');
      }
    });

export const logout = () => dispatch =>
  authUtils.removeUserFromStorage()
    .then(() => {
      dispatch(logoutSuccess());
    });
