import {
  Badge,
  Grid,
  IconButton,
  makeStyles,
  Typography,
  Divider,
  Button,
} from '@material-ui/core';
import { AddShoppingCart as CartIcon } from '@material-ui/icons';
import React, { useState } from 'react';
import Popover from 'react-popover';
import { connect } from 'react-redux';
import { formatPhp } from '../../utils';

const useStyle = makeStyles({
  popoverRoot: {
    zIndex: 3,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    boxShadow: '-10px 10px 21px -9px rgba(0, 0, 0, 0.6)',
    width: 280,
  },
  popoverPinContainer: {
    '& .Popover-tip': {
      fill: '#fff',
    },
  },
  links: {
    color: '#000',
    outline: 'none',
    textTransform: 'none',
    textDecoration: 'none',
  },
  spacing: {
    marginBottom: 10,
  },
  flex: {
    display: 'flex',
  },
  itemInfo: {
    flexDirection: 'column',
    paddingLeft: 20,
  },
  thumbnail: {
    overflow: 'hidden',
    maxHeight: 60,
  },
  total: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

interface IProps {
  menuClassName: string;
}

const CartMenuItemComponent = ({ menuClassName }: IProps) => {
  const classes = useStyle();
  const [open, setOpen] = useState<boolean>(false);

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

  return (
    <Popover
      className={classes.popoverPinContainer}
      isOpen={open}
      preferPlace="below"
      place="below"
      onOuterAction={() => setOpen(false)}
      body={[
        <div className={classes.popoverRoot}>
          <Typography
            component="div"
            variant="body1"
            className={classes.spacing}
          >
            My Cart
          </Typography>
          {cartData.map((cart) => (
            <Grid container className={classes.spacing}>
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
          <Divider className={classes.spacing} />
          <div className={`${classes.flex} ${classes.total}`}>
            <Typography
              component="div"
              variant="body1"
              style={{ fontWeight: 700 }}
            >
              Total:&nbsp;
              {formatPhp(
                cartData.reduce((r, v) => {
                  r += v.total;
                  return r;
                }, 0)
              )}
            </Typography>
            <Button
              size="small"
              variant="outlined"
              style={{ border: '1px solid #99D1FF' }}
            >
              Checkout
            </Button>
          </div>
        </div>,
      ]}
    >
      <IconButton
        onClick={() => setOpen(true)}
        className={menuClassName}
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="inherit"
      >
        <Badge badgeContent={4} color="secondary">
          <CartIcon />
        </Badge>
      </IconButton>
    </Popover>
  );
};

const mapDispatchToProps = (dispatch: any) => ({});

export default connect(null, mapDispatchToProps)(CartMenuItemComponent);
