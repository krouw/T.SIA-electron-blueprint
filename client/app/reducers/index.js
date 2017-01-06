// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import Toasts from './Toasts'

const rootReducer = combineReducers({
  Toasts,
  routing
});

export default rootReducer;
