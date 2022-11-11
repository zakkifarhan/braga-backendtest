const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../.env') });

const envVarsSchema = Joi.object()
  .keys({
    // NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
    APP_URL: Joi.string().required(),
    PORT: Joi.number().default(3000),
    DB_CONNECTION: Joi.string().required().default('mysql'),
    DB_HOST: Joi.string().required().default('localhost'),
    DB_DATABASE: Joi.string().required().default('homestead'),
    DB_PORT: Joi.number().required().default('3306'),
    DB_USERNAME: Joi.string().required().default('root'),
    DB_PASSWORD: Joi.string().required().default('secret'),
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

module.exports = {
  // env: envVars.NODE_ENV,
  port: envVars.PORT,
  app_url: envVars.APP_URL,
  database: {
    connection: envVars.DB_CONNECTION,
    host: envVars.DB_HOST,
    database: envVars.DB_DATABASE,
    port: envVars.DB_PORT,
    user: envVars.DB_USERNAME,
    password: envVars.DB_PASSWORD,
  },
};
