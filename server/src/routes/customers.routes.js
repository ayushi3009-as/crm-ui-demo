import { Router } from 'express';
import { body } from 'express-validator';
import {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
} from '../controllers/customers.controller.js';
import { authenticate } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';

const router = Router();

router.use(authenticate);

router.get('/', getCustomers);
router.get('/:id', getCustomerById);

router.post(
  '/',
  [
    body('fullName').notEmpty().withMessage('Full name is required'),
  ],
  validate,
  createCustomer
);

router.put(
  '/:id',
  [
    body('fullName').optional().notEmpty().withMessage('Full name cannot be empty'),
  ],
  validate,
  updateCustomer
);

export default router;
