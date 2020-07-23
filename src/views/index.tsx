import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import { Footer, Header } from '../common/components';
import Landing from './Landing';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 1440,
      margin: 'auto',
    },
  })
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};
