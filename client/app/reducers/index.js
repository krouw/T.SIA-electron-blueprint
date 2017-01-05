// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import flashMessages from './flashMessages'

const rootReducer = combineReducers({
  flashMessages,
  routing
});

export default rootReducer;
