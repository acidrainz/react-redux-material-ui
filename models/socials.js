'use strict';

const bookshelf = require('../config/bookshelf-instance');
const User = require('./user');

module.exports = bookshelf.Model.extend({
  tableName: 'social_managers',
  hasTimestamps: ['created_at', 'updated_at'],

  users() {
    return this.hasOne(User, 'users');
  }

});