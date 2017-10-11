

export const socialActions = {
    getLoginStatus,
    startFetching,
    getUserInformation,
    getBrandInformation
};




 function getLoginStatus(status) {
  return { type: 'GET_LOGIN_STATUS', payload: status };
}

 function startFetching() {
  return { type: 'FETCHING' };
}

 function getUserInformation(userInformation) {
  return { type: 'GET_USER_INFORMATION', payload: Promise.resolve(userInformation)};
}
function getBrandInformation(brandInformation) {
  return { type: 'GET_BRAND_INFORMATION', payload: Promise.resolve(brandInformation)};
}
