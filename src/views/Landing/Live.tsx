import {
  Avatar,
  Card,
  CardHeader,
  CardMedia,
  colors,
  Grid,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '0 5%',
      margin: '40px 0',
    },
    header: {
      margin: '20px 0',
    },
    cardContainer: {
      minHeight: 200,
    },

    // Copied from material ui
    // https://material-ui.com/components/cards/
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    avatar: {
      backgroundColor: colors.grey[100],
      color: colors.grey[500],
    },
  })
);

export default () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography className={classes.header} component="h5" variant="h5">
        Live right now
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card className={classes.cardContainer}>
            <CardMedia
              className={classes.media}
              image="https://via.placeholder.com/150"
              title="Live Stream"
            />
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              title="New Model"
              subheader="BMW"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className={classes.cardContainer}>
            <CardMedia
              className={classes.media}
              image="https://via.placeholder.com/150"
              title="Live Stream"
            />
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              title="New Model"
              subheader="BMW"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className={classes.cardContainer}>
            <CardMedia
              className={classes.media}
              image="https://via.placeholder.com/150"
              title="Live Stream"
            />
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              title="New Model"
              subheader="BMW"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card className={classes.cardContainer}>
            <CardMedia
              className={classes.media}
              image="https://via.placeholder.com/150"
              title="Live Stream"
            />
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  R
                </Avatar>
              }
              title="New Model"
              subheader="BMW"
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
