import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Visibility } from '@material-ui/icons';
import React from 'react';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    boxShadow: 'none',
  },
  actionArea: {},
  liveIndicator: {
    position: 'absolute',
    padding: 10,
    top: 0,
    height: '20%',
    width: '100%',
    left: 0,
  },
  viewsContainer: {
    width: 70,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  views: {
    padding: 5,
    borderRadius: 5,
    display: 'flex',
    width: '100%',
    backgroundColor: (props: any) =>
      props.live ? 'rgba(238, 25, 23, .8)' : 'rgba(107,107,108, .8)',
    '& p': {
      paddingLeft: 3,
      color: '#DADADA',
    },
  },
});

interface IProps {
  // indicates if the stream is live
  live?: boolean;

  // views of the stream, fetched by the main component and saved to store
  views: number;

  // thumbnail of the stream
  thumbnail: string;

  // seller name
  seller: string;

  // stream title
  title: string;
}

const BasicCardComponent = ({
  live,
  views,
  thumbnail,
  title,
  seller,
}: IProps) => {
  const classes = useStyles({ live });

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.actionArea}>
        <CardMedia
          component="img"
          height="250"
          src={thumbnail}
          title="Contemplative Reptile"
        />
        <div className={classes.liveIndicator}>
          <div className={classes.viewsContainer}>
            <div className={classes.views}>
              <Visibility />
              <Typography component="p">{views}</Typography>
            </div>
          </div>
        </div>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={4} md={3}>
              <Grid container alignItems="center">
                <Avatar
                  alt="Zouq"
                  src="https://f1.pngfuel.com/png/386/684/972/face-icon-user-icon-design-user-profile-share-icon-avatar-black-and-white-silhouette-png-clip-art.png"
                  component="div"
                />
              </Grid>
            </Grid>
            <Grid item xs={8} md={9}>
              <Typography component="div">{title}</Typography>
              <Typography component="div">{seller}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default connect()(BasicCardComponent);
