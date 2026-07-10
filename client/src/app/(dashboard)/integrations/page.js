import React from 'react';
import { Search, SlidersHorizontal, Plus, CheckCircle2 } from 'lucide-react';

export default function IntegrationsPage() {
  const apps = [
    { name: 'Slack', category: 'Communication', icon: 'S', connected: true, desc: 'Send notifications to Slack channels.' },
    { name: 'Stripe', category: 'Payments', icon: 'St', connected: true, desc: 'Sync payments and customer data.' },
    { name: 'Zapier', category: 'Automation', icon: 'Z', connected: false, desc: 'Connect with 5000+ other applications.' },
    { name: 'Google Calendar', category: 'Productivity', icon: 'G', connected: false, desc: 'Sync meetings and events automatically.' },
    { name: 'Mailchimp', category: 'Marketing', icon: 'M', connected: false, desc: 'Sync contacts to marketing lists.' },
    { name: 'HubSpot', category: 'CRM', icon: 'H', connected: true, desc: 'Two-way sync for customer records.' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">App Marketplace</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-1">Connect your favorite tools to streamline your workflow.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search apps..." 
              className="pl-10 pr-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none shadow-sm transition-all w-64"
            />
          </div>
          <button className="p-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
            <SlidersHorizontal className="w-5 h-5 text-slate-600 dark:text-slate-300" />
          </button>
        </div>
      </div>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {['All Apps', 'Communication', 'Payments', 'Automation', 'Marketing', 'Productivity'].map((cat, i) => (
          <button key={i} className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${i === 0 ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-300'}`}>
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app, idx) => (
          <div key={idx} className="group bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-blue-500/30 transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
            <div className="flex justify-between items-start mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 flex items-center justify-center text-xl font-black text-slate-700 dark:text-slate-200 shadow-inner group-hover:scale-110 transition-transform">
                {app.icon}
              </div>
              {app.connected ? (
                <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2.5 py-1 rounded-full border border-emerald-100 dark:border-emerald-800/30">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Connected
                </span>
              ) : (
                <span className="text-xs font-medium text-slate-500 bg-slate-100 dark:bg-slate-700 px-2.5 py-1 rounded-full">
                  {app.category}
                </span>
              )}
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{app.name}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-grow">
              {app.desc}
            </p>
            
            <button className={`w-full py-2.5 rounded-xl font-medium flex items-center justify-center gap-2 transition-all ${
              app.connected 
                ? 'bg-slate-50 hover:bg-slate-100 dark:bg-slate-700/50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600'
                : 'bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white shadow-md hover:shadow-lg'
            }`}>
              {app.connected ? 'Manage Configuration' : <><Plus className="w-4 h-4" /> Install App</>}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
