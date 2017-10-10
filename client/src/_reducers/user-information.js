export default function (state = null, action) {
  switch (action.type) {
    case 'GET_USER_INFORMATION':
      return (action.payload);

    default:
      return state;
  }
}