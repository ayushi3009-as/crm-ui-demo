import prisma from '../config/db.js';

export const getCompanySettings = async (req, res, next) => {
  try {
    let settings = await prisma.companySettings.findFirst();

    if (!settings) {
      settings = await prisma.companySettings.create({
        data: {
          companyName: 'TIVRA',
          companyEmail: 'info@tivra.com',
          timezone: 'Asia/Kolkata',
          dateFormat: 'DD/MM/YYYY',
          currency: 'INR',
        },
      });
    }

    res.json({
      success: true,
      data: settings,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCompanySettings = async (req, res, next) => {
  try {
    const {
      companyName,
      companyEmail,
      companyPhone,
      companyAddress,
      companyLogo,
      companyWebsite,
      timezone,
      dateFormat,
      currency,
    } = req.body;

    let settings = await prisma.companySettings.findFirst();

    if (!settings) {
      settings = await prisma.companySettings.create({
        data: {
          companyName,
          companyEmail,
          companyPhone,
          companyAddress,
          companyLogo,
          companyWebsite,
          timezone,
          dateFormat,
          currency,
        },
      });
    } else {
      settings = await prisma.companySettings.update({
        where: { id: settings.id },
        data: {
          companyName,
          companyEmail,
          companyPhone,
          companyAddress,
          companyLogo,
          companyWebsite,
          timezone,
          dateFormat,
          currency,
        },
      });
    }

    res.json({
      success: true,
      data: settings,
    });
  } catch (error) {
    next(error);
  }
};
