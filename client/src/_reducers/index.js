import { combineReducers } from 'redux';
import {reducer as toastr} from 'react-redux-toastr'

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import facebookLogin from './login-reducer.js';
import userInformation from './user-information.js'
import brandInformation from './brand-information.js'

const rootReducer = combineReducers({
  authentication,
  toastr,
  registration,
  facebookLogin,
  userInformation,
  brandInformation,
  users,
  alert
});

export default rootReducer;