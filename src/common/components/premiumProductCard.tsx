import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  LocalOfferOutlined as TagIcon,
  LocalMallOutlined as SellIcon,
} from '@material-ui/icons';
import React from 'react';
import { connect } from 'react-redux';
import { formatPhp } from '../utils';

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%',
    boxShadow: 'none',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    margin: '10px 0',
    '& svg': {
      fill: '#000',
      height: 20,
    },
    '& div': {
      marginRight: 10,
    },
  },
  pricing: {
    alignItems: 'center',
    marginTop: 10,
    [theme.breakpoints.up('md')]: {
      height: '40%',
    },
  },
}));

interface IProps {
  thumbnail: string;
  id: any;
  name: string;
  labels: string[];
  type: number;
  description: string;
  price: number;
  fee: number;
}

const PremiumProductComponent = ({
  thumbnail,
  id,
  name,
  labels,
  type,
  description,
  price,
  fee,
}: IProps) => {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={5}>
        <Card className={classes.img}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              src={thumbnail}
              title="Contemplative Reptile"
            />
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={12} md={7}>
        <Typography component="div" variant="body1" style={{ fontWeight: 600 }}>
          {name}
        </Typography>
        <div className={classes.label}>
          {labels.map((l) => (
            <>
              <TagIcon />
              &nbsp;
              <Typography component="div" variant="caption">
                {l}
              </Typography>
            </>
          ))}
          <SellIcon />
          &nbsp;
          <Typography component="div" variant="caption">
            Sell
          </Typography>
        </div>
        <Typography component="div" variant="body1">
          {description}
        </Typography>
        <Grid container className={classes.pricing}>
          <Grid item xs={6}>
            <Typography component="div" variant="caption">
              Price
            </Typography>
            <Typography component="div" variant="h5">
              {formatPhp(price)}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography component="div" variant="caption">
              Shipping Fee
            </Typography>
            <Typography component="div" variant="h5">
              {formatPhp(fee)}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default connect()(PremiumProductComponent);
