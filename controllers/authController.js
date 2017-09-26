'use strict';

const express = require('express');
const jwt = require('jwt-simple');
const Promise = require('bluebird');
const User = require('../models/user');
const securityConfig = require('../config/security-config');
const _ = require('lodash');
const router = express.Router();

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  Promise.coroutine(function*() {
    const user = yield User.where('email', email).fetch();
    if (!user) { res.json({ success: false, message: 'Authentication failed. User not found.' }); };
    const isValidPassword = yield user.validPassword(password);
    if (isValidPassword) {
      const token = jwt.encode(user.omit('password'), securityConfig.jwtSecret);
      res.json({ success: true, token: `jwt ${token}` });
    } else {
      res.json({ success: false, message: 'Authentication failed. Wrong password.' });
    }
  })().catch(err => console.log(err));
});

router.post('/register', (req, res) => {
  const { email, password } = req.body;
  User.forge({ email, password }).save()
    .then(user => res.json(user.omit('password')));
});


module.exports = router;