import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LandingPage  from '../clothes/LandingPage';
import Clothes  from '../clothes/Clothes';

const Routes = () => {
  return (
    <Switch>
      <Route path="/clothes" component={Clothes} />
      <Route path="/" component={LandingPage} />
    </Switch>
  );
};

export default Routes;
