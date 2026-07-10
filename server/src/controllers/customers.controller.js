import prisma from '../config/db.js';

export const getCustomers = async (req, res, next) => {
  try {
    const {
      search,
      page = 1,
      limit = 10,
      sortBy = 'createdAt',
      sortOrder = 'desc',
    } = req.query;

    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    const where = {};

    if (search) {
      where.OR = [
        { fullName: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { companyName: { contains: search, mode: 'insensitive' } },
      ];
    }

    const [customers, total] = await Promise.all([
      prisma.customer.findMany({
        where,
        include: {
          createdBy: {
            select: {
              id: true,
              name: true,
              email: true,
            },
          },
        },
        orderBy: { [sortBy]: sortOrder },
        skip,
        take: limitNum,
      }),
      prisma.customer.count({ where }),
    ]);

    res.json({
      success: true,
      data: {
        customers,
        total,
        page: pageNum,
        totalPages: Math.ceil(total / limitNum),
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getCustomerById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const customer = await prisma.customer.findUnique({
      where: { id },
      include: {
        convertedFromLead: true,
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    if (!customer) {
      return res.status(404).json({
        success: false,
        message: 'Customer not found.',
      });
    }

    res.json({
      success: true,
      data: customer,
    });
  } catch (error) {
    next(error);
  }
};

export const createCustomer = async (req, res, next) => {
  try {
    const {
      fullName,
      email,
      phone,
      companyName,
      city,
      address,
      notes,
      convertedFromLeadId,
    } = req.body;

    const customer = await prisma.customer.create({
      data: {
        fullName,
        email,
        phone,
        companyName,
        city,
        address,
        notes,
        convertedFromLeadId,
        createdById: req.user.id,
      },
      include: {
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    // If converted from lead, update lead status to WON
    if (convertedFromLeadId) {
      await prisma.lead.update({
        where: { id: convertedFromLeadId },
        data: { status: 'WON' },
      });

      await prisma.activity.create({
        data: {
          leadId: convertedFromLeadId,
          userId: req.user.id,
          type: 'STATUS_CHANGE',
          title: 'Lead converted to customer',
          description: `Lead converted to customer "${fullName}".`,
        },
      });
    }

    res.status(201).json({
      success: true,
      data: customer,
    });
  } catch (error) {
    next(error);
  }
};

export const updateCustomer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      fullName,
      email,
      phone,
      companyName,
      city,
      address,
      notes,
    } = req.body;

    const existing = await prisma.customer.findUnique({
      where: { id },
    });

    if (!existing) {
      return res.status(404).json({
        success: false,
        message: 'Customer not found.',
      });
    }

    const customer = await prisma.customer.update({
      where: { id },
      data: {
        fullName,
        email,
        phone,
        companyName,
        city,
        address,
        notes,
      },
      include: {
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    res.json({
      success: true,
      data: customer,
    });
  } catch (error) {
    next(error);
  }
};
