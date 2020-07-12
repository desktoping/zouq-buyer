/**
 * Checkout page
 */

import {
  Divider,
  Grid,
  Hidden,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { PaymentOutlined } from '@material-ui/icons';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { formatPhp, PaypalButtonComponent } from '../../common';
import PaypalBtn from 'react-paypal-checkout';
import { get } from 'lodash';

/**
 * @NOTES
 *  Paypal button - https://developer.paypal.com/docs/archive/checkout/how-to/customize-button/
 */

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: 'auto',
    marginBottom: 30,
  },
  container: {
    border: '1px solid #E8E8E8',
  },
  spacing: {
    marginBottom: 10,
    paddingBottom: 20,
    paddingTop: 20,
  },
  flex: {
    display: 'flex',
  },
  itemInfo: {
    flexDirection: 'column',
    paddingLeft: 20,
    justifyContent: 'center',
  },
  thumbnail: {
    overflow: 'hidden',
    maxHeight: 80,
    maxWidth: 80,
  },
  total: {
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
  },
  productContainer: {
    maxHeight: '70%',
    overflow: 'scroll',
  },
  shippingInfoContainer: {
    width: '80%',
    margin: 'auto',
  },
  cardBtn: {},
  paypalBtn: {
    width: '50%',
    height: 200,
  },
}));

const CheckoutPageComponent = ({ history }: RouteComponentProps) => {
  const classes = useStyles();
  const cartData = [
    {
      product: 'Product 1',
      price: 10,
      quantity: 1,
      total: 10,
      thumbnail: 'https://picsum.photos/200/200',
    },
    {
      product: 'Product 2',
      price: 100,
      quantity: 12,
      total: 1200,
      thumbnail: 'https://picsum.photos/200/200',
    },
    {
      product: 'Product 1',
      price: 25,
      quantity: 3,
      total: 75,
      thumbnail: 'https://picsum.photos/200/200',
    },
  ];

  const shippingFee = 60;
  const total = cartData.reduce((r, v) => {
    r += v.total;
    return r;
  }, 0);

  return (
    <div className={classes.root}>
      <h3>Checkout</h3>
      <Grid container spacing={3} className={classes.container}>
        <Hidden mdDown>
          <Grid
            item
            md={4}
            style={{
              borderRight: '1px solid #E8E8E8',
              minHeight: 600,
              position: 'relative',
            }}
          >
            <div className={classes.productContainer}>
              {cartData.map((cart) => (
                <Grid
                  container
                  className={classes.spacing}
                  style={{ borderBottom: '1px solid #E8E8E8' }}
                >
                  <Grid
                    item
                    xs={4}
                    className={`${classes.flex} ${classes.thumbnail}`}
                    justify="center"
                  >
                    <img src={cart.thumbnail} alt="Product thumbnail" />
                  </Grid>
                  <Grid
                    item
                    xs={8}
                    className={`${classes.flex} ${classes.itemInfo}`}
                  >
                    <Typography
                      component="div"
                      variant="body1"
                      style={{ fontWeight: 700 }}
                    >
                      {cart.product}
                    </Typography>
                    <Typography
                      component="div"
                      variant="body2"
                      style={{ color: '#A7A7A7' }}
                    >
                      {cart.quantity} x {formatPhp(cart.price)}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </div>
            <div style={{ position: 'absolute', bottom: 0, width: '100%' }}>
              <div className={`${classes.flex} ${classes.total}`}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '90%',
                  }}
                >
                  <Typography
                    component="div"
                    variant="body1"
                    style={{ fontWeight: 700 }}
                  >
                    Subtotal:
                  </Typography>
                  <Typography
                    component="div"
                    variant="body1"
                    style={{ fontWeight: 700 }}
                  >
                    {formatPhp(total)}
                  </Typography>
                </div>
              </div>
              <div className={`${classes.flex} ${classes.total}`}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '90%',
                  }}
                >
                  <Typography
                    component="div"
                    variant="body1"
                    style={{ fontWeight: 700 }}
                  >
                    Shipping Fee:
                  </Typography>
                  <Typography
                    component="div"
                    variant="body1"
                    style={{ fontWeight: 700 }}
                  >
                    {formatPhp(shippingFee)}
                  </Typography>
                </div>
              </div>
              <Divider />
              <div className={`${classes.flex} ${classes.total}`}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '90%',
                  }}
                >
                  <Typography
                    component="div"
                    variant="body1"
                    style={{ fontWeight: 700 }}
                  >
                    Total:
                  </Typography>
                  <Typography
                    component="div"
                    variant="body1"
                    style={{ fontWeight: 700 }}
                  >
                    {formatPhp(Number(total) + Number(shippingFee))}
                  </Typography>
                </div>
              </div>
              <Divider />
            </div>
          </Grid>
          <Grid item md={8}>
            <div className={classes.shippingInfoContainer}>
              <Typography component="h6" variant="h6">
                Shipping Details
              </Typography>
              <Typography component="p" variant="caption">
                Chou Chou
              </Typography>
              <Typography component="h6" variant="h6">
                Payment Method
              </Typography>
              <div>
                <PaypalButtonComponent total={1} currency="PHP" />
              </div>
              {/* <Grid container spacing={3}>
                <Grid item xs={6} md={3}>
                  <PaypalBtn
                    env="sandbox"
                    style={{
                      size: 'responsive',
                      shape: 'rect',
                      label: 'credit',
                      tagline: 'false',
                    }}
                    client={{
                      // @TODO: Change me and secure me
                      sandbox:
                        'AV3IuCSb3tEIGVi8QdIbsGjmPLP3yzPBkdveF8Uz--izKXq-g9ek8ZvaVBqhrqY9-Xnde-Sf-GBV1TLZ',
                    }}
                    currency={'USD'}
                    total={1.0}
                  />
                </Grid>
                <div className={classes.paypalBtn}>
                  <PaypalBtn
                    env="sandbox"
                    style={{
                      size: 'responsive',
                      color: 'white',
                      shape: 'rect',
                      label: 'paypal',
                      tagline: 'false',
                    }}
                    client={{
                      // @TODO: Change me and secure me
                      sandbox:
                        'AV3IuCSb3tEIGVi8QdIbsGjmPLP3yzPBkdveF8Uz--izKXq-g9ek8ZvaVBqhrqY9-Xnde-Sf-GBV1TLZ',
                    }}
                    currency={'USD'}
                    total={1.0}
                  />
                </div> 
              </Grid> */}
              {/* <Grid container spacing={3}>
                <Grid item xs={12} className={classes.spacing}>
                  <TextField
                    label="Name on Card"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} className={classes.spacing}>
                  <TextField label="Card Number" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12} md={6} className={classes.spacing}>
                  <TextField
                    label="Expiration Date"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={6} className={classes.spacing}>
                  <TextField
                    label="Security Code"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
              </Grid> */}
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default withRouter(CheckoutPageComponent);
