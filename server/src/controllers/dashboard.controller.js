import prisma from '../config/db.js';

export const getStats = async (req, res, next) => {
  try {
    const now = new Date();
    const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
    const sixtyDaysAgo = new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000);

    // Current period stats
    const [totalLeads, newLeads, qualifiedLeads, convertedLeads] = await Promise.all([
      prisma.lead.count(),
      prisma.lead.count({
        where: { createdAt: { gte: thirtyDaysAgo } },
      }),
      prisma.lead.count({
        where: { status: 'QUALIFIED' },
      }),
      prisma.lead.count({
        where: { status: 'WON' },
      }),
    ]);

    // Previous period stats for comparison
    const [prevNewLeads, prevQualifiedLeads, prevConvertedLeads] = await Promise.all([
      prisma.lead.count({
        where: {
          createdAt: { gte: sixtyDaysAgo, lt: thirtyDaysAgo },
        },
      }),
      prisma.lead.count({
        where: {
          status: 'QUALIFIED',
          createdAt: { lt: thirtyDaysAgo },
        },
      }),
      prisma.lead.count({
        where: {
          status: 'WON',
          createdAt: { lt: thirtyDaysAgo },
        },
      }),
    ]);

    const calcChange = (current, previous) => {
      if (previous === 0) return current > 0 ? 100 : 0;
      return Math.round(((current - previous) / previous) * 100);
    };

    res.json({
      success: true,
      data: {
        totalLeads: {
          value: totalLeads,
          change: null,
        },
        newLeads: {
          value: newLeads,
          change: calcChange(newLeads, prevNewLeads),
        },
        qualifiedLeads: {
          value: qualifiedLeads,
          change: calcChange(qualifiedLeads, prevQualifiedLeads),
        },
        convertedLeads: {
          value: convertedLeads,
          change: calcChange(convertedLeads, prevConvertedLeads),
        },
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getLeadGrowth = async (req, res, next) => {
  try {
    const months = [];
    const now = new Date();

    for (let i = 5; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const nextMonth = new Date(now.getFullYear(), now.getMonth() - i + 1, 1);

      const count = await prisma.lead.count({
        where: {
          createdAt: {
            gte: date,
            lt: nextMonth,
          },
        },
      });

      const monthName = date.toLocaleString('en-US', { month: 'short', year: 'numeric' });
      months.push({ month: monthName, count });
    }

    res.json({
      success: true,
      data: months,
    });
  } catch (error) {
    next(error);
  }
};

export const getLeadSources = async (req, res, next) => {
  try {
    const sources = await prisma.leadSource.findMany({
      where: { isActive: true },
      select: {
        id: true,
        name: true,
        color: true,
        _count: {
          select: { leads: true },
        },
      },
    });

    const result = sources.map((source) => ({
      name: source.name,
      count: source._count.leads,
      color: source.color,
    }));

    res.json({
      success: true,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const getRecentActivities = async (req, res, next) => {
  try {
    const activities = await prisma.activity.findMany({
      take: 15,
      orderBy: { createdAt: 'desc' },
      include: {
        user: {
          select: { name: true },
        },
        lead: {
          select: { fullName: true },
        },
      },
    });

    res.json({
      success: true,
      data: activities,
    });
  } catch (error) {
    next(error);
  }
};
