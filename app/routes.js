// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Principal from './containers/Principal';
import Login from './containers/Login/Login';
import Home from './containers/Home';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login} />
    <Route path="/home" component={Principal}>
      <IndexRoute component={Home} />
    </Route>
  </Route>
);
