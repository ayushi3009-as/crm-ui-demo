import React from 'react';
import { User, Building2, Bell, Lock, Save, Camera } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Settings</h1>
        <p className="text-slate-500 mt-1">Manage your account preferences and configurations.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 space-y-1">
          {[
            { icon: <User className="w-4 h-4" />, label: 'Profile', active: true },
            { icon: <Building2 className="w-4 h-4" />, label: 'Workspace', active: false },
            { icon: <Bell className="w-4 h-4" />, label: 'Notifications', active: false },
            { icon: <Lock className="w-4 h-4" />, label: 'Security', active: false },
          ].map((tab, idx) => (
            <button key={idx} className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
              tab.active ? 'bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}>
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </aside>

        <div className="flex-1 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 md:p-8 hover:shadow-md transition-shadow">
          <div className="max-w-xl space-y-8">
            <div>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Profile Information</h2>
              <div className="flex items-center gap-6">
                <div className="relative group cursor-pointer">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-blue-100 to-purple-100 p-1 hover:scale-105 transition-transform duration-300">
                    <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" className="w-full h-full rounded-xl object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-black/40 rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-xl text-sm font-medium shadow-sm hover:bg-slate-50 transition-colors">Upload New</button>
                    <button className="px-4 py-2 text-red-600 text-sm font-medium hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-colors">Remove</button>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Recommended: Square JPG, PNG. Max 2MB.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 group">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">First Name</label>
                <input type="text" defaultValue="Alex" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 focus:ring-2 focus:ring-blue-500 outline-none transition-all group-hover:border-slate-300 dark:group-hover:border-slate-600" />
              </div>
              <div className="space-y-2 group">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Last Name</label>
                <input type="text" defaultValue="Morgan" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 focus:ring-2 focus:ring-blue-500 outline-none transition-all group-hover:border-slate-300 dark:group-hover:border-slate-600" />
              </div>
              <div className="space-y-2 md:col-span-2 group">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                <input type="email" defaultValue="alex@example.com" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 focus:ring-2 focus:ring-blue-500 outline-none transition-all group-hover:border-slate-300 dark:group-hover:border-slate-600" />
              </div>
              <div className="space-y-2 md:col-span-2 group">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Bio</label>
                <textarea rows="3" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none group-hover:border-slate-300 dark:group-hover:border-slate-600" defaultValue="Product designer and frontend developer."></textarea>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-700 flex justify-end gap-3">
              <button className="px-5 py-2.5 text-slate-600 dark:text-slate-300 font-medium hover:bg-slate-100 dark:hover:bg-slate-700 rounded-xl transition-colors">Cancel</button>
              <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2">
                <Save className="w-4 h-4" /> Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
