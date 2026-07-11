'use client';
import { useState, useEffect } from 'react';
import { HiXMark, HiOutlineFunnel } from 'react-icons/hi2';

export default function FilterLeadsModal({ isOpen, onClose, onApply, currentFilters }) {
  const [filters, setFilters] = useState({
    status: '',
    sourceId: '',
    minScore: '',
    maxScore: ''
  });
  const [sources, setSources] = useState([]);

  useEffect(() => {
    if (isOpen) {
      setFilters(currentFilters || { status: '', sourceId: '', minScore: '', maxScore: '' });
      // Fetch sources for dropdown
      const fetchSources = async () => {
        try {
          const token = localStorage.getItem('token');
          const res = await fetch('http://localhost:5000/api/sources', {
            headers: { 'Authorization': `Bearer ${token}` }
          });
          const data = await res.json();
          if (data.success) {
            setSources(data.data);
          }
        } catch (err) {
          console.error('Failed to fetch sources', err);
        }
      };
      fetchSources();
    }
  }, [isOpen, currentFilters]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onApply(filters);
    onClose();
  };

  const handleClear = () => {
    const cleared = { status: '', sourceId: '', minScore: '', maxScore: '' };
    setFilters(cleared);
    onApply(cleared);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-sm" onClick={onClose} />
      
      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out translate-x-0">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <HiOutlineFunnel className="w-5 h-5 text-blue-600" />
            <h2 className="text-lg font-bold text-slate-900">Advanced Filters</h2>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
            <HiXMark className="w-6 h-6" />
          </button>
        </div>

        {/* Form Body */}
        <div className="flex-1 p-5 overflow-y-auto">
          <form id="filter-form" onSubmit={handleSubmit} className="space-y-6">
            
            {/* Status Filter */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Lead Status</label>
              <select 
                value={filters.status} 
                onChange={e => setFilters({...filters, status: e.target.value})} 
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-white"
              >
                <option value="">Any Status</option>
                <option value="NEW">New</option>
                <option value="CONTACTED">Contacted</option>
                <option value="QUALIFIED">Qualified</option>
                <option value="PROPOSAL">Proposal Sent</option>
                <option value="NEGOTIATION">Negotiation</option>
                <option value="WON">Won (Completed)</option>
                <option value="LOST">Lost</option>
              </select>
            </div>

            {/* Source Filter */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Lead Source</label>
              <select 
                value={filters.sourceId} 
                onChange={e => setFilters({...filters, sourceId: e.target.value})} 
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-white"
              >
                <option value="">Any Source</option>
                {sources.map(s => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>

            {/* Score Range Filter */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">Lead Score Range</label>
              <div className="flex items-center gap-3">
                <input 
                  type="number" 
                  min="0" max="100" 
                  placeholder="Min"
                  value={filters.minScore} 
                  onChange={e => setFilters({...filters, minScore: e.target.value})} 
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" 
                />
                <span className="text-slate-400">-</span>
                <input 
                  type="number" 
                  min="0" max="100" 
                  placeholder="Max"
                  value={filters.maxScore} 
                  onChange={e => setFilters({...filters, maxScore: e.target.value})} 
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" 
                />
              </div>
            </div>

          </form>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-3">
          <button 
            type="button" 
            onClick={handleClear}
            className="px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-200 bg-slate-100 rounded-xl transition-colors"
          >
            Clear Filters
          </button>
          <button 
            form="filter-form" 
            type="submit" 
            className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors flex items-center gap-2"
          >
            Apply Filters
          </button>
        </div>

      </div>
    </>
  );
}
