import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { authenticate } from '../middleware/auth.js';
import prisma from '../config/db.js';

const router = express.Router();

// Ensure uploads directory exists
const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only images are allowed'));
    }
  }
});

// Upload payment screenshot
router.post('/payment-screenshot', authenticate, upload.single('screenshot'), async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ success: false, message: 'No image uploaded' });
    }

    const screenshotUrl = `/uploads/${req.file.filename}`;
    const plan = req.body.plan || 'Starter';

    // Update user
    await prisma.user.update({
      where: { id: req.user.id },
      data: { 
        paymentScreenshot: screenshotUrl,
        selectedPlan: plan,
        approvalStatus: 'PENDING'
      }
    });

    res.json({
      success: true,
      message: 'Payment screenshot uploaded successfully. Pending superadmin approval.',
      data: { screenshotUrl }
    });
  } catch (error) {
    next(error);
  }
});

export default router;
