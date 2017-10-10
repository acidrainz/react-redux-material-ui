/*global event*/
/*eslint no-restricted-globals: ["error", "event"]*/
/* global _ */

import { authHeader } from '../_helpers';

export const socialService = {
    fetch_data

};

function fetch_data() {


    return fetch('api/auth-redirect/facebook')
        .then(function(){

        });

}

