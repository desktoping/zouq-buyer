import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { connect } from 'react-redux';
import { PremiumCardComponent } from '../../common';

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
    views: '100',
    thumbnail: 'https://picsum.photos/200/300',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus leo. Pellentesque eget ipsum luctus, faucibus felis at, interdum sem. Integer luctus, libero sed cursus vulputate, velit ligula imperdiet turpis, in viverra tellus massa vel enim. Nunc feugiat leo et lacus fringilla, ut ullamcorper nisl porta. Curabitur elit purus, feugiat id sapien eu, tincidunt pulvinar magna.',
    title: 'Stream title 2',
    seller: 'Streamer 2',
  },
  {
    live: true,
    views: '200K',
    thumbnail: 'https://picsum.photos/200/300',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus leo. Pellentesque eget ipsum luctus, faucibus felis at, interdum sem. Integer luctus, libero sed cursus vulputate, velit ligula imperdiet turpis, in viverra tellus massa vel enim. Nunc feugiat leo et lacus fringilla, ut ullamcorper nisl porta. Curabitur elit purus, feugiat id sapien eu, tincidunt pulvinar magna.',
    title: 'Stream title 2',
    seller: 'Streamer 2',
  },
  {
    live: false,
    views: '120',
    thumbnail: 'https://picsum.photos/200/300',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus leo. Pellentesque eget ipsum luctus, faucibus felis at, interdum sem. Integer luctus, libero sed cursus vulputate, velit ligula imperdiet turpis, in viverra tellus massa vel enim. Nunc feugiat leo et lacus fringilla, ut ullamcorper nisl porta. Curabitur elit purus, feugiat id sapien eu, tincidunt pulvinar magna.',
    title: 'Stream title 2',
    seller: 'Streamer 2',
  },
  {
    live: false,
    views: '24K',
    thumbnail: 'https://picsum.photos/200/300',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus leo. Pellentesque eget ipsum luctus, faucibus felis at, interdum sem. Integer luctus, libero sed cursus vulputate, velit ligula imperdiet turpis, in viverra tellus massa vel enim. Nunc feugiat leo et lacus fringilla, ut ullamcorper nisl porta. Curabitur elit purus, feugiat id sapien eu, tincidunt pulvinar magna.',
    title: 'Stream title 2',
    seller: 'Streamer 2',
  },
];

const LivePanelComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography gutterBottom variant="h5" className={classes.title}>
        Premium Sellers
      </Typography>

      <Grid container spacing={3}>
        {liveStreamData.map((data: any, i: number) => (
          <Grid item xs={12} md={6} key={i}>
            <PremiumCardComponent {...data} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default connect()(LivePanelComponent);
