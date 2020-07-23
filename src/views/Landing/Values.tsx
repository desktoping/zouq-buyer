import { Grid, Icon, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { ReactComponent as LogoDark } from '../../assets/logo-dark.svg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '0 5%',
      margin: '40px auto',
      width: '80%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },

    itemContainer: {
      minHeight: 180,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      margin: '40px auto',

      '& h6': {
        fontWeight: 700,
        fontSize: '1.35rem',
      },

      '& p': {
        marginTop: 20,
        fontSize: '0.85rem',
      },
    },

    logo: {
      height: 40,
      width: '20%',
    },
  })
);

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <div className={classes.itemContainer}>
            <Icon className={classes.logo}>
              <LogoDark />
            </Icon>
            <Typography component="h6" variant="h6">
              Real Products
            </Typography>
            <Typography component="p" variant="caption">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              architecto iste odit culpa quis ullam illo, omnis voluptas vel,
              voluptate voluptatem quae iusto repellendus blanditiis at
              consectetur provident voluptatibus. Architecto.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.itemContainer}>
            <Icon className={classes.logo}>
              <LogoDark />
            </Icon>
            <Typography component="h6" variant="h6">
              Real People
            </Typography>
            <Typography component="p" variant="caption">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              architecto iste odit culpa quis ullam illo, omnis voluptas vel,
              voluptate voluptatem quae iusto repellendus blanditiis at
              consectetur provident voluptatibus. Architecto.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className={classes.itemContainer}>
            <Icon className={classes.logo}>
              <LogoDark />
            </Icon>
            <Typography component="h6" variant="h6">
              Real-time Shopping
            </Typography>
            <Typography component="p" variant="caption">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              architecto iste odit culpa quis ullam illo, omnis voluptas vel,
              voluptate voluptatem quae iusto repellendus blanditiis at
              consectetur provident voluptatibus. Architecto.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
