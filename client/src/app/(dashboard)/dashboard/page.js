'use client';
import { 
  HiOutlineUsers, HiOutlineUserGroup, HiOutlineChatBubbleOvalLeftEllipsis, 
  HiOutlineEnvelopeOpen, HiOutlineChartBar, HiOutlineCurrencyRupee,
  HiOutlineChatBubbleBottomCenterText, HiOutlineCog6Tooth, HiOutlineGlobeAlt, HiOutlineBriefcase
} from 'react-icons/hi2';
import StatCard from '@/components/dashboard/StatCard';
import LeadsGrowthChart from '@/components/dashboard/LeadsGrowthChart';
import LeadSourcesChart from '@/components/dashboard/LeadSourcesChart';
import SalesPipelineChart from '@/components/dashboard/SalesPipelineChart';

export default function DashboardPage() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-10">
      
      {/* Top Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <StatCard 
          title="Total Leads" value="25,689" change="18.6%" changeType="increase" 
          icon={HiOutlineUsers} iconBg="bg-indigo-100" iconColor="text-indigo-600" 
        />
        <StatCard 
          title="Total Customers" value="8,426" change="16.3%" changeType="increase" 
          icon={HiOutlineUserGroup} iconBg="bg-emerald-100" iconColor="text-emerald-600" 
        />
        <StatCard 
          title="WhatsApp Sent" value="1,28,934" change="22.7%" changeType="increase" 
          icon={HiOutlineChatBubbleOvalLeftEllipsis} iconBg="bg-green-100" iconColor="text-green-600" 
        />
        <StatCard 
          title="Open Rate" value="45.6%" change="8.3%" changeType="increase" 
          icon={HiOutlineEnvelopeOpen} iconBg="bg-blue-100" iconColor="text-blue-600" 
        />
        <StatCard 
          title="Conversion Rate" value="16.35%" change="2.3%" changeType="increase" 
          icon={HiOutlineChartBar} iconBg="bg-orange-100" iconColor="text-orange-600" 
        />
        <StatCard 
          title="Revenue" value="₹ 2,45,80,900" change="28.4%" changeType="increase" 
          icon={HiOutlineCurrencyRupee} iconBg="bg-orange-100" iconColor="text-orange-600" 
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="lg:col-span-1 xl:col-span-1 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-slate-800">Leads Growth</h3>
            <select className="text-sm bg-slate-50 border border-slate-200 rounded-md px-2 py-1 outline-none text-slate-600">
              <option>This Month</option>
            </select>
          </div>
          <div className="flex-1 min-h-[250px]">
            <LeadsGrowthChart />
          </div>
        </div>

        <div className="lg:col-span-1 xl:col-span-1 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
          <h3 className="font-semibold text-slate-800 mb-6">Lead Sources</h3>
          <div className="flex-1 min-h-[250px]">
            <LeadSourcesChart />
          </div>
        </div>

        <div className="lg:col-span-1 xl:col-span-1 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-semibold text-slate-800">Sales Pipeline</h3>
            <select className="text-sm bg-slate-50 border border-slate-200 rounded-md px-2 py-1 outline-none text-slate-600">
              <option>This Month</option>
            </select>
          </div>
          <div className="flex-1 min-h-[250px]">
            <SalesPipelineChart />
          </div>
        </div>

        {/* Integrations & AI Powered Features (Right Column) */}
        <div className="lg:col-span-3 xl:col-span-1 flex flex-col gap-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex-1">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-slate-800">Integrations</h3>
              <a href="#" className="text-sm text-blue-600 hover:underline">View All</a>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              {/* Dummy logos */}
              {['Facebook Ads', 'Instagram Ads', 'Google Ads', 'WhatsApp API', 'SMS Gateway', 'Email Services', 'Zapier', 'Webhook', 'Payment Gateway'].map((int, i) => (
                <div key={i} className="flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-1">
                    <div className="w-5 h-5 bg-slate-300 rounded-sm"></div>
                  </div>
                  <span className="text-[9px] text-slate-500 leading-tight">{int}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Feature Grid & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-6">
        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { title: 'WhatsApp Marketing', items: ['Bulk Campaigns', 'Template Messages', 'Auto Reply & Chatbot', 'Team Inbox', 'Delivery & Read Reports'], link: 'Create Campaign', color: 'text-green-600', icon: HiOutlineChatBubbleBottomCenterText },
            { title: 'Marketing Automation', items: ['Drip Campaigns', 'Lead Nurturing', 'Trigger Automation', 'Customer Segmentation', 'Workflow Builder'], link: 'Create Automation', color: 'text-purple-600', icon: HiOutlineCog6Tooth },
            { title: 'Ad Management', items: ['Meta Ads Manager', 'Google Ads Manager', 'Cost Per Lead Tracking', 'ROI & Revenue Tracking', 'AI Recommendations'], link: 'Manage Ads', color: 'text-blue-600', icon: HiOutlineGlobeAlt },
            { title: 'Communication Hub', items: ['WhatsApp', 'SMS', 'Email', 'Voice Calls', 'Team Chat'], link: 'Open Inbox', color: 'text-orange-500', icon: HiOutlineChatBubbleOvalLeftEllipsis },
            { title: 'Analytics & Reports', items: ['Real-time Dashboards', 'Custom Reports', 'Team Performance', 'Lead Analytics', 'Revenue Analytics'], link: 'View Reports', color: 'text-teal-600', icon: HiOutlineChartBar },
            { title: 'Deals & Pipeline', items: ['Sales Pipeline', 'Deal Management', 'Quote & Proposals', 'Follow-ups', 'Win Probability'], link: 'View Pipeline', color: 'text-emerald-600', icon: HiOutlineBriefcase }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col h-full">
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center ${feature.color}`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-sm text-slate-800 leading-tight">{feature.title}</h4>
              </div>
              <ul className="space-y-1.5 flex-1 mb-4">
                {feature.items.map((item, i) => (
                  <li key={i} className="text-[11px] text-slate-500 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#" className={`text-xs font-semibold ${feature.color} hover:underline mt-auto`}>{feature.link}</a>
            </div>
          ))}
        </div>

        {/* Right column in this row */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-slate-800 text-sm">Lead Activity (Recent)</h3>
              <a href="#" className="text-xs text-blue-600 hover:underline">View All</a>
            </div>
            <div className="space-y-4">
              {[
                { name: 'Rahul Sharma', action: 'Submitted Lead Form', time: '2 min ago', img: 'https://i.pravatar.cc/150?u=1' },
                { name: 'Priya Singh', action: 'WhatsApp Replied', time: '10 min ago', img: 'https://i.pravatar.cc/150?u=2' },
                { name: 'Vikash Kumar', action: 'Email Opened', time: '30 min ago', img: 'https://i.pravatar.cc/150?u=3' },
                { name: 'Aman Verma', action: 'Interested in Product', time: '1 hr ago', img: 'https://i.pravatar.cc/150?u=4' }
              ].map((act, i) => (
                <div key={i} className="flex items-start gap-3">
                  <img src={act.img} className="w-8 h-8 rounded-full" alt={act.name} />
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-slate-800">{act.name}</p>
                    <p className="text-[10px] text-slate-500">{act.action}</p>
                  </div>
                  <span className="text-[10px] text-slate-400">{act.time}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex-1 relative overflow-hidden">
             <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-slate-800 text-sm">AI Powered Features</h3>
              <a href="#" className="text-xs text-blue-600 hover:underline">View All</a>
            </div>
            <div className="space-y-3 relative z-10">
              <div className="flex items-start gap-2">
                <div className="mt-0.5 w-5 h-5 rounded bg-blue-100 flex items-center justify-center text-blue-600 shrink-0"><span className="text-[10px] font-bold">AI</span></div>
                <div>
                  <p className="text-xs font-semibold text-slate-800 flex items-center gap-2">AI Voice Calling Agent <span className="bg-red-500 text-white text-[8px] px-1 rounded-sm">New</span></p>
                  <p className="text-[10px] text-slate-500">AI calls leads & qualifies them</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 w-5 h-5 rounded bg-green-100 flex items-center justify-center text-green-600 shrink-0"><span className="text-[10px] font-bold">AI</span></div>
                <div>
                  <p className="text-xs font-semibold text-slate-800">AI WhatsApp Agent</p>
                  <p className="text-[10px] text-slate-500">24x7 AI Chatbot for Engage & Support</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 w-5 h-5 rounded bg-orange-100 flex items-center justify-center text-orange-600 shrink-0"><span className="text-[10px] font-bold">AI</span></div>
                <div>
                  <p className="text-xs font-semibold text-slate-800">AI Lead Scoring</p>
                  <p className="text-[10px] text-slate-500">Automatically score & rank your leads</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="mt-0.5 w-5 h-5 rounded bg-purple-100 flex items-center justify-center text-purple-600 shrink-0"><span className="text-[10px] font-bold">AI</span></div>
                <div>
                  <p className="text-xs font-semibold text-slate-800">AI Predictive Analytics</p>
                  <p className="text-[10px] text-slate-500">Predict conversion & revenue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Plans Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-6">
        {[
          { name: 'Starter', price: '₹999', users: '1 User', leads: 'Up to 500 Leads', f1: 'Basic CRM', f2: 'WhatsApp Integration', f3: 'Email Support', button: 'Start Free Trial', color: 'bg-indigo-600' },
          { name: 'Professional', price: '₹2,999', users: '5 Users', leads: 'Up to 5,000 Leads', f1: 'Marketing Automation', f2: 'AI Assistant', f3: 'Priority Support', button: 'Start Free Trial', color: 'bg-blue-600' },
          { name: 'Business', price: '₹7,999', users: '20 Users', leads: 'Up to 20,000 Leads', f1: 'AI Features', f2: 'WhatsApp Campaigns', f3: 'Advanced Reports', button: 'Start Free Trial', color: 'bg-blue-700', badge: 'Popular' },
          { name: 'Enterprise', price: '₹24,999', users: 'Unlimited Users', leads: 'Unlimited Leads', f1: 'White Label', f2: 'Custom Integrations', f3: 'Dedicated Support', button: 'Start Free Trial', color: 'bg-emerald-600' },
          { name: 'Agency / Reseller', price: '₹49,999', users: 'Reseller Panel', leads: 'Multi-tenant SaaS', f1: 'White Label', f2: 'Unlimited Clients', f3: 'Priority Support', button: 'Start Free Trial', color: 'bg-orange-500' }
        ].map((plan, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col relative">
            {plan.badge && <span className="absolute -top-2.5 right-4 bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">{plan.badge}</span>}
            <h4 className="text-orange-500 font-semibold text-sm mb-1">{plan.name}</h4>
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-xl font-bold text-slate-900">{plan.price}</span>
              <span className="text-[10px] text-slate-500">/month</span>
            </div>
            <p className="text-[9px] text-slate-400 mb-4 pb-4 border-b border-slate-100">Billed Annually</p>
            
            <ul className="space-y-2 flex-1 mb-4">
              <li className="text-[10px] text-slate-600 flex items-center gap-1.5"><span className="text-emerald-500">✓</span> {plan.users}</li>
              <li className="text-[10px] text-slate-600 flex items-center gap-1.5"><span className="text-emerald-500">✓</span> {plan.leads}</li>
              <li className="text-[10px] text-slate-600 flex items-center gap-1.5"><span className="text-emerald-500">✓</span> {plan.f1}</li>
              <li className="text-[10px] text-slate-600 flex items-center gap-1.5"><span className="text-emerald-500">✓</span> {plan.f2}</li>
              <li className="text-[10px] text-slate-600 flex items-center gap-1.5"><span className="text-emerald-500">✓</span> {plan.f3}</li>
            </ul>
            
            <button className={`w-full py-2 rounded-lg text-white text-[11px] font-semibold transition-opacity hover:opacity-90 ${plan.color}`}>
              {plan.button}
            </button>
          </div>
        ))}
        
        {/* Why Choose Tivra Box */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-5 shadow-inner flex flex-col justify-between">
          <div>
            <h4 className="text-blue-900 font-bold text-sm mb-4">Why Choose TIVRA?</h4>
            <ul className="space-y-2">
              <li className="text-[10px] text-slate-700 flex items-center gap-1.5"><span className="text-blue-600">✓</span> All-in-One Business Growth Platform</li>
              <li className="text-[10px] text-slate-700 flex items-center gap-1.5"><span className="text-blue-600">✓</span> Official WhatsApp & Meta Partner</li>
              <li className="text-[10px] text-slate-700 flex items-center gap-1.5"><span className="text-blue-600">✓</span> AI-Powered Automation & Insights</li>
              <li className="text-[10px] text-slate-700 flex items-center gap-1.5"><span className="text-blue-600">✓</span> Secure, Reliable & Scalable</li>
              <li className="text-[10px] text-slate-700 flex items-center gap-1.5"><span className="text-blue-600">✓</span> Built for Modern Businesses</li>
            </ul>
          </div>
          {/* Decorative graphic could go here */}
        </div>
      </div>
    </div>
  );
}
