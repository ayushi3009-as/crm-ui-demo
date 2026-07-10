import React from 'react';
import { UserPlus, MoreVertical, Shield, Mail, Filter } from 'lucide-react';

export default function TeamPage() {
  const team = [
    { name: 'Sarah Connor', email: 'sarah@example.com', role: 'Admin', status: 'Active', lastActive: '2 mins ago', avatar: 'https://i.pravatar.cc/150?u=1' },
    { name: 'John Smith', email: 'john@example.com', role: 'Editor', status: 'Active', lastActive: '1 hour ago', avatar: 'https://i.pravatar.cc/150?u=2' },
    { name: 'Emily Chen', email: 'emily@example.com', role: 'Viewer', status: 'Invited', lastActive: 'Never', avatar: 'https://i.pravatar.cc/150?u=3' },
    { name: 'Michael Doe', email: 'michael@example.com', role: 'Editor', status: 'Active', lastActive: 'Yesterday', avatar: 'https://i.pravatar.cc/150?u=4' },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Team Management</h1>
          <p className="text-slate-500 mt-1">Manage user access and roles across your workspace.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2">
          <UserPlus className="w-4 h-4" />
          Add Member
        </button>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
        <div className="p-4 border-b border-slate-200 dark:border-slate-700 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
            <span className="bg-white dark:bg-slate-700 px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-600 shadow-sm">All Members (12)</span>
            <span className="px-3 py-1 text-slate-400 hover:text-slate-600 cursor-pointer">Admins (3)</span>
          </div>
          <button className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 bg-white dark:bg-slate-700 rounded-lg border border-slate-200 dark:border-slate-600 shadow-sm">
            <Filter className="w-4 h-4" />
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-50/50 dark:bg-slate-900/20">
                <th className="p-4 font-semibold">User</th>
                <th className="p-4 font-semibold">Role</th>
                <th className="p-4 font-semibold">Status</th>
                <th className="p-4 font-semibold">Last Active</th>
                <th className="p-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700/50">
              {team.map((member, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors group">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-700 shadow-sm group-hover:scale-105 transition-transform" />
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white">{member.name}</div>
                        <div className="text-sm text-slate-500 flex items-center gap-1"><Mail className="w-3 h-3" /> {member.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1.5">
                      {member.role === 'Admin' && <Shield className="w-4 h-4 text-purple-500" />}
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{member.role}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      member.status === 'Active' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400' : 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-slate-500 dark:text-slate-400">
                    {member.lastActive}
                  </td>
                  <td className="p-4 text-right">
                    <button className="p-2 text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors opacity-0 group-hover:opacity-100">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
