import { verifyIdToken } from './../../middleware/auth';
import express from 'express';
import { extractIdToken } from '../../middleware/auth';
import controllers from './user.controllers';

const router = express.Router();

/* /api/user */
router.put(
  '/link',
  [extractIdToken, verifyIdToken],
  controllers.linkPlayerProfile
);

export default router;
