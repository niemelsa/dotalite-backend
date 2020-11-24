import { UserRequest } from './../../interfaces/user-request.interface';
import { verifyRequestHeader, verifyJwtToken } from './../../utils/jwt';
import express, { Response } from 'express';
import passport from 'passport';
import controllers from './auth.controllers';

const router = express.Router();

// steam authentication
router.get('/steam', passport.authenticate('steam', { failureRedirect: '/' }));

// steam auth callback
router.get(
  '/steam/return',
  passport.authenticate('steam', { session: false, failureRedirect: '/' }),
  controllers.handleLogin
);

// verify token
router.get(
  '/verify',
  verifyRequestHeader,
  (req: UserRequest, res: Response) => {
    console.log('VERIFYING TOKEN');
    const token = req.token;

    verifyJwtToken(token)
      .then((user) => {
        res.send({ token, user });
      })
      .catch((error) => {
        res.status(403).send(error);
      });
  }
);

export default router;
