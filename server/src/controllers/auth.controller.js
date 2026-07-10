import crypto from 'crypto';
import prisma from '../config/db.js';
import { generateToken } from '../utils/jwt.js';
import { comparePassword, hashPassword } from '../utils/hash.js';
import { sendEmail } from '../utils/email.js';

export const register = async (req, res, next) => {
  try {
    const { name, email, password, companyName } = req.body;

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ success: false, message: 'Email already in use.' });
    }

    const hashedPassword = await hashPassword(password);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        approvalStatus: 'PENDING',
        role: 'SALES' // Defaulting to SALES or ADMIN depending on business logic. 
      },
    });
    
    // Also create CompanySettings for them if this is a SaaS registration
    await prisma.companySettings.create({
      data: {
        companyName: companyName || name,
        companyEmail: email
      }
    });

    const token = generateToken({ id: user.id, role: user.role });
    const { password: _, ...userWithoutPassword } = user;

    res.status(201).json({
      success: true,
      data: {
        token,
        user: userWithoutPassword,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.',
      });
    }

    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Account is deactivated. Contact admin.',
      });
    }

    if (user.approvalStatus === 'PENDING' && user.role !== 'SUPERADMIN') {
      return res.status(403).json({
        success: false,
        isPending: true,
        message: 'Your account is pending approval by a Superadmin. Have you uploaded your payment screenshot?',
      });
    }

    if (user.approvalStatus === 'REJECTED') {
      return res.status(403).json({
        success: false,
        message: 'Your registration was rejected.',
      });
    }

    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or password.',
      });
    }

    const token = generateToken({ id: user.id, role: user.role });

    const { password: _, ...userWithoutPassword } = user;

    res.json({
      success: true,
      data: {
        token,
        user: userWithoutPassword,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
    });

    // Always return success to prevent email enumeration
    if (!user) {
      return res.json({
        success: true,
        message: 'If a user with that email exists, a password reset link has been sent.',
      });
    }

    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

    await prisma.passwordResetToken.create({
      data: {
        userId: user.id,
        token,
        expiresAt,
      },
    });

    const resetUrl = `${process.env.CLIENT_URL}/reset-password?token=${token}`;

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #6366F1;">Password Reset Request</h2>
        <p>Hello ${user.name},</p>
        <p>You have requested to reset your password. Click the button below to reset it:</p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${resetUrl}" style="background-color: #6366F1; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">Reset Password</a>
        </div>
        <p>This link will expire in 1 hour.</p>
        <p>If you did not request this, please ignore this email.</p>
        <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
        <p style="color: #999; font-size: 12px;">TIVRA CRM</p>
      </div>
    `;

    try {
      await sendEmail(user.email, 'Password Reset - TIVRA CRM', html);
    } catch (emailError) {
      console.error('Failed to send reset email:', emailError.message);
    }

    res.json({
      success: true,
      message: 'If a user with that email exists, a password reset link has been sent.',
    });
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    const { token, password } = req.body;

    const resetToken = await prisma.passwordResetToken.findUnique({
      where: { token },
    });

    if (!resetToken) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or expired reset token.',
      });
    }

    if (resetToken.used) {
      return res.status(400).json({
        success: false,
        message: 'This reset token has already been used.',
      });
    }

    if (new Date() > resetToken.expiresAt) {
      return res.status(400).json({
        success: false,
        message: 'Reset token has expired.',
      });
    }

    const hashedPassword = await hashPassword(password);

    await prisma.$transaction([
      prisma.user.update({
        where: { id: resetToken.userId },
        data: { password: hashedPassword },
      }),
      prisma.passwordResetToken.update({
        where: { id: resetToken.id },
        data: { used: true },
      }),
    ]);

    res.json({
      success: true,
      message: 'Password has been reset successfully.',
    });
  } catch (error) {
    next(error);
  }
};

export const getMe = async (req, res, next) => {
  try {
    res.json({
      success: true,
      data: req.user,
    });
  } catch (error) {
    next(error);
  }
};
