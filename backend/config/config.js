// {
//   "development": {
//     "username": "root",
//     "password": "xwwx1111",
//     "database": "delivery",
//     "host": "mysql",
//     "port": "3306",
//     "dialect": "mysql",
//     "operatorsAliases": true
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "delivery",
//     "host": "mysql",
//     "dialect": "mysql",
//     "operatorsAliases": true
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "mysql",
//     "dialect": "mysql",
//     "operatorsAliases": true
//   }
// }

require('dotenv').config(); // this is important!
module.exports = {
"development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": "mysql",
    "operatorsAliases": true
},
"test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
},
"production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
}
};