import { colors, Link, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Facebook, Instagram, YouTube } from '@material-ui/icons';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 150,
      margin: '20px auto',
    },

    socialLinks: {
      width: 150,
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 20,
      '& a': {
        color: colors.grey['A700'],
        cursor: 'pointer',
      },
    },

    claims: {
      color: colors.grey[500],
      [theme.breakpoints.down('md')]: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      },
      '& a': {
        color: 'inherit',
        padding: '0 10px',
        cursor: 'pointer',
        // textAlign: 'center',
      },
    },
  })
);

export default () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.socialLinks}>
        <Link>
          <Facebook />
        </Link>
        <Link>
          <Instagram />
        </Link>
        <Link>
          <YouTube />
        </Link>
      </div>
      <Typography component="div" variant="body1" className={classes.claims}>
        <span>
          &copy; {new Date().getFullYear()} Zouq. All rights reserved.
        </span>
        <Link>Terms and Conditions</Link>
        <Link>Privacy Policy</Link>
        <Link>Cookie Policy</Link>
      </Typography>
    </div>
  );
};
