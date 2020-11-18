import express from 'express';
import controller from './user.controllers';

const router = express.Router();

/* /api/user */
router
  .route('/')
  .get(controller.test)
  .post(controller.test)
  .put(controller.test);

export default router;
