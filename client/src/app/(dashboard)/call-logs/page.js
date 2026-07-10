import React from 'react';
import { Phone, PhoneIncoming, PhoneOutgoing, PhoneMissed, Search, Filter, Play, Pause, Download, MoreHorizontal, Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

export default function CallLogsPage() {
  const calls = [
    { id: 1, type: 'incoming', contact: 'Acme Corp', number: '+1 (555) 123-4567', agent: 'Sarah Jenkins', date: 'Today, 2:30 PM', duration: '05:24', status: 'completed' },
    { id: 2, type: 'outgoing', contact: 'Globex Inc', number: '+1 (555) 987-6543', agent: 'Mike Ross', date: 'Today, 11:15 AM', duration: '12:45', status: 'completed' },
    { id: 3, type: 'missed', contact: 'Unknown', number: '+1 (555) 000-1111', agent: 'Unassigned', date: 'Yesterday, 4:00 PM', duration: '00:00', status: 'missed' },
    { id: 4, type: 'incoming', contact: 'Initech', number: '+1 (555) 444-5555', agent: 'Sarah Jenkins', date: 'Yesterday, 1:45 PM', duration: '08:12', status: 'completed' },
    { id: 5, type: 'outgoing', contact: 'Soylent Corp', number: '+1 (555) 222-3333', agent: 'Mike Ross', date: 'Oct 12, 10:00 AM', duration: '03:30', status: 'completed' },
  ];

  const getCallIcon = (type) => {
    switch(type) {
      case 'incoming': return <PhoneIncoming className="w-4 h-4 text-green-500" />;
      case 'outgoing': return <PhoneOutgoing className="w-4 h-4 text-blue-500" />;
      case 'missed': return <PhoneMissed className="w-4 h-4 text-red-500" />;
      default: return <Phone className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusBadge = (status) => {
    const styles = {
      completed: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      missed: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
    };
    return (
      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold capitalize ${styles[status]}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl p-6 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
        <div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">Call Logs & Recordings</h1>
          <p className="text-gray-500 text-sm mt-1">Review, play, and analyze all team communication.</p>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search by number or name..." 
              className="w-full pl-9 pr-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500/50 outline-none text-sm shadow-sm transition-all"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors shadow-sm">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/80 dark:bg-gray-800/80 border-b border-gray-200 dark:border-gray-700">
                <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider w-12">Type</th>
                <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Contact</th>
                <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Agent</th>
                <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date & Time</th>
                <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="p-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Recording</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
              {calls.map((call) => (
                <tr key={call.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors group">
                  <td className="p-4">
                    <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                      {getCallIcon(call.type)}
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="font-semibold text-gray-900 dark:text-gray-100">{call.contact}</div>
                    <div className="text-xs text-gray-500 mt-0.5 font-mono">{call.number}</div>
                  </td>
                  <td className="p-4 text-sm text-gray-700 dark:text-gray-300">{call.agent}</td>
                  <td className="p-4">
                    <div className="flex items-center text-sm text-gray-700 dark:text-gray-300 gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-400" />
                      {call.date.split(',')[0]}
                      <span className="text-gray-400 mx-1">•</span>
                      <Clock className="w-3.5 h-3.5 text-gray-400" />
                      {call.date.split(',')[1]}
                    </div>
                  </td>
                  <td className="p-4">
                    {getStatusBadge(call.status)}
                  </td>
                  <td className="p-4">
                    {call.status === 'completed' ? (
                      <div className="flex items-center justify-end gap-3">
                        <span className="text-xs font-mono font-medium text-gray-500">{call.duration}</span>
                        <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1 border border-gray-200 dark:border-gray-700 shadow-inner">
                          <button className="w-8 h-8 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center text-blue-600 dark:text-blue-400 shadow-sm hover:scale-105 transition-transform hover:text-blue-700">
                            <Play className="w-4 h-4 ml-0.5" />
                          </button>
                          <div className="w-16 h-1 mx-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                            <div className="w-0 h-full bg-blue-500 rounded-full group-hover:w-1/3 transition-all duration-1000"></div>
                          </div>
                        </div>
                        <button className="p-2 text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-end text-gray-400">
                        <span className="text-xs italic">No recording</span>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gray-50/50 dark:bg-gray-900/30">
          <span className="text-xs text-gray-500">Showing 1 to 5 of 42 entries</span>
          <div className="flex gap-1">
            <button className="p-1 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="px-3 py-1 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm font-medium text-blue-600">1</button>
            <button className="px-3 py-1 rounded-lg border border-transparent text-sm font-medium text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">2</button>
            <button className="px-3 py-1 rounded-lg border border-transparent text-sm font-medium text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">3</button>
            <button className="p-1 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
