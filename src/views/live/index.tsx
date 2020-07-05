/**
 * Live stream page
 */
import { Divider, Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { BasicCardComponent, PremiumProductComponent } from '../../common';
import { generateProductData } from '../../common/data/product';
import { generateStreamData } from '../../common/data/stream';
import InteractiveComponent from './interactive';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '20px 40px',
    [theme.breakpoints.down('md')]: {
      padding: '10px 2px 2px 2px',
    },
    marginTop: 0,
  },
}));

const LivePageComponent = ({ history }: RouteComponentProps) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <InteractiveComponent />
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Divider style={{ margin: '15px 0' }} />
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography component="div" variant="body1">
                Current Live Stream
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography component="div" variant="h5">
                Featured Products
              </Typography>
            </Grid>
            {generateProductData(2).map((data: any, i: number) => (
              <Grid item xs={12} key={i}>
                <PremiumProductComponent {...data} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography component="div" variant="h5" style={{ marginBottom: 20 }}>
            Related Live Streams
          </Typography>
          <Grid container spacing={3}>
            {generateStreamData(4).map((data: any, i: number) => (
              <Grid item xs={12} key={i}>
                <BasicCardComponent
                  {...data}
                  clickHandler={() => history.push(`/live/${data.id}`)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withRouter(LivePageComponent);
