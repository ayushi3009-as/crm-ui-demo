'use client';

const stages = [
  { name: 'New Leads', count: 25689, color: 'bg-blue-600', width: '100%' },
  { name: 'Contacted', count: 16324, color: 'bg-emerald-500', width: '85%' },
  { name: 'Qualified', count: 9125, color: 'bg-green-400', width: '70%' },
  { name: 'Proposal', count: 4928, color: 'bg-yellow-500', width: '55%' },
  { name: 'Negotiation', count: 2450, color: 'bg-orange-500', width: '40%' },
  { name: 'Won', count: 1245, color: 'bg-red-500', width: '25%' },
];

export default function SalesPipelineChart() {
  return (
    <div className="w-full h-full flex flex-col justify-between">
      <div className="flex-1 flex flex-col items-center justify-center gap-1.5 py-4">
        {stages.map((stage, idx) => (
          <div key={idx} className="w-full flex items-center justify-between gap-4">
            {/* The funnel bar container */}
            <div className="flex-1 flex justify-center h-8">
              <div 
                className={`h-full ${stage.color} rounded-sm transition-all duration-500`}
                style={{ width: stage.width }}
                title={`${stage.name}: ${stage.count}`}
              ></div>
            </div>
            
            {/* Labels on the right */}
            <div className="w-32 flex justify-between items-center shrink-0">
              <span className="text-[11px] font-medium text-slate-600">{stage.name}</span>
              <span className="text-[11px] font-bold text-slate-900">{stage.count.toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-2 pt-3 border-t border-slate-100 flex justify-between items-center">
        <span className="text-sm font-medium text-slate-700">Conversion Rate</span>
        <span className="text-sm font-bold text-emerald-600">16.35%</span>
      </div>
    </div>
  );
}
