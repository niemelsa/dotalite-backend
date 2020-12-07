import express from 'express';
import controller from './players.controller';

const router = express.Router();

router.route('/');

router.route('/:id').get(controller.getPlayerData);

export default router;
