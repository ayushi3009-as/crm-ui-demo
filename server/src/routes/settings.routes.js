import { Router } from 'express';
import { getCompanySettings, updateCompanySettings } from '../controllers/settings.controller.js';
import { authenticate } from '../middleware/auth.js';
import { authorizeRoles } from '../middleware/role.js';

const router = Router();

router.use(authenticate);
router.use(authorizeRoles('ADMIN'));

router.get('/company', getCompanySettings);
router.put('/company', updateCompanySettings);

export default router;
