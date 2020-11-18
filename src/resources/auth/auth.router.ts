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

export default router;
