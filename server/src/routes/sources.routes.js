import { Router } from 'express';
import { getSources, getSourceStats } from '../controllers/sources.controller.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

router.use(authenticate);

router.get('/', getSources);
router.get('/:id/stats', getSourceStats);

export default router;
