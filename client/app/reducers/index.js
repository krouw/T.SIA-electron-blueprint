// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import Toasts from './Toasts'
import auth from './auth'
import Contador from './Contador'
import Dialog from './Dialog'

const rootReducer = combineReducers({
  Toasts,
  Contador,
  routing,
  auth,
  Dialog,
});

export default rootReducer;
