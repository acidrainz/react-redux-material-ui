import { combineReducers } from 'redux';
import {reducer as toastrReducer} from 'react-redux-toastr'

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  toastr: toastrReducer,
  registration,
  users,
  alert
});

export default rootReducer;