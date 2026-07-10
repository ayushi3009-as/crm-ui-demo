'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HiOutlineCheck, HiOutlineX, HiOutlinePhoto, HiOutlineArrowPath } from 'react-icons/hi2';
import { useRouter } from 'next/navigation';

export default function SuperadminPage() {
  const router = useRouter();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/superadmin/pending-users', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        setUsers(data.data);
      } else {
        setError(data.message || 'Failed to fetch pending users.');
        if (res.status === 401 || res.status === 403) {
          router.push('/login');
        }
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleAction = async (id, action) => {
    try {
      const token = localStorage.getItem('token');
      const endpoint = action === 'approve' ? 'approve-user' : 'reject-user';
      const res = await fetch(`http://localhost:5000/api/superadmin/${endpoint}/${id}`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.success) {
        setUsers(users.filter(u => u.id !== id));
      } else {
        alert(data.message || 'Action failed');
      }
    } catch (err) {
      alert('Network error');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-black text-slate-900">Superadmin Dashboard</h1>
            <p className="text-slate-500">Approve or reject new tenant registrations.</p>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={fetchUsers} className="p-2 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-600 transition-colors">
              <HiOutlineArrowPath className={`w-5 h-5 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <Link href="/" className="px-4 py-2 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors text-sm">
              Exit to Landing
            </Link>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 mb-6 font-medium">
            {error}
          </div>
        )}

        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Company / User</th>
                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Email</th>
                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Plan</th>
                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider">Registered</th>
                <th className="py-4 px-6 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {users.length === 0 && !loading && (
                <tr>
                  <td colSpan="5" className="py-12 text-center text-slate-500 font-medium">No pending registrations found.</td>
                </tr>
              )}
              {loading && users.length === 0 && (
                <tr>
                  <td colSpan="5" className="py-12 text-center text-slate-500 font-medium">Loading...</td>
                </tr>
              )}
              {users.map(user => (
                <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-4 px-6">
                    <p className="text-sm font-bold text-slate-900">{user.name}</p>
                    <p className="text-xs text-slate-500">ID: {user.id.slice(0, 8)}...</p>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm font-medium text-slate-700">{user.email}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-xs font-bold px-2 py-1 rounded bg-blue-50 text-blue-700 border border-blue-100 uppercase">
                      {user.selectedPlan || 'N/A'}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-600">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center justify-end gap-2">
                      {user.paymentScreenshot ? (
                        <a 
                          href={`http://localhost:5000${user.paymentScreenshot}`} 
                          target="_blank" 
                          rel="noreferrer"
                          className="p-2 text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors border border-transparent hover:border-blue-100"
                          title="View Payment Screenshot"
                        >
                          <HiOutlinePhoto className="w-5 h-5" />
                        </a>
                      ) : (
                        <span className="text-xs text-slate-400 mr-2 italic">No image</span>
                      )}
                      
                      <button 
                        onClick={() => handleAction(user.id, 'approve')}
                        className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors border border-transparent hover:border-emerald-100"
                        title="Approve Account"
                      >
                        <HiOutlineCheck className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => handleAction(user.id, 'reject')}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100"
                        title="Reject Account"
                      >
                        <HiOutlineX className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
