import { Router } from 'express';
import { getStats, getLeadGrowth, getLeadSources, getRecentActivities } from '../controllers/dashboard.controller.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

router.use(authenticate);

router.get('/stats', getStats);
router.get('/lead-growth', getLeadGrowth);
router.get('/lead-sources', getLeadSources);
router.get('/recent-activities', getRecentActivities);

export default router;
