import { Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { connect } from 'react-redux';
import { GradientBlueButton } from '../../common/components';
import { openVerificationModal } from '../../store/actions';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#d5d5d526',
      height: '20vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },

    bannerHeader: {
      fontSize: '1.875rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },

      lineHeight: 2.5,
      fontWeight: 700,
      margin: 0,
    },

    inputContainer: {
      width: '40%',
      display: 'flex',
      alignContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
      },

      '& .flag-dropdown': {
        height: 40,
      },

      '& .react-tel-input': {
        display: 'flex',
        width: '95%',
        [theme.breakpoints.down('sm')]: {
          width: '90%',
          margin: 'auto',
        },

        '& input.form-control': {
          height: 40,
          width: '100%',
        },
      },
    },
    createAccountBtn: {
      fontSize: 14,
      textTransform: 'capitalize',
      margin: '0 10px',
      height: 40,
      width: '35%',
      fontWeight: 700,
      [theme.breakpoints.down('sm')]: {
        width: '90%',
        margin: '10px auto',
      },
    },
  })
);

interface IProps {
  handleOpenVerification: () => void;
}

const FinalCallAction = ({ handleOpenVerification }: IProps) => {
  const classes = useStyles();
  const [phone, setPhone] = useState<string>('');

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.bannerHeader}>
        Real time live selling & live auction
      </Typography>
      <div className={classes.inputContainer}>
        <PhoneInput country={'ph'} value={phone} onChange={setPhone} />
        <GradientBlueButton
          className={classes.createAccountBtn}
          // @TODO: Send request to API
          onClick={handleOpenVerification}
        >
          Create Account
        </GradientBlueButton>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  handleOpenVerification: () => dispatch({ type: openVerificationModal }),
});

export default connect(null, mapDispatchToProps)(FinalCallAction);
