import express, { Request, Response } from 'express';
import controllers from './auth.controllers';

const router = express.Router();

/* /api/auth */
router
  .route('/')
  .get(controllers.test)
  .put(controllers.test)
  .delete(controllers.test);

/* /api/auth/:id */
router
  .route('/:id')
  .get(controllers.test)
  .put(controllers.test)
  .delete(controllers.test);

export default router;
