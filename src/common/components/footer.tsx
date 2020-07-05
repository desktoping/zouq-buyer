import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, makeStyles, Typography, Hidden } from '@material-ui/core';
import {
  YouTube as YTIcon,
  Facebook as FBIcon,
  Instagram as InsIcon,
} from '@material-ui/icons';

const useStyle = makeStyles({
  line: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0px',
  },
  divider: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 30,
    '& > div': { width: '50%', height: 2, backgroundColor: '#DADADA' },
  },
  socialIcon: {
    padding: '0 10px',
  },
  links: {
    padding: '0 10px',
    color: '#000',
  },
});

const FooterComponent = () => {
  const classes = useStyle();

  return (
    <Grid container>
      <div className={classes.divider}>
        <div />
      </div>
      <Grid item xs={12} className={classes.line}>
        <FBIcon fontSize="large" className={classes.socialIcon} />
        <InsIcon fontSize="large" className={classes.socialIcon} />
        <YTIcon fontSize="large" className={classes.socialIcon} />
      </Grid>
      <Hidden smDown>
        <Grid item xs={12} className={classes.line}>
          <Typography component="p">
            &#169; {new Date().getFullYear()} Zouq. All Rights Reserved.
          </Typography>
          <Link to="/terms" className={classes.links}>
            <Typography component="p">Terms &amp; Conditions</Typography>
          </Link>
          <Link to="/privacy" className={classes.links}>
            <Typography component="p">Privacy Policy</Typography>
          </Link>
          <Link to="/cookie" className={classes.links}>
            <Typography component="p">Cookie Policy</Typography>
          </Link>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        <Grid item xs={12} className={classes.line}>
          <Typography component="p">
            &#169; {new Date().getFullYear()} Zouq. All Rights Reserved.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          alignItems="center"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Link to="/terms" className={classes.links}>
            <Typography component="p">Terms &amp; Conditions</Typography>
          </Link>
          <Link to="/privacy" className={classes.links}>
            <Typography component="p">Privacy Policy</Typography>
          </Link>
          <Link to="/cookie" className={classes.links}>
            <Typography component="p">Cookie Policy</Typography>
          </Link>
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default FooterComponent;
