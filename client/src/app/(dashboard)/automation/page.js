import React from 'react';
import { Workflow, Play, Plus, Settings2, Zap, Mail, MessageSquare, Clock, ArrowRight, MousePointer2 } from 'lucide-react';

export default function AutomationWorkflow() {
  return (
    <div className="p-4 md:p-8 max-w-[1600px] mx-auto space-y-6 animate-in fade-in duration-500 h-[calc(100vh-5rem)] flex flex-col">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 flex-shrink-0">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-rose-600 flex items-center gap-3">
            <Workflow className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
            Automations Builder
          </h1>
          <p className="text-slate-500 mt-1 md:mt-2 text-sm md:text-base">Design multi-channel customer journeys visually.</p>
        </div>
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none justify-center flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2.5 rounded-xl hover:bg-slate-50 transition-all font-medium shadow-sm">
            <Settings2 className="w-4 h-4" />
            Settings
          </button>
          <button className="flex-1 sm:flex-none justify-center flex items-center gap-2 bg-gradient-to-r from-orange-500 to-rose-600 text-white px-6 py-2.5 rounded-xl hover:scale-105 transition-all shadow-lg shadow-orange-500/30 font-medium whitespace-nowrap">
            <Play className="w-4 h-4" />
            Publish
          </button>
        </div>
      </div>

      <div className="flex-1 bg-[#F8FAFC] rounded-3xl border border-slate-200 shadow-inner overflow-hidden relative flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="w-full md:w-72 bg-white/90 backdrop-blur-xl border-b md:border-b-0 md:border-r border-slate-200 p-5 flex flex-row md:flex-col gap-6 z-10 shadow-xl overflow-x-auto md:overflow-y-auto shrink-0">
          <div className="min-w-[150px]">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Triggers</h3>
            <div className="space-y-2">
              <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-center gap-3 cursor-grab hover:border-orange-400 hover:shadow-md transition-all group">
                <div className="p-2 bg-orange-100 rounded-lg text-orange-600 group-hover:bg-orange-500 group-hover:text-white transition-colors"><Zap className="w-4 h-4" /></div>
                <span className="text-sm font-medium text-slate-700">Form Submitted</span>
              </div>
            </div>
          </div>
          
          <div className="min-w-[200px]">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Actions</h3>
            <div className="space-y-2 flex flex-row md:flex-col gap-2 md:gap-0">
              {[
                { icon: Mail, label: 'Send Email', color: 'blue' },
                { icon: MessageSquare, label: 'Send SMS', color: 'violet' },
                { icon: Zap, label: 'Update Contact', color: 'emerald' },
              ].map((action, idx) => (
                <div key={idx} className="p-3 bg-white border border-slate-200 rounded-xl flex items-center gap-3 cursor-grab hover:border-slate-400 hover:shadow-md transition-all group min-w-[160px] md:min-w-0">
                  <div className={`p-2 bg-${action.color}-100 rounded-lg text-${action.color}-600 group-hover:bg-${action.color}-500 group-hover:text-white transition-colors`}>
                    <action.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{action.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="min-w-[150px]">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Logic</h3>
            <div className="space-y-2">
              <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-center gap-3 cursor-grab hover:border-slate-400 hover:shadow-md transition-all group">
                <div className="p-2 bg-slate-100 rounded-lg text-slate-600 group-hover:bg-slate-500 group-hover:text-white transition-colors"><Clock className="w-4 h-4" /></div>
                <span className="text-sm font-medium text-slate-700">Time Delay</span>
              </div>
            </div>
          </div>
        </div>

        {/* Canvas Area with Dot Grid */}
        <div className="flex-1 relative overflow-auto bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] min-h-[600px]">
          {/* Mockup Nodes */}
          <div className="absolute inset-0 p-8 md:p-12 flex flex-col items-center min-w-[500px]">
            
            {/* Trigger Node */}
            <div className="bg-white rounded-2xl border-2 border-orange-400 shadow-xl w-64 md:w-72 flex flex-col items-center p-5 relative z-10 hover:scale-105 transition-transform cursor-pointer">
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center text-white"><Zap className="w-3 h-3" /></div>
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mb-3">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-800 text-lg">New Lead Sign Up</h4>
              <p className="text-sm text-slate-500 text-center mt-1">When a user submits "Main Landing Form"</p>
            </div>

            {/* Connecting Line */}
            <div className="w-0.5 h-10 md:h-12 bg-slate-300 relative group">
               <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border border-slate-300 rounded-full flex items-center justify-center group-hover:border-orange-500 group-hover:text-orange-500 cursor-pointer z-10 transition-colors shadow-sm text-slate-400">
                 <Plus className="w-4 h-4" />
               </div>
            </div>

            {/* Action Node */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg w-64 md:w-72 flex flex-col items-center p-5 relative z-10 hover:border-blue-400 transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500 mb-3 group-hover:bg-blue-100 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-800 text-lg">Welcome Email</h4>
              <p className="text-sm text-slate-500 text-center mt-1">Send "Welcome Series - Email 1"</p>
            </div>

            <div className="w-0.5 h-10 md:h-12 bg-slate-300 relative group">
               <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border border-slate-300 rounded-full flex items-center justify-center group-hover:border-orange-500 group-hover:text-orange-500 cursor-pointer z-10 transition-colors shadow-sm text-slate-400">
                 <Plus className="w-4 h-4" />
               </div>
            </div>

            {/* Delay Node */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-md px-6 py-3 flex items-center gap-3 relative z-10 hover:border-slate-400 transition-colors cursor-pointer">
              <Clock className="w-4 h-4 text-slate-400" />
              <span className="font-medium text-slate-600 text-sm">Wait for 2 days</span>
            </div>

             <div className="w-0.5 h-10 md:h-12 bg-slate-300 relative group">
               <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-6 h-6 bg-white border border-slate-300 rounded-full flex items-center justify-center group-hover:border-orange-500 group-hover:text-orange-500 cursor-pointer z-10 transition-colors shadow-sm text-slate-400">
                 <Plus className="w-4 h-4" />
               </div>
            </div>

             {/* Action Node 2 */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg w-64 md:w-72 flex flex-col items-center p-5 relative z-10 hover:border-violet-400 transition-colors cursor-pointer group">
              <div className="w-12 h-12 bg-violet-50 rounded-full flex items-center justify-center text-violet-500 mb-3 group-hover:bg-violet-100 transition-colors">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-800 text-lg">Follow-up SMS</h4>
              <p className="text-sm text-slate-500 text-center mt-1">Send "Promo Code Reminder"</p>
            </div>

             <div className="w-0.5 h-10 md:h-12 bg-slate-300 relative"></div>

             <div className="w-12 h-12 bg-slate-50 rounded-full border-2 border-dashed border-slate-300 flex items-center justify-center text-slate-400 hover:border-orange-500 hover:text-orange-500 hover:bg-orange-50 transition-colors cursor-pointer z-10 shadow-sm">
               <Plus className="w-6 h-6" />
             </div>

          </div>
        </div>
      </div>
    </div>
  );
}
