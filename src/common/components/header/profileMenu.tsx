import { Divider, IconButton, makeStyles, Typography } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React, { useState } from 'react';
import Popover from 'react-popover';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { doLogout } from '../../../store/actions';

const useStyle = makeStyles({
  popoverRoot: {
    zIndex: 3,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    boxShadow: '-10px 10px 21px -9px rgba(0, 0, 0, 0.6)',
  },
  popoverPinContainer: {
    '& .Popover-tip': {
      fill: '#fff',
    },
  },
  links: {
    color: '#000',
    outline: 'none',
    textTransform: 'none',
    textDecoration: 'none',
  },
  spacing: {
    marginBottom: 10,
  },
});

interface IProps {
  menuClassName: string;
  dispatchDoLogout: () => void;
}

const ProfileMenuItemComponent = ({
  menuClassName,
  dispatchDoLogout,
}: IProps) => {
  const classes = useStyle();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Popover
      className={classes.popoverPinContainer}
      isOpen={open}
      preferPlace="below"
      place="below"
      onOuterAction={() => setOpen(false)}
      body={[
        <div className={classes.popoverRoot}>
          <Typography
            className={classes.spacing}
            component="div"
            variant="body1"
          >
            <Link className={classes.links} to="/profile">
              Profile
            </Link>
          </Typography>
          <Divider />
          <Typography
            className={classes.spacing}
            component="div"
            variant="body1"
          >
            <Link className={classes.links} to="/profile">
              Edit Profile
            </Link>
          </Typography>
          <Typography
            className={classes.spacing}
            component="div"
            variant="body1"
          >
            <Link className={classes.links} to="/account">
              Manage Account
            </Link>
          </Typography>
          <Divider />
          <Typography
            className={classes.spacing}
            component="div"
            variant="body1"
          >
            <Link className={classes.links} to="" onClick={dispatchDoLogout}>
              Logout
            </Link>
          </Typography>
        </div>,
      ]}
    >
      <IconButton
        onClick={() => setOpen(true)}
        className={menuClassName}
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
    </Popover>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  dispatchDoLogout: () => dispatch({ type: doLogout }),
});

export default connect(null, mapDispatchToProps)(ProfileMenuItemComponent);
