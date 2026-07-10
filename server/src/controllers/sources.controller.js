import prisma from '../config/db.js';

export const getSources = async (req, res, next) => {
  try {
    const sources = await prisma.leadSource.findMany({
      where: { isActive: true },
      include: {
        _count: {
          select: { leads: true },
        },
      },
      orderBy: { name: 'asc' },
    });

    res.json({
      success: true,
      data: sources,
    });
  } catch (error) {
    next(error);
  }
};

export const getSourceStats = async (req, res, next) => {
  try {
    const { id } = req.params;

    const source = await prisma.leadSource.findUnique({
      where: { id },
      include: {
        leads: {
          select: { status: true },
        },
      },
    });

    if (!source) {
      return res.status(404).json({
        success: false,
        message: 'Source not found.',
      });
    }

    const totalLeads = source.leads.length;
    const qualifiedLeads = source.leads.filter((l) => l.status === 'QUALIFIED').length;
    const convertedLeads = source.leads.filter((l) => l.status === 'WON').length;
    const conversionRate = totalLeads > 0 ? Math.round((convertedLeads / totalLeads) * 100) : 0;

    res.json({
      success: true,
      data: {
        id: source.id,
        name: source.name,
        icon: source.icon,
        color: source.color,
        totalLeads,
        qualifiedLeads,
        convertedLeads,
        conversionRate,
      },
    });
  } catch (error) {
    next(error);
  }
};
