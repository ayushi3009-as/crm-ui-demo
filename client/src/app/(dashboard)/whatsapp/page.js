import React from 'react';
import { MessageCircle, Send, Users, Smartphone, Image as ImageIcon, Link as LinkIcon, Paperclip, CheckCircle2 } from 'lucide-react';

export default function WhatsAppCampaigns() {
  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-700">WhatsApp Campaigns</h1>
          <p className="text-slate-500 mt-2">Design and launch high-conversion WhatsApp messages.</p>
        </div>
        <button className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-2xl hover:scale-105 transition-all shadow-lg shadow-green-500/30 font-medium">
          <Send className="w-4 h-4" />
          Send Campaign
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Builder Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20 shadow-xl shadow-slate-200/50">
            <h2 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-green-500" />
              Message Template
            </h2>
            
            <div className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Campaign Name</label>
                <input 
                  type="text" 
                  placeholder="e.g., Summer Sale Announcement" 
                  className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-600 mb-2">Message Body</label>
                <textarea 
                  rows={5}
                  placeholder="Type your message here..." 
                  className="w-full bg-slate-50/50 border border-slate-200 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500/50 transition-all resize-none"
                  defaultValue="Hi {{Name}}, our Summer Sale is finally here! 🌞 Get up to 50% off on all items."
                />
                <div className="flex gap-3 mt-3">
                  <button className="p-2 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors text-slate-600">
                    <ImageIcon className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors text-slate-600">
                    <LinkIcon className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-slate-100 rounded-xl hover:bg-slate-200 transition-colors text-slate-600">
                    <Paperclip className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20 shadow-xl shadow-slate-200/50">
            <h2 className="text-xl font-semibold text-slate-800 mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-500" />
              Audience Selection
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="border-2 border-green-500 bg-green-50/50 rounded-2xl p-5 cursor-pointer relative overflow-hidden transition-all">
                <div className="absolute top-3 right-3 text-green-500">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-800">VIP Customers</h3>
                <p className="text-sm text-slate-500 mt-1">2,450 contacts</p>
              </div>
              <div className="border-2 border-slate-200 bg-slate-50/50 rounded-2xl p-5 cursor-pointer hover:border-green-300 transition-all">
                <h3 className="font-semibold text-slate-800">Abandoned Cart</h3>
                <p className="text-sm text-slate-500 mt-1">843 contacts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Preview Section */}
        <div className="lg:col-span-1 flex justify-center">
          <div className="w-full max-w-[350px] bg-slate-900 rounded-[2.5rem] p-4 shadow-2xl relative overflow-hidden h-[600px] border-8 border-slate-800 flex flex-col">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-10"></div>
            
            {/* WhatsApp Header */}
            <div className="bg-[#075E54] pt-8 pb-3 px-4 flex items-center gap-3 rounded-t-3xl -mx-4 -mt-4 mb-4 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Smartphone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Business Name</h3>
                <p className="text-xs text-white/70">Verified Account</p>
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 bg-[#ECE5DD] -mx-4 px-4 py-4 space-y-4 overflow-y-auto">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm max-w-[85%] relative">
                <p className="text-sm text-slate-800 whitespace-pre-wrap">
                  Hi John, our Summer Sale is finally here! 🌞 Get up to 50% off on all items.
                </p>
                <div className="text-right mt-1">
                  <span className="text-[10px] text-slate-400">10:42 AM</span>
                </div>
              </div>
              
              <div className="flex gap-2 justify-center mt-2">
                <button className="bg-white text-[#00A884] text-sm px-4 py-2 rounded-xl shadow-sm font-medium border border-slate-100 flex-1 hover:bg-slate-50 transition-colors">
                  Shop Now
                </button>
                <button className="bg-white text-[#00A884] text-sm px-4 py-2 rounded-xl shadow-sm font-medium border border-slate-100 flex-1 hover:bg-slate-50 transition-colors">
                  Opt Out
                </button>
              </div>
            </div>
            
            {/* Input area mockup */}
            <div className="bg-[#f0f0f0] -mx-4 -mb-4 p-3 flex items-center gap-2 rounded-b-3xl">
               <div className="bg-white rounded-full h-10 flex-1 flex items-center px-4 text-slate-400 text-sm">
                 Reply...
               </div>
               <div className="w-10 h-10 bg-[#00A884] rounded-full flex items-center justify-center text-white shrink-0">
                 <Send className="w-4 h-4 ml-1" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
