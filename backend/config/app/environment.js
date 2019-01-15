require('dotenv').config()
const Joi = require('joi');
const envSchema = Joi.object({
  ENVIRONMENT:Joi.string()
}).unknown().required();
const {error} = Joi.validate(process.env, envSchema);
if(error){
  throw new Error(`ERROR : ${error.message}`);
}
let config = {
  ENVIRONMENT: process.env.ENVIRONMENT
}
module.exports = config
