"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var getSearchResults = function (req, res) {
    var query = req.query.query;
    var players = axios_1.default.get("https://api.opendota.com/api/search/?q=" + query);
    var others = axios_1.default.get("https://api.stratz.com/api/v1/search/?query=" + query);
    console.log('hello?');
    axios_1.default
        .all([players, others])
        .then(function (responses) {
        var players = responses[0].data;
        var _a = responses[1].data, teams = _a.teams, matches = _a.matches, tournaments = _a.leagues, proPlayers = _a.proPlayers;
        var response = {
            players: players,
            teams: teams,
            matches: matches,
            tournaments: tournaments,
            proPlayers: proPlayers,
        };
        console.log(response);
        res.status(200).send(response);
    })
        .catch(function (error) {
        console.log(error);
    });
};
exports.default = {
    getSearchResults: getSearchResults,
};
//# sourceMappingURL=search.controller.js.map