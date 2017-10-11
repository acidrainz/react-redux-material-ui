'use strict';
const sql = require('mssql')

const express = require('express');
const jwt = require('jwt-simple');
const Promise = require('bluebird');
const User = require('../models/user');
const securityConfig = require('../config/security-config');
const _ = require('lodash');
const router = express.Router();

router.get('/mssql', (req, res) => {

      sql.connect('mssql://newscorp:Sn0wflak3s!@10.60.223.171/SocialMedia').then(pool => {
    // Query

    return pool.request()
    .query('select * from dbo.postData')
}).then(result => {
    console.log(result)

    // Stored procedure


})


});




module.exports = router;