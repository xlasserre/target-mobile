import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';

import users from './usersReducer';

const rootReducer = combineReducers({
  users,
  form
});
console.log('rootReducer: ', rootReducer);
export default rootReducer;
