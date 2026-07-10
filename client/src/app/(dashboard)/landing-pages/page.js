import React from 'react';
import { Layout, Search, Filter, Plus, ExternalLink, MoreVertical, Eye } from 'lucide-react';

export default function LandingPages() {
  const templates = [
    { name: 'SaaS Launchpad', category: 'Software', conversion: '12.4%', image: 'bg-gradient-to-br from-indigo-500 to-purple-600' },
    { name: 'E-book Download', category: 'Lead Gen', conversion: '8.7%', image: 'bg-gradient-to-br from-emerald-400 to-cyan-500' },
    { name: 'Webinar Registration', category: 'Events', conversion: '15.2%', image: 'bg-gradient-to-br from-orange-400 to-pink-500' },
    { name: 'Product Waitlist', category: 'Coming Soon', conversion: '22.1%', image: 'bg-gradient-to-br from-gray-700 to-gray-900' },
    { name: 'Consultation Booking', category: 'Services', conversion: '5.4%', image: 'bg-gradient-to-br from-blue-400 to-blue-600' },
    { name: 'Newsletter Signup', category: 'Lead Gen', conversion: '9.8%', image: 'bg-gradient-to-br from-rose-400 to-red-500' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600">Landing Pages</h1>
          <p className="text-slate-500 mt-2">Create high-converting landing pages in minutes.</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search pages..." 
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 shadow-sm transition-all"
            />
          </div>
          <button className="flex items-center justify-center w-11 h-11 bg-white border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 shadow-sm transition-colors">
            <Filter className="w-5 h-5" />
          </button>
          <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-xl hover:scale-105 transition-all shadow-lg shadow-cyan-500/30 font-medium whitespace-nowrap">
            <Plus className="w-4 h-4" />
            New Page
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-slate-200 mb-6 overflow-x-auto">
        <button className="pb-3 text-sm font-semibold text-cyan-600 border-b-2 border-cyan-500 whitespace-nowrap">All Templates</button>
        <button className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors whitespace-nowrap">My Pages</button>
        <button className="pb-3 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors whitespace-nowrap">Archived</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {templates.map((tpl, idx) => (
          <div key={idx} className="group bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 overflow-hidden hover:-translate-y-2 transition-all duration-300 flex flex-col">
            {/* Mock Template Preview Image */}
            <div className={`h-48 w-full ${tpl.image} relative overflow-hidden flex items-center justify-center`}>
              <Layout className="w-16 h-16 text-white/30 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-[2px]">
                <button className="bg-white text-slate-800 px-6 py-2 rounded-xl font-medium shadow-xl flex items-center gap-2 hover:scale-105 transition-transform">
                  <Eye className="w-4 h-4" /> Preview
                </button>
              </div>
            </div>
            
            <div className="p-6 relative bg-white flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-slate-800">{tpl.name}</h3>
                <button className="text-slate-400 hover:text-slate-600 p-1 rounded-md hover:bg-slate-50 transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded-lg uppercase tracking-wider">{tpl.category}</span>
                <span className="text-xs text-slate-400 flex items-center gap-1">
                  Avg. Conversion: <strong className="text-emerald-500">{tpl.conversion}</strong>
                </span>
              </div>
              
              <div className="mt-auto">
                <button className="w-full bg-slate-50 border border-slate-200 text-slate-700 py-2.5 rounded-xl text-sm font-semibold hover:bg-cyan-50 hover:text-cyan-700 hover:border-cyan-200 transition-all shadow-sm group-hover:bg-slate-100">
                  Use Template
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
