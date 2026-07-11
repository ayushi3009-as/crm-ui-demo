export default function StatCard({ title, value, change, changeType, icon: Icon, iconBg, iconColor, subtitle }) {
  const isPositive = changeType === 'increase';
  
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${iconBg}`}>
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-medium text-slate-500 truncate">{title}</h3>
          <p className="text-xl 2xl:text-2xl font-bold text-slate-900 mt-0.5 truncate" title={value}>{value}</p>
        </div>
      </div>
      <div className="flex items-center text-xs font-medium">
        <span className={isPositive ? 'text-emerald-600' : 'text-red-500'}>
          {isPositive ? '↑' : '↓'} {change}
        </span>
        <span className="text-slate-400 ml-1.5">{subtitle || 'vs last 30 days'}</span>
      </div>
    </div>
  );
}
