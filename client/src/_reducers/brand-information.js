export default function (state = null, action) {
  // switch (action.type) {
  //   case 'GET_BRAND_INFORMATION':
  //     return (action.payload);
  //   default:
  //     return state;
  // }
  const brand = 'GET_BRAND_INFORMATION';

  switch(action.type) {
    case `${brand}_PENDING`:
      return {};

    case `${brand}_FULFILLED`:
      return {
        isFulfilled: true,
        data: action.payload
      };

    case `${brand}_REJECTED`:
      return {
        isRejected: true,
        error: action.payload
      };

    default: return state;
  }
}