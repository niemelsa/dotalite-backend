import dotenv from 'dotenv';
import merge from 'lodash.merge';
import * as admin from 'firebase-admin';

dotenv.config();

const env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;

let credential =
  env === 'development'
    ? admin.credential.cert(require('../../serviceKey.json'))
    : admin.credential.applicationDefault();

admin.initializeApp({
  credential,
});

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
} else if (env === 'development') {
  envConfig = require('./dev').config;
}

export default merge(baseConfig, envConfig);
