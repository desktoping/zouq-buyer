import { makeStyles } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import FeaturePanel from './featurePanel';
import LivePanel from './livePanel';
import PremiumPanel from './premiumPanel';
import CategoryPanel from './categoryPanel';

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
      <FeaturePanel />
      <LivePanel />
      <PremiumPanel />
      <CategoryPanel />
    </div>
  );
};

export default connect()(MainPageComponent);
