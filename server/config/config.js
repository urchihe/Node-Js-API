const Joi = require('joi');

// require and configure dotenv, will load vars in .env in PROCESS.ENV
require('dotenv').config();

// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow(['development', 'production', 'test', 'provision'])
    .default('development'),
  PORT: Joi.number()
    .default(8000),
  JWT_SECRET: Joi.string().required()
    .description('JWT Secret required to sign'),
  
  POSTGRE_USERNAME: Joi.string().required()
    .description('POSTGRE DB USERNAME'),
  POSTGRE_PASSWORD: Joi.string().required(),
    
  POSTGRE_DATABASE: Joi.string().required(),
   
  POSTGRE_HOST: Joi.string().required(),
    
  POSTGRE_DIALECT: Joi.string().required(),
   
   
  
   
}).unknown()
  .required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const config = {
  env: envVars.NODE_ENV,
  port: envVars.PORT,
  jwtSecret: envVars.JWT_SECRET,
  db: {
    use_env_variable: envVars.USE_ENV_VARIABLE,
    username: envVars.POSTGRE_USERNAME,
    password: envVars.POSTGRE_PASSWORD,
    database: envVars.POSTGRE_DATABASE,
    host: envVars.POSTGRE_HOST,
    dialect: envVars.POSTGRE_DIALECT
  }
};

module.exports = config;