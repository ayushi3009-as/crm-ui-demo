import React from 'react';
import { 
  Download,
  Filter,
  Search,
  Calendar,
  ChevronDown,
  MoreVertical,
  ArrowUpDown,
  FileSpreadsheet
} from 'lucide-react';

const tableData = [
  { id: 'TRX-8921', client: 'Acme Corp', amount: '$4,200.00', status: 'Completed', date: 'Oct 24, 2026', owner: 'Sarah J.' },
  { id: 'TRX-8922', client: 'Globex Inc', amount: '$1,850.00', status: 'Pending', date: 'Oct 23, 2026', owner: 'Mike T.' },
  { id: 'TRX-8923', client: 'Soylent Ltd', amount: '$9,340.00', status: 'Completed', date: 'Oct 22, 2026', owner: 'Sarah J.' },
  { id: 'TRX-8924', client: 'Initech', amount: '$2,100.00', status: 'Failed', date: 'Oct 21, 2026', owner: 'Alex R.' },
  { id: 'TRX-8925', client: 'Umbrella Corp', amount: '$14,500.00', status: 'Completed', date: 'Oct 20, 2026', owner: 'Mike T.' },
  { id: 'TRX-8926', client: 'Stark Ind.', amount: '$8,900.00', status: 'Processing', date: 'Oct 19, 2026', owner: 'Sarah J.' },
  { id: 'TRX-8927', client: 'Wayne Ent.', amount: '$22,000.00', status: 'Completed', date: 'Oct 18, 2026', owner: 'Alex R.' },
];

export default function ReportsPage() {
  return (
    <div className="p-8 min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
              Detailed Reports
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              View, filter, and export your transaction data.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 text-slate-700 dark:text-slate-300 px-4 py-2 rounded-xl text-sm font-medium shadow-sm transition-all hover:shadow-md flex items-center gap-2">
              <Calendar className="w-4 h-4 text-slate-400" />
              Oct 1 - Oct 31, 2026
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>
        </div>

        {/* Data Table Section */}
        <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-2xl shadow-sm overflow-hidden flex flex-col">
          
          {/* Toolbar */}
          <div className="p-4 border-b border-slate-200/50 dark:border-slate-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/50 dark:bg-slate-900/50">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search transactions..." 
                className="pl-9 pr-4 py-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 outline-none w-full sm:w-64 transition-shadow"
              />
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                <Filter className="w-4 h-4" />
                Filters
              </button>
              <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
                <FileSpreadsheet className="w-4 h-4" />
                Views
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-slate-50/50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400">
                <tr>
                  <th className="px-6 py-4 font-medium border-b border-slate-200/50 dark:border-slate-800/50">
                    <div className="flex items-center gap-2 cursor-pointer hover:text-slate-700 dark:hover:text-slate-200">
                      Transaction ID <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th className="px-6 py-4 font-medium border-b border-slate-200/50 dark:border-slate-800/50">Client</th>
                  <th className="px-6 py-4 font-medium border-b border-slate-200/50 dark:border-slate-800/50">
                    <div className="flex items-center gap-2 cursor-pointer hover:text-slate-700 dark:hover:text-slate-200">
                      Amount <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th className="px-6 py-4 font-medium border-b border-slate-200/50 dark:border-slate-800/50">Status</th>
                  <th className="px-6 py-4 font-medium border-b border-slate-200/50 dark:border-slate-800/50">Date</th>
                  <th className="px-6 py-4 font-medium border-b border-slate-200/50 dark:border-slate-800/50">Owner</th>
                  <th className="px-6 py-4 font-medium border-b border-slate-200/50 dark:border-slate-800/50 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/50">
                {tableData.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors group">
                    <td className="px-6 py-4 font-medium text-slate-900 dark:text-slate-100">{row.id}</td>
                    <td className="px-6 py-4">{row.client}</td>
                    <td className="px-6 py-4 font-medium">{row.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
                        row.status === 'Completed' 
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20'
                          : row.status === 'Pending' || row.status === 'Processing'
                          ? 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/20'
                          : 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-500/10 dark:text-rose-400 dark:border-rose-500/20'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-slate-500 dark:text-slate-400">{row.date}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 flex items-center justify-center text-xs font-bold">
                          {row.owner.charAt(0)}
                        </div>
                        {row.owner}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="p-4 border-t border-slate-200/50 dark:border-slate-800/50 flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-900/50">
            <div>Showing 1 to 7 of 124 results</div>
            <div className="flex gap-1">
              <button className="px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-50" disabled>Prev</button>
              <button className="px-3 py-1 rounded-lg bg-indigo-600 text-white font-medium shadow-sm">1</button>
              <button className="px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">2</button>
              <button className="px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">3</button>
              <button className="px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">Next</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
