/* eslint-disable no-undef */
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer';

let middleware = [thunk];

if (__DEV__) {
  middleware = [...middleware, logger];
}

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware),
  );
}
