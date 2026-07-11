'use client';
import { useState, useEffect } from 'react';
import { 
  HiOutlineUsers, HiOutlineUserPlus, HiOutlineEnvelope, 
  HiOutlineCheckCircle, HiOutlineFunnel, HiOutlineArrowDownTray,
  HiOutlineArrowUpTray, HiOutlinePlus, HiOutlineAdjustmentsHorizontal,
  HiOutlineMagnifyingGlass
} from 'react-icons/hi2';
import StatCard from '@/components/dashboard/StatCard';
import { formatDistanceToNow } from 'date-fns';

export default function LeadsPage() {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  
  // Stats calculation
  const totalLeads = leads.length;
  const newLeads = leads.filter(l => l.status === 'NEW').length;
  const contactedLeads = leads.filter(l => l.status === 'CONTACTED').length;
  const qualifiedLeads = leads.filter(l => l.status === 'QUALIFIED').length;
  const wonLeads = leads.filter(l => l.status === 'WON').length;

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await fetch('http://localhost:5000/api/leads', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        const data = await res.json();
        if (data.success) {
          setLeads(data.data.leads);
        } else {
          setError(data.message || 'Failed to fetch leads');
        }
      } catch (err) {
        setError('Network error while fetching leads');
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'NEW': return 'bg-blue-50 text-blue-600';
      case 'CONTACTED': return 'bg-orange-50 text-orange-600';
      case 'QUALIFIED': return 'bg-emerald-50 text-emerald-600';
      case 'PROPOSAL': return 'bg-purple-50 text-purple-600';
      case 'NEGOTIATION': return 'bg-yellow-50 text-yellow-700';
      case 'WON': return 'bg-green-50 text-green-700';
      case 'LOST': return 'bg-red-50 text-red-600';
      default: return 'bg-slate-50 text-slate-600';
    }
  };

  const getScoreColor = (score) => {
    if (score >= 80) return 'text-emerald-500';
    if (score >= 50) return 'text-orange-500';
    return 'text-red-500';
  };

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
          title="Total Leads" value={totalLeads.toString()} change="+" changeType="increase" 
          icon={HiOutlineUsers} iconBg="bg-blue-100" iconColor="text-blue-600" 
        />
        <StatCard 
          title="New Leads" value={newLeads.toString()} change="+" changeType="increase" 
          icon={HiOutlineUserPlus} iconBg="bg-emerald-100" iconColor="text-emerald-600" 
        />
        <StatCard 
          title="Contacted" value={contactedLeads.toString()} change="+" changeType="increase" 
          icon={HiOutlineEnvelope} iconBg="bg-blue-100" iconColor="text-blue-600" 
        />
        <StatCard 
          title="Qualified" value={qualifiedLeads.toString()} change="+" changeType="increase" 
          icon={HiOutlineCheckCircle} iconBg="bg-orange-100" iconColor="text-orange-600" 
        />
        <StatCard 
          title="Converted" value={wonLeads.toString()} change="+" changeType="increase" 
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
            <div className="relative">
              <HiOutlineMagnifyingGlass className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input type="text" placeholder="Search leads..." className="text-xs border border-slate-200 rounded-lg pl-9 pr-3 py-2 outline-none focus:border-blue-500 w-48" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          {loading ? (
            <div className="p-8 text-center text-slate-500 font-medium">Loading leads...</div>
          ) : error ? (
            <div className="p-8 text-center text-red-500 font-medium">{error}</div>
          ) : leads.length === 0 ? (
            <div className="p-8 text-center text-slate-500 font-medium">No leads found. Create one to get started!</div>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-3 px-4 w-12"><input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" /></th>
                  <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Lead Name</th>
                  <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Contact Details</th>
                  <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Source</th>
                  <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Score</th>
                  <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Assigned To</th>
                  <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Created</th>
                  <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="py-3 px-4"><input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" /></td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs uppercase">
                          {lead.fullName.substring(0, 2)}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{lead.fullName}</p>
                          <p className="text-[11px] text-slate-500">{lead.companyName || 'No Company'}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <p className="text-xs text-slate-700 font-medium flex items-center gap-1.5"><span className="text-slate-400">📞</span> {lead.phone || 'N/A'}</p>
                      <p className="text-xs text-blue-600 flex items-center gap-1.5"><span className="text-slate-400">✉️</span> {lead.email || 'N/A'}</p>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1.5">
                        <span className="text-base" style={{ color: lead.source?.color || '#94a3b8' }}>●</span>
                        <span className="text-xs font-medium text-slate-700">{lead.source?.name || 'Direct'}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`text-sm font-bold ${getScoreColor(lead.leadScore)}`}>{lead.leadScore}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${getStatusColor(lead.status)}`}>{lead.status}</span>
                    </td>
                    <td className="py-3 px-4">
                      {lead.assignedTo ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center text-[8px] font-bold uppercase">
                            {lead.assignedTo.name.substring(0, 2)}
                          </div>
                          <span className="text-xs font-medium text-slate-700">{lead.assignedTo.name}</span>
                        </div>
                      ) : (
                        <span className="text-xs text-slate-400 italic">Unassigned</span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-xs text-slate-500 font-medium">
                      {formatDistanceToNow(new Date(lead.createdAt), { addSuffix: true })}
                    </td>
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
          )}
        </div>
        
        {/* Pagination */}
        {!loading && leads.length > 0 && (
          <div className="p-4 border-t border-slate-200 flex items-center justify-between">
            <span className="text-xs text-slate-500">Showing 1 to {leads.length} of {leads.length} leads</span>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 text-sm">&lt;</button>
              <button className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 font-semibold text-sm">1</button>
              <button className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 text-sm">&gt;</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
