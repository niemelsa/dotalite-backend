"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyIdToken = exports.extractIdToken = void 0;
var admin = __importStar(require("firebase-admin"));
exports.extractIdToken = function (req, res, next) {
    var bearerHeader = req.header('Authorization');
    if (typeof bearerHeader !== 'undefined') {
        var bearerToken = bearerHeader.split(' ')[1];
        req.idToken = bearerToken;
        next();
    }
    else {
        res.status(403).send({ message: 'Authorization header error' });
    }
};
exports.verifyIdToken = function (req, res, next) {
    var idToken = req.idToken;
    admin
        .auth()
        .verifyIdToken(idToken)
        .then(function (user) {
        req.user = user;
        next();
    })
        .catch(function (error) {
        console.log(error);
        res.status(403).send({ message: 'Authorization header error' });
    });
};
//# sourceMappingURL=auth.js.map