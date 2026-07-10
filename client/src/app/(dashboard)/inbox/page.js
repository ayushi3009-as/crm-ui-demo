import React from 'react';
import { Mail, MessageSquare, Phone, Search, MoreVertical, Send, Paperclip, Image as ImageIcon, Check, CheckCheck } from 'lucide-react';

export default function InboxPage() {
  const conversations = [
    { id: 1, name: 'Alice Smith', platform: 'email', lastMessage: 'Can we schedule a demo?', time: '10:42 AM', unread: 2, avatar: 'AS' },
    { id: 2, name: 'Bob Johnson', platform: 'whatsapp', lastMessage: 'Got the invoice, thanks!', time: 'Yesterday', unread: 0, avatar: 'BJ' },
    { id: 3, name: 'Charlie Davis', platform: 'sms', lastMessage: 'On my way to the office.', time: 'Yesterday', unread: 0, avatar: 'CD' },
  ];

  const getPlatformIcon = (platform) => {
    switch (platform) {
      case 'email': return <Mail className="w-4 h-4 text-blue-500" />;
      case 'whatsapp': return <MessageSquare className="w-4 h-4 text-green-500" />;
      case 'sms': return <Phone className="w-4 h-4 text-purple-500" />;
      default: return null;
    }
  };

  return (
    <div className="flex h-[calc(100vh-6rem)] bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden">
      {/* Sidebar */}
      <div className="w-1/3 border-r border-gray-200 dark:border-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Unified Inbox</h2>
          <div className="mt-4 relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search conversations..." 
              className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto">
          {conversations.map((chat) => (
            <div key={chat.id} className="flex items-center p-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors border-b border-gray-100 dark:border-gray-800/50 group">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold text-lg group-hover:scale-105 transition-transform">
                  {chat.avatar}
                </div>
                <div className="absolute -bottom-1 -right-1 bg-white dark:bg-gray-900 p-1 rounded-full shadow-sm">
                  {getPlatformIcon(chat.platform)}
                </div>
              </div>
              <div className="ml-4 flex-1 overflow-hidden">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 truncate">{chat.name}</h3>
                  <span className="text-xs text-gray-500">{chat.time}</span>
                </div>
                <p className="text-sm text-gray-500 truncate mt-0.5">{chat.lastMessage}</p>
              </div>
              {chat.unread > 0 && (
                <div className="ml-2 w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs font-bold shadow-md shadow-blue-500/20">
                  {chat.unread}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-50/50 dark:bg-gray-900/20">
        <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center bg-white/50 dark:bg-gray-900/50 backdrop-blur-md">
          <div className="flex items-center space-x-3">
             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900 dark:to-indigo-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold">
               AS
             </div>
             <div>
               <h3 className="font-bold text-gray-900 dark:text-gray-100">Alice Smith</h3>
               <div className="flex items-center text-xs text-green-500 font-medium">
                 <span className="w-2 h-2 rounded-full bg-green-500 mr-1.5 animate-pulse"></span>
                 Online via Email
               </div>
             </div>
          </div>
          <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 p-4 overflow-y-auto space-y-6">
           <div className="flex justify-center">
             <span className="text-xs bg-gray-200/50 dark:bg-gray-800/50 text-gray-500 px-3 py-1 rounded-full font-medium backdrop-blur-sm">Today, 10:30 AM</span>
           </div>
           
           <div className="flex justify-start">
             <div className="max-w-[70%] bg-white dark:bg-gray-800 p-4 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 dark:border-gray-700/50">
               <p className="text-gray-800 dark:text-gray-200">Hi there! We are interested in your CRM solution. Can we schedule a quick demo for next week?</p>
               <span className="text-[10px] text-gray-400 mt-2 block">10:30 AM • via Email</span>
             </div>
           </div>

           <div className="flex justify-end">
             <div className="max-w-[70%] bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-2xl rounded-tr-sm shadow-md shadow-blue-500/20">
               <p>Hello Alice! Absolutely, we would love to show you around. Does Tuesday at 2 PM work for you?</p>
               <div className="flex items-center justify-end space-x-1 mt-2 text-blue-100">
                 <span className="text-[10px]">10:35 AM</span>
                 <CheckCheck className="w-3 h-3" />
               </div>
             </div>
           </div>

           <div className="flex justify-start">
             <div className="max-w-[70%] bg-white dark:bg-gray-800 p-4 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 dark:border-gray-700/50">
               <p className="text-gray-800 dark:text-gray-200">Yes, Tuesday 2 PM is perfect. Looking forward to it!</p>
               <span className="text-[10px] text-gray-400 mt-2 block">10:42 AM • via Email</span>
             </div>
           </div>
        </div>

        <div className="p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-end space-x-2">
            <div className="flex space-x-1 mb-2">
              <button className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-all hover:scale-110">
                <Paperclip className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-full transition-all hover:scale-110">
                <ImageIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-2xl p-1 relative border border-transparent focus-within:border-blue-500/30 focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
              <textarea 
                rows="1" 
                placeholder="Type your message..." 
                className="w-full bg-transparent resize-none outline-none py-2 px-3 text-gray-900 dark:text-gray-100 max-h-32"
              ></textarea>
            </div>
            <button className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:scale-105 active:scale-95 mb-1">
              <Send className="w-5 h-5 ml-0.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
