import { UserRequest } from './../../interfaces/user-request.interface';
import { verifyRequestHeader, verifyJwtToken } from './../../utils/jwt';
import express, { Response, Request } from 'express';
import passport from 'passport';
import controllers from './auth.controllers';

const router = express.Router();

router.get('/:token', controllers.fetchUserInfo);

// steam authentication
// router.get('/steam', passport.authenticate('steam', { failureRedirect: '/' }));

// steam auth callback
// router.get(
//   '/steam/return',
//   passport.authenticate('steam', { session: false, failureRedirect: '/' }),
//   controllers.handleLogin
// );

// verify token
router.get('/verify', verifyRequestHeader, controllers.verifyToken);

export default router;
