import dotenv from 'dotenv';
import merge from 'lodash.merge';

dotenv.config();

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;

const baseConfig = {
  env,
  port,
  secrets: {
    steamKey: process.env.STEAM_KEY,
    sessionSecret: process.env.SESSION_SECRET || 'top-secret-testing',
    jwtSecret: process.env.JWT_SECRET || 'top-secret-jwt',
  },
  dbUrl: process.env.DATABASE_URL,
};

let envConfig = {};

if (env === 'test' || env === 'testing') {
  envConfig = require('./testing').config;
} else {
  envConfig = require('./dev').config;
}

export default merge(baseConfig, envConfig);
