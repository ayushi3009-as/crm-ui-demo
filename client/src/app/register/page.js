'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ company: '', name: '', email: '', password: '', terms: false });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.terms) {
      setError('You must agree to the Terms of Service.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          companyName: formData.company,
          name: formData.name,
          email: formData.email,
          password: formData.password
        })
      });
      const data = await res.json();
      if (data.success) {
        localStorage.setItem('token', data.data.token);
        router.push('/payment');
      } else {
        let errorMessage = data.message || 'Registration failed.';
        if (data.errors && data.errors.length > 0) {
          errorMessage = data.errors.map(err => err.message).join(' | ');
        }
        setError(errorMessage);
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
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Start your 14-day free trial. No credit card required.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-xl shadow-slate-200/50 sm:rounded-2xl sm:px-10 border border-slate-100">
          <form className="space-y-5" onSubmit={handleSubmit}>
            {error && (
              <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg font-medium">
                {error}
              </div>
            )}
            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-slate-700">
                Company Name
              </label>
              <div className="mt-1.5">
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  value={formData.company}
                  onChange={e => setFormData({...formData, company: e.target.value})}
                  className="block w-full appearance-none rounded-xl border border-slate-200 px-4 py-2.5 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 text-sm font-medium text-slate-900 transition-colors"
                  placeholder="Acme Corp"
                />
              </div>
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                Full Name
              </label>
              <div className="mt-1.5">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="block w-full appearance-none rounded-xl border border-slate-200 px-4 py-2.5 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 text-sm font-medium text-slate-900 transition-colors"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                Work Email address
              </label>
              <div className="mt-1.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="block w-full appearance-none rounded-xl border border-slate-200 px-4 py-2.5 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 text-sm font-medium text-slate-900 transition-colors"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-slate-700">
                Password
              </label>
              <div className="mt-1.5">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  value={formData.password}
                  onChange={e => setFormData({...formData, password: e.target.value})}
                  className="block w-full appearance-none rounded-xl border border-slate-200 px-4 py-2.5 placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-orange-500 text-sm font-medium text-slate-900 transition-colors"
                  placeholder="Create a password"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                checked={formData.terms}
                onChange={e => setFormData({...formData, terms: e.target.checked})}
                className="h-4 w-4 rounded border-slate-300 text-orange-600 focus:ring-orange-500"
              />
              <label htmlFor="terms" className="ml-2 block text-xs text-slate-600 font-medium">
                I agree to the <a href="#" className="text-orange-600 hover:text-orange-500 font-semibold">Terms of Service</a> and <a href="#" className="text-orange-600 hover:text-orange-500 font-semibold">Privacy Policy</a>
              </label>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-xl border border-transparent bg-orange-600 py-3 px-4 text-sm font-bold text-white shadow-lg shadow-orange-500/30 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all mt-2 disabled:opacity-70"
              >
                {loading ? 'Creating...' : 'Create Account'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-slate-500 font-medium">Already have an account?</span>
              </div>
            </div>

            <div className="mt-6 text-center flex flex-col gap-3">
              <Link href="/login" className="text-sm font-bold text-orange-600 hover:text-orange-500">
                Sign in instead →
              </Link>
              <Link href="/dashboard" className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline decoration-slate-300 underline-offset-2">
                Skip to Dashboard Demo (Bypass Login)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
