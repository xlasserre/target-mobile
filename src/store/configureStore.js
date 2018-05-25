import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';
import { login } from '../actions/userActions';

let middleware = [thunkMiddleware];

if (__DEV__) {
  middleware = [...middleware, logger];
}

export default function configureStore(initialState) {
  console.log('initialState: ', initialState.toJS());
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware),
  );

  store.dispatch(login({ user: { email: 'test@gmail.com', password: 'password' } }));

  return store;
}
