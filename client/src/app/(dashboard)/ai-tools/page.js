import React from 'react';
import { Sparkles, BrainCircuit, Bot, Activity, ArrowRight, Zap } from 'lucide-react';

export default function AIToolsPage() {
  const tools = [
    {
      title: "Predictive Lead Scoring",
      description: "Automatically rank leads based on conversion probability using our advanced ML models.",
      icon: <BrainCircuit className="w-8 h-8 text-purple-500" />,
      color: "from-purple-500/20 to-purple-500/0",
      status: "Active"
    },
    {
      title: "Sentiment Analysis",
      description: "Analyze customer emails and messages to gauge sentiment and prioritize responses.",
      icon: <Activity className="w-8 h-8 text-blue-500" />,
      color: "from-blue-500/20 to-blue-500/0",
      status: "Beta"
    },
    {
      title: "Auto-Responder Bot",
      description: "Draft context-aware replies to common customer inquiries instantly.",
      icon: <Bot className="w-8 h-8 text-pink-500" />,
      color: "from-pink-500/20 to-pink-500/0",
      status: "Active"
    },
    {
      title: "Smart Insights",
      description: "Generate weekly summaries of sales performance and identify emerging trends.",
      icon: <Sparkles className="w-8 h-8 text-amber-500" />,
      color: "from-amber-500/20 to-amber-500/0",
      status: "Upgrade"
    }
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600 flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-purple-600" />
            AI Intelligence Hub
          </h1>
          <p className="text-gray-500 mt-2">Supercharge your workflow with next-generation AI tools.</p>
        </div>
        <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2.5 rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2">
          <Zap className="w-4 h-4" />
          Train Custom Model
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {tools.map((tool, idx) => (
          <div key={idx} className={`relative group p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 overflow-hidden`}>
            <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-br ${tool.color} opacity-30 z-0`}></div>
            <div className="relative z-10 flex items-start justify-between">
              <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 inline-block">
                {tool.icon}
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                tool.status === 'Active' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400' :
                tool.status === 'Beta' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
              }`}>
                {tool.status}
              </span>
            </div>
            <div className="relative z-10 mt-5">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{tool.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm leading-relaxed">
                {tool.description}
              </p>
            </div>
            <div className="relative z-10 mt-6 flex items-center text-sm font-semibold text-slate-700 dark:text-slate-300 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors cursor-pointer w-max">
              Configure Settings <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
