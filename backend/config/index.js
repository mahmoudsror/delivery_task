const auth = require('./app/auth');
const basicAuth = require('./app/basicAuth');
const database = require('./app/database');
const environment = require('./app/environment');
const server = require('./app/server');

module.exports = Object.assign(auth,basicAuth,database,environment,server)
