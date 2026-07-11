'use client';
import { useState, useRef } from 'react';
import { HiXMark, HiOutlineCloudArrowUp, HiOutlineDocumentArrowDown } from 'react-icons/hi2';
import toast from 'react-hot-toast';

export default function ImportLeadsModal({ isOpen, onClose, onSuccess }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile.type === 'text/csv' || selectedFile.name.endsWith('.csv')) {
        setFile(selectedFile);
      } else {
        toast.error('Please select a valid CSV file');
      }
    }
  };

  const handleSubmit = async () => {
    if (!file) {
      toast.error('Please select a file first');
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/import/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      const data = await res.json();
      if (data.success) {
        toast.success(`Import complete! ${data.data.successCount} leads imported.`);
        if (data.data.failedCount > 0) {
          toast.error(`${data.data.failedCount} rows failed to import.`);
        }
        setFile(null);
        onSuccess();
        onClose();
      } else {
        toast.error(data.message || 'Failed to import leads');
      }
    } catch (err) {
      toast.error('Network error during import');
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadTemplate = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await fetch('http://localhost:5000/api/import/template', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'tivra_lead_template.csv';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      toast.error('Failed to download template');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100">
          <div>
            <h2 className="text-xl font-bold text-slate-900">Import Leads</h2>
            <p className="text-sm text-slate-500">Upload a CSV file to bulk import leads.</p>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
            <HiXMark className="w-6 h-6" />
          </button>
        </div>

        {/* Body */}
        <div className="p-5 flex flex-col gap-5">
          <button 
            onClick={handleDownloadTemplate}
            className="flex items-center justify-center gap-2 w-full py-3 px-4 border border-blue-200 bg-blue-50 text-blue-700 rounded-xl hover:bg-blue-100 transition-colors text-sm font-semibold"
          >
            <HiOutlineDocumentArrowDown className="w-5 h-5" /> Download CSV Template
          </button>

          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-200 rounded-xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-colors"
          >
            <div className="w-12 h-12 bg-slate-100 text-slate-500 rounded-full flex items-center justify-center">
              <HiOutlineCloudArrowUp className="w-6 h-6" />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-slate-700">Click to upload CSV</p>
              <p className="text-xs text-slate-500 mt-1">Maximum file size: 10MB</p>
            </div>
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileSelect} 
              accept=".csv" 
              className="hidden" 
            />
          </div>

          {file && (
            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-slate-700">{file.name}</span>
                <span className="text-xs text-slate-500">{(file.size / 1024).toFixed(1)} KB</span>
              </div>
              <button onClick={() => setFile(null)} className="text-red-500 hover:text-red-700 text-xs font-semibold px-2 py-1">
                Remove
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-end gap-3">
          <button onClick={onClose} type="button" className="px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-200 bg-slate-100 rounded-xl transition-colors">
            Cancel
          </button>
          <button 
            onClick={handleSubmit} 
            disabled={!file || loading} 
            className="px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors disabled:opacity-70 flex items-center gap-2"
          >
            {loading ? 'Uploading...' : 'Import Now'}
          </button>
        </div>

      </div>
    </div>
  );
}
