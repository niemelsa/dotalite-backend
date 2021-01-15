import {
  HasPlayerId,
  AddFavoriteRequest,
  RemoveFavoriteRequest,
} from './../../utils/validation-schemas';
import { verifyIdToken } from './../../middleware/auth';
import express from 'express';
import { extractIdToken } from '../../middleware/auth';
import controllers from './user.controllers';
import { validate } from '../../middleware/validation';

const router = express.Router();

router.use([extractIdToken, verifyIdToken]);

/* /api/user */
router.put('/link', validate(HasPlayerId), controllers.linkPlayerProfile);

router.post('/favorite', validate(AddFavoriteRequest), controllers.addFavorite);

router.delete(
  '/favorite/:id',
  validate(RemoveFavoriteRequest),
  controllers.removeFavorite
);

export default router;
