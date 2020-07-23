import { Grid, TextField, Typography, useMediaQuery } from '@material-ui/core';
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from '@material-ui/core/styles';
import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { GradientBlueButton } from '../../common';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      padding: '40px 0',
    },

    container: {
      width: '40%',
      [theme.breakpoints.down('md')]: {
        width: '95%',
      },
    },

    textField: {
      margin: '10px 0',
    },

    btnNext: {
      textAlign: 'center',
      textTransform: 'capitalize',
      width: 200,
      margin: '40px 0',
    },

    btnContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },

    dropzoneContainer: {
      display: 'flex',
      flexDirection: 'column',

      '& .dropzone': {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgb(250, 250, 250)',
        color: 'rgb(189, 189, 189)',
        flex: '1 1 0%',
        padding: 20,
        borderWidth: 2,
        borderRadius: 2,
        borderColor: 'rgb(238, 238, 238)',
        borderStyle: 'dashed',
        outline: 'none',
        transition: 'border 0.24s ease-in-out 0s',
        cursor: 'pointer',
      },
    },
  })
);

const KycComponent = ({ history }: RouteComponentProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMediumUp = useMediaQuery(theme.breakpoints.up('md'));

  // Dropzone setup
  const [files, setFiles] = useState<any[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles: any) => {
      setFiles(
        acceptedFiles.map((file: any) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const thumbs = files.map((file) => (
    <div
      style={{
        display: 'inline-flex',
        borderRadius: 2,
        border: '1px solid #eaeaea',
        marginBottom: 8,
        marginRight: 8,
        width: 100,
        height: 100,
        padding: 4,
        boxSizing: 'border-box',
      }}
      key={file.name}
    >
      <div
        style={{
          display: 'flex',
          minWidth: 0,
          overflow: 'hidden',
        }}
      >
        <img
          alt="upload preview"
          src={file.preview}
          style={{
            display: 'block',
            width: 'auto',
            height: '100%',
          }}
        />
      </div>
    </div>
  ));

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography component="h6" variant="h6">
          Let's set up your personal profile
        </Typography>

        <section className={classes.dropzoneContainer}>
          <div {...getRootProps({ className: 'dropzone' })}>
            <input {...getInputProps()} />
            <Typography component="p" variant="caption">
              Upload valid ID with photo
            </Typography>
          </div>
          <aside
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginTop: 16,
            }}
          >
            {thumbs}
          </aside>
        </section>

        <TextField
          className={classes.textField}
          label="Mobile Number"
          fullWidth
        />
        <TextField className={classes.textField} label="Fullname" fullWidth />
        <TextField className={classes.textField} label="Gender" fullWidth />
        <TextField
          className={classes.textField}
          label="Email Address"
          fullWidth
        />
        <TextField className={classes.textField} label="Birthdate" fullWidth />
        <TextField
          className={classes.textField}
          label="Complete Address"
          fullWidth
        />
        <Grid container spacing={isMediumUp ? 3 : 0}>
          <Grid item xs={12} sm={6}>
            <TextField
              className={`${classes.textField}`}
              label="City"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              className={`${classes.textField}`}
              label="Province/State"
              fullWidth
            />
          </Grid>
        </Grid>
        <TextField
          className={classes.textField}
          label="Zip Code/PO Box"
          fullWidth
        />
        <div className={classes.btnContainer}>
          <GradientBlueButton
            className={classes.btnNext}
            onClick={() => history.push('/kyc/capture')}
          >
            Next
          </GradientBlueButton>
        </div>
      </div>
    </div>
  );
};

export default withRouter(KycComponent);
