import { Router } from 'express';
import { body } from 'express-validator';
import {
  getLeads,
  getLeadById,
  createLead,
  updateLead,
  deleteLead,
  updateLeadStatus,
  assignLead,
} from '../controllers/leads.controller.js';
import { authenticate } from '../middleware/auth.js';
import { authorizeRoles } from '../middleware/role.js';
import { validate } from '../middleware/validate.js';

const router = Router();

router.use(authenticate);

router.get('/', getLeads);
router.get('/:id', getLeadById);

router.post(
  '/',
  [
    body('fullName').notEmpty().withMessage('Full name is required'),
  ],
  validate,
  createLead
);

router.put(
  '/:id',
  [
    body('fullName').optional().notEmpty().withMessage('Full name cannot be empty'),
  ],
  validate,
  updateLead
);

router.delete('/:id', authorizeRoles('ADMIN'), deleteLead);

router.patch(
  '/:id/status',
  [
    body('status').notEmpty().withMessage('Status is required'),
  ],
  validate,
  updateLeadStatus
);

router.patch(
  '/:id/assign',
  authorizeRoles('ADMIN'),
  [
    body('assignedToId').notEmpty().withMessage('Assigned user ID is required'),
  ],
  validate,
  assignLead
);

export default router;
