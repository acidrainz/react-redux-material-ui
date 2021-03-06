

export default function (state = null, action) {
  // switch (action.type) {
  //   case 'GET_BRAND_INFORMATION':
  //     return (action.payload);
  //   default:
  //     return state;
  // }
  const user = 'GET_USER_INFORMATION';

  switch(action.type) {
    case `${user}_PENDING`:
      return {};

    case `${user}_FULFILLED`:
      return {
        isFulfilled: true,
        data: action.payload
      };

    case `${user}_REJECTED`:
      return {
        isRejected: true,
        error: action.payload
      };

    default: return state;
  }
}