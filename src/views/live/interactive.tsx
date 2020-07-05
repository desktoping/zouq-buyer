import {
  Avatar,
  Button,
  Grid,
  InputAdornment,
  makeStyles,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@material-ui/core';
import { get } from 'lodash';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, useParams, withRouter } from 'react-router-dom';
import { streamerProfile } from '../../common/data/user';
import { actionTypeMessage, messages } from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 650,
    [theme.breakpoints.down('md')]: {
      height: 'calc(100vh - 60px)',
    },
  },
  videoRoot: {
    height: 520,
    [theme.breakpoints.down('md')]: {
      height: '32%',
    },
    width: '100%',
    '& > video': {
      height: '100%',
      width: '100%',
    },
  },
  chatRoot: {
    height: 600,
    width: '100%',
    [theme.breakpoints.down('md')]: {
      height: '55%',
    },
  },
  messageArea: {
    height: '75%',
    border: '1px solid #E9E9E9',
    padding: '15px 20px',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
  messages: {
    padding: '5px 0',
    minHeight: 50,
  },
  menuArea: {
    height: '10%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 10,
    border: '1px solid #E9E9E9',
  },
  actionArea: {
    height: '15%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 10,
    border: '1px solid #E9E9E9',
  },
  actionIcon: {
    padding: '15px 20px',
    borderRight: '1px solid #F0F0F0',
    maxWidth: 80,
  },
  specialMessage: {
    minHeight: 30,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#E9E9E9',
    paddingLeft: 10,
    width: '90%',
    borderRadius: 10,
  },
  qtyBtn: {
    minWidth: 15,
    backgroundColor: '#EDEDED',
    height: 18,
  },
}));

interface IProps {
  userThumbnail: string;
  loggedIn: boolean;
}

const InteractivePanelComponent = ({
  userThumbnail,
  loggedIn,
}: RouteComponentProps & IProps) => {
  const { id: streamId } = useParams();

  const [value, setValue] = useState<number>(0);
  const [qty, setQty] = useState<number>(1);
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12} md={8} className={classes.videoRoot}>
        <video controls poster={streamerProfile.streamThumbnail}>
          Your browser does not support HTML video. {streamId}
        </video>
        <Grid container style={{ padding: '15px 10px' }} spacing={3}>
          <Grid item xs={3} style={{ maxWidth: 80 }}>
            <Avatar
              alt="Zouq"
              src={streamerProfile.userThumbnail}
              component="div"
            />
          </Grid>
          <Grid item xs={8}>
            <Typography component="p" variant="body1">
              {streamerProfile.streamDescription}
            </Typography>
            <Typography component="p" variant="body1">
              {streamerProfile.username}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={4} className={classes.chatRoot}>
        <div className={classes.messageArea}>
          {messages.map((m) => {
            const action = get(m, 'action', 0);
            const actionType = get(actionTypeMessage, action);

            if (action > 0) {
              return (
                <Grid
                  container
                  spacing={3}
                  alignContent="center"
                  className={classes.messages}
                >
                  <Grid item xs={2} md={1}>
                    <Avatar alt="Zouq" src={m.userThumbnail} component="div" />
                  </Grid>
                  <Grid item xs={10}>
                    <Typography
                      component="div"
                      variant="body1"
                      style={{ color: '#9F9F9F' }}
                    >
                      {m.userName}&nbsp;{m.product}
                    </Typography>
                    <Typography component="div" variant="body1">
                      {actionType}: {m.message}
                    </Typography>
                  </Grid>
                </Grid>
              );
            }
            return (
              <Grid
                container
                spacing={3}
                alignItems="center"
                className={classes.messages}
                style={{ width: '100%', padding: '12px 10px' }}
              >
                <div className={classes.specialMessage}>
                  <Typography component="div" variant="body1">
                    {m.message}
                  </Typography>
                </div>
              </Grid>
            );
          })}
        </div>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          className={classes.menuArea}
          onChange={(_, value: number) => setValue(value)}
        >
          <Tab label="BUY" />
          <Tab label="BID" />
          <Tab label="ASK" />
        </Tabs>
        <div className={classes.actionArea}>
          {loggedIn && (
            <Grid container spacing={3}>
              <Grid item xs={3} className={classes.actionIcon}>
                <Avatar alt="Zouq" src={userThumbnail} component="div" />
              </Grid>
              <Grid
                item
                xs={9}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                {value === 0 && (
                  <>
                    <div>
                      <Typography
                        component="span"
                        variant="body1"
                        style={{ color: '#A3A3A3' }}
                      >
                        Quantity
                      </Typography>
                      <span style={{ marginLeft: 10 }} />
                      <Button
                        classes={{ root: classes.qtyBtn }}
                        onClick={() => setQty(qty - 1)}
                      >
                        -
                      </Button>
                      <Typography
                        component="span"
                        variant="body1"
                        style={{ padding: '0 10px', height: 18 }}
                      >
                        {qty}
                      </Typography>
                      <Button
                        classes={{ root: classes.qtyBtn }}
                        onClick={() => setQty(qty + 1)}
                      >
                        +
                      </Button>
                    </div>
                    <div>
                      <Button
                        size="small"
                        variant="outlined"
                        style={{ border: '1px solid #99D1FF' }}
                      >
                        Buy Now
                      </Button>
                    </div>
                  </>
                )}
                {value === 1 && (
                  <>
                    <TextField
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">Php</InputAdornment>
                        ),
                      }}
                    />
                    <Button
                      size="small"
                      variant="outlined"
                      style={{ border: '1px solid #99D1FF' }}
                    >
                      Bid Now
                    </Button>
                  </>
                )}
                {value === 2 && (
                  <>
                    <TextField />
                    <Button
                      size="small"
                      variant="outlined"
                      style={{ border: '1px solid #99D1FF' }}
                    >
                      Send
                    </Button>
                  </>
                )}
              </Grid>
            </Grid>
          )}
          {!loggedIn && (
            <Typography component="div" variant="body1">
              Please login
            </Typography>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: any) => ({
  loggedIn: get(state, 'auth.login.loggedIn'),
  userThumbnail: get(state, 'user.user.userThumbnail'),
});

export default connect(mapStateToProps)(withRouter(InteractivePanelComponent));
