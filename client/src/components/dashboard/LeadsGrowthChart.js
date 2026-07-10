'use client';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '1 May', leads: 0 },
  { name: '8 May', leads: 2000 },
  { name: '15 May', leads: 3987 },
  { name: '22 May', leads: 2800 },
  { name: '31 May', leads: 6000 },
];

export default function LeadsGrowthChart() {
  return (
    <div className="w-full h-full min-h-[200px] flex flex-col">
      <div className="flex justify-between items-end mb-4 px-2">
        <div>
          <p className="text-2xl font-bold text-slate-800">3,987</p>
          <p className="text-xs text-slate-500">15 May</p>
        </div>
      </div>
      <div className="flex-1 min-h-[150px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} dy={10} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#64748b' }} tickFormatter={(val) => `${val/1000}K`} />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Area type="monotone" dataKey="leads" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorLeads)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-4 gap-2 mt-4 pt-4 border-t border-slate-100">
        <div className="text-center">
          <p className="text-sm font-semibold text-blue-600">3,987</p>
          <p className="text-[10px] text-slate-500">New Leads</p>
        </div>
        <div className="text-center border-l border-slate-100">
          <p className="text-sm font-semibold text-slate-700">2,743</p>
          <p className="text-[10px] text-slate-500">Contacted</p>
        </div>
        <div className="text-center border-l border-slate-100">
          <p className="text-sm font-semibold text-slate-700">1,824</p>
          <p className="text-[10px] text-slate-500">Qualified</p>
        </div>
        <div className="text-center border-l border-slate-100">
          <p className="text-sm font-semibold text-slate-700">932</p>
          <p className="text-[10px] text-slate-500">Converted</p>
        </div>
      </div>
    </div>
  );
}
