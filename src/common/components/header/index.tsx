import { AppBar, Button, Hidden, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { ReactComponent as LogoDark } from '../../../assets/logo-dark.svg';
import { COLOR_BLUE, COLOR_GRAY } from '../../typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      '& header': {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        padding: '0 5%',
        color: COLOR_GRAY,
      },
    },

    logo: {
      height: 60,
      width: 100,
      marginRight: '10%',
      cursor: 'pointer',
    },

    grow: {
      flexGrow: 1,
    },

    right: {
      display: 'flex',
      justifyContent: 'flex-end',
    },

    title: {
      padding: '0 20px',
      fontWeight: 600,
      fontSize: '1rem',
    },

    loginBtn: {
      border: `1px solid ${COLOR_BLUE}`,
      borderRadius: 10,
      padding: '5px 20px',
      textTransform: 'capitalize',
    },
  })
);

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <LogoDark className={classes.logo} />
        <Hidden smDown>
          <Typography variant="h6" className={classes.title}>
            Our Mission
          </Typography>
          <Typography variant="h6" className={classes.title}>
            FAQ
          </Typography>
        </Hidden>
        <div className={`${classes.grow} ${classes.right}`}>
          <Button color="inherit" className={classes.loginBtn}>
            Login
          </Button>
        </div>
      </AppBar>
    </div>
  );
};
