import {
  Avatar,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Visibility } from '@material-ui/icons';
import React from 'react';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
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
    alignItems: 'center',
    flexDirection: 'row',
  },
  views: {
    padding: 5,
    borderRadius: 5,
    width: '100%',
    backgroundColor: (props: any) =>
      props.live ? 'rgba(238, 25, 23, .8)' : 'rgba(107,107,108, .8)',
    '& p': {
      paddingLeft: 3,
      color: '#DADADA',
    },
  },
  premiumIcon: {
    fontSize: 10,
    color: '#F9D066',
    padding: '5px 2px',
    borderRadius: 5,
    border: '1px solid #F9D066',
  },
  sellerIconContainer: {
    paddingLeft: 20,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
      justifyContent: 'flex-start',
    },
  },
  descriptionContent: {
    marginTop: 0,
    [theme.breakpoints.down('md')]: {
      marginTop: 10,
    },
  },
  message: {
    paddingLeft: 20,
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
    },
  },
  stats: {
    paddingLeft: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    [theme.breakpoints.down('md')]: {
      paddingLeft: 0,
    },
  },
  flex: {
    display: 'flex',
  },
}));

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

  // message of stream
  message: string;
}

const BasicCardComponent = ({
  live,
  views,
  thumbnail,
  title,
  seller,
  message,
}: IProps) => {
  const classes = useStyles({ live });

  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <Card className={classes.root}>
          <CardActionArea className={classes.actionArea}>
            <CardMedia
              component="img"
              height="300"
              src={thumbnail}
              title="Contemplative Reptile"
            />
            <div className={classes.liveIndicator}>
              <div className={`${classes.viewsContainer} ${classes.flex}`}>
                <div className={`${classes.views} ${classes.flex}`}>
                  <Visibility />
                  <Typography component="p">{views}</Typography>
                </div>
              </div>
            </div>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        direction="column"
        className={`${classes.descriptionContent} ${classes.flex}`}
      >
        <Grid container className={classes.flex}>
          <Grid
            item
            xs={12}
            className={classes.flex}
            style={{ marginBottom: 10 }}
          >
            <Grid
              item
              xs={4}
              md={3}
              className={`${classes.sellerIconContainer} ${classes.flex}`}
            >
              <Avatar
                alt="Zouq"
                src="https://f1.pngfuel.com/png/386/684/972/face-icon-user-icon-design-user-profile-share-icon-avatar-black-and-white-silhouette-png-clip-art.png"
                component="div"
              />
            </Grid>
            <Grid item xs={8} md={9}>
              <Grid container>
                <Grid item xs={12}>
                  <Typography component="div">
                    <b>{title}</b>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography component="div">{seller}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <span className={classes.premiumIcon}>
                        PREMIUM SELLER
                      </span>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className={classes.message}>
          {message}
        </Grid>

        <Grid item xs={12} className={`${classes.stats} ${classes.flex}`}>
          <Grid container>
            <Grid item xs={6}>
              <div>PRODUCTS SOLD:</div>
              <div style={{ fontSize: 18 }}>
                <b>100</b>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div>RATINGS:</div>
              <div style={{ fontSize: 18 }}>
                <b>4.5 (100 Rating)</b>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default connect()(BasicCardComponent);
