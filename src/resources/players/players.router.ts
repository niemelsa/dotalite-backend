import express from 'express';
import controller from './players.controller';

const router = express.Router();

router.route('/');

router.route('/:id').get(controller.getOnePlayer);

export default router;
