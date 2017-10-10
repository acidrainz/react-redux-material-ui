import { socialConstants } from '../_constants';
import { socialService } from '../_services';
import { history } from '../_helpers';
import {toastr} from 'react-redux-toastr'

export const socialActions = {
    getLoginStatus,
    startFetching,
    getUserInformation
};






 function getLoginStatus(status) {
  return { type: 'loginResponse', payload: status };
}

 function startFetching() {
  return { type: 'fetching' };
}

 function getUserInformation(userInformation) {
  return { type: 'getUserInformation', payload: userInformation };
}
