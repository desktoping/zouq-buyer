import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyle = makeStyles({
  root: {
    padding: '30px 10px',
  },
});

const FooterComponent = () => {
  const classes = useStyle();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Typography component="h3" variant="h3">
        This space is growing...
      </Typography>
    </Grid>
  );
};

export default FooterComponent;
