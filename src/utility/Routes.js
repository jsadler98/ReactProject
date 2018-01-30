import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './pages/landingPage';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
    </Switch>
  );
};

export default Routes;
