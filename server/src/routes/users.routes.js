import { Router } from 'express';
import { body } from 'express-validator';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/users.controller.js';
import { authenticate } from '../middleware/auth.js';
import { authorizeRoles } from '../middleware/role.js';
import { validate } from '../middleware/validate.js';

const router = Router();

router.use(authenticate);
router.use(authorizeRoles('ADMIN'));

router.get('/', getUsers);
router.get('/:id', getUserById);

router.post(
  '/',
  [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters'),
    body('role').optional().isIn(['ADMIN', 'SALES']).withMessage('Role must be ADMIN or SALES'),
  ],
  validate,
  createUser
);

router.put(
  '/:id',
  [
    body('name').optional().notEmpty().withMessage('Name cannot be empty'),
    body('email').optional().isEmail().withMessage('Please provide a valid email'),
    body('role').optional().isIn(['ADMIN', 'SALES']).withMessage('Role must be ADMIN or SALES'),
  ],
  validate,
  updateUser
);

router.delete('/:id', deleteUser);

export default router;
