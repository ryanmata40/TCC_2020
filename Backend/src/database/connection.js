const knex =  require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.development);

connection.migrate.latest([configuration.development]);  //startar migrate always start system


module.exports = connection;
