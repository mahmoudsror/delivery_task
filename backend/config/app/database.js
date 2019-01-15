const Joi = require('joi');
require('dotenv').config()
const dbSchema = Joi.object({
  DB_HOST:Joi.string(),
  DB_PORT:Joi.number(),
  DB_NAME: Joi.string()
}).unknown().required()
const {error} = Joi.validate(process.env, dbSchema);
if(error){
  throw new Error(`ERROR : ${error.message}`);
}
let config={
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT,
  DB_NAME: process.env.DB_NAME,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSWORD: process.env.DB_PASSWORD
}
module.exports = config
