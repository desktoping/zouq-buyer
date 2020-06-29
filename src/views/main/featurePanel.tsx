import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import { BasicCardComponent } from '../../common';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  container: {
    width: '80%',
    margin: 'auto',
    marginTop: 20,
  },
  title: {
    paddingTop: 15,
    paddingBottom: 15,
  },
});

interface IProps {}

/**
 * @dev - Sample data that is fetched from streams
 */
const liveStreamData = [
  {
    live: false,
    views: '78K',
    thumbnail: 'https://picsum.photos/200/300',
    title: 'Stream title 1',
    seller: 'Streamer 1',
  },
  {
    live: false,
    views: '200K',
    thumbnail: 'https://picsum.photos/200/300',
    title: 'Stream title 2',
    seller: 'Streamer 2',
  },
  {
    live: false,
    views: '70',
    thumbnail: 'https://picsum.photos/200/300',
    title: 'Stream title 3',
    seller: 'Streamer 3',
  },
  {
    live: false,
    views: '14.2K',
    thumbnail: 'https://picsum.photos/200/300',
    title: 'Stream title 4',
    seller: 'Streamer 4',
  },
];

const FeaturePanelComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography gutterBottom variant="h5" className={classes.title}>
        Feature Sellers
      </Typography>

      <Grid container spacing={3}>
        {liveStreamData.map((data: any, i: number) => (
          <Grid item xs={12} md={3} key={i}>
            <BasicCardComponent {...data} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default connect()(FeaturePanelComponent);
