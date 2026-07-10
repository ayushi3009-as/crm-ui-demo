"use client";

import React from 'react';
import { Search, MousePointerClick, DollarSign, TrendingUp, BarChart3, ArrowUpRight, ArrowDownRight, Target, Hash } from 'lucide-react';

export default function GoogleAdsPage() {
  return (
    <div className="p-8 space-y-8 min-h-full">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">Google Ads Dashboard</h1>
          <p className="text-gray-500 mt-1">Manage Search and Display campaign performance</p>
        </div>
        <button className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-medium shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-2">
          <Search className="w-4 h-4" /> New Campaign
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Ad Spend" value="$18,240" trend="+8.4%" isPositive={false} icon={<DollarSign className="text-emerald-500" />} />
        <StatCard title="Cost Per Click (CPC)" value="$2.15" trend="-12.5%" isPositive={true} icon={<MousePointerClick className="text-teal-500" />} />
        <StatCard title="Conversions" value="842" trend="+24.2%" isPositive={true} icon={<Target className="text-blue-500" />} />
        <StatCard title="Conv. Rate" value="4.8%" trend="+1.2%" isPositive={true} icon={<TrendingUp className="text-cyan-500" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/70 backdrop-blur-xl border border-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-emerald-500" />
              Clicks vs Conversions
            </h3>
            <div className="h-64 flex items-end justify-between gap-4 px-2">
              {[60, 45, 80, 50, 90, 75, 100].map((h, i) => (
                <div key={i} className="flex-1 flex justify-center items-end gap-1 group">
                  <div className="w-1/2 bg-gradient-to-t from-emerald-500/20 to-teal-500/20 rounded-t-md transition-all duration-300 group-hover:from-emerald-500/40 group-hover:to-teal-500/40" style={{ height: `${h}%` }}></div>
                  <div className="w-1/2 bg-gradient-to-t from-blue-500/20 to-cyan-500/20 rounded-t-md transition-all duration-300 group-hover:from-blue-500/40 group-hover:to-cyan-500/40" style={{ height: `${h * 0.4}%` }}></div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-4 text-sm text-gray-400 px-2">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-xl border border-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-6">
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <Hash className="w-5 h-5 text-teal-500" />
            Top Keywords
          </h3>
          <div className="space-y-4">
            <KeywordRow keyword="best crm software" cpc="$4.50" conv="124" />
            <KeywordRow keyword="sales tracking tool" cpc="$3.20" conv="85" />
            <KeywordRow keyword="b2b lead generation" cpc="$5.10" conv="62" />
            <KeywordRow keyword="crm for startups" cpc="$2.80" conv="48" />
            <KeywordRow keyword="customer management" cpc="$3.90" conv="41" />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, trend, isPositive, icon }) {
  return (
    <div className="bg-white/70 backdrop-blur-xl border border-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-gray-50 rounded-xl">
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-emerald-600 bg-emerald-50' : 'text-red-600 bg-red-50'} px-2.5 py-1 rounded-full`}>
          {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
          {trend}
        </div>
      </div>
      <div>
        <h4 className="text-gray-500 font-medium">{title}</h4>
        <div className="text-3xl font-bold text-gray-800 mt-1">{value}</div>
      </div>
    </div>
  );
}

function KeywordRow({ keyword, cpc, conv }) {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer group">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-white group-hover:shadow-sm transition-all">
          <Search className="w-4 h-4 text-gray-500" />
        </div>
        <div>
          <h5 className="font-semibold text-gray-800 text-sm">{keyword}</h5>
          <span className="text-xs text-gray-400">CPC: {cpc}</span>
        </div>
      </div>
      <div className="text-right">
        <div className="font-semibold text-emerald-600 text-sm">{conv}</div>
        <div className="text-xs text-gray-400">conv.</div>
      </div>
    </div>
  );
}
