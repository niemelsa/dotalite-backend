import express from 'express';
import controller from './search.controller';

const router = express.Router();

router.route('/').get(controller.getSearchResults);

export default router;
