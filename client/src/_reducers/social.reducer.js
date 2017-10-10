import { socialConstants } from '../_constants';


const initialState = { manager};

export function get_social(state = initialState, action) {
  switch (action.type) {
    case socialConstants.FETCH_DATA_SUCCESS:
      return {
        manager: action.manager
      };
    default:
      return state
  }
}