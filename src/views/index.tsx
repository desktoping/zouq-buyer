import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import {
  FooterComponent,
  HeaderComponent,
  NotFoundComponent,
} from '../common/components';
import LivePage from './live';
import MainPage from './main';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default () => (
  <Router>
    <ScrollToTop />
    <HeaderComponent />
    <Switch>
      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/live/:id">
          <LivePage />
        </Route>
        <Route path="*" exact={true} component={NotFoundComponent} />
      </Switch>
    </Switch>
    <FooterComponent />
  </Router>
);
