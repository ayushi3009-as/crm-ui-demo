'use client';
import { 
  HiOutlineGlobeAlt, HiOutlineArrowDownTray, HiOutlineArrowPath, 
  HiOutlinePlus, HiOutlineCheckCircle, HiOutlineServer, HiOutlineSparkles
} from 'react-icons/hi2';
import StatCard from '@/components/dashboard/StatCard';
import LeadSourcesChart from '@/components/dashboard/LeadSourcesChart';

const sourcesData = [
  { id: 1, name: 'Google Ads', type: 'Digital Ads', total: '4,562', qualified: '1,256', converted: '632', rate: '13.85%', status: 'Connected', color: 'text-blue-500' },
  { id: 2, name: 'Meta Ads', type: 'Digital Ads', total: '3,589', qualified: '945', converted: '512', rate: '14.27%', status: 'Connected', color: 'text-blue-600' },
  { id: 3, name: 'WhatsApp Campaigns', type: 'Communication', total: '3,256', qualified: '965', converted: '589', rate: '18.08%', status: 'Connected', color: 'text-green-500' },
  { id: 4, name: 'Website Forms', type: 'Website', total: '2,987', qualified: '854', converted: '425', rate: '14.23%', status: 'Connected', color: 'text-indigo-500' },
  { id: 5, name: 'IndiaMART Leads', type: 'Marketplace', total: '2,562', qualified: '632', converted: '312', rate: '12.18%', status: 'Connected', color: 'text-red-500' },
  { id: 6, name: 'Justdial Leads', type: 'Directory', total: '1,985', qualified: '456', converted: '198', rate: '9.97%', status: 'Connected', color: 'text-orange-500' },
  { id: 7, name: 'Email Campaigns', type: 'Communication', total: '1,856', qualified: '632', converted: '301', rate: '16.24%', status: 'Connected', color: 'text-blue-400' },
  { id: 8, name: 'Telecalling', type: 'Offline', total: '1,256', qualified: '325', converted: '125', rate: '9.96%', status: 'Connected', color: 'text-slate-600' },
  { id: 9, name: 'Referral Leads', type: 'Offline', total: '1,125', qualified: '478', converted: '256', rate: '22.76%', status: 'Connected', color: 'text-emerald-500' },
  { id: 10, name: 'Landing Pages', type: 'Website', total: '895', qualified: '325', converted: '145', rate: '16.20%', status: 'Connected', color: 'text-orange-400' },
];

export default function SourcesPage() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-xl font-bold text-slate-900">Lead Sources</h1>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors">
            <HiOutlineArrowDownTray className="w-4 h-4" /> Import Leads
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors">
            <HiOutlineArrowPath className="w-4 h-4" /> Refresh
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
            <HiOutlinePlus className="w-4 h-4" /> Add Source
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left main area */}
        <div className="lg:col-span-3 space-y-6">
          
          {/* Stat Cards */}
          <div className="grid grid-cols-5 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center">
              <p className="text-[11px] font-semibold text-slate-500">Total Sources</p>
              <p className="text-xl font-bold text-slate-900 mt-1">25+</p>
              <p className="text-[10px] text-slate-400 mt-1">Connected</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center">
              <p className="text-[11px] font-semibold text-slate-500">Total Leads</p>
              <p className="text-xl font-bold text-slate-900 mt-1">25,689</p>
              <p className="text-[10px] text-emerald-500 mt-1">↑ 18.6% vs last 30 days</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center">
              <p className="text-[11px] font-semibold text-slate-500">Qualified Leads</p>
              <p className="text-xl font-bold text-slate-900 mt-1">5,689</p>
              <p className="text-[10px] text-emerald-500 mt-1">↑ 22.7% vs last 30 days</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center">
              <p className="text-[11px] font-semibold text-slate-500">Converted Leads</p>
              <p className="text-xl font-bold text-slate-900 mt-1">2,743</p>
              <p className="text-[10px] text-emerald-500 mt-1">↑ 28.4% vs last 30 days</p>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center">
              <p className="text-[11px] font-semibold text-slate-500">Avg. Lead Score</p>
              <p className="text-xl font-bold text-slate-900 mt-1">78</p>
              <p className="text-[10px] text-emerald-600 font-semibold mt-1">High Quality</p>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Source Name</th>
                  <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Type</th>
                  <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Total Leads</th>
                  <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Qualified Leads</th>
                  <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Converted Leads</th>
                  <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Conversion Rate</th>
                  <th className="py-3 px-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                  <th className="py-3 px-4 w-10"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {sourcesData.map((src) => (
                  <tr key={src.id} className="hover:bg-slate-50/50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <span className={`text-xl ${src.color}`}>●</span>
                        <span className="text-xs font-semibold text-slate-800">{src.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-xs text-slate-500">{src.type}</td>
                    <td className="py-3 px-4 text-xs font-semibold text-slate-700 text-right">{src.total}</td>
                    <td className="py-3 px-4 text-xs font-semibold text-slate-700 text-right">{src.qualified}</td>
                    <td className="py-3 px-4 text-xs font-semibold text-slate-700 text-right">{src.converted}</td>
                    <td className="py-3 px-4 text-xs font-semibold text-slate-700 text-right">{src.rate}</td>
                    <td className="py-3 px-4">
                      <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">{src.status}</span>
                    </td>
                    <td className="py-3 px-4 text-slate-400 cursor-pointer hover:text-slate-700">⋮</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Analytics Row */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center">
              <h4 className="text-xs font-semibold text-slate-800 mb-4 w-full text-center">Leads by Source</h4>
              <div className="w-24 h-24 rounded-full border-8 border-blue-500 border-r-emerald-500 border-b-orange-500 border-l-purple-500 flex items-center justify-center relative">
                <span className="text-[10px] font-bold absolute">25,689</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center">
              <h4 className="text-xs font-semibold text-slate-800 mb-4 w-full text-center">Lead Quality Distribution</h4>
              <div className="w-24 h-24 rounded-full border-8 border-emerald-500 border-r-yellow-400 border-b-yellow-400 border-l-blue-400 flex items-center justify-center relative">
                <span className="text-[10px] font-bold absolute">25,689</span>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center">
              <h4 className="text-xs font-semibold text-slate-800 mb-4 w-full text-center">Conversion Funnel</h4>
               <div className="w-full flex-1 flex flex-col justify-center items-center gap-1">
                 <div className="h-4 bg-blue-500 w-full rounded-sm"></div>
                 <div className="h-4 bg-emerald-500 w-4/5 rounded-sm"></div>
                 <div className="h-4 bg-yellow-400 w-3/5 rounded-sm"></div>
                 <div className="h-4 bg-orange-500 w-2/5 rounded-sm"></div>
               </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <h4 className="text-xs font-semibold text-slate-800 mb-4 text-center">Top Performing Sources</h4>
              <div className="space-y-3">
                {['Google Ads', 'WhatsApp', 'Referral Leads'].map((n, i) => (
                  <div key={i} className="flex justify-between items-center text-[10px]">
                    <span className="text-slate-600 font-medium">{n}</span>
                    <div className="w-1/2 h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-3/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Right Sidebar (Features) */}
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="bg-blue-500 text-white text-xs font-bold text-center py-2">OFFLINE SOURCES</div>
            <ul className="p-3 space-y-2">
              {['Walk-in Customers', 'Referral Leads', 'Events & Exhibitions', 'QR Code Leads', 'Business Card Scanner', 'Store Visits'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-[11px] text-slate-600 font-medium"><HiOutlineCheckCircle className="text-blue-500 w-4 h-4" /> {item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="bg-purple-600 text-white text-xs font-bold text-center py-2">INTEGRATIONS & APIS</div>
            <ul className="p-3 space-y-2">
              {['REST API Integration', 'Webhook Integration', 'Zapier Integration', 'CRM Import', 'Excel / CSV Import', 'Third-Party Connectors'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-[11px] text-slate-600 font-medium"><HiOutlineServer className="text-purple-600 w-4 h-4" /> {item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="bg-orange-500 text-white text-xs font-bold text-center py-2">SMART SOURCE MANAGEMENT</div>
            <ul className="p-3 space-y-2">
              {['Source-wise Lead Tracking', 'Source Performance Analytics', 'Lead Attribution Tracking', 'Cost Per Lead (CPL) Analysis', 'ROI Tracking by Source', 'Conversion Rate by Source', 'Duplicate Source Detection'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-[11px] text-slate-600 font-medium"><HiOutlineCheckCircle className="text-orange-500 w-4 h-4" /> {item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="bg-emerald-500 text-white text-xs font-bold text-center py-2">AI-POWERED FEATURES</div>
            <ul className="p-3 space-y-2">
              {['AI Source Quality Scoring', 'Hot Lead Detection', 'Lead Intent Analysis', 'Auto Source Categorization', 'Source Recommendation', 'Fraud Lead Detection'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-[11px] text-slate-600 font-medium"><HiOutlineSparkles className="text-emerald-500 w-4 h-4" /> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Banner */}
      <div className="bg-[#1e1b4b] rounded-xl p-4 text-center text-white text-sm font-semibold tracking-wide shadow-md mt-6">
        Connect 50+ Lead Sources, Capture Every Opportunity, Track ROI, and Convert More Customers with AI-Powered Lead Management.
      </div>

    </div>
  );
}
