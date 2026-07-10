'use client';
import { 
  HiOutlineChartBar, HiOutlinePlus, HiOutlineAdjustmentsHorizontal,
  HiOutlineViewColumns, HiOutlineListBullet, HiOutlineEllipsisHorizontal
} from 'react-icons/hi2';

const pipelineStages = [
  {
    id: 'discovery',
    name: 'Discovery',
    color: 'bg-purple-100 text-purple-700',
    borderColor: 'border-t-purple-500',
    amount: '₹3,50,000',
    deals: [
      { id: 1, name: 'Sales Team Training', company: 'Bright Future Ltd.', amount: '₹1,50,000', closeDate: '15 Aug', owner: 'https://i.pravatar.cc/150?u=1' },
      { id: 2, name: 'Initial Consultation', company: 'Verma Enterprises', amount: '₹2,00,000', closeDate: '22 Aug', owner: 'https://i.pravatar.cc/150?u=6' }
    ]
  },
  {
    id: 'proposal',
    name: 'Proposal Sent',
    color: 'bg-blue-100 text-blue-700',
    borderColor: 'border-t-blue-500',
    amount: '₹4,20,000',
    deals: [
      { id: 3, name: 'Marketing Automation Setup', company: 'Creative Agency', amount: '₹4,20,000', closeDate: '28 Jul', owner: 'https://i.pravatar.cc/150?u=2' }
    ]
  },
  {
    id: 'negotiation',
    name: 'Negotiation',
    color: 'bg-orange-100 text-orange-700',
    borderColor: 'border-t-orange-500',
    amount: '₹16,25,000',
    deals: [
      { id: 4, name: 'Enterprise CRM Implementation', company: 'Tech Solutions Pvt. Ltd.', amount: '₹12,50,000', closeDate: '15 Jul', owner: 'https://i.pravatar.cc/150?u=3' },
      { id: 5, name: 'Custom API Integration', company: 'NextGen Marketing', amount: '₹3,75,000', closeDate: '20 Jul', owner: 'https://i.pravatar.cc/150?u=6' }
    ]
  },
  {
    id: 'won',
    name: 'Closed Won',
    color: 'bg-emerald-100 text-emerald-700',
    borderColor: 'border-t-emerald-500',
    amount: '₹8,90,000',
    deals: [
      { id: 6, name: 'Annual Software License', company: 'Verma Enterprises', amount: '₹8,90,000', closeDate: '02 Jun', owner: 'https://i.pravatar.cc/150?u=6' }
    ]
  },
  {
    id: 'lost',
    name: 'Closed Lost',
    color: 'bg-red-100 text-red-700',
    borderColor: 'border-t-red-500',
    amount: '₹25,00,000',
    deals: [
      { id: 7, name: 'Cloud Migration Project', company: 'Digital World', amount: '₹25,00,000', closeDate: '10 May', owner: 'https://i.pravatar.cc/150?u=3' }
    ]
  }
];

export default function PipelinePage() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-10 h-full flex flex-col">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600">
            <HiOutlineChartBar className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-900">Sales Pipeline</h1>
            <p className="text-sm text-slate-500">Visual Kanban board for your active deals</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-slate-100 rounded-lg p-1">
            <button className="px-3 py-1.5 bg-white text-slate-800 rounded-md shadow-sm text-xs font-semibold flex items-center gap-2">
              <HiOutlineViewColumns className="w-4 h-4" /> Board
            </button>
            <button className="px-3 py-1.5 text-slate-500 hover:text-slate-700 rounded-md text-xs font-semibold flex items-center gap-2 transition-colors">
              <HiOutlineListBullet className="w-4 h-4" /> List
            </button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition-colors">
            <HiOutlineAdjustmentsHorizontal className="w-4 h-4" /> Filters
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-semibold hover:bg-orange-700 transition-colors">
            <HiOutlinePlus className="w-4 h-4" /> Add Deal
          </button>
        </div>
      </div>

      {/* Kanban Board Area */}
      <div className="flex-1 overflow-x-auto hide-scrollbar pb-4">
        <div className="flex gap-4 min-w-max h-full">
          {pipelineStages.map((stage) => (
            <div key={stage.id} className="w-72 flex flex-col h-full">
              {/* Column Header */}
              <div className={`bg-white rounded-t-xl border-x border-t border-slate-200 p-4 border-t-4 ${stage.borderColor} shrink-0`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${stage.color}`}>
                    {stage.name} ({stage.deals.length})
                  </span>
                  <button className="text-slate-400 hover:text-slate-600"><HiOutlineEllipsisHorizontal className="w-5 h-5" /></button>
                </div>
                <div className="text-sm font-bold text-slate-700">{stage.amount}</div>
              </div>
              
              {/* Column Body / Dropzone */}
              <div className="bg-slate-50/50 border-x border-b border-slate-200 rounded-b-xl p-2 flex-1 min-h-[400px]">
                <div className="space-y-3">
                  {stage.deals.map((deal) => (
                    <div key={deal.id} className="bg-white p-3.5 rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow cursor-grab">
                      <div className="flex justify-between items-start mb-2">
                        <p className="text-sm font-bold text-blue-600 hover:underline cursor-pointer leading-tight">{deal.name}</p>
                      </div>
                      <p className="text-[11px] text-slate-500 mb-3">{deal.company}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-slate-700">{deal.amount}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded font-medium">{deal.closeDate}</span>
                          <img src={deal.owner} alt="" className="w-5 h-5 rounded-full bg-slate-200" />
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <button className="w-full py-2 border-2 border-dashed border-slate-200 rounded-lg text-slate-400 text-xs font-semibold hover:border-orange-300 hover:text-orange-500 transition-colors flex items-center justify-center gap-1">
                    <HiOutlinePlus className="w-3 h-3" /> Add Deal
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
}
