'use client';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Meta Ads', value: 45.8, color: '#3b82f6', count: 11765 },
  { name: 'Google Ads', value: 25.6, color: '#22c55e', count: 6576 },
  { name: 'Website', value: 15.2, color: '#f59e0b', count: 3904 },
  { name: 'WhatsApp', value: 8.7, color: '#10b981', count: 2234 },
  { name: 'Referral', value: 4.7, color: '#06b6d4', count: 1210 },
];

export default function LeadSourcesChart() {
  return (
    <div className="w-full h-full min-h-[250px] flex flex-col justify-between">
      <div className="flex-1 flex items-center justify-center relative min-h-[160px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={75}
              paddingAngle={2}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value, name, props) => [`${props.payload.count} leads`, name]}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
          </PieChart>
        </ResponsiveContainer>
        {/* Center Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-xl font-bold text-slate-800">25,689</span>
          <span className="text-[10px] text-slate-500">Total Leads</span>
        </div>
      </div>
      
      {/* Legend Grid */}
      <div className="grid grid-cols-2 gap-x-2 gap-y-3 mt-4">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
              <span className="text-xs text-slate-600">{item.name}</span>
            </div>
            <span className="text-xs font-semibold text-slate-800">{item.value}%</span>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-3 border-t border-slate-100 text-center">
        <a href="#" className="text-xs font-medium text-blue-600 hover:underline">View Full Report</a>
      </div>
    </div>
  );
}
