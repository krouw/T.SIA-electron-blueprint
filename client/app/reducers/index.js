// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import Toasts from './Toasts'
import auth from './auth'

const rootReducer = combineReducers({
  Toasts,
  routing,
  auth
});

export default rootReducer;
