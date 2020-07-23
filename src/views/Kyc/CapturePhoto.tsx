import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React, { useCallback, useRef } from 'react';
import Webcam from 'react-webcam';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { openReadyModal } from '../../store/actions';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      margin: '40px auto',
      flexDirection: 'column',
      alignItems: 'center',
    },

    camera: {
      width: 800,
      minHeight: 500,
      [theme.breakpoints.down('md')]: {
        width: '100%',
        minHeight: 100,
        height: 'auto',
      },
    },

    captureBtn: {
      fontWeight: 700,
      fontSize: 20,
      width: 800,
      padding: '20px 20px',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
    },
  })
);

interface IProps {
  handleOpenReadyModal: () => void;
}

const KycCapturePhotoComponent = ({
  history,
  handleOpenReadyModal,
}: RouteComponentProps & IProps) => {
  const webcamRef = useRef<any>(null);
  const classes = useStyles();

  const capture = useCallback(() => {
    // const imageSrc = webcamRef.current.getScreenshot();
    history.replace('/');
    handleOpenReadyModal();
  }, [webcamRef]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className={classes.root}>
      <Webcam
        className={classes.camera}
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture} className={classes.captureBtn}>
        Capture photo
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  handleOpenReadyModal: () => dispatch({ type: openReadyModal }),
});

export default connect(
  null,
  mapDispatchToProps
)(withRouter(KycCapturePhotoComponent));
