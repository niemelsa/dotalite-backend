"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var search_controller_1 = __importDefault(require("./search.controller"));
var router = express_1.default.Router();
router.route('/').get(search_controller_1.default.getSearchResults);
exports.default = router;
//# sourceMappingURL=search.router.js.map