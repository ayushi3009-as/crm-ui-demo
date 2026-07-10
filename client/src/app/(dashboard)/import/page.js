'use client';
import { 
  HiOutlineArrowUpTray, HiOutlineCheckCircle, HiOutlineDocumentText,
  HiOutlineExclamationCircle, HiOutlineXCircle, HiOutlineClock,
  HiOutlineUsers
} from 'react-icons/hi2';

export default function ImportLeadsPage() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <button className="text-slate-400 hover:text-slate-600 transition-colors">←</button>
            <h1 className="text-xl font-bold text-slate-900">Import Leads</h1>
          </div>
          <p className="text-sm text-slate-500 pl-7">Upload, map and import your leads in few simple steps</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Stepper */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="flex justify-between items-center relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-slate-100 z-0"></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/4 h-0.5 bg-blue-600 z-0"></div>
              
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white border-2 border-emerald-500 text-emerald-500 flex items-center justify-center font-bold">✓</div>
                <span className="text-xs font-semibold text-emerald-600">Upload File</span>
              </div>
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">2</div>
                <span className="text-xs font-semibold text-blue-600">Map Fields</span>
              </div>
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-bold">3</div>
                <span className="text-xs font-medium text-slate-400">Validate Data</span>
              </div>
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-bold">4</div>
                <span className="text-xs font-medium text-slate-400">Review & Import</span>
              </div>
              <div className="relative z-10 flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-bold">5</div>
                <span className="text-xs font-medium text-slate-400">Completed</span>
              </div>
            </div>
          </div>

          {/* Upload Area & Other Sources */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-semibold text-slate-800 mb-1">Upload Your File</h3>
              <p className="text-[11px] text-slate-500 mb-4">Supports Excel, CSV files</p>
              
              <div className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center text-center bg-slate-50 mb-4">
                <div className="w-10 h-10 bg-green-100 text-green-600 rounded-lg flex items-center justify-center mb-3">
                  <span className="font-bold text-xl">X</span>
                </div>
                <p className="text-sm font-semibold text-slate-700 mb-1">Drag & Drop your file here</p>
                <p className="text-xs text-slate-400 mb-3">or</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
                  Choose File
                </button>
              </div>
              
              <div className="flex items-center justify-between p-3 border border-emerald-200 bg-emerald-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <HiOutlineDocumentText className="w-5 h-5 text-emerald-600" />
                  <div>
                    <p className="text-xs font-semibold text-slate-800">Leads_May_2024.xlsx</p>
                    <p className="text-[10px] text-slate-500">12,450 rows</p>
                  </div>
                </div>
                <HiOutlineCheckCircle className="w-5 h-5 text-emerald-600" />
              </div>
            </div>
            
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="font-semibold text-slate-800 mb-4">Import From Other Sources</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Google Sheets', 'IndiaMART Leads', 'Google Ads', 'TradeIndia Leads', 'Justdial Leads', 'WhatsApp Leads', 'Facebook Lead Ads', 'LinkedIn Leads', 'API / Webhook'].map((src, i) => (
                  <button key={i} className="flex items-center gap-2 p-2.5 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors text-left">
                    <div className="w-6 h-6 rounded bg-slate-100 shrink-0"></div>
                    <span className="text-[11px] font-semibold text-slate-700">{src}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Map Fields Table */}
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="font-semibold text-slate-800">Map Your Fields</h3>
                <p className="text-xs text-slate-500">Map your file columns with CRM fields</p>
              </div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 text-xs font-medium text-blue-600 bg-blue-50 px-3 py-1.5 rounded-lg cursor-pointer">
                  <input type="checkbox" className="rounded text-blue-600" defaultChecked />
                  First row contains headers
                </label>
                <button className="flex items-center gap-1 text-xs font-semibold text-blue-600 border border-blue-200 bg-white px-3 py-1.5 rounded-lg hover:bg-blue-50">
                  🪄 Auto Map
                </button>
              </div>
            </div>
            
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  <th className="pb-3 w-1/3">FILE COLUMNS</th>
                  <th className="pb-3 w-1/3">PREVIEW</th>
                  <th className="pb-3 w-1/3">CRM FIELDS</th>
                  <th className="pb-3 w-8"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { file: 'Full Name', preview: 'Rahul Sharma', crm: 'Full Name' },
                  { file: 'Mobile Number', preview: '+91 98765 43210', crm: 'Mobile Number' },
                  { file: 'Email Address', preview: 'rahul.sharma@email.com', crm: 'Email' },
                  { file: 'Company Name', preview: 'Tech Solutions Pvt. Ltd.', crm: 'Company Name' },
                  { file: 'Source', preview: 'Website Form', crm: 'Lead Source' },
                  { file: 'City', preview: 'Jaipur', crm: 'City' },
                  { file: 'Interest', preview: 'CRM Software', crm: 'Interest / Product' },
                  { file: 'Remarks', preview: 'Demo Requested', crm: 'Lead Description' }
                ].map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-3 pr-4">
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none text-slate-700 text-xs font-medium">
                        <option>{row.file}</option>
                      </select>
                    </td>
                    <td className="py-3 px-4 text-slate-600 text-xs">{row.preview}</td>
                    <td className="py-3 pl-4">
                      <select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 outline-none text-slate-700 text-xs font-medium">
                        <option>{row.crm}</option>
                      </select>
                    </td>
                    <td className="py-3 text-right">
                      <HiOutlineCheckCircle className="w-5 h-5 text-emerald-500 inline-block" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            <div className="mt-6 flex justify-between items-center pt-4 border-t border-slate-200">
              <button className="px-5 py-2 text-slate-600 font-semibold text-sm hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-200">
                &lt; Back
              </button>
              <button className="px-5 py-2 bg-blue-600 text-white font-semibold text-sm rounded-lg hover:bg-blue-700 transition-colors">
                Validate Data & Continue →
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          
          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
            <h3 className="font-semibold text-slate-800 text-sm tracking-wider uppercase mb-5">IMPORT SUMMARY</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs text-slate-600 flex items-center gap-2"><HiOutlineDocumentText className="w-4 h-4 text-slate-400" /> File Name</span>
                <span className="text-xs font-semibold text-slate-900">Leads_May_2024.xlsx</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                <span className="text-xs text-slate-600 flex items-center gap-2"><HiOutlineUsers className="w-4 h-4 text-blue-500" /> Total Rows</span>
                <span className="text-xs font-bold text-slate-900">12,450</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                <span className="text-xs text-slate-600 flex items-center gap-2"><HiOutlineCheckCircle className="w-4 h-4 text-emerald-500" /> Mapped</span>
                <span className="text-xs font-semibold text-emerald-600">12,120 (97.35%)</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                <span className="text-xs text-slate-600 flex items-center gap-2"><HiOutlineExclamationCircle className="w-4 h-4 text-orange-500" /> Unmapped</span>
                <span className="text-xs font-semibold text-orange-500">0 (0%)</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                <span className="text-xs text-slate-600 flex items-center gap-2"><HiOutlineDocumentText className="w-4 h-4 text-red-500" /> Duplicates Found</span>
                <span className="text-xs font-semibold text-red-500">210 (1.69%)</span>
              </div>
              <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                <span className="text-xs text-slate-600 flex items-center gap-2"><HiOutlineCheckCircle className="w-4 h-4 text-emerald-500" /> Valid Rows</span>
                <span className="text-xs font-semibold text-emerald-600">11,910 (95.65%)</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 shadow-inner">
            <h3 className="font-semibold text-slate-800 text-sm tracking-wider uppercase mb-4">IMPORT FEATURES</h3>
            <ul className="space-y-3">
              {['Auto Field Mapping', 'Duplicate Lead Detection', 'Data Validation', 'AI Data Cleaning', 'Smart Lead Assignment'].map((feat, i) => (
                <li key={i} className="text-xs text-slate-700 font-medium flex items-center gap-2">
                  <span className="text-emerald-500">✓</span> {feat}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm flex-1">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-slate-800 text-sm tracking-wider uppercase">RECENT IMPORTS</h3>
              <a href="#" className="text-xs text-blue-600 hover:underline">View All</a>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Leads_May_2024.xlsx', count: '12,450 Leads', status: 'Completed', time: '2 min ago' },
                { name: 'IndiaMart_Leads.csv', count: '8,750 Leads', status: 'Completed', time: '1 day ago' },
                { name: 'Facebook_Ads_Leads.xlsx', count: '6,230 Leads', status: 'Completed', time: '3 days ago' }
              ].map((imp, i) => (
                <div key={i} className="flex justify-between items-start pb-3 border-b border-slate-100 last:border-0 last:pb-0">
                  <div>
                    <p className="text-xs font-semibold text-slate-800">{imp.name}</p>
                    <p className="text-[10px] text-slate-500">{imp.count}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full inline-block mb-1">{imp.status}</span>
                    <p className="text-[9px] text-slate-400">{imp.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2 border border-blue-200 text-blue-600 font-semibold text-xs rounded-lg hover:bg-blue-50 transition-colors">
              📥 Download Import Template
            </button>
          </div>
          
        </div>
      </div>

      {/* Bottom Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {[
          { icon: HiOutlineArrowUpTray, bg: 'bg-blue-600', title: 'Total Imported', value: '45,230', sub: 'This Month', trend: '' },
          { icon: HiOutlineCheckCircle, bg: 'bg-emerald-500', title: 'Successfully Imported', value: '43,210', sub: '↑ 95.53%', trend: 'text-emerald-500' },
          { icon: HiOutlineDocumentText, bg: 'bg-orange-400', title: 'Duplicates Removed', value: '1,230', sub: '↑ 2.72%', trend: 'text-slate-500' },
          { icon: HiOutlineXCircle, bg: 'bg-red-500', title: 'Failed Rows', value: '790', sub: '↑ 1.75%', trend: 'text-slate-500' },
          { icon: HiOutlineClock, bg: 'bg-purple-600', title: 'Avg. Import Time', value: '2m 35s', sub: 'Per Import', trend: 'text-slate-500' }
        ].map((stat, i) => (
          <div key={i} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className={`w-10 h-10 rounded-lg ${stat.bg} text-white flex items-center justify-center shrink-0`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-[10px] font-semibold text-slate-500">{stat.title}</p>
              <p className="text-lg font-bold text-slate-900 leading-tight">{stat.value}</p>
              <p className={`text-[10px] ${stat.trend || 'text-slate-400'}`}>{stat.sub}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
