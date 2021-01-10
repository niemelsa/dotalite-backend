import { extractIdToken, verifyIdToken } from '../../middleware/auth';
import express from 'express';
import controllers from './auth.controllers';

const router = express.Router();

router.get('/', [extractIdToken, verifyIdToken], controllers.authenticateUser);

export default router;
