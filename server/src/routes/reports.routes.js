import { Router } from 'express';
import { getLeadReport, getConversionReport, getSourceReport } from '../controllers/reports.controller.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

router.use(authenticate);

router.get('/leads', getLeadReport);
router.get('/conversions', getConversionReport);
router.get('/sources', getSourceReport);

export default router;
