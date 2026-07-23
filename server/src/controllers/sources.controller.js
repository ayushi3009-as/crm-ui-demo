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

export const getDashboardSourcesStats = async (req, res, next) => {
  try {
    const now = new Date();
    const thirtyDaysAgo = new Date(now.setDate(now.getDate() - 30));

    // Get all sources with their leads
    const sources = await prisma.leadSource.findMany({
      where: { isActive: true },
      include: {
        leads: {
          select: { status: true, leadScore: true, createdAt: true },
        },
      },
      orderBy: { name: 'asc' },
    });

    let totalLeadsCount = 0;
    let totalLeadsLast30 = 0;
    let totalQualifiedCount = 0;
    let totalQualifiedLast30 = 0;
    let totalConvertedCount = 0;
    let totalConvertedLast30 = 0;
    let totalScore = 0;

    const sourcesData = sources.map(source => {
      const leads = source.leads;
      const total = leads.length;
      const qualified = leads.filter(l => l.status === 'QUALIFIED').length;
      const converted = leads.filter(l => l.status === 'WON').length;
      
      const last30Leads = leads.filter(l => l.createdAt >= thirtyDaysAgo);
      totalLeadsCount += total;
      totalLeadsLast30 += last30Leads.length;
      
      totalQualifiedCount += qualified;
      totalQualifiedLast30 += last30Leads.filter(l => l.status === 'QUALIFIED').length;
      
      totalConvertedCount += converted;
      totalConvertedLast30 += last30Leads.filter(l => l.status === 'WON').length;

      leads.forEach(l => totalScore += (l.leadScore || 0));

      return {
        id: source.id,
        name: source.name,
        type: 'Digital', // Hardcoded for now, ideally added to schema
        total,
        qualified,
        converted,
        rate: total > 0 ? ((converted / total) * 100).toFixed(2) + '%' : '0.00%',
        rateNum: total > 0 ? (converted / total) * 100 : 0,
        status: 'Connected',
        color: source.color || 'text-blue-500'
      };
    });

    // Sort by total leads descending for the table
    sourcesData.sort((a, b) => b.total - a.total);

    const avgScore = totalLeadsCount > 0 ? Math.round(totalScore / totalLeadsCount) : 0;
    
    // Top performing (by rate)
    const topPerforming = [...sourcesData]
      .filter(s => s.total > 0)
      .sort((a, b) => b.rateNum - a.rateNum)
      .slice(0, 3)
      .map(s => ({ name: s.name, rate: s.rateNum }));

    res.json({
      success: true,
      data: {
        sourcesList: sourcesData,
        aggregates: {
          totalSources: sources.length,
          totalLeads: { count: totalLeadsCount, last30: totalLeadsLast30 },
          qualifiedLeads: { count: totalQualifiedCount, last30: totalQualifiedLast30 },
          convertedLeads: { count: totalConvertedCount, last30: totalConvertedLast30 },
          avgScore
        },
        topPerforming
      }
    });
  } catch (error) {
    next(error);
  }
};
