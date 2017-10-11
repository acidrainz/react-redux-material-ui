'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const authController = require('./controllers/authController');
const facebookController = require('./controllers/facebookController');
const userController = require('./controllers/usersController');
const configurePassport = require('./config/passport-jwt-config');
const apiPrefix = "/api";
const morgan = require('morgan');

const app = express();


app.set("port", process.env.PORT || 3001);

app.use(passport.initialize());
configurePassport();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(apiPrefix + '/auth', authController);
app.use(apiPrefix + '/users', userController);
app.use(apiPrefix + '/facebook', facebookController);



app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});