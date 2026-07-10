"use client";

import React from 'react';
import { LineChart, Activity, Users, ArrowUpRight, ArrowDownRight, Layers, Layout, Filter } from 'lucide-react';

export default function AdAnalyticsPage() {
  return (
    <div className="p-8 space-y-8 min-h-full">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">Cross-Platform Analytics</h1>
          <p className="text-gray-500 mt-1">Compare performance across all advertising channels</p>
        </div>
        <button className="px-4 py-2.5 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium shadow-sm hover:shadow-md hover:border-purple-200 transition-all duration-300 flex items-center gap-2">
          <Filter className="w-4 h-4" /> Filter Data
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-6 rounded-2xl shadow-lg shadow-blue-500/20 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-30 transition-opacity">
            <Layout className="w-24 h-24" />
          </div>
          <h4 className="text-blue-100 font-medium mb-1">Total Ad Spend</h4>
          <div className="text-4xl font-bold mb-4">$30,690</div>
          <div className="flex items-center gap-2 text-sm bg-white/20 w-fit px-3 py-1 rounded-full backdrop-blur-md">
            <ArrowUpRight className="w-4 h-4" /> +10.5% vs last month
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-2xl shadow-lg shadow-purple-500/20 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-30 transition-opacity">
            <Users className="w-24 h-24" />
          </div>
          <h4 className="text-purple-100 font-medium mb-1">Total Leads Acquired</h4>
          <div className="text-4xl font-bold mb-4">1,526</div>
          <div className="flex items-center gap-2 text-sm bg-white/20 w-fit px-3 py-1 rounded-full backdrop-blur-md">
            <ArrowUpRight className="w-4 h-4" /> +22.4% vs last month
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-600 to-teal-600 p-6 rounded-2xl shadow-lg shadow-emerald-500/20 text-white relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
          <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-30 transition-opacity">
            <Activity className="w-24 h-24" />
          </div>
          <h4 className="text-emerald-100 font-medium mb-1">Blended CPL</h4>
          <div className="text-4xl font-bold mb-4">$20.11</div>
          <div className="flex items-center gap-2 text-sm bg-white/20 w-fit px-3 py-1 rounded-full backdrop-blur-md">
            <ArrowDownRight className="w-4 h-4" /> -8.2% vs last month
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/70 backdrop-blur-xl border border-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Layers className="w-5 h-5 text-purple-500" />
            Spend Distribution
          </h3>
          <div className="flex items-center justify-center py-8">
            <div className="relative w-48 h-48 rounded-full border-[16px] border-blue-500 flex items-center justify-center shadow-inner" style={{ borderRightColor: '#10b981', borderBottomColor: '#f43f5e' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">100%</div>
                <div className="text-sm text-gray-400">Total Spend</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-4">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500"></div><span className="text-sm text-gray-600">Meta (45%)</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-emerald-500"></div><span className="text-sm text-gray-600">Google (40%)</span></div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-rose-500"></div><span className="text-sm text-gray-600">TikTok (15%)</span></div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-xl border border-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-6">
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <LineChart className="w-5 h-5 text-pink-500" />
            Lead Quality Score
          </h3>
          <div className="space-y-6 mt-4">
            <QualityBar platform="Google Search" score={88} color="bg-emerald-500" />
            <QualityBar platform="LinkedIn Ads" score={82} color="bg-blue-600" />
            <QualityBar platform="Facebook Lead Forms" score={65} color="bg-indigo-500" />
            <QualityBar platform="Instagram Stories" score={58} color="bg-pink-500" />
            <QualityBar platform="TikTok Ads" score={42} color="bg-rose-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

function QualityBar({ platform, score, color }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="font-medium text-gray-700">{platform}</span>
        <span className="text-gray-500">{score}/100</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
        <div className={`h-2.5 rounded-full ${color} transition-all duration-1000 ease-out`} style={{ width: `${score}%` }}></div>
      </div>
    </div>
  );
}
