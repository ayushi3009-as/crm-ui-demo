'use client';
import { useState, useEffect } from 'react';
import { HiXMark } from 'react-icons/hi2';
import toast from 'react-hot-toast';

export default function AddLeadModal({ isOpen, onClose, onSuccess, defaultAssignee }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    sourceId: '',
    status: 'NEW',
    leadScore: 0,
    city: '',
    interest: '',
    assignedToId: defaultAssignee || ''
  });
  const [sources, setSources] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      if (defaultAssignee) {
        setFormData(prev => ({ ...prev, assignedToId: defaultAssignee }));
      }
      
      const fetchData = async () => {
        try {
          const token = localStorage.getItem('token');
          const [sourcesRes, usersRes] = await Promise.all([
            fetch('http://localhost:5000/api/sources', { headers: { 'Authorization': `Bearer ${token}` } }),
            fetch('http://localhost:5000/api/users', { headers: { 'Authorization': `Bearer ${token}` } })
          ]);
          
          const sourcesData = await sourcesRes.json();
          if (sourcesData.success) setSources(sourcesData.data);
          
          const usersData = await usersRes.json();
          if (usersData.success) setUsers(usersData.data);
        } catch (err) {
          console.error('Failed to fetch data', err);
        }
      };
      fetchData();
    }
  }, [isOpen, defaultAssignee]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          ...formData,
          leadScore: parseInt(formData.leadScore)
        })
      });

      const data = await res.json();
      if (data.success) {
        toast.success('Lead created successfully!');
        setFormData({ fullName: '', email: '', phone: '', companyName: '', sourceId: '', status: 'NEW', leadScore: 0, city: '', interest: '', assignedToId: defaultAssignee || '' });
        onSuccess();
        onClose();
      } else {
        toast.error(data.message || 'Failed to create lead');
      }
    } catch (err) {
      toast.error('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Add New Lead</h2>
            <p className="text-sm text-slate-500">Enter the details of the new prospective client.</p>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
            <HiXMark className="w-6 h-6" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-5 overflow-y-auto">
          <form id="add-lead-form" onSubmit={handleSubmit} className="space-y-5">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                <input required type="text" value={formData.fullName} onChange={e => setFormData({...formData, fullName: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Company Name</label>
                <input type="text" value={formData.companyName} onChange={e => setFormData({...formData, companyName: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="Acme Corp" />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
                <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number</label>
                <input type="text" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="+1 (555) 000-0000" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Lead Source</label>
                <select value={formData.sourceId} onChange={e => setFormData({...formData, sourceId: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                  <option value="">Select a source...</option>
                  {sources.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Assigned To</label>
                <select value={formData.assignedToId} onChange={e => setFormData({...formData, assignedToId: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-white">
                  <option value="">Unassigned</option>
                  {users.map(u => (
                    <option key={u.id} value={u.id}>{u.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Lead Score (0-100)</label>
                <input type="number" min="0" max="100" value={formData.leadScore} onChange={e => setFormData({...formData, leadScore: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">City</label>
                <input type="text" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="New York" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">Primary Interest</label>
                <input type="text" value={formData.interest} onChange={e => setFormData({...formData, interest: e.target.value})} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none" placeholder="e.g. CRM Software" />
              </div>
            </div>

          </form>
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-end gap-3">
          <button onClick={onClose} type="button" className="px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-200 bg-slate-100 rounded-xl transition-colors">
            Cancel
          </button>
          <button form="add-lead-form" type="submit" disabled={loading} className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors disabled:opacity-70 flex items-center gap-2">
            {loading ? 'Saving...' : 'Create Lead'}
          </button>
        </div>

      </div>
    </div>
  );
}
