'use client';
import Link from 'next/link';
import { 
  HiOutlineRocketLaunch, HiOutlineChartPie, HiOutlineUsers, 
  HiOutlineChatBubbleBottomCenterText, HiOutlineArrowRight,
  HiOutlineBolt, HiOutlineSparkles, HiOutlineCubeTransparent
} from 'react-icons/hi2';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-orange-500 selection:text-white flex flex-col overflow-hidden">
      
      {/* Abstract Glowing Backgrounds */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-orange-600/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-violet-600/20 blur-[120px] pointer-events-none"></div>

      {/* Navigation Bar */}
      <header className="fixed w-full top-0 z-50 bg-[#0A0A0A]/60 backdrop-blur-xl border-b border-white/10 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-rose-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-orange-500/20 group-hover:shadow-orange-500/40 transition-all duration-500">
              T
            </div>
            <div>
              <h1 className="text-2xl font-black text-white tracking-tight leading-none">TIVRA</h1>
              <p className="text-[10px] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-rose-400 font-bold tracking-[0.2em] uppercase mt-0.5">SaaS CRM 2.0</p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-10">
            <a href="#features" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 hover:after:w-full after:transition-all after:duration-300">Features</a>
            <a href="#solutions" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 hover:after:w-full after:transition-all after:duration-300">Solutions</a>
            <a href="#pricing" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-orange-500 hover:after:w-full after:transition-all after:duration-300">Pricing</a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors hidden sm:block">
              Log in
            </Link>
            <Link href="/register" className="px-6 py-2.5 bg-white hover:bg-slate-100 text-slate-900 text-sm font-bold rounded-full transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transform hover:-translate-y-0.5">
              Get Started Free
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 flex-1 flex flex-col items-center justify-center relative z-10">
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-bold uppercase tracking-wider mb-8 backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Introducing TIVRA AI Automation
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8 leading-[1.1]">
            The intelligent CRM for <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-violet-400 animate-gradient-x">
              high-velocity sales teams.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Stop losing leads to messy spreadsheets. TIVRA unifies your marketing, sales, and communication into one beautiful, AI-powered platform.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/register" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-rose-600 hover:from-orange-400 hover:to-rose-500 text-white text-base font-bold rounded-full transition-all shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] flex items-center justify-center gap-2 transform hover:-translate-y-1">
              Start Free Trial <HiOutlineArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/dashboard" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-base font-bold rounded-full transition-all flex items-center justify-center gap-2 backdrop-blur-sm transform hover:-translate-y-1">
              View Interactive Demo
            </Link>
          </div>
          <p className="text-sm text-slate-500 mt-8 font-medium flex items-center justify-center gap-4">
            <span>✓ No credit card required</span>
            <span className="w-1 h-1 rounded-full bg-slate-600"></span>
            <span>✓ 14-day free trial</span>
            <span className="w-1 h-1 rounded-full bg-slate-600"></span>
            <span>✓ Cancel anytime</span>
          </p>
        </div>

        {/* Dashboard Mockup floating */}
        <div className="max-w-6xl w-full mx-auto mt-24 relative z-10 perspective-[2000px]">
          <div className="relative rounded-3xl border border-white/10 bg-[#111] shadow-2xl p-2 pb-0 transform rotate-x-[5deg] hover:rotate-x-0 transition-transform duration-700 ease-out shadow-[0_40px_100px_rgba(0,0,0,0.5),0_0_40px_rgba(249,115,22,0.1)]">
             <div className="absolute top-4 left-5 flex gap-2">
               <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
               <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
               <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
             </div>
             <div className="w-full h-10 bg-[#1A1A1A] rounded-t-2xl flex items-center justify-center">
                <div className="w-1/3 h-5 bg-white/5 rounded-md"></div>
             </div>
             <div className="w-full aspect-[16/9] bg-[#0A0A0A] rounded-b-2xl overflow-hidden flex items-center justify-center relative">
               <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3" alt="CRM Dashboard" className="object-cover w-full h-full opacity-40 mix-blend-screen filter contrast-125 saturate-50" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent flex items-center justify-center">
                  <Link href="/dashboard" className="px-6 py-3 bg-white text-slate-900 font-bold rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform flex items-center gap-2">
                    Open Dashboard <HiOutlineArrowRight className="w-4 h-4" />
                  </Link>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-[#050505] relative z-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">An ecosystem built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">growth.</span></h2>
            <p className="text-slate-400 font-medium max-w-2xl mx-auto text-lg">Everything you need to capture, nurture, and close leads without duct-taping five different tools together.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: HiOutlineUsers, color: 'text-blue-400', bg: 'bg-blue-500/10', border: 'border-blue-500/20', title: 'Omnichannel Lead Capture', desc: 'Sync leads automatically from Facebook Ads, Google Ads, Zapier, and your website forms instantly.' },
              { icon: HiOutlineSparkles, color: 'text-orange-400', bg: 'bg-orange-500/10', border: 'border-orange-500/20', title: 'AI-Powered Nurturing', desc: 'Let our AI draft emails, score leads based on engagement, and predict the best time to call your prospects.' },
              { icon: HiOutlineChatBubbleBottomCenterText, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', title: 'Unified Team Inbox', desc: 'Manage WhatsApp, SMS, and Email conversations in one beautiful, lightning-fast chat interface.' },
              { icon: HiOutlineChartPie, color: 'text-violet-400', bg: 'bg-violet-500/10', border: 'border-violet-500/20', title: 'Advanced Analytics', desc: 'Real-time dashboards showing your actual ROI, Cost Per Lead, and sales team conversion rates.' },
              { icon: HiOutlineBolt, color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/20', title: 'Visual Automation', desc: 'Build complex drip campaigns and internal workflows using our drag-and-drop node builder.' },
              { icon: HiOutlineCubeTransparent, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', title: 'One-Click Integrations', desc: 'Seamlessly connect with Stripe, Slack, Zoom, and thousands of other apps in seconds.' },
            ].map((f, i) => (
              <div key={i} className={`p-8 rounded-3xl bg-white/[0.02] border ${f.border} hover:bg-white/[0.04] transition-all duration-300 group cursor-default relative overflow-hidden`}>
                <div className={`w-14 h-14 rounded-2xl ${f.bg} ${f.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <f.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{f.title}</h3>
                <p className="text-slate-400 font-medium leading-relaxed">{f.desc}</p>
                <div className={`absolute bottom-0 right-0 w-32 h-32 ${f.bg} blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] text-slate-500 py-12 px-6 border-t border-white/10 text-center md:text-left z-10 relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-500 to-rose-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">T</div>
            <span className="text-white font-bold tracking-widest">TIVRA</span>
          </div>
          <div className="text-sm font-medium">
            &copy; {new Date().getFullYear()} TIVRA Technologies. Built for the future of sales.
          </div>
        </div>
      </footer>
    </div>
  );
}
