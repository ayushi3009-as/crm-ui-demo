'use client';
import { 
  HiOutlineBriefcase, HiOutlinePlus, HiOutlineArrowDownTray,
  HiOutlineAdjustmentsHorizontal, HiOutlineMagnifyingGlass,
  HiOutlineBanknotes, HiOutlineChartBar, HiOutlineTrophy
} from 'react-icons/hi2';
import StatCard from '@/components/dashboard/StatCard';

const dealsData = [
  { id: 1, name: 'Enterprise CRM Implementation', company: 'Tech Solutions Pvt. Ltd.', amount: '₹12,50,000', stage: 'Negotiation', stageColor: 'bg-orange-100 text-orange-700', prob: '80%', closeDate: '15 Jul, 2024', owner: 'Vikash Kumar', avatar: 'https://i.pravatar.cc/150?u=3' },
  { id: 2, name: 'Marketing Automation Setup', company: 'Creative Agency', amount: '₹4,20,000', stage: 'Proposal', stageColor: 'bg-blue-100 text-blue-700', prob: '50%', closeDate: '28 Jul, 2024', owner: 'Priya Singh', avatar: 'https://i.pravatar.cc/150?u=2' },
  { id: 3, name: 'Annual Software License', company: 'Verma Enterprises', amount: '₹8,90,000', stage: 'Closed Won', stageColor: 'bg-emerald-100 text-emerald-700', prob: '100%', closeDate: '02 Jun, 2024', owner: 'Anam Verma', avatar: 'https://i.pravatar.cc/150?u=6' },
  { id: 4, name: 'Sales Team Training', company: 'Bright Future Ltd.', amount: '₹1,50,000', stage: 'Discovery', stageColor: 'bg-purple-100 text-purple-700', prob: '20%', closeDate: '15 Aug, 2024', owner: 'Rahul Sharma', avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: 5, name: 'Cloud Migration Project', company: 'Digital World', amount: '₹25,00,000', stage: 'Closed Lost', stageColor: 'bg-red-100 text-red-700', prob: '0%', closeDate: '10 May, 2024', owner: 'Vikash Kumar', avatar: 'https://i.pravatar.cc/150?u=3' },
  { id: 6, name: 'Custom API Integration', company: 'NextGen Marketing', amount: '₹3,75,000', stage: 'Negotiation', stageColor: 'bg-orange-100 text-orange-700', prob: '90%', closeDate: '20 Jul, 2024', owner: 'Anam Verma', avatar: 'https://i.pravatar.cc/150?u=6' },
];

export default function DealsPage() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
            <HiOutlineBriefcase className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900">Deals</h1>
            <p className="text-sm text-slate-500">Track and manage your sales opportunities</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors">
            <HiOutlineArrowDownTray className="w-4 h-4" /> Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors">
            <HiOutlinePlus className="w-4 h-4" /> Add Deal
          </button>
        </div>
      </div>

      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard 
          title="Total Deals" value="1,245" change="8.4%" changeType="increase" 
          icon={HiOutlineBriefcase} iconBg="bg-blue-100" iconColor="text-blue-600" 
        />
        <StatCard 
          title="Open Deals Value" value="₹48.2L" change="12.5%" changeType="increase" 
          icon={HiOutlineBanknotes} iconBg="bg-orange-100" iconColor="text-orange-600" 
        />
        <StatCard 
          title="Won Deals Value" value="₹1.4Cr" change="24.2%" changeType="increase" 
          icon={HiOutlineTrophy} iconBg="bg-emerald-100" iconColor="text-emerald-600" 
        />
        <StatCard 
          title="Avg Deal Size" value="₹3.8L" change="2.1%" changeType="increase" 
          icon={HiOutlineChartBar} iconBg="bg-purple-100" iconColor="text-purple-600" subtitle="vs last month"
        />
      </div>

      {/* Table Section */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        {/* Tabs & Filters */}
        <div className="px-5 border-b border-slate-200 flex flex-col xl:flex-row xl:items-center justify-between gap-4 pt-2">
          {/* Tabs */}
          <div className="flex gap-6 overflow-x-auto hide-scrollbar">
            {['All Deals', 'My Deals', 'Open Deals', 'Won Deals', 'Lost Deals'].map((tab, i) => (
              <button key={i} className={`whitespace-nowrap pb-3 pt-2 text-sm font-semibold border-b-2 transition-colors ${i === 0 ? 'border-orange-600 text-orange-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}>
                {tab}
              </button>
            ))}
          </div>
          {/* Filters */}
          <div className="flex items-center gap-3 pb-3 xl:pb-0">
            <select className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none text-slate-700 font-medium">
              <option>All Stages</option>
              <option>Discovery</option>
              <option>Proposal</option>
              <option>Negotiation</option>
            </select>
            <button className="flex items-center gap-1.5 px-3 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-50 transition-colors">
              <HiOutlineAdjustmentsHorizontal className="w-4 h-4" /> Filter
            </button>
            <div className="relative">
              <HiOutlineMagnifyingGlass className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Search deals..." className="text-xs border border-slate-200 rounded-lg pl-9 pr-3 py-2 outline-none focus:border-orange-500 w-48" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="py-3 px-4 w-12"><input type="checkbox" className="rounded border-slate-300 text-orange-600 focus:ring-orange-500" /></th>
                <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Deal Name</th>
                <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</th>
                <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Stage</th>
                <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-center">Probability</th>
                <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Close Date</th>
                <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Deal Owner</th>
                <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {dealsData.map((deal) => (
                <tr key={deal.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-4"><input type="checkbox" className="rounded border-slate-300 text-orange-600 focus:ring-orange-500" /></td>
                  <td className="py-3 px-4">
                    <p className="text-sm font-bold text-blue-600 hover:underline cursor-pointer">{deal.name}</p>
                    <p className="text-[11px] text-slate-500">{deal.company}</p>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm font-bold text-slate-700 block">{deal.amount}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md ${deal.stageColor}`}>{deal.stage}</span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-xs font-bold text-slate-700">{deal.prob}</span>
                    <div className="w-16 h-1.5 bg-slate-100 rounded-full mx-auto mt-1 overflow-hidden">
                      <div className="h-full bg-orange-500" style={{ width: deal.prob }}></div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-xs text-slate-600 font-medium">{deal.closeDate}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <img src={deal.avatar} alt="" className="w-6 h-6 rounded-full bg-slate-200" />
                      <span className="text-xs font-medium text-slate-700">{deal.owner}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex justify-end gap-2 text-slate-400">
                      <button className="hover:text-orange-600">✏️</button>
                      <button className="hover:text-orange-600">⋮</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">Showing 1 to 6 of 1,245 deals</span>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 text-sm">&lt;</button>
            <button className="w-8 h-8 rounded-lg bg-orange-50 text-orange-600 font-semibold text-sm">1</button>
            <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 text-sm">2</button>
            <span className="text-slate-400">...</span>
            <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 text-sm">13</button>
            <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 text-sm">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
