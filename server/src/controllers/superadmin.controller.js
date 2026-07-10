import prisma from '../config/db.js';

export const getPendingUsers = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany({
      where: {
        approvalStatus: 'PENDING',
        role: 'SALES' // Exclude other admins
      },
      select: {
        id: true,
        name: true,
        email: true,
        paymentScreenshot: true,
        selectedPlan: true,
        createdAt: true
      },
      orderBy: { createdAt: 'desc' }
    });

    res.json({ success: true, data: users });
  } catch (error) {
    next(error);
  }
};

export const approveUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.update({
      where: { id },
      data: { approvalStatus: 'APPROVED' }
    });

    res.json({ success: true, message: 'User approved successfully' });
  } catch (error) {
    next(error);
  }
};

export const rejectUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.update({
      where: { id },
      data: { approvalStatus: 'REJECTED' }
    });

    res.json({ success: true, message: 'User rejected successfully' });
  } catch (error) {
    next(error);
  }
};
