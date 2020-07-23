import { createStyles, makeStyles, Theme } from '@material-ui/core';
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from 'react-router-dom';
import {
  Footer,
  Header,
  VerificationModal,
  ReadyModal,
} from '../common/components';
import KYCForm from './Kyc';
import CapturePhoto from './Kyc/CapturePhoto';
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
            <Route exact path="/kyc" component={KYCForm} />
            <Route exact path="/kyc/capture" component={CapturePhoto} />
          </Switch>
        </Switch>
        <Footer />
        <VerificationModal />
        <ReadyModal />
      </Router>
    </div>
  );
};
