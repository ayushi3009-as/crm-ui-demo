'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  HiOutlineHome, HiOutlineUsers, HiOutlineGlobeAlt, 
  HiOutlineUserGroup, HiOutlineChartBar, HiOutlineBriefcase,
  HiOutlineChatBubbleOvalLeftEllipsis, HiOutlineEnvelope, 
  HiOutlineChatBubbleBottomCenterText, HiOutlineCog6Tooth,
  HiOutlineSquare3Stack3D, HiOutlineDocumentText, HiOutlineArrowLeft
} from 'react-icons/hi2';

const menuItems = [
  {
    section: null,
    items: [
      { name: 'Dashboard', href: '/dashboard', icon: HiOutlineHome }
    ]
  },
  {
    section: 'LEAD MANAGEMENT',
    items: [
      { name: 'Leads', href: '/leads', icon: HiOutlineUsers },
      { name: 'Sources', href: '/sources', icon: HiOutlineGlobeAlt },
      { name: 'Import Leads', href: '/import', icon: HiOutlineDocumentText },
      { name: 'Customers', href: '/customers', icon: HiOutlineUserGroup },
      { name: 'Deals', href: '/deals', icon: HiOutlineBriefcase },
      { name: 'Pipeline', href: '/pipeline', icon: HiOutlineChartBar }
    ]
  },
  {
    section: 'MARKETING',
    items: [
      { name: 'WhatsApp', href: '/whatsapp', icon: HiOutlineChatBubbleBottomCenterText, badge: 'New', badgeColor: 'bg-green-500' },
      { name: 'Email Campaigns', href: '/email', icon: HiOutlineEnvelope },
      { name: 'SMS Campaigns', href: '/sms', icon: HiOutlineChatBubbleOvalLeftEllipsis },
      { name: 'Automation', href: '/automation', icon: HiOutlineCog6Tooth },
      { name: 'Landing Pages', href: '/landing-pages', icon: HiOutlineDocumentText },
      { name: 'Forms & Surveys', href: '/forms', icon: HiOutlineSquare3Stack3D }
    ]
  },
  {
    section: 'ADS MANAGEMENT',
    items: [
      { name: 'Meta Ads', href: '/meta-ads', icon: HiOutlineGlobeAlt },
      { name: 'Google Ads', href: '/google-ads', icon: HiOutlineGlobeAlt },
      { name: 'Ad Analytics', href: '/ad-analytics', icon: HiOutlineChartBar }
    ]
  },
  {
    section: 'COMMUNICATION',
    items: [
      { name: 'Team Inbox', href: '/inbox', icon: HiOutlineChatBubbleOvalLeftEllipsis, badge: '99+', badgeColor: 'bg-orange-500' },
      { name: 'Live Chat', href: '/live-chat', icon: HiOutlineChatBubbleBottomCenterText },
      { name: 'Call Logs', href: '/call-logs', icon: HiOutlineEnvelope }
    ]
  },
  {
    section: 'REPORTS & ANALYTICS',
    items: [
      { name: 'Dashboards', href: '/dashboards', icon: HiOutlineChartBar },
      { name: 'Reports', href: '/reports', icon: HiOutlineDocumentText }
    ]
  },
  {
    section: 'TOOLS & SETTINGS',
    items: [
      { name: 'AI Tools', href: '/ai-tools', icon: HiOutlineCog6Tooth, badge: 'Hot', badgeColor: 'bg-orange-500' },
      { name: 'Integrations', href: '/integrations', icon: HiOutlineSquare3Stack3D },
      { name: 'Team', href: '/team', icon: HiOutlineUsers },
      { name: 'Settings', href: '/settings', icon: HiOutlineCog6Tooth },
      { name: 'Billing & Plan', href: '/billing', icon: HiOutlineDocumentText }
    ]
  }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-[260px] bg-[#111827] text-slate-300 h-screen fixed left-0 top-0 overflow-y-auto flex flex-col hide-scrollbar border-r border-slate-800">
      {/* Brand Header */}
      <div className="h-16 flex items-center px-6 border-b border-slate-800 shrink-0 sticky top-0 bg-[#111827] z-10">
        <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center text-white font-bold text-xl">
            T
          </div>
          <div>
            <h1 className="text-white font-bold text-xl leading-none tracking-tight">TIVRA</h1>
            <p className="text-[9px] text-slate-400 uppercase tracking-widest mt-1">CONNECT • SHARE • GROW</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 px-3 space-y-6">
        {menuItems.map((group, idx) => (
          <div key={idx}>
            {group.section && (
              <h3 className="px-3 text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-2">
                {group.section}
              </h3>
            )}
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive 
                          ? 'bg-orange-500 text-white' 
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <item.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                        {item.name}
                      </div>
                      {item.badge && (
                        <span className={`text-[10px] px-1.5 py-0.5 rounded-full text-white ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
      
      {/* Bottom Actions */}
      <div className="p-4 border-t border-slate-800 shrink-0 mb-4">
        <Link 
          href="/"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
        >
          <HiOutlineArrowLeft className="w-5 h-5 text-slate-400" />
          Back to Website
        </Link>
      </div>
    </aside>
  );
}
