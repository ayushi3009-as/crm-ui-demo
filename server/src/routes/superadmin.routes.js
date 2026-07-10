import { Router } from 'express';
import { authenticate } from '../middleware/auth.js';
import { getPendingUsers, approveUser, rejectUser } from '../controllers/superadmin.controller.js';

const router = Router();

// Middleware to ensure user is SUPERADMIN
const isSuperAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'SUPERADMIN') {
    next();
  } else {
    res.status(403).json({ success: false, message: 'Access denied. Superadmin only.' });
  }
};

router.use(authenticate);
router.use(isSuperAdmin);

router.get('/pending-users', getPendingUsers);
router.post('/approve-user/:id', approveUser);
router.post('/reject-user/:id', rejectUser);

export default router;
