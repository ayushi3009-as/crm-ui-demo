'use client';
import { useState } from 'react';
import Link from 'next/link';
import { HiOutlineCheckCircle, HiOutlineArrowUpTray, HiOutlineDocumentText } from 'react-icons/hi2';

export default function PaymentPage() {
  const [selectedPlan, setSelectedPlan] = useState('Starter');
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const plans = [
    { name: 'Starter', price: '₹999/mo', desc: 'Perfect for small teams getting started.' },
    { name: 'Professional', price: '₹2,499/mo', desc: 'Advanced features for growing businesses.' },
    { name: 'Enterprise', price: 'Custom', desc: 'Full custom solution for large organizations.' }
  ];

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setErrorMessage('Please upload a payment screenshot first.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const token = localStorage.getItem('token'); // We will save token on register

    const formData = new FormData();
    formData.append('screenshot', file);
    formData.append('plan', selectedPlan);

    try {
      const response = await fetch('http://localhost:5000/api/upload/payment-screenshot', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Upload failed. Are you logged in?');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('A network error occurred. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center p-6 font-sans">
        <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 max-w-md w-full text-center">
          <HiOutlineCheckCircle className="w-20 h-20 text-emerald-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Payment Received</h2>
          <p className="text-slate-600 mb-6">
            Your registration is currently <span className="font-bold text-orange-600">Pending Approval</span>. 
            Our team is verifying your payment. You will be able to log in once your account is approved.
          </p>
          <Link href="/login" className="inline-flex w-full justify-center rounded-xl border border-transparent bg-slate-900 py-3 px-4 text-sm font-bold text-white shadow-lg hover:bg-slate-800 transition-all">
            Return to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 font-sans">
      
      <div className="text-center mb-10">
        <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-orange-500/30 mb-4">T</div>
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Complete your Registration</h1>
        <p className="mt-2 text-slate-600 font-medium">Select a plan and complete payment to activate your account.</p>
      </div>

      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
        
        {/* Left Side: Plan Selection & QR */}
        <div className="flex-1 p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-slate-100 bg-slate-50/50">
          <h3 className="text-lg font-bold text-slate-900 mb-4">1. Select your plan</h3>
          <div className="space-y-3 mb-8">
            {plans.map(plan => (
              <div 
                key={plan.name}
                onClick={() => setSelectedPlan(plan.name)}
                className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between ${
                  selectedPlan === plan.name ? 'border-orange-500 bg-orange-50/50 shadow-md shadow-orange-500/10' : 'border-slate-200 hover:border-orange-300 bg-white'
                }`}
              >
                <div>
                  <div className="font-bold text-slate-900">{plan.name}</div>
                  <div className="text-xs text-slate-500 mt-1">{plan.desc}</div>
                </div>
                <div className="font-black text-lg text-slate-800">{plan.price}</div>
              </div>
            ))}
          </div>

          <h3 className="text-lg font-bold text-slate-900 mb-4">2. Scan & Pay via UPI</h3>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 text-center shadow-sm">
            {/* Fake QR Code */}
            <div className="w-48 h-48 mx-auto bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden">
               {/* Pattern to look like QR */}
               <div className="absolute inset-4 bg-[url('https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg')] bg-cover opacity-80 mix-blend-multiply"></div>
               <div className="bg-white/90 backdrop-blur p-2 rounded-lg z-10 font-bold text-xs text-slate-700 uppercase tracking-widest border border-slate-200">Scan to Pay</div>
            </div>
            <div className="text-sm font-medium text-slate-500 mb-1">Or pay using UPI ID:</div>
            <div className="text-lg font-bold text-slate-900 tracking-wide font-mono bg-slate-50 py-2 rounded-lg border border-slate-100">tivrasaas@icici</div>
          </div>
        </div>

        {/* Right Side: Upload */}
        <div className="w-full lg:w-[400px] p-8 lg:p-10 flex flex-col justify-center bg-white">
          <h3 className="text-lg font-bold text-slate-900 mb-4">3. Upload Payment Screenshot</h3>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex items-center justify-center w-full">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-48 border-2 border-slate-300 border-dashed rounded-xl cursor-pointer bg-slate-50 hover:bg-slate-100 hover:border-orange-400 transition-colors">
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  {file ? (
                    <>
                      <HiOutlineDocumentText className="w-10 h-10 text-orange-500 mb-3" />
                      <p className="mb-2 text-sm text-slate-700 font-bold">{file.name}</p>
                      <p className="text-xs text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                    </>
                  ) : (
                    <>
                      <HiOutlineArrowUpTray className="w-10 h-10 text-slate-400 mb-3" />
                      <p className="mb-2 text-sm text-slate-700"><span className="font-bold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-slate-500">PNG, JPG or JPEG (MAX. 5MB)</p>
                    </>
                  )}
                </div>
                <input id="dropzone-file" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
              </label>
            </div> 

            {errorMessage && (
              <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-100 rounded-lg font-medium">
                {errorMessage}
              </div>
            )}

            <button 
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 transition-all disabled:opacity-70 flex items-center justify-center"
            >
              {status === 'loading' ? 'Uploading...' : 'Submit Verification'}
            </button>
          </form>

          <p className="text-xs text-slate-400 text-center mt-6">
            By submitting, you confirm that you have made the payment to the provided UPI ID. Your account will be activated within 2-4 hours.
          </p>
        </div>
      </div>
      
    </div>
  );
}
