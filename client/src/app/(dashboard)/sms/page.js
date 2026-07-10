import React from 'react';
import { Smartphone, Clock, Calendar, Send, History, CheckCircle2, AlertCircle } from 'lucide-react';

export default function SMSCampaigns() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-fuchsia-600">SMS Marketing</h1>
          <p className="text-slate-500 mt-2">Reach your customers instantly with targeted SMS.</p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-6 py-3 rounded-2xl hover:bg-slate-50 transition-all shadow-sm font-medium">
          <History className="w-5 h-5" />
          Campaign History
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sender Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20 shadow-xl shadow-slate-200/50">
            <h2 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-violet-500" />
              Compose Message
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Sender ID</label>
                <div className="relative">
                  <select className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all appearance-none cursor-pointer">
                    <option>BRANDNAME</option>
                    <option>PROMO24</option>
                    <option>+1 (555) 019-2834</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Audience</label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <div className="flex-1 bg-slate-50/50 border border-slate-200 rounded-2xl px-4 py-3 flex items-center justify-between">
                    <span className="text-slate-600 text-sm md:text-base">All Active Customers</span>
                    <span className="bg-violet-100 text-violet-700 text-[10px] md:text-xs font-bold px-2 py-1 rounded-lg">1,245 Contacts</span>
                  </div>
                  <button className="px-6 py-3 bg-slate-100 text-slate-700 font-medium rounded-2xl hover:bg-slate-200 transition-colors shrink-0">Change</button>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-end mb-2">
                  <label className="block text-sm font-medium text-slate-600">Message Content</label>
                  <span className="text-xs font-medium text-violet-600 bg-violet-50 px-2 py-1 rounded-md">112 / 160 chars (1 SMS)</span>
                </div>
                <textarea 
                  rows={4}
                  placeholder="Type your SMS message..." 
                  className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all resize-none font-mono text-sm shadow-inner"
                  defaultValue="Hi {{FirstName}}, flash sale starts in 1hr! Use code FLASH20 at checkout for 20% off. Shop now: https://lnk.bio/brand"
                />
                <div className="flex items-center gap-2 mt-3 text-sm text-slate-500 bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <AlertCircle className="w-4 h-4 text-amber-500 shrink-0" />
                  Links will be automatically shortened and tracked.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20 shadow-xl shadow-slate-200/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
             <div className="flex items-center gap-4">
               <div className="p-3 bg-fuchsia-100 rounded-2xl text-fuchsia-600 shrink-0">
                 <Clock className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="font-semibold text-slate-800">Schedule Delivery</h3>
                 <p className="text-sm text-slate-500">Send immediately or pick a time</p>
               </div>
             </div>
             <div className="flex gap-3 w-full sm:w-auto">
               <button className="flex-1 sm:flex-none justify-center px-4 py-3 border-2 border-slate-200 rounded-xl font-medium text-slate-600 hover:border-violet-300 hover:bg-violet-50 transition-colors flex items-center gap-2">
                 <Calendar className="w-4 h-4" /> Date
               </button>
               <button className="flex-1 sm:flex-none justify-center px-6 py-3 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white rounded-xl font-medium hover:scale-105 transition-all shadow-lg shadow-violet-500/30 flex items-center gap-2">
                 <Send className="w-4 h-4" /> Send
               </button>
             </div>
          </div>
        </div>

        {/* Device Preview */}
        <div className="lg:col-span-1 flex justify-center mt-8 lg:mt-0">
           <div className="w-[300px] h-[600px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl relative border-[8px] border-slate-800">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-10"></div>
             <div className="w-full h-full bg-slate-100 rounded-[2.2rem] overflow-hidden flex flex-col">
               <div className="bg-white/90 backdrop-blur-md pt-10 pb-4 px-6 text-center border-b border-slate-200 z-10 sticky top-0 shadow-sm">
                 <div className="w-12 h-12 bg-slate-200 rounded-full mx-auto mb-2 flex items-center justify-center text-slate-500 font-bold text-xl">
                   B
                 </div>
                 <h3 className="font-semibold text-slate-800 text-sm">BRANDNAME</h3>
               </div>
               
               <div className="flex-1 p-4 flex flex-col justify-end gap-2 bg-slate-50/80">
                 <div className="self-center text-[11px] font-medium text-slate-400 mb-2">Today 10:42 AM</div>
                 <div className="bg-[#E5E5EA] p-3 rounded-2xl rounded-bl-none text-black text-[14px] leading-snug w-[85%] self-start shadow-sm">
                   Hi John, flash sale starts in 1hr! Use code FLASH20 at checkout for 20% off. Shop now: https://lnk.bio/brand
                 </div>
                 <div className="text-[10px] text-slate-400 ml-1">Delivered</div>
               </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
