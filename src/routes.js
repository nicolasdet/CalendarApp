import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomeCalendar from './containers/Landing/Landing';
import NoMatch from './NoMatch';

function GetRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={HomeCalendar} />
      <Route component={NoMatch} />
    </Switch>
  );
}

export { GetRoutes };
