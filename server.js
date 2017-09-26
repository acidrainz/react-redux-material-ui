'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const authController = require('./controllers/authController');
const userController = require('./controllers/usersController');
const configurePassport = require('./config/passport-jwt-config');

const morgan = require('morgan');

const app = express();
app.set("port", process.env.PORT || 3001);

app.use(passport.initialize());
configurePassport();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/auth', authController);
app.use('/users', userController);

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});