'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setLoading(true);
    setError('');
    setIsPending(false);

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      
      if (data.success) {
        login(data.data.user, data.data.token);
      } else {
        setError(data.message || 'Login failed.');
        if (data.isPending) {
          setIsPending(true);
        }
      }
    } catch (err) {
      setError('A network error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex items-center justify-center gap-2 mb-6 hover:opacity-90 transition-opacity">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-orange-500/30">
            T
          </div>
          <h1 className="text-3xl font-black text-slate-900 tracking-tight leading-none">TIVRA</h1>
        </Link>
        <h2 className="mt-2 text-center text-2xl font-bold text-slate-900 tracking-tight">
          Welcome back
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Sign in to your CRM dashboard
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl shadow-slate-200/50 sm:rounded-2xl sm:px-10 border border-slate-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg font-medium flex flex-col gap-2">
                <span>{error}</span>
                {isPending && (
                  <Link href="/payment" className="inline-block mt-1 px-3 py-1.5 bg-orange-600 text-white rounded shadow-sm text-center font-bold hover:bg-orange-700 w-full transition-colors">
                    Complete Payment & Upload Screenshot
                  </Link>
                )}
              </div>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="block w-full appearance-none rounded-xl border border-slate-200 px-4 py-3 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 text-sm font-medium text-slate-900 transition-colors"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-slate-700">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={e => setFormData({...formData, password: e.target.value})}
                  className="block w-full appearance-none rounded-xl border border-slate-200 px-4 py-3 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 text-sm font-medium text-slate-900 transition-colors"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm font-medium text-slate-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm font-semibold">
                <a href="#" className="text-orange-600 hover:text-orange-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-xl border border-transparent bg-orange-600 py-3 px-4 text-sm font-bold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all disabled:opacity-70"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-slate-500 font-medium">Don't have an account?</span>
              </div>
            </div>

            <div className="mt-6 text-center flex flex-col gap-3">
              <Link href="/register" className="text-sm font-bold text-orange-600 hover:text-orange-500">
                Register your company →
              </Link>
              <Link href="/dashboard" className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline decoration-slate-300 underline-offset-2">
                Skip to Dashboard Demo (Bypass Login)
              </Link>
            </div>
            
            <div className="mt-8 text-center border-t border-slate-200 pt-6">
               <p className="text-xs text-slate-500 mb-2">Are you a system administrator?</p>
               <button onClick={() => { setFormData({email: 'admin@tivra.com', password: 'admin'}); handleSubmit({preventDefault:()=>{}}); }} className="text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded transition-colors inline-block">
                 Superadmin Login
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
