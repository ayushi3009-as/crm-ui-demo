import React from 'react';
import { 
  TrendingUp, 
  DollarSign, 
  Users, 
  Target,
  ArrowUpRight,
  ArrowDownRight,
  MoreHorizontal,
  Activity,
  BarChart3
} from 'lucide-react';

const statCards = [
  {
    title: 'Total Revenue',
    value: '$128,430',
    change: '+14.5%',
    trend: 'up',
    icon: <DollarSign className="w-6 h-6 text-emerald-500" />
  },
  {
    title: 'Active Users',
    value: '24,592',
    change: '+5.2%',
    trend: 'up',
    icon: <Users className="w-6 h-6 text-blue-500" />
  },
  {
    title: 'Conversion Rate',
    value: '3.84%',
    change: '-1.2%',
    trend: 'down',
    icon: <Activity className="w-6 h-6 text-rose-500" />
  },
  {
    title: 'Monthly Goal',
    value: '85%',
    change: '+12.5%',
    trend: 'up',
    icon: <Target className="w-6 h-6 text-purple-500" />
  }
];

export default function DashboardsPage() {
  return (
    <div className="p-8 min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
              Executive Overview
            </h1>
            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Welcome back. Here's what's happening today.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <select className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2 text-sm font-medium shadow-sm focus:ring-2 focus:ring-indigo-500 outline-none transition-all">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Quarter</option>
              <option>This Year</option>
            </select>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-xl text-sm font-medium shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Generate Report
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                  <MoreHorizontal className="w-5 h-5" />
                </button>
              </div>
              <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                {stat.title}
              </h3>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl font-bold tracking-tight">
                  {stat.value}
                </span>
                <span className={`flex items-center text-xs font-semibold px-2 py-1 rounded-full ${
                  stat.trend === 'up' 
                    ? 'text-emerald-700 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-400/10' 
                    : 'text-rose-700 bg-rose-100 dark:text-rose-400 dark:bg-rose-400/10'
                }`}>
                  {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Chart */}
          <div className="lg:col-span-2 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Revenue Overview</h3>
              <button className="text-slate-400 hover:text-indigo-600 transition-colors">
                <TrendingUp className="w-5 h-5" />
              </button>
            </div>
            {/* Chart Placeholder */}
            <div className="w-full h-72 rounded-xl bg-gradient-to-tr from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              <p className="text-slate-400 dark:text-slate-500 font-medium z-10 group-hover:scale-105 transition-transform">Interactive Chart Area</p>
            </div>
          </div>

          {/* Goal Progress */}
          <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <h3 className="text-lg font-semibold mb-6">Sales Pipeline</h3>
            <div className="flex-1 space-y-6">
              {[
                { label: 'Leads', value: '4,230', percent: '100%', color: 'bg-blue-500' },
                { label: 'Qualified', value: '3,100', percent: '75%', color: 'bg-indigo-500' },
                { label: 'Proposals', value: '1,240', percent: '40%', color: 'bg-purple-500' },
                { label: 'Won', value: '840', percent: '20%', color: 'bg-emerald-500' },
              ].map((stage, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-slate-600 dark:text-slate-300">{stage.label}</span>
                    <span className="text-slate-500">{stage.value}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${stage.color} rounded-full relative overflow-hidden`} 
                      style={{ width: stage.percent }}
                    >
                      <div className="absolute inset-0 bg-white/20 w-full h-full -translate-x-full animate-[shimmer_2s_infinite]"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
