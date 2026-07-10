"use client";

import React from 'react';
import { TrendingUp, DollarSign, Users, Target, ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function MetaAdsPage() {
  return (
    <div className="p-8 space-y-8 min-h-full">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Meta Ads Dashboard</h1>
          <p className="text-gray-500 mt-1">Monitor your Facebook and Instagram campaign performance</p>
        </div>
        <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-medium shadow-lg shadow-blue-500/30 hover:scale-105 transition-all duration-300 flex items-center gap-2">
          <FaFacebook className="w-4 h-4" /> Connect Account
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard title="Total Spend" value="$12,450" trend="+12.5%" isPositive={true} icon={<DollarSign className="text-blue-500" />} />
        <StatCard title="Avg. CPL" value="$18.20" trend="-5.2%" isPositive={true} icon={<Target className="text-indigo-500" />} />
        <StatCard title="Total Leads" value="684" trend="+18.4%" isPositive={true} icon={<Users className="text-purple-500" />} />
        <StatCard title="Overall ROI" value="3.2x" trend="+2.1%" isPositive={true} icon={<TrendingUp className="text-emerald-500" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white/70 backdrop-blur-xl border border-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-indigo-500" />
            Performance Overview
          </h3>
          <div className="h-64 flex items-end justify-between gap-2 px-2">
            {[40, 70, 45, 90, 65, 85, 100].map((h, i) => (
              <div key={i} className="w-full bg-gradient-to-t from-blue-500/20 to-indigo-500/20 rounded-t-lg relative group transition-all duration-300 hover:from-blue-500/40 hover:to-indigo-500/40" style={{ height: `${h}%` }}>
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-lg opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-sm text-gray-400 px-2">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-xl border border-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-6">
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-500" />
            Top Campaigns
          </h3>
          <div className="space-y-4">
            <CampaignRow name="Q3 Retargeting" platform="instagram" spend="$2.4k" leads="145" />
            <CampaignRow name="Lookalike Audience" platform="facebook" spend="$4.1k" leads="210" />
            <CampaignRow name="Lead Gen Form" platform="facebook" spend="$1.8k" leads="98" />
            <CampaignRow name="Story Ads" platform="instagram" spend="$1.2k" leads="65" />
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

function CampaignRow({ name, platform, spend, leads }) {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors cursor-pointer group">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-white group-hover:shadow-sm transition-all">
          {platform === 'facebook' ? <FaFacebook className="w-4 h-4 text-blue-600" /> : <FaInstagram className="w-4 h-4 text-pink-600" />}
        </div>
        <div>
          <h5 className="font-semibold text-gray-800 text-sm">{name}</h5>
          <span className="text-xs text-gray-400 capitalize">{platform}</span>
        </div>
      </div>
      <div className="text-right">
        <div className="font-semibold text-gray-800 text-sm">{leads} leads</div>
        <div className="text-xs text-gray-400">{spend}</div>
      </div>
    </div>
  );
}
