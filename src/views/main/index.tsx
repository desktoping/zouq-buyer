import { makeStyles } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { LoginModalComponent } from '../../common';
import CategoryPanel from './categoryPanel';
import FeaturePanel from './featurePanel';
import LivePanel from './livePanel';
import PremiumPanel from './premiumPanel';

const useStyles = makeStyles({
  root: {},
});

/**
 * @dev Controls how the main page is displayed
 */
const MainPageComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <LoginModalComponent />
      <FeaturePanel />
      <LivePanel />
      <PremiumPanel />
      <CategoryPanel />
    </div>
  );
};

export default connect()(MainPageComponent);
