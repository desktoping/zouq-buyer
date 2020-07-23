import { Modal, Typography, colors } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { get } from 'lodash';
import React, { useState, useEffect } from 'react';
import VerificationCodeInput from 'react-otp-input';
import { connect } from 'react-redux';
import { closeVerificationModal } from '../../../store/actions';
import { ReactComponent as LogoDark } from '../../../assets/logo-dark.svg';
import { withRouter, RouteComponentProps } from 'react-router-dom';

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

      '& input': {
        width: '40px !important',
        height: 40,
        margin: '0 10px',
        borderRadius: 5,
      },
    },

    logo: {
      height: 60,
      width: 100,
    },

    header: {
      fontSize: '1.875rem',
      fontWeight: 700,
    },

    message: {
      fontSize: 14,
      color: colors.grey[600],
      marginBottom: 20,
      textAlign: 'center',
    },

    inputContainer: {
      margin: '0 auto 20px',
    },
  })
);

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
}

const VerificationModal = ({
  isOpen,
  handleClose,
  history,
}: RouteComponentProps & IProps) => {
  const classes = useStyles();
  const [code, setCode] = useState('');

  useEffect(() => {
    if (get(code, 'length', 0) === 4) {
      handleClose();
      history.push('/kyc');
    }
  }, [code]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => () => setCode(''), []);

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <div className={classes.paper}>
        <div className={classes.container}>
          <LogoDark className={classes.logo} />
          <Typography component="h6" variant="h6" className={classes.header}>
            Verification
          </Typography>
          <Typography
            component="p"
            variant="caption"
            className={classes.message}
          >
            We sent 4-digit verification code to your number ending 8666
          </Typography>
          <VerificationCodeInput
            value={code}
            onChange={setCode}
            numInputs={4}
            shouldAutoFocus
            containerStyle={classes.inputContainer}
          />
          <Typography
            component="p"
            variant="caption"
            className={classes.message}
          >
            Need new code?{' '}
            <span style={{ color: colors.red[500], fontWeight: 700 }}>
              Resend Now
            </span>
          </Typography>
        </div>
      </div>
    </Modal>
  );
};

const mapStateToProps = (state: any) => ({
  isOpen: get(state, 'modals.verification.open', false),
});

const mapDispatchToProps = (dispatch: any) => ({
  handleClose: () => dispatch({ type: closeVerificationModal }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(VerificationModal));
