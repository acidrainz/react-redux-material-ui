'use strict';

const express = require('express');
const User = require('../models/user');
const jwtAuth = require('../middleware/jwt-authenticate');
const authorizedRoles = require('../middleware/roles-authorize');
const router = express.Router();
const passport = require('passport');

router.get('/', jwtAuth,function(req, res) {
    User.fetchAll().then(function(users) {
        res.json(users);
    });
});
router.get('/securedArea', passport.authenticate('jwt', { session: false }), authorizedRoles('ROLE_ADMIN'), (req, res) => {
    res.json({messge: "You made it to the secure area"});
});





module.exports = router;