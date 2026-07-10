'use client';
import { HiOutlineMagnifyingGlass, HiOutlineCalendar, HiOutlineChatBubbleOvalLeftEllipsis, HiOutlineBell } from 'react-icons/hi2';

export default function Topbar() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-20">
      <div className="flex items-center gap-4">
        {/* Title area */}
        <div>
          <h2 className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 via-blue-600 to-orange-500 tracking-tight flex items-center gap-2">
            TIVRA 2.0 <span className="text-sm font-medium text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">AI CRM & Automation</span>
          </h2>
          <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mt-0.5">
            Capture Leads <span className="text-orange-400">•</span> Nurture Prospects <span className="text-blue-400">•</span> Close More Deals <span className="text-emerald-400">•</span> Grow with AI
          </p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        {/* Actions */}
        <div className="flex items-center gap-4 text-slate-500">
          <button className="hover:text-slate-900 transition-colors">
            <HiOutlineMagnifyingGlass className="w-5 h-5" />
          </button>
          <button className="hover:text-slate-900 transition-colors">
            <HiOutlineCalendar className="w-5 h-5" />
          </button>
          <button className="relative hover:text-slate-900 transition-colors">
            <HiOutlineChatBubbleOvalLeftEllipsis className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[9px] font-bold text-white border-2 border-white">
              8
            </span>
          </button>
          <button className="relative hover:text-slate-900 transition-colors">
            <HiOutlineBell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white border-2 border-white">
              12
            </span>
          </button>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-3 pl-6 border-l border-slate-200 cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026024d" alt="User avatar" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-slate-900 leading-none">Amit Mishra</span>
            <span className="text-xs text-slate-500 mt-1">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
}
