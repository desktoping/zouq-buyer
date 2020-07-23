import { combineReducers } from 'redux';
import auth from './authentication';
import user from './user';
import modals from './modals';

export default combineReducers({
  auth,
  user,
  modals,
});
