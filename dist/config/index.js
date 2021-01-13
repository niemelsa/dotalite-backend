"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var lodash_merge_1 = __importDefault(require("lodash.merge"));
dotenv_1.default.config();
var env = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 3000;
var baseConfig = {
    env: env,
    port: port,
    secrets: {
        steamKey: process.env.STEAM_KEY,
        sessionSecret: process.env.SESSION_SECRET || 'top-secret-testing',
        jwtSecret: process.env.JWT_SECRET || 'top-secret-jwt',
    },
    dbUrl: process.env.DATABASE_URL,
};
var envConfig = {};
if (env === 'test' || env === 'testing') {
    envConfig = require('./testing').config;
}
else {
    envConfig = require('./dev').config;
}
exports.default = lodash_merge_1.default(baseConfig, envConfig);
//# sourceMappingURL=index.js.map