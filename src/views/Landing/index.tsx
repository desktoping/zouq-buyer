import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import Banner from './Banner';
import FinalCallToAction from './FinalCallToAction';
import LiveNow from './Live';
import Partners from './Partners';
import Values from './Values';

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
