'use client';
import { 
  HiOutlineUsers, HiOutlineUserPlus, HiOutlineEnvelope, 
  HiOutlineCheckCircle, HiOutlineFunnel, HiOutlineArrowDownTray,
  HiOutlineArrowUpTray, HiOutlinePlus, HiOutlineAdjustmentsHorizontal,
  HiOutlineMagnifyingGlass
} from 'react-icons/hi2';
import StatCard from '@/components/dashboard/StatCard';

const leadsData = [
  { id: 1, name: 'Rahul Sharma', company: 'Tech Solutions Pvt. Ltd.', phone: '+91 98765 43210', email: 'rahul.sharma@email.com', source: 'Google Ads', sourceColor: 'text-blue-500', score: 85, scoreColor: 'text-emerald-500', status: 'New', statusColor: 'bg-blue-50 text-blue-600', assigned: 'Vikash Kumar', time: '2 min ago', avatar: 'https://i.pravatar.cc/150?u=1', assigneeAvatar: 'https://i.pravatar.cc/150?u=a1' },
  { id: 2, name: 'Priya Singh', company: 'NextGen Marketing', phone: '+91 87654 32109', email: 'priya.singh@email.com', source: 'Meta Ads', sourceColor: 'text-blue-600', score: 72, scoreColor: 'text-orange-500', status: 'Contacted', statusColor: 'bg-orange-50 text-orange-600', assigned: 'Anam Verma', time: '10 min ago', avatar: 'https://i.pravatar.cc/150?u=2', assigneeAvatar: 'https://i.pravatar.cc/150?u=a2' },
  { id: 3, name: 'Vikash Kumar', company: 'Bright Future Ltd.', phone: '+91 76543 21098', email: 'vikash.kumar@email.com', source: 'Website Form', sourceColor: 'text-indigo-500', score: 92, scoreColor: 'text-emerald-500', status: 'Qualified', statusColor: 'bg-emerald-50 text-emerald-600', assigned: 'Rahul Sharma', time: '30 min ago', avatar: 'https://i.pravatar.cc/150?u=3', assigneeAvatar: 'https://i.pravatar.cc/150?u=a3' },
  { id: 4, name: 'Anam Shaikh', company: 'Creative Agency', phone: '+91 65432 10987', email: 'anam.shaikh@email.com', source: 'WhatsApp', sourceColor: 'text-green-500', score: 68, scoreColor: 'text-orange-500', status: 'Proposal', statusColor: 'bg-purple-50 text-purple-600', assigned: 'Priya Singh', time: '1 hour ago', avatar: 'https://i.pravatar.cc/150?u=4', assigneeAvatar: 'https://i.pravatar.cc/150?u=a4' },
  { id: 5, name: 'Aman Mishra', company: 'Digital World', phone: '+91 54321 09876', email: 'aman.mishra@email.com', source: 'Referral', sourceColor: 'text-cyan-500', score: 78, scoreColor: 'text-emerald-500', status: 'Negotiation', statusColor: 'bg-blue-50 text-blue-700', assigned: 'Vikash Kumar', time: '2 hours ago', avatar: 'https://i.pravatar.cc/150?u=5', assigneeAvatar: 'https://i.pravatar.cc/150?u=a5' },
  { id: 6, name: 'Neha Verma', company: 'Verma Enterprises', phone: '+91 43210 98765', email: 'neha.verma@email.com', source: 'Email Campaign', sourceColor: 'text-red-500', score: 95, scoreColor: 'text-emerald-500', status: 'Won', statusColor: 'bg-green-50 text-green-700', assigned: 'Anam Verma', time: '3 hours ago', avatar: 'https://i.pravatar.cc/150?u=6', assigneeAvatar: 'https://i.pravatar.cc/150?u=a6' },
  { id: 7, name: 'Rohit Soni', company: 'R.S. Industries', phone: '+91 32109 87654', email: 'rohit.soni@email.com', source: 'SMS Campaign', sourceColor: 'text-green-600', score: 35, scoreColor: 'text-red-500', status: 'Lost', statusColor: 'bg-red-50 text-red-600', assigned: 'Priya Singh', time: '5 hours ago', avatar: 'https://i.pravatar.cc/150?u=7', assigneeAvatar: 'https://i.pravatar.cc/150?u=a7' },
];

export default function LeadsPage() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
            <HiOutlineUsers className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900">Lead Management</h1>
            <p className="text-sm text-slate-500">Manage, Track & Convert Your Leads into Customers</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors">
            <HiOutlineArrowDownTray className="w-4 h-4" /> Import Leads
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors">
            <HiOutlineArrowUpTray className="w-4 h-4" /> Export Leads
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
            <HiOutlinePlus className="w-4 h-4" /> Add Lead
          </button>
        </div>
      </div>

      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-4">
        <StatCard 
          title="Total Leads" value="25,689" change="18.6%" changeType="increase" 
          icon={HiOutlineUsers} iconBg="bg-blue-100" iconColor="text-blue-600" 
        />
        <StatCard 
          title="New Leads" value="3,987" change="16.3%" changeType="increase" 
          icon={HiOutlineUserPlus} iconBg="bg-emerald-100" iconColor="text-emerald-600" 
        />
        <StatCard 
          title="Contacted" value="2,743" change="22.7%" changeType="increase" 
          icon={HiOutlineEnvelope} iconBg="bg-blue-100" iconColor="text-blue-600" 
        />
        <StatCard 
          title="Qualified" value="1,824" change="8.3%" changeType="increase" 
          icon={HiOutlineCheckCircle} iconBg="bg-orange-100" iconColor="text-orange-600" 
        />
        <StatCard 
          title="Converted" value="932" change="28.4%" changeType="increase" 
          icon={HiOutlineFunnel} iconBg="bg-teal-100" iconColor="text-teal-600" 
        />
      </div>

      {/* Table Section */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        {/* Tabs & Filters */}
        <div className="px-5 border-b border-slate-200 flex flex-col xl:flex-row xl:items-center justify-between gap-4 pt-2">
          {/* Tabs */}
          <div className="flex gap-6 overflow-x-auto hide-scrollbar">
            {['All Leads', 'My Leads', 'Unassigned', 'Follow Ups', 'Hot Leads'].map((tab, i) => (
              <button key={i} className={`whitespace-nowrap pb-3 pt-2 text-sm font-semibold border-b-2 transition-colors ${i === 0 ? 'border-blue-600 text-blue-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}>
                {tab}
              </button>
            ))}
          </div>
          {/* Filters */}
          <div className="flex items-center gap-3 pb-3 xl:pb-0">
            <select className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none text-slate-700 font-medium">
              <option>This Month</option>
            </select>
            <button className="flex items-center gap-1.5 px-3 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-50 transition-colors">
              <HiOutlineAdjustmentsHorizontal className="w-4 h-4" /> Filter
            </button>
            <select className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none text-slate-700 font-medium">
              <option>Segment</option>
            </select>
            <div className="relative">
              <HiOutlineMagnifyingGlass className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Search leads..." className="text-xs border border-slate-200 rounded-lg pl-9 pr-3 py-2 outline-none focus:border-blue-500 w-48" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="py-3 px-4 w-12"><input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" /></th>
                <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Lead Name</th>
                <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Contact Details</th>
                <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Source</th>
                <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Lead Score</th>
                <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Assigned To</th>
                <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Created At</th>
                <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {leadsData.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-4"><input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" /></td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img src={lead.avatar} alt="" className="w-8 h-8 rounded-full bg-slate-200" />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{lead.name}</p>
                        <p className="text-[11px] text-slate-500">{lead.company}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-xs text-slate-700 font-medium flex items-center gap-1.5"><span className="text-slate-400">📞</span> {lead.phone}</p>
                    <p className="text-xs text-blue-600 flex items-center gap-1.5"><span className="text-slate-400">✉️</span> {lead.email}</p>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-base ${lead.sourceColor}`}>●</span>
                      <span className="text-xs font-medium text-slate-700">{lead.source}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`text-sm font-bold ${lead.scoreColor}`}>{lead.score}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${lead.statusColor}`}>{lead.status}</span>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      <img src={lead.assigneeAvatar} alt="" className="w-5 h-5 rounded-full bg-slate-200" />
                      <span className="text-xs font-medium text-slate-700">{lead.assigned}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-xs text-slate-500 font-medium">{lead.time}</td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex justify-end gap-2 text-slate-400">
                      <button className="hover:text-blue-600"><HiOutlineMagnifyingGlass className="w-4 h-4" /></button>
                      <button className="hover:text-blue-600">✏️</button>
                      <button className="hover:text-blue-600">⋮</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">Showing 1 to 7 of 25,689 leads</span>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 text-sm">&lt;</button>
            <button className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 font-semibold text-sm">1</button>
            <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 text-sm">2</button>
            <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 text-sm">3</button>
            <span className="text-slate-400">...</span>
            <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 text-sm">100</button>
            <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 text-sm">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
