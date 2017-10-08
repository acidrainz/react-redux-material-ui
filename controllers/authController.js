'use strict';

const express = require('express');
const jwt = require('jwt-simple');
const Promise = require('bluebird');
const User = require('../models/user');
const securityConfig = require('../config/security-config');
const _ = require('lodash');
const router = express.Router();

router.post('/login', (req, res) => {
  const { email,password } = req.body;
  Promise.coroutine(function*() {
    const user = yield User.where('email', email).fetch();
    // if (!user) {
    //   res.status(500).json({message: 'Authentication failed. No User Found' });
    // }else{
    //     const isValidPassword = yield user.validPassword(password);
    //     if (isValidPassword) {
    //       const token = jwt.encode(user.omit('password'), securityConfig.jwtSecret);
    //       res.status(200).json({token: `jwt ${token}`,user:user });
    //     } else {
    //       res.status(500).json({message: 'Authentication failed. Wrong password.' });
    //     }

    // }
    // const isValidPassword = yield user.validPassword(password);
    // if (isValidPassword) {
    //   const token = jwt.encode(user.omit('password'), securityConfig.jwtSecret);
    //   res.json({ success: true, token: `jwt ${token}`,user:user });
    // } else {
    //   res.status(301).json({ success: false, message: 'Authentication failed. Wrong password.' });
    // }
        const isValidPassword = yield user.validPassword(password);
        if (isValidPassword) {
            const token = jwt.encode(user.omit('password'), securityConfig.jwtSecret);
            res.status(200).json({success: true, token: `JWT ${token}`,user:user});
        } else {
            res.status(500).json({success: false, msg: 'Authentication failed'});
        }
  })().catch(err => console.log(err));
});

router.post('/register', (req, res) => {
  const { email, password } = req.body;
  User.forge({ email, password }).save()
    .then(user => res.json(user.omit('password')));
});


module.exports = router;