import { combineReducers } from 'redux';
import ready from './ready';
import verification from './verification';

export default combineReducers({
  ready,
  verification,
});
