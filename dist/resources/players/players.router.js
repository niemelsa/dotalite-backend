"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var players_controller_1 = __importDefault(require("./players.controller"));
var router = express_1.default.Router();
router.route('/');
router.route('/:id').get(players_controller_1.default.getPlayerData);
exports.default = router;
//# sourceMappingURL=players.router.js.map