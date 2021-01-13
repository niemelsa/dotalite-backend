"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var getPlayerData = function (req, res) {
    var info = axios_1.default.get("https://api.opendota.com/api/players/" + req.params.id);
    var wl = axios_1.default.get("https://api.opendota.com/api/players/" + req.params.id + "/wl");
    axios_1.default
        .all([info, wl])
        .then(axios_1.default.spread(function () {
        var responses = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            responses[_i] = arguments[_i];
        }
        var info = responses[0].data;
        var wins = responses[1].data.win;
        var losses = responses[1].data.lose;
        var result = __assign(__assign({}, info), { wins: wins, losses: losses });
        res.status(200).send(result);
    }))
        .catch(function (errors) {
        console.log(errors);
    });
};
exports.default = {
    getPlayerData: getPlayerData,
};
//# sourceMappingURL=players.controller.js.map