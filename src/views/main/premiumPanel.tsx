import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { PremiumCardComponent } from '../../common';
import { generatePremiumStreamData } from '../../common/data/stream';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  container: {
    width: '80%',
    [theme.breakpoints.down('md')]: {
      width: '95%',
    },
    margin: 'auto',
    marginTop: 20,
  },
  title: {
    paddingTop: 15,
    paddingBottom: 15,
  },
}));

interface IProps {}

const LivePanelComponent = ({ history }: RouteComponentProps) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography gutterBottom variant="h5" className={classes.title}>
        Premium Sellers
      </Typography>

      <Grid container spacing={3}>
        {generatePremiumStreamData(4).map((data: any, i: number) => (
          <Grid item xs={12} md={6} key={i}>
            <PremiumCardComponent
              {...data}
              clickHandler={() => history.push(`/live/${data.id}`)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default connect()(withRouter(LivePanelComponent));
