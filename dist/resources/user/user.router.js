"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = require("./../../middleware/auth");
var express_1 = __importDefault(require("express"));
var auth_2 = require("../../middleware/auth");
var user_controllers_1 = __importDefault(require("./user.controllers"));
var router = express_1.default.Router();
/* /api/user */
router.put('/link', [auth_2.extractIdToken, auth_1.verifyIdToken], user_controllers_1.default.linkPlayerProfile);
exports.default = router;
//# sourceMappingURL=user.router.js.map