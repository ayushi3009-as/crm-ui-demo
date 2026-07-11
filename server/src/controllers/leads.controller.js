import prisma from '../config/db.js';

export const getLeads = async (req, res, next) => {
  try {
    const {
      search,
      status,
      sourceId,
      assignedToId,
      dateFilter,
      sortBy = 'createdAt',
      sortOrder = 'desc',
      page = 1,
      limit = 10,
    } = req.query;

    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    const where = {};

    if (search) {
      where.OR = [
        { fullName: { contains: search } },
        { email: { contains: search } },
        { phone: { contains: search } },
        { companyName: { contains: search } },
      ];
    }

    if (status) {
      where.status = status;
    }

    if (sourceId) {
      where.sourceId = sourceId;
    }

    if (assignedToId) {
      where.assignedToId = assignedToId;
    }

    if (dateFilter) {
      const now = new Date();
      if (dateFilter === 'today') {
        where.createdAt = { gte: new Date(now.setHours(0,0,0,0)) };
      } else if (dateFilter === 'this_week') {
        const firstDay = new Date(now.setDate(now.getDate() - now.getDay()));
        firstDay.setHours(0,0,0,0);
        where.createdAt = { gte: firstDay };
      } else if (dateFilter === 'this_month') {
        where.createdAt = { gte: new Date(now.getFullYear(), now.getMonth(), 1) };
      } else if (dateFilter === 'this_year') {
        where.createdAt = { gte: new Date(now.getFullYear(), 0, 1) };
      } else if (dateFilter === 'past_6_months') {
        where.createdAt = { gte: new Date(now.setMonth(now.getMonth() - 6)) };
      } else if (dateFilter === 'past_2_years') {
        where.createdAt = { gte: new Date(now.setFullYear(now.getFullYear() - 2)) };
      }
    }

    const [leads, total] = await Promise.all([
      prisma.lead.findMany({
        where,
        include: {
          source: true,
          assignedTo: {
            select: {
              id: true,
              name: true,
              email: true,
              avatar: true,
            },
          },
        },
        orderBy: { [sortBy]: sortOrder },
        skip,
        take: limitNum,
      }),
      prisma.lead.count({ where }),
    ]);

    res.json({
      success: true,
      data: {
        leads,
        total,
        page: pageNum,
        totalPages: Math.ceil(total / limitNum),
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getLeadById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const lead = await prisma.lead.findUnique({
      where: { id },
      include: {
        source: true,
        assignedTo: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
            phone: true,
          },
        },
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
        activities: {
          orderBy: { createdAt: 'desc' },
          include: {
            user: {
              select: {
                id: true,
                name: true,
                avatar: true,
              },
            },
          },
        },
      },
    });

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found.',
      });
    }

    res.json({
      success: true,
      data: lead,
    });
  } catch (error) {
    next(error);
  }
};

export const createLead = async (req, res, next) => {
  try {
    const {
      fullName,
      email,
      phone,
      companyName,
      sourceId,
      status,
      leadScore,
      description,
      city,
      interest,
      assignedToId,
      newSourceName,
      newAssignedToName
    } = req.body;

    let finalSourceId = sourceId;
    if (newSourceName) {
      let source = await prisma.leadSource.findFirst({ where: { name: newSourceName } });
      if (!source) {
        source = await prisma.leadSource.create({
          data: { name: newSourceName }
        });
      }
      finalSourceId = source.id;
    }

    let finalAssignedToId = assignedToId;
    if (newAssignedToName) {
      let user = await prisma.user.findFirst({ where: { name: newAssignedToName } });
      if (!user) {
        user = await prisma.user.create({
          data: {
            name: newAssignedToName,
            email: `dummy_${Date.now()}@tivra.crm`,
            password: 'dummy_password', // Temporary password
            role: 'SALES'
          }
        });
      }
      finalAssignedToId = user.id;
    }

    const lead = await prisma.lead.create({
      data: {
        fullName,
        email,
        phone,
        companyName,
        sourceId: finalSourceId,
        status: status || 'NEW',
        leadScore: leadScore || 0,
        description,
        city,
        interest,
        assignedToId: finalAssignedToId,
        createdById: req.user.id,
      },
      include: {
        source: true,
        assignedTo: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
          },
        },
      },
    });

    await prisma.activity.create({
      data: {
        leadId: lead.id,
        userId: req.user.id,
        type: 'NOTE',
        title: 'Lead created',
        description: `Lead "${fullName}" was created.`,
      },
    });

    res.status(201).json({
      success: true,
      data: lead,
    });
  } catch (error) {
    next(error);
  }
};

export const updateLead = async (req, res, next) => {
  try {
    const { id } = req.params;
    const {
      fullName,
      email,
      phone,
      companyName,
      sourceId,
      status,
      leadScore,
      description,
      city,
      interest,
      assignedToId,
    } = req.body;

    const existingLead = await prisma.lead.findUnique({
      where: { id },
    });

    if (!existingLead) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found.',
      });
    }

    const lead = await prisma.lead.update({
      where: { id },
      data: {
        fullName,
        email,
        phone,
        companyName,
        sourceId,
        status,
        leadScore,
        description,
        city,
        interest,
        assignedToId,
      },
      include: {
        source: true,
        assignedTo: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
          },
        },
      },
    });

    // Track status change
    if (status && status !== existingLead.status) {
      await prisma.activity.create({
        data: {
          leadId: id,
          userId: req.user.id,
          type: 'STATUS_CHANGE',
          title: 'Status changed',
          description: `Status changed from ${existingLead.status} to ${status}.`,
        },
      });
    }

    res.json({
      success: true,
      data: lead,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteLead = async (req, res, next) => {
  try {
    const { id } = req.params;

    const lead = await prisma.lead.findUnique({
      where: { id },
    });

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found.',
      });
    }

    await prisma.lead.delete({
      where: { id },
    });

    res.json({
      success: true,
      message: 'Lead deleted successfully.',
    });
  } catch (error) {
    next(error);
  }
};

export const updateLeadStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const existingLead = await prisma.lead.findUnique({
      where: { id },
    });

    if (!existingLead) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found.',
      });
    }

    const lead = await prisma.lead.update({
      where: { id },
      data: { status },
      include: {
        source: true,
        assignedTo: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
          },
        },
      },
    });

    await prisma.activity.create({
      data: {
        leadId: id,
        userId: req.user.id,
        type: 'STATUS_CHANGE',
        title: 'Status changed',
        description: `Status changed from ${existingLead.status} to ${status}.`,
      },
    });

    res.json({
      success: true,
      data: lead,
    });
  } catch (error) {
    next(error);
  }
};

export const assignLead = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { assignedToId } = req.body;

    const existingLead = await prisma.lead.findUnique({
      where: { id },
    });

    if (!existingLead) {
      return res.status(404).json({
        success: false,
        message: 'Lead not found.',
      });
    }

    const assignedUser = await prisma.user.findUnique({
      where: { id: assignedToId },
      select: { id: true, name: true },
    });

    if (!assignedUser) {
      return res.status(404).json({
        success: false,
        message: 'User not found.',
      });
    }

    const lead = await prisma.lead.update({
      where: { id },
      data: { assignedToId },
      include: {
        source: true,
        assignedTo: {
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
          },
        },
      },
    });

    await prisma.activity.create({
      data: {
        leadId: id,
        userId: req.user.id,
        type: 'ASSIGNMENT',
        title: 'Lead assigned',
        description: `Lead assigned to ${assignedUser.name}.`,
      },
    });

    res.json({
      success: true,
      data: lead,
    });
  } catch (error) {
    next(error);
  }
};
