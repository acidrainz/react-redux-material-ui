const passport = require('passport');

module.exports = passport.authenticate('jwt', { session: false });

// const express = require('express');
// const router = express.Router();
// const jwt = require('jsonwebtoken'); // used to create, sign, and verify tokens
// const securityConfig = require('../config/security-config');

// module.exports = function(req, res, next) {
//   const token = req.body.token || req.query.token || req.headers['x-access-token'];
//   // decode token
//   if (token) {
//     console.log(token)
//     // verifies secret and checks exp
//     jwt.verify(token, securityConfig.jwtSecret, function(err, decoded) {
//       if (err) {
//         return res.json({ success: false, message: 'Failed to authenticate token.' });
//       } else {
//         // if everything is good, save to request for use in other routes
//         req.decoded = decoded;
//         console.log(decoded)
//         next();
//       }
//     });

//   } else {


//     return res.status(403).send({
//       success: false,
//       message: 'No token provided.'
//     });

//   }

// }