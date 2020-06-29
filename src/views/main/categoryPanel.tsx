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
    live: true,
    views: '100',
    thumbnail: 'https://picsum.photos/200/300',
    title: 'Stream title',
    seller: 'Streamer',
  },
  {
    live: false,
    views: '200K',
    thumbnail: 'https://picsum.photos/200/300',
    title: 'Stream title',
    seller: 'Streamer',
  },
  {
    live: false,
    views: '120',
    thumbnail: 'https://picsum.photos/200/300',
    title: 'Stream title',
    seller: 'Streamer',
  },
  {
    live: true,
    views: '24K',
    thumbnail: 'https://picsum.photos/200/300',
    title: 'Stream title',
    seller: 'Streamer',
  },
];

const LivePanelComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography gutterBottom variant="h5" className={classes.title}>
        Category 1
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

export default connect()(LivePanelComponent);
