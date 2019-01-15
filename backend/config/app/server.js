const Joi = require('joi');
require('dotenv').config()
const portSchema = Joi.object({
  PORT:Joi.number()

}).unknown().required()
const {error} = Joi.validate(process.env, portSchema);
if(error){
  throw new Error(`ERROR : ${error.message}`);
}
let config = {
  PORT: process.env.PORT
}
module.exports = config
