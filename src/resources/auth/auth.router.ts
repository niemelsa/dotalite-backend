import { UserRequest } from './../../interfaces/user-request.interface';
import { verifyRequest, verifyToken } from './../../utils/jwt';
import express, { Request, Response } from 'express';
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

router.get('/verify', verifyRequest, (req: UserRequest, res: Response) => {
  const token = req.token;

  verifyToken(token)
    .then((user) => {
      res.send({ token, user });
    })
    .catch((error) => {
      res.status(403).end();
    });
});

export default router;
