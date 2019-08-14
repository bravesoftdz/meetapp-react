import React from 'react';
import { Router, Switch } from 'react-router-dom';
import Signin from 'pages/auth/Signin';
import Signup from 'pages/auth/Signup';
import Meetups from 'pages/meetups';

import history from 'services/history';
import Route from './Route';

const AllRoutes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route exact path="/cadastre-se" component={Signup} />
      <Route isPrivate path="/meus-meetups" component={Meetups} />
    </Switch>
  </Router>
);

export default AllRoutes;
