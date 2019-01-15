const Joi = require('joi');

const basicAuthSchema = Joi.object({
  BASIC_AUTH_USERNAME:Joi.string(),
  BASIC_AUTH_PASSWORD:Joi.string()
}).unknown().required();
const {error} = Joi.validate(process.env, basicAuthSchema);
if(error){
  throw new Error(`ERROR : ${error.message}`);
}
const config = {
  BASIC_AUTH_USERNAME: process.env.AUTH_USERNAME,
  BASIC_AUTH_PASSWORD: process.env.AUTH_PASSWORD
}
module.exports = config
