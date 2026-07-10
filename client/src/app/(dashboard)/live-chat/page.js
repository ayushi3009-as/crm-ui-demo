import React from 'react';
import { MessageCircle, Search, Clock, Zap, Send, User, ChevronRight, X, AlertCircle } from 'lucide-react';

export default function LiveChatPage() {
  const activeChats = [
    { id: 1, visitor: 'Visitor #8942', status: 'waiting', waitTime: '2m', page: '/pricing' },
    { id: 2, visitor: 'Jane Doe', status: 'active', waitTime: '0m', page: '/features' },
    { id: 3, visitor: 'Visitor #8911', status: 'active', waitTime: '0m', page: '/contact' },
  ];

  const cannedResponses = [
    "Hello! How can I help you today?",
    "Our pricing starts at $29/mo. Would you like to see a detailed breakdown?",
    "I'll need to check with my team on that. Please give me one moment.",
    "Thank you for reaching out! Is there anything else I can assist you with?",
  ];

  return (
    <div className="flex h-[calc(100vh-6rem)] gap-6">
      {/* Active Chats Sidebar */}
      <div className="w-80 flex flex-col gap-4">
        <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-800 p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Live Queue
            </h2>
            <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-xs font-bold px-2 py-1 rounded-lg">3 Online</span>
          </div>
          
          <div className="space-y-3">
            {activeChats.map(chat => (
              <div key={chat.id} className={`p-3 rounded-xl border transition-all cursor-pointer hover:shadow-md ${chat.status === 'waiting' ? 'bg-orange-50/50 border-orange-200 dark:bg-orange-900/10 dark:border-orange-800/30' : 'bg-gray-50 border-gray-100 dark:bg-gray-800/30 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800'}`}>
                <div className="flex justify-between items-start">
                  <div className="font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                    <User className="w-4 h-4 text-gray-400" />
                    {chat.visitor}
                  </div>
                  {chat.status === 'waiting' && (
                    <span className="flex items-center text-xs text-orange-600 font-medium">
                      <Clock className="w-3 h-3 mr-1" />
                      {chat.waitTime}
                    </span>
                  )}
                </div>
                <div className="mt-2 text-xs text-gray-500 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
                  Browsing: {chat.page}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Chat Interface */}
      <div className="flex-1 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-white/80 dark:bg-gray-900/80">
          <div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100">Visitor #8942</h3>
            <p className="text-xs text-gray-500 flex items-center gap-1">
               <span className="text-green-500">●</span> Active now on /pricing
            </p>
          </div>
          <button className="px-4 py-2 bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/40 rounded-xl text-sm font-medium transition-colors flex items-center gap-2">
            <X className="w-4 h-4" /> End Chat
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-gray-50/30 dark:bg-gray-900/10">
          <div className="text-center">
             <span className="bg-gray-200/50 dark:bg-gray-800/50 text-gray-500 text-xs px-3 py-1 rounded-full backdrop-blur-sm">Chat started at 14:02 PM</span>
          </div>

          <div className="flex justify-start">
             <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 dark:border-gray-700/50 max-w-[80%]">
               <p className="text-gray-800 dark:text-gray-200">Hi, I'm looking at your pricing page. Does the Pro plan include API access?</p>
               <span className="text-[10px] text-gray-400 mt-2 block">14:02 PM</span>
             </div>
          </div>
        </div>

        {/* Canned Responses Quick Panel */}
        <div className="px-4 py-2 bg-gray-50/80 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700/50 overflow-x-auto whitespace-nowrap flex gap-2">
          <div className="flex items-center text-xs font-semibold text-gray-500 mr-2 uppercase tracking-wider">
            <Zap className="w-3 h-3 mr-1 text-yellow-500" /> Canned
          </div>
          {cannedResponses.map((res, i) => (
            <button key={i} className="inline-block px-3 py-1.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg text-xs text-gray-600 dark:text-gray-300 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm hover:shadow truncate max-w-[200px]">
              {res}
            </button>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white/80 dark:bg-gray-900/80 border-t border-gray-200 dark:border-gray-800 flex gap-3">
          <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-xl p-2 flex items-center border border-transparent focus-within:border-blue-500/30 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
            <textarea 
              rows="1" 
              placeholder="Type a message or type '/' for commands..." 
              className="w-full bg-transparent resize-none outline-none px-2 py-1 text-gray-900 dark:text-gray-100"
            ></textarea>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Visitor Info Sidebar */}
      <div className="w-72 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-4 hidden lg:block">
        <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-4 pb-2 border-b border-gray-100 dark:border-gray-800">Visitor Info</h3>
        
        <div className="space-y-4">
          <div>
            <label className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Location</label>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-1">San Francisco, CA 🇺🇸</p>
          </div>
          
          <div>
            <label className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Device</label>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-1">Mac OS • Chrome</p>
          </div>
          
          <div>
            <label className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Current Page</label>
            <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-1 flex items-center hover:underline">
              /pricing <ChevronRight className="w-3 h-3 ml-1" />
            </a>
          </div>

          <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">
             <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-xl border border-blue-100 dark:border-blue-900/30 flex items-start gap-2">
               <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
               <p className="text-xs text-blue-800 dark:text-blue-300">
                 Visitor has visited the pricing page 3 times today. High intent lead.
               </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
