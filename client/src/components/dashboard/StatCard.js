export default function StatCard({ title, value, change, changeType, icon: Icon, iconBg, iconColor, subtitle, onClick, isActive }) {
  const isPositive = changeType === 'increase';
  
  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-2xl p-5 border shadow-sm flex flex-col justify-between transition-colors ${onClick ? 'cursor-pointer hover:border-blue-400 hover:shadow-md' : ''} ${isActive ? 'border-blue-500 ring-1 ring-blue-500 bg-blue-50/20' : 'border-slate-200'}`}
    >
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
