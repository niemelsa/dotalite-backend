import { extractIdToken, verifyIdToken } from '../../middleware/auth';
import express from 'express';
import controllers from './auth.controllers';

const router = express.Router();

router.get('/signin', [extractIdToken, verifyIdToken], controllers.signIn);
router.post('/register', controllers.register);

export default router;
