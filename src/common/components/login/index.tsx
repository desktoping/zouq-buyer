import {
  Button,
  createStyles,
  makeStyles,
  Modal,
  Theme,
  CircularProgress,
} from '@material-ui/core';
import { get } from 'lodash';
import React, { useEffect, useState } from 'react';
import RICIBs from 'react-individual-character-input-boxes';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo-dark.svg';
import { closeLogin, doLogin } from '../../../store/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 300,
      [theme.breakpoints.up('md')]: {
        width: 400,
      },
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(3, 4, 3),
      flexDirection: 'column',
      borderRadius: 10,
      display: 'flex',
      alignItems: 'center',
      '&:focus': {
        outline: 'none',
      },
    },
    logo: {
      width: '20%',
    },
    header: {
      margin: 0,
    },
    text: {
      color: '#ABABAB',
      textAlign: 'center',
    },
    link: {
      color: '#3CA7FF',
      textDecoration: 'none',
    },
    loginBtn: {
      backgroundImage: 'linear-gradient(to top left, #415ce0, #00b8ff)',
      marginTop: 40,
      marginBottom: 10,
      width: '40%',
      color: '#FFF',
    },
    error: {
      color: '#E07171',
    },
    inputVerification: {
      '& div': {
        marginTop: 0,
        width: '100%',
      },
    },
  })
);

const getModalStyle = () => {
  // Center the modal
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

interface IProps {
  show: boolean;
  dispatchCloseLogin: () => void;
  dispatchDoLogin: (credentials: any) => void;
}

const LoginModalComponent = ({
  show,
  dispatchCloseLogin,
  dispatchDoLogin,
}: IProps) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [phone, setPhone] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [isVerificationMode, setIsVerficationMode] = useState<boolean>(false);
  const [isVerifyingCodeToApi, setIsVerifyingCodeToApi] = useState<boolean>(
    false
  );

  const handleClickLogin = () => {
    setError(phone.length <= 0 ? 'Enter your number to continue' : '');
    setIsVerficationMode(phone.length > 0);
  };

  useEffect(() => {
    return () => setIsVerficationMode(false);
  }, []);

  useEffect(() => {
    // Do verification call
    setIsVerifyingCodeToApi(verificationCode.length === 4);

    if (verificationCode.length === 4) {
      setTimeout(() => {
        setIsVerifyingCodeToApi(false);
        setIsVerficationMode(false);
        dispatchCloseLogin();
        dispatchDoLogin({ username: phone });
        setPhone('');
      }, 3000);
    }
  }, [verificationCode]);

  console.log(verificationCode);

  return (
    <Modal open={show} onClose={dispatchCloseLogin}>
      <div style={modalStyle} className={classes.paper}>
        <img alt="Zouq Logo" src={logo} className={classes.logo} />
        {isVerifyingCodeToApi ? (
          <CircularProgress />
        ) : !isVerificationMode ? (
          <>
            <h2 className={classes.header}>Login</h2>
            <p className={classes.text}>
              Enter your mobile number to login to your account
            </p>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <PhoneInput
                value={phone}
                onChange={setPhone}
                onlyCountries={['ph']}
                country="ph"
                countryCodeEditable={false}
              />
            </div>
            {error && <p className={classes.error}>{error}</p>}
            <Button className={classes.loginBtn} onClick={handleClickLogin}>
              Login
            </Button>
            <div className={classes.text}>
              Don&quot;t have an account?{' '}
              <Link className={classes.link} to="/register">
                Create Account Now
              </Link>
            </div>
          </>
        ) : (
          <>
            <h2 className={classes.header}>Verification</h2>
            <p className={classes.text}>
              We sent 4-digit verification code to your number ending{' '}
              {phone.substr(phone.length - 4)}
            </p>
            <div className={classes.inputVerification}>
              <RICIBs
                amount={4}
                autoFocus
                handleOutputString={setVerificationCode}
                inputRegExp={/^[0-9]$/}
              />
            </div>
            <div className={classes.text}>
              Need new code?{' '}
              <Link
                className={classes.link}
                onClick={(e) => {
                  e.preventDefault();
                }}
                to="#"
              >
                Resend now
              </Link>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
};

const mapStateToProps = (state: any) => ({
  show: get(state, 'auth.login.show', false),
});

const mapDispatchToProps = (dispatch: any) => ({
  dispatchCloseLogin: () => dispatch({ type: closeLogin }),
  dispatchDoLogin: (credentials: any) =>
    dispatch({ type: doLogin, credentials }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModalComponent);
