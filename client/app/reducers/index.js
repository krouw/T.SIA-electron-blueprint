// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import Toasts from './Toasts'
import auth from './auth'
import Contador from './Contador'

const rootReducer = combineReducers({
  Toasts,
  Contador,
  routing,
  auth,
});

export default rootReducer;
