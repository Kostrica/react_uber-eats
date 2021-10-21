import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import routes from './routes';
import RestaurantsListPage from '../pages/RestaurantsListPage/RestaurantsListPage';
import RestaurantPage from '../pages/RestaurantPage/RestaurantPage';

const AppRouter = () => (
  <Switch>
    <Route
      path={routes.HOME_PAGE}
      exact
      component={RestaurantsListPage}
    />
    <Route
      path={routes.RESTAURANT}
      exact
      component={RestaurantPage}
    />
    <Redirect from="/" to={routes.HOME_PAGE} />
  </Switch>
);

export default AppRouter;
