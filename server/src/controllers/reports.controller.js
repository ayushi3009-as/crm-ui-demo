import prisma from '../config/db.js';

export const getLeadReport = async (req, res, next) => {
  try {
    const { dateFrom, dateTo, status } = req.query;

    const where = {};

    if (dateFrom || dateTo) {
      where.createdAt = {};
      if (dateFrom) where.createdAt.gte = new Date(dateFrom);
      if (dateTo) where.createdAt.lte = new Date(dateTo);
    }

    if (status) {
      where.status = status;
    }

    // Status breakdown
    const statusBreakdown = await prisma.lead.groupBy({
      by: ['status'],
      _count: { status: true },
      where: {
        ...(dateFrom || dateTo
          ? {
              createdAt: {
                ...(dateFrom && { gte: new Date(dateFrom) }),
                ...(dateTo && { lte: new Date(dateTo) }),
              },
            }
          : {}),
      },
    });

    const statusData = statusBreakdown.map((item) => ({
      status: item.status,
      count: item._count.status,
    }));

    // Filtered leads
    const leads = await prisma.lead.findMany({
      where,
      include: {
        source: true,
        assignedTo: {
          select: { id: true, name: true },
        },
      },
      orderBy: { createdAt: 'desc' },
      take: 100,
    });

    res.json({
      success: true,
      data: {
        statusBreakdown: statusData,
        leads,
        total: leads.length,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getConversionReport = async (req, res, next) => {
  try {
    const statuses = ['NEW', 'CONTACTED', 'QUALIFIED', 'PROPOSAL', 'NEGOTIATION', 'WON', 'LOST'];

    const funnel = await Promise.all(
      statuses.map(async (status) => {
        const count = await prisma.lead.count({
          where: { status },
        });
        return { status, count };
      })
    );

    const totalLeads = await prisma.lead.count();
    const wonLeads = await prisma.lead.count({ where: { status: 'WON' } });
    const conversionRate = totalLeads > 0 ? Math.round((wonLeads / totalLeads) * 100 * 100) / 100 : 0;

    res.json({
      success: true,
      data: {
        funnel,
        totalLeads,
        wonLeads,
        conversionRate,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getSourceReport = async (req, res, next) => {
  try {
    const sources = await prisma.leadSource.findMany({
      where: { isActive: true },
      include: {
        leads: {
          select: { status: true },
        },
      },
    });

    const report = sources.map((source) => {
      const totalLeads = source.leads.length;
      const qualifiedLeads = source.leads.filter((l) =>
        ['QUALIFIED', 'PROPOSAL', 'NEGOTIATION', 'WON'].includes(l.status)
      ).length;
      const convertedLeads = source.leads.filter((l) => l.status === 'WON').length;
      const conversionRate = totalLeads > 0 ? Math.round((convertedLeads / totalLeads) * 100 * 100) / 100 : 0;

      return {
        sourceName: source.name,
        sourceColor: source.color,
        totalLeads,
        qualifiedLeads,
        convertedLeads,
        conversionRate,
      };
    });

    res.json({
      success: true,
      data: report,
    });
  } catch (error) {
    next(error);
  }
};
