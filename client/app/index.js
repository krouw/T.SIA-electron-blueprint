import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux'
import routes from './routes';
import configureStore from './store/configureStore';

import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/auth'
import setAuthorizacionToken from './utils/setAuthorizacionToken'


import styles from "./app.global.css";

const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store)

if(localStorage.jwToken){
  setAuthorizacionToken(localStorage.jwToken)
  const user = jwtDecode(localStorage.jwToken);
  store.dispatch(setCurrentUser(user.admin));
}

render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
