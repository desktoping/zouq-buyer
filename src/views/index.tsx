import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  FooterComponent,
  HeaderComponent,
  NotFoundComponent,
} from '../common/components';
import MainPage from './main';

export default () => (
  <Router>
    <HeaderComponent />
    <Switch>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="*" exact={true} component={NotFoundComponent} />
      </Switch>
    </Switch>
    <FooterComponent />
  </Router>
);
