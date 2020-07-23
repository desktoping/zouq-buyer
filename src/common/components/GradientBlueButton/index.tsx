import { Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: '#fff',
      padding: '10px 20px',
      background:
        'linear-gradient(90deg, rgba(166,255,250,1) 0%, rgba(54,159,224,1) 93%, rgba(0,174,255,1) 100%)',
    },
  })
);

export default ({ children, className, ...rest }: any) => {
  const classes = useStyles();
  return (
    <Button {...rest} className={`${classes.root} ${className}`}>
      {children}
    </Button>
  );
};
