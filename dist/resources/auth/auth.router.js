"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = require("../../middleware/auth");
var express_1 = __importDefault(require("express"));
var auth_controllers_1 = __importDefault(require("./auth.controllers"));
var router = express_1.default.Router();
router.get('/signin', [auth_1.extractIdToken, auth_1.verifyIdToken], auth_controllers_1.default.signIn);
exports.default = router;
//# sourceMappingURL=auth.router.js.map