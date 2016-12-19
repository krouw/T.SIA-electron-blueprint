// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import Login from './containers/Login/Login';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="/home" component={HomePage} />
  </Route>
);
