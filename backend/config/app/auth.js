const Joi = require('joi');
require('dotenv').config()
const authSchema = Joi.object({
  AUTH_SECRET: Joi.string()
}).unknown().required();
const {error} = Joi.validate(process.env, authSchema);
if(error){
  throw new Error(`AUTH SECRET ERROR : ${error.message}`);
}
const config = {
  AUTH_SECRET: process.env.AUTH_SECRET
}
module.exports = config
