var dbConfig = require('./config/database-config');
var knex = require('knex')(dbConfig);
const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt'));
const securityConfig = require('./config/security-config');

function createUsersData (){
        const salt =  bcrypt.genSaltSync(securityConfig.saltRounds);
        const hashedPassword =  bcrypt.hashSync('password', salt);
  return knex.insert(
                [
                  {email: 'ian.pansensoy@news.com.au',password:hashedPassword,created_at:new Date().toISOString().slice(0, 19).replace('T', ' '), updated_at:new Date().toISOString().slice(0, 19).replace('T', ' ')}
                ], 'id'
        ).into('users');
}
function createRolesData(){
  return knex.insert(
                [
                  {authority: 'ROLE_ADMIN'},
                  {authority: 'ROLE_USER'}
                ], 'id'
        ).into('role');

}
function createUserRolesData (){
  return knex.insert(
                [
                  {user_id: 1,role_id:1}
                ]
        ).into('user_role');
}

createUsersData()
  .then(function() {
    console.log('User data created!!');
    process.exit(0);
  })
  .catch(function(error) {
    throw error;
  });

createRolesData()
  .then(function() {
    console.log('Roles data created!!');
    process.exit(0);
  })
  .catch(function(error) {
    throw error;
  });


  createUserRolesData()
  .then(function() {
    console.log('User roles data created!!');
    process.exit(0);
  })
  .catch(function(error) {
    throw error;
  });