import { combineReducers } from 'redux';
import auth from './authentication';
import user from './user';

export default combineReducers({
  auth,
  user,
});
