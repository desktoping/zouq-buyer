import { Modal, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ReactComponent as LogoDark } from '../../../assets/logo-dark.svg';
import { closeReadyModal } from '../../../store/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      borderRadius: 10,
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #000',
      padding: theme.spacing(2, 4, 3),
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      width: '40%',
      [theme.breakpoints.down('md')]: {
        width: '90%',
      },
    },

    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '40px',
    },

    logo: {
      height: 60,
      width: 100,
    },

    header: {
      fontSize: '1.875rem',
      fontWeight: 700,
    },
  })
);

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
}

const ReadyModal = ({
  isOpen,
  handleClose,
  history,
}: RouteComponentProps & IProps) => {
  const classes = useStyles();

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <div className={classes.paper}>
        <div className={classes.container}>
          <LogoDark className={classes.logo} />
          <Typography component="h6" variant="h6" className={classes.header}>
            You're all set!
          </Typography>
          <Typography component="p" variant="body1">
            Start shopping safe.
          </Typography>
        </div>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state: any) => ({
  isOpen: get(state, 'modals.ready.open', false),
});

const mapDispatchToProps = (dispatch: any) => ({
  handleClose: () => dispatch({ type: closeReadyModal }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ReadyModal));
