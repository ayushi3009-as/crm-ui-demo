'use client';
import { 
  HiOutlineUserGroup, HiOutlinePlus, HiOutlineArrowDownTray,
  HiOutlineAdjustmentsHorizontal, HiOutlineMagnifyingGlass,
  HiOutlineCurrencyDollar, HiOutlineChartPie, HiOutlineArrowTrendingUp
} from 'react-icons/hi2';
import StatCard from '@/components/dashboard/StatCard';

const customersData = [
  { id: 1, name: 'Rahul Sharma', company: 'Tech Solutions Pvt. Ltd.', email: 'rahul.sharma@email.com', phone: '+91 98765 43210', plan: 'Enterprise', planColor: 'bg-emerald-100 text-emerald-700', mrr: '₹24,999', status: 'Active', statusColor: 'bg-green-50 text-green-600', ltv: '₹2,99,988', joined: 'Jan 15, 2024', avatar: 'https://i.pravatar.cc/150?u=1' },
  { id: 2, name: 'Neha Verma', company: 'Verma Enterprises', email: 'neha.verma@email.com', phone: '+91 43210 98765', plan: 'Business', planColor: 'bg-blue-100 text-blue-700', mrr: '₹7,999', status: 'Active', statusColor: 'bg-green-50 text-green-600', ltv: '₹95,988', joined: 'Feb 22, 2024', avatar: 'https://i.pravatar.cc/150?u=6' },
  { id: 3, name: 'Vikash Kumar', company: 'Bright Future Ltd.', email: 'vikash.kumar@email.com', phone: '+91 76543 21098', plan: 'Professional', planColor: 'bg-indigo-100 text-indigo-700', mrr: '₹2,999', status: 'Past Due', statusColor: 'bg-orange-50 text-orange-600', ltv: '₹17,994', joined: 'Apr 10, 2024', avatar: 'https://i.pravatar.cc/150?u=3' },
  { id: 4, name: 'Aman Mishra', company: 'Digital World', email: 'aman.mishra@email.com', phone: '+91 54321 09876', plan: 'Agency', planColor: 'bg-purple-100 text-purple-700', mrr: '₹49,999', status: 'Active', statusColor: 'bg-green-50 text-green-600', ltv: '₹5,99,988', joined: 'Dec 05, 2023', avatar: 'https://i.pravatar.cc/150?u=5' },
  { id: 5, name: 'Anam Shaikh', company: 'Creative Agency', email: 'anam.shaikh@email.com', phone: '+91 65432 10987', plan: 'Starter', planColor: 'bg-slate-100 text-slate-700', mrr: '₹999', status: 'Canceled', statusColor: 'bg-red-50 text-red-600', ltv: '₹5,994', joined: 'Mar 18, 2024', avatar: 'https://i.pravatar.cc/150?u=4' },
];

export default function CustomersPage() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
            <HiOutlineUserGroup className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900">Customers</h1>
            <p className="text-sm text-slate-500">Manage your active SaaS customers, subscriptions, and MRR</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors">
            <HiOutlineArrowDownTray className="w-4 h-4" /> Export
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-semibold hover:bg-emerald-700 transition-colors">
            <HiOutlinePlus className="w-4 h-4" /> Add Customer
          </button>
        </div>
      </div>

      {/* Top Stat Cards (SaaS Metrics) */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard 
          title="Total Customers" value="8,426" change="16.3%" changeType="increase" 
          icon={HiOutlineUserGroup} iconBg="bg-blue-100" iconColor="text-blue-600" 
        />
        <StatCard 
          title="Monthly Recurring Rev (MRR)" value="₹12.4L" change="22.5%" changeType="increase" 
          icon={HiOutlineCurrencyDollar} iconBg="bg-emerald-100" iconColor="text-emerald-600" 
        />
        <StatCard 
          title="Active Subscriptions" value="8,102" change="14.2%" changeType="increase" 
          icon={HiOutlineArrowTrendingUp} iconBg="bg-purple-100" iconColor="text-purple-600" 
        />
        <StatCard 
          title="Churn Rate" value="1.2%" change="0.4%" changeType="decrease" 
          icon={HiOutlineChartPie} iconBg="bg-red-100" iconColor="text-red-600" subtitle="vs last month"
        />
      </div>

      {/* Table Section */}
      <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col">
        {/* Tabs & Filters */}
        <div className="px-5 border-b border-slate-200 flex flex-col xl:flex-row xl:items-center justify-between gap-4 pt-2">
          {/* Tabs */}
          <div className="flex gap-6 overflow-x-auto hide-scrollbar">
            {['All Customers', 'Active', 'Past Due', 'Canceled', 'High Value (VIP)'].map((tab, i) => (
              <button key={i} className={`whitespace-nowrap pb-3 pt-2 text-sm font-semibold border-b-2 transition-colors ${i === 0 ? 'border-emerald-600 text-emerald-600' : 'border-transparent text-slate-500 hover:text-slate-700'}`}>
                {tab}
              </button>
            ))}
          </div>
          {/* Filters */}
          <div className="flex items-center gap-3 pb-3 xl:pb-0">
            <select className="text-xs bg-white border border-slate-200 rounded-lg px-3 py-2 outline-none text-slate-700 font-medium">
              <option>All Plans</option>
              <option>Enterprise</option>
              <option>Business</option>
              <option>Professional</option>
              <option>Starter</option>
            </select>
            <button className="flex items-center gap-1.5 px-3 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-50 transition-colors">
              <HiOutlineAdjustmentsHorizontal className="w-4 h-4" /> Filter
            </button>
            <div className="relative">
              <HiOutlineMagnifyingGlass className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Search customers..." className="text-xs border border-slate-200 rounded-lg pl-9 pr-3 py-2 outline-none focus:border-emerald-500 w-48" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="py-3 px-4 w-12"><input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" /></th>
                <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Customer Name</th>
                <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Contact Info</th>
                <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Subscription Plan</th>
                <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">MRR</th>
                <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Lifetime Value</th>
                <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Joined</th>
                <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {customersData.map((customer) => (
                <tr key={customer.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3 px-4"><input type="checkbox" className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" /></td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img src={customer.avatar} alt="" className="w-8 h-8 rounded-full bg-slate-200" />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{customer.name}</p>
                        <p className="text-[11px] text-slate-500">{customer.company}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <p className="text-xs text-slate-700 font-medium">{customer.email}</p>
                    <p className="text-[10px] text-slate-500">{customer.phone}</p>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md ${customer.planColor}`}>{customer.plan}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm font-bold text-slate-700 block text-right">{customer.mrr}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${customer.statusColor}`}>{customer.status}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="text-sm font-bold text-emerald-600 block text-right">{customer.ltv}</span>
                  </td>
                  <td className="py-3 px-4 text-xs text-slate-500 font-medium">{customer.joined}</td>
                  <td className="py-3 px-4 text-right">
                    <div className="flex justify-end gap-2 text-slate-400">
                      <button className="hover:text-emerald-600"><HiOutlineMagnifyingGlass className="w-4 h-4" /></button>
                      <button className="hover:text-emerald-600">✏️</button>
                      <button className="hover:text-emerald-600">⋮</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-slate-200 flex items-center justify-between">
          <span className="text-xs text-slate-500">Showing 1 to 5 of 8,426 customers</span>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 text-sm">&lt;</button>
            <button className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 font-semibold text-sm">1</button>
            <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 text-sm">2</button>
            <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 text-sm">3</button>
            <span className="text-slate-400">...</span>
            <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 text-sm">85</button>
            <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 text-sm">&gt;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
