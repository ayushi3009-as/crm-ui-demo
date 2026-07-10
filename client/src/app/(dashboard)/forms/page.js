import React from 'react';
import { FormInput, ListChecks, Download, Plus, Settings, Eye, AlignLeft, CheckSquare, ChevronDown, Check } from 'lucide-react';

export default function FormsBuilder() {
  return (
    <div className="p-4 md:p-8 max-w-[1400px] mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4 md:mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500">Forms & Surveys</h1>
          <p className="text-slate-500 mt-1 md:mt-2 text-sm md:text-base">Capture leads and gather customer feedback easily.</p>
        </div>
        <button className="w-full sm:w-auto flex justify-center items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-3 rounded-2xl hover:scale-105 transition-all shadow-lg shadow-pink-500/30 font-medium">
          <Plus className="w-5 h-5" />
          Create Form
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Active Forms List */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <ListChecks className="w-5 h-5 text-pink-500" />
              Active Forms
            </h2>
          </div>
          
          <div className="space-y-3">
            {[
              { name: 'Website Contact', responses: 342, status: 'Active', selected: true },
              { name: 'NPS Survey Q3', responses: 89, status: 'Active', selected: false },
              { name: 'Event RSVP', responses: 156, status: 'Closed', selected: false }
            ].map((form, idx) => (
              <div key={idx} className={`p-5 rounded-2xl border transition-all cursor-pointer ${form.selected ? 'bg-white border-pink-200 shadow-lg shadow-pink-100 ring-1 ring-pink-100' : 'bg-white/50 border-slate-200 hover:bg-white hover:shadow-md'}`}>
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`font-bold ${form.selected ? 'text-pink-600' : 'text-slate-800'}`}>{form.name}</h3>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider ${form.status === 'Active' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-500'}`}>
                    {form.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-500 bg-slate-50 px-3 py-1 rounded-lg inline-block border border-slate-100">{form.responses} Submissions</p>
                  {form.selected && <Check className="w-4 h-4 text-pink-500" />}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Builder / Viewer Area */}
        <div className="lg:col-span-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl shadow-slate-200/50 overflow-hidden h-[600px] md:h-[750px] flex flex-col">
            {/* Header */}
            <div className="border-b border-slate-100 px-4 md:px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white z-10 relative shadow-sm">
              <h2 className="text-lg md:text-xl font-bold text-slate-800">Website Contact Form</h2>
              <div className="flex gap-2 w-full sm:w-auto">
                <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-200" title="Settings"><Settings className="w-5 h-5" /></button>
                <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-colors border border-transparent hover:border-slate-200" title="Preview"><Eye className="w-5 h-5" /></button>
                <button className="flex-1 sm:flex-none flex justify-center items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-xl hover:bg-slate-800 transition-colors shadow-md">
                  <Download className="w-4 h-4" /> Export CSV
                </button>
              </div>
            </div>

            <div className="flex-1 flex flex-col md:flex-row bg-slate-50/50 overflow-hidden">
               {/* Field Toolbox */}
               <div className="w-full md:w-20 border-b md:border-b-0 md:border-r border-slate-100 bg-white flex flex-row md:flex-col items-center justify-center md:justify-start py-4 md:py-6 px-4 md:px-0 gap-4 md:gap-6 shrink-0 overflow-x-auto shadow-[2px_0_10px_-5px_rgba(0,0,0,0.1)] z-10">
                 <button className="p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-pink-50 hover:text-pink-600 hover:shadow-sm border border-slate-100 transition-all" title="Add Text Input"><FormInput className="w-5 h-5" /></button>
                 <button className="p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-pink-50 hover:text-pink-600 hover:shadow-sm border border-slate-100 transition-all" title="Add Textarea"><AlignLeft className="w-5 h-5" /></button>
                 <button className="p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-pink-50 hover:text-pink-600 hover:shadow-sm border border-slate-100 transition-all" title="Add Checkbox"><CheckSquare className="w-5 h-5" /></button>
                 <button className="p-3 bg-slate-50 text-slate-600 rounded-xl hover:bg-pink-50 hover:text-pink-600 hover:shadow-sm border border-slate-100 transition-all" title="Add Dropdown"><ChevronDown className="w-5 h-5" /></button>
               </div>

               {/* Form Canvas */}
               <div className="flex-1 p-4 md:p-8 overflow-y-auto">
                 <div className="max-w-xl mx-auto bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-slate-100 space-y-6">
                   <div className="text-center mb-8 pb-6 border-b border-slate-100">
                     <h1 className="text-2xl font-bold text-slate-800">Get in Touch</h1>
                     <p className="text-slate-500 mt-2 text-sm">Fill out the form below and we'll get back to you.</p>
                   </div>
                   
                   {/* Form Fields Mockup */}
                   <div className="group relative border-2 border-transparent hover:border-dashed hover:border-pink-300 p-4 -mx-4 rounded-xl transition-all cursor-pointer bg-white">
                     <div className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                       <div className="w-6 h-6 rounded bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-600"><Settings className="w-3 h-3" /></div>
                     </div>
                     <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                     <input disabled type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-400 shadow-inner" placeholder="John Doe" />
                   </div>

                   <div className="group relative border-2 border-transparent hover:border-dashed hover:border-pink-300 p-4 -mx-4 rounded-xl transition-all cursor-pointer bg-white">
                     <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email <span className="text-red-500">*</span></label>
                     <input disabled type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-400 shadow-inner" placeholder="john@company.com" />
                   </div>

                   <div className="group relative border-2 border-transparent hover:border-dashed hover:border-pink-300 p-4 -mx-4 rounded-xl transition-all cursor-pointer bg-white">
                     <label className="block text-sm font-semibold text-slate-700 mb-2">How can we help?</label>
                     <textarea disabled rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-400 resize-none shadow-inner" placeholder="Tell us about your project..." />
                   </div>

                   <div className="pt-4 mt-4 border-t border-slate-50">
                     <button className="w-full bg-slate-800 text-white font-semibold py-3.5 rounded-xl opacity-60 cursor-not-allowed hover:opacity-70 transition-opacity">
                       Submit Message
                     </button>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
