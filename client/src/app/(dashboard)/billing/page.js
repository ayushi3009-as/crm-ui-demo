import React from 'react';
import { CreditCard, Zap, Download } from 'lucide-react';

export default function BillingPage() {
  const invoices = [
    { date: 'Jul 1, 2026', amount: '$49.00', status: 'Paid', invoiceId: 'INV-2026-07' },
    { date: 'Jun 1, 2026', amount: '$49.00', status: 'Paid', invoiceId: 'INV-2026-06' },
    { date: 'May 1, 2026', amount: '$49.00', status: 'Paid', invoiceId: 'INV-2026-05' },
  ];

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Billing & Subscription</h1>
        <p className="text-slate-500 mt-1">Manage your plan, payment methods, and billing history.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 group-hover:bg-white/10 transition-colors duration-700"></div>
            
            <div className="relative z-10 flex justify-between items-start">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm font-semibold mb-4 backdrop-blur-sm">
                  <Zap className="w-4 h-4" /> Pro Plan
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-black bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-300">$49</span>
                  <span className="text-slate-400">/ month</span>
                </div>
                <p className="text-slate-400 mt-2 text-sm">Next billing date: Aug 1, 2026</p>
              </div>
              <button className="px-5 py-2.5 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                Upgrade Plan
              </button>
            </div>

            <div className="relative z-10 mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-6">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400">Team Members</span>
                  <span className="font-semibold">3 / 5</span>
                </div>
                <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 w-3/5 rounded-full relative">
                    <div className="absolute inset-0 bg-white/20 w-full animate-pulse"></div>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-400">API Calls</span>
                  <span className="font-semibold">82k / 100k</span>
                </div>
                <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 w-[82%] rounded-full relative">
                    <div className="absolute inset-0 bg-white/20 w-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-4">Payment Method</h3>
            <div className="flex items-center justify-between p-4 border border-slate-200 dark:border-slate-700 rounded-xl group hover:border-blue-500/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-slate-100 dark:bg-slate-700 rounded flex items-center justify-center shadow-sm">
                  <CreditCard className="w-5 h-5 text-slate-500" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Visa ending in 4242</div>
                  <div className="text-sm text-slate-500">Expires 12/28</div>
                </div>
              </div>
              <button className="text-blue-600 font-medium text-sm hover:underline opacity-80 group-hover:opacity-100 transition-opacity">Edit</button>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 shadow-sm h-fit hover:shadow-md transition-shadow">
          <h3 className="text-lg font-bold mb-4">Billing History</h3>
          <div className="space-y-4">
            {invoices.map((inv, i) => (
              <div key={i} className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-700/50 last:border-0 last:pb-0 group">
                <div>
                  <div className="font-semibold text-sm">{inv.date}</div>
                  <div className="text-xs text-slate-500">{inv.amount} • {inv.status}</div>
                </div>
                <button className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-colors opacity-50 group-hover:opacity-100">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
            View All Invoices
          </button>
        </div>
      </div>
    </div>
  );
}
