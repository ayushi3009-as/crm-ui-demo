import React from 'react';
import { Mail, BarChart3, Plus, LayoutTemplate, MousePointerClick, ArrowUpRight, MousePointer2 } from 'lucide-react';

export default function EmailCampaigns() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Email Marketing</h1>
          <p className="text-slate-500 mt-2">Build, send, and track beautiful email campaigns.</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-2xl hover:scale-105 transition-all shadow-lg shadow-blue-500/30 font-medium">
          <Plus className="w-5 h-5" />
          Create Campaign
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Sent', value: '145.2k', trend: '+12%', icon: Mail, color: 'text-blue-500', bg: 'bg-blue-50' },
          { label: 'Avg. Open Rate', value: '42.8%', trend: '+4.3%', icon: LayoutTemplate, color: 'text-indigo-500', bg: 'bg-indigo-50' },
          { label: 'Click Rate', value: '18.4%', trend: '+2.1%', icon: MousePointerClick, color: 'text-purple-500', bg: 'bg-purple-50' },
          { label: 'Conversion', value: '4.2%', trend: '+1.2%', icon: BarChart3, color: 'text-emerald-500', bg: 'bg-emerald-50' },
        ].map((stat, idx) => (
          <div key={idx} className="bg-white/70 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-xl shadow-slate-200/40 hover:-translate-y-1 transition-transform cursor-pointer">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className="flex items-center text-xs font-semibold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-lg">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                {stat.trend}
              </span>
            </div>
            <h3 className="text-3xl font-bold text-slate-800">{stat.value}</h3>
            <p className="text-sm text-slate-500 mt-1 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Builder Placeholder */}
      <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/20 shadow-xl shadow-slate-200/50 overflow-hidden flex flex-col h-[600px]">
        <div className="border-b border-slate-100 p-4 flex flex-col sm:flex-row justify-between items-center bg-slate-50/50 gap-4">
          <div className="flex items-center gap-3">
             <div className="flex gap-1.5">
               <div className="w-3 h-3 rounded-full bg-red-400"></div>
               <div className="w-3 h-3 rounded-full bg-amber-400"></div>
               <div className="w-3 h-3 rounded-full bg-green-400"></div>
             </div>
             <span className="ml-2 text-sm font-medium text-slate-600">Drag & Drop Email Builder</span>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">Preview</button>
            <button className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-white bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors">Save Draft</button>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col lg:flex-row bg-slate-50/50 overflow-hidden">
          {/* Sidebar Tools */}
          <div className="w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-slate-100 p-4 space-y-4 bg-white/50 overflow-x-auto lg:overflow-y-auto shrink-0 flex lg:flex-col gap-2 lg:gap-0">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 lg:mb-4 shrink-0 hidden lg:block">Content Blocks</h4>
            {['Text', 'Image', 'Button', 'Divider', 'Social', 'Spacer'].map((tool) => (
              <div key={tool} className="p-3 bg-white border border-slate-200 rounded-xl flex items-center gap-3 cursor-grab hover:border-blue-400 hover:shadow-md transition-all min-w-[120px] lg:min-w-0">
                <MousePointer2 className="w-4 h-4 text-slate-400" />
                <span className="text-sm font-medium text-slate-600">{tool}</span>
              </div>
            ))}
          </div>
          
          {/* Canvas */}
          <div className="flex-1 p-4 lg:p-8 flex items-center justify-center overflow-auto">
            <div className="w-full max-w-[600px] h-full min-h-[400px] bg-white shadow-2xl rounded-2xl border border-slate-100 flex flex-col items-center justify-center border-dashed border-2 relative group hover:border-blue-300 transition-colors">
              <div className="absolute inset-0 bg-blue-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <LayoutTemplate className="w-12 h-12 text-slate-300 mb-4 group-hover:scale-110 transition-transform" />
              <p className="text-slate-500 font-medium z-10 text-center px-4">Drag and drop content blocks here</p>
              <p className="text-sm text-slate-400 mt-2 z-10">or start from a template</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
