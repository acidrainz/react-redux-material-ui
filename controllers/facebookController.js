'use strict';

const express = require('express');
const facebookConfig = require('../config/social-config');
const router = express.Router();
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const Socials = require('../models/socials');
const clientID = facebookConfig.facebook.appId;
const clientSecret = facebookConfig.facebook.appSecret;
const callbackURL = "http://localhost:3001/api/auth-redirect/facebook/callback";
const Promise = require('bluebird');
const request = Promise.promisify(require("request"));

function getToken(url, callback) {
  let extendedToken = request(url).then(function(result) {
    var obj = JSON.parse(result.body);
    callback(obj.access_token);
  });
}

passport.use(new FacebookStrategy({
    clientID: clientID,
    clientSecret: clientSecret,
    callbackURL: callbackURL,
    profileFields: ['id', 'name', 'picture.type(large)', 'emails', 'displayName', 'about', 'gender']

  },
  function(accessToken, refreshToken, profile, done) {
    let url = `https://graph.facebook.com/v2.10/oauth/access_token?grant_type=fb_exchange_token&client_id=${clientID}&client_secret=${clientSecret}&fb_exchange_token=${accessToken}`;
    getToken(url, function(token) {
      let me = {
        "social_id": profile.id,
        "user_id": 1,
        "access_token": token,
        "display_name": profile.displayName,
        "provider": profile.provider
      }

      saveManagerData(me);

    });
    return done(null, profile);

  }
))




passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

function saveManagerData(data) {
  new Socials({ 'social_id': data.social_id }).fetch()
    .then(function(model) {
      if (model === null) {
        Socials.forge(data).save()
          .then(function(model) {
            console.log('Record save successfully');
          }).catch(function(err) {
            console.log(err)
          });
      } else {
      	console.log('Duplicate Record Error');
      }

    })
    .catch(function(err) {
      console.log(err)
    });
}


router.get('/facebook', passport.authenticate('facebook', { scope: ['user_friends', 'manage_pages', 'email'] }),
  function(req, res) {
    /*  seems not be executed  */
  });


router.get('/facebook/callback', passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/' }),
  function(req, res) {

  });



// router.get('/facebook/callback',
//   passport.authenticate('facebook', {
//     successRedirect: '/success',
//     failureRedirect: '/failure',
//   })
// );






module.exports = router;