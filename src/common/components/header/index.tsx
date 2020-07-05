import {
  AppBar,
  Badge,
  Button,
  Icon,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  AccountCircle,
  AddShoppingCart as CartIcon,
  Mail as MailIcon,
  Menu as MenuIcon,
  MoreVert as MoreIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
} from '@material-ui/icons';
import { get } from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo-dark.svg';
import { doLogin, doLogout } from '../../../store/actions';
import CartMenuItemComponent from './cartMenu';
import ProfileMenuItemComponent from './profileMenu';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#fff',
    display: 'flex',
  },
  appIcons: {
    color: '#000',
    marginLeft: 20,
  },
  loginButton: {
    color: '#000',
    height: 40,
    marginLeft: 20,
    border: '1px solid #99D1FF',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      margin: 0,
    },
  },
  logo: {
    height: '100%',
    width: 100,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'gray',
  },
  mobileMenu: {
    color: 'gray',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputRoot: {
    color: '#000',
    transition: theme.transitions.create('width'),
    width: '100%',
    backgroundColor: '#fff',
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
    '& .MuiInputBase-root': {
      height: 40,
      outline: 'none',
      '&&:focus': {
        outline: 'none',
      },
    },
    '& .MuiInputBase-input': {
      background: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      borderRadius: 10,
      '& fieldset': {
        borderColor: '#E0E1E1',
      },
      '&:hover fieldset': {
        borderColor: '#E0E1E1',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#E0E1E1',
      },
    },
  },
  inputAdornment: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 40,
    height: '100%',
    paddingRight: 10,
  },
  adornAdorn: {
    paddingRight: 0,
    outline: 'none',
    backgroundColor: '#F8F8F8',
  },
  notchedOutline: {
    borderColor: '#F8F8F8',
  },
  sectionDesktop: {
    display: 'none',
    height: 40,
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

interface IProps {
  loggedIn: boolean;
  dispatchLogin: () => void;
  dispatchLogout: () => void;
}

const HeaderComponent = ({
  loggedIn,
  dispatchLogin,
  dispatchLogout,
}: IProps) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: any) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      elevation={20}
      style={{ top: 20 }}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      getContentAnchorEl={null}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem
        onClick={() => {
          handleMenuClose();
          dispatchLogout();
        }}
      >
        Logout
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      getContentAnchorEl={null}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {loggedIn ? (
        <>
          <MenuItem>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <CartIcon />
              </Badge>
            </IconButton>
            <p>Shopping Cart</p>
          </MenuItem>
          <MenuItem>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <p>Messages</p>
          </MenuItem>
          <MenuItem>
            <IconButton color="inherit">
              <Badge badgeContent={11} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <p>Notifications</p>
          </MenuItem>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <p>Profile</p>
          </MenuItem>
        </>
      ) : (
        <>
          <MenuItem>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <CartIcon />
              </Badge>
            </IconButton>
            <p>Shopping Cart</p>
          </MenuItem>
          <MenuItem>
            <Button
              onClick={dispatchLogin}
              variant="outlined"
              className={classes.loginButton}
            >
              Login
            </Button>
          </MenuItem>
        </>
      )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <div style={{}}></div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Link to="/">
            <Icon className={classes.logo}>
              <img alt="zouq logo" src={logo} className={classes.logo} />
            </Icon>
          </Link>
          <div className={classes.search}>
            <TextField
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
              }}
              fullWidth
              variant="outlined"
              InputProps={{
                classes: {
                  adornedEnd: classes.adornAdorn,
                  notchedOutline: classes.notchedOutline,
                },
                endAdornment: (
                  <InputAdornment
                    className={classes.inputAdornment}
                    position="end"
                  >
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {loggedIn ? (
              <>
                <CartMenuItemComponent menuClassName={classes.appIcons} />
                <IconButton
                  className={classes.appIcons}
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={4} color="secondary">
                    <MailIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  className={classes.appIcons}
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <ProfileMenuItemComponent menuClassName={classes.appIcons} />
              </>
            ) : (
              <>
                <IconButton
                  className={classes.appIcons}
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <Badge badgeContent={4} color="secondary">
                    <CartIcon />
                  </Badge>
                </IconButton>
                <Button
                  onClick={dispatchLogin}
                  variant="outlined"
                  className={classes.loginButton}
                >
                  Login
                </Button>
              </>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              className={classes.mobileMenu}
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  loggedIn: get(state, 'auth.login.loggedIn'),
});

const mapDispatchToProps = (dispatch: any) => ({
  dispatchLogin: () => dispatch({ type: doLogin }),
  dispatchLogout: () => dispatch({ type: doLogout }),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
