import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, hashHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
//import configureStore from './store/configureStore';

import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';

import styles from "./app.global.css";

//const store = configureStore();

const store = createStore(
  (state = {}) => state,
  applyMiddleware(thunk)
)
//const history = syncHistoryWithStore(hashHistory, store);


render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
