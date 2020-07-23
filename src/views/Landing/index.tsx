import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import Banner from './Banner';
import LiveNow from './Live';
import Partners from './Partners';
import Values from './Values';
import FinalCallToAction from './FinalCallToAction';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
  })
);

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Banner />
      <LiveNow />
      <Partners />
      <Values />
      <FinalCallToAction />
    </div>
  );
};
