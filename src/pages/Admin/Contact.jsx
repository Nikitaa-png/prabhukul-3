import React, { useState, useEffect } from 'react';
import { Save, Check, AlertCircle } from 'lucide-react';
import { getContactInfo, saveContactInfo } from '../../services/db';

export default function Contact() {
  const [info, setInfo] = useState(null);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setInfo(getContactInfo());
  }, []);

  if (!info) return <div className="text-gray-500">Loading contact settings...</div>;

  const handleFieldChange = (field, val) => {
    setInfo({ ...info, [field]: val });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setError('');

    try {
      saveContactInfo(info);
      setSuccess('Contact information updated successfully.');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to save settings: ' + err.message);
    }
  };

  return (
    <div className="space-y-6 text-left">
      
      {/* Head */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-[#E8DDD0] p-6 shadow-sm rounded-sm">
        <div>
          <h2 className="font-serif text-xl font-bold text-[#2D0B0C] uppercase tracking-wider">Contact Details Management</h2>
          <p className="font-sans text-[12px] text-[#5C534E] mt-1">Configure company phone, email, physical addresses, and maps embeddings.</p>
        </div>
      </div>

      {/* Success/Error Alerts */}
      {success && (
        <div className="bg-green-50 border border-green-200 text-green-800 p-4 text-[12px] flex items-center gap-2.5 rounded-sm">
          <Check className="w-4.5 h-4.5 text-green-600 shrink-0" />
          <span>{success}</span>
        </div>
      )}

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-800 p-4 text-[12px] flex items-center gap-2.5 rounded-sm">
          <AlertCircle className="w-4.5 h-4.5 text-red-600 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Settings Form */}
      <div className="bg-white border border-[#E8DDD0] shadow-sm rounded-sm p-6">
        <form onSubmit={handleSave} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Phone & Email */}
            <div className="space-y-4">
              <h3 className="font-serif text-md font-bold text-[#2D0B0C] border-b border-[#FAF6F0] pb-2">Direct Contact Channels</h3>
              
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Phone Number *</label>
                <input
                  type="text"
                  required
                  value={info.phone || ''}
                  onChange={(e) => handleFieldChange('phone', e.target.value)}
                  className="w-full border border-[#D4A64A]/30 px-3 py-2.5 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Email Address *</label>
                <input
                  type="email"
                  required
                  value={info.email || ''}
                  onChange={(e) => handleFieldChange('email', e.target.value)}
                  className="w-full border border-[#D4A64A]/30 px-3 py-2.5 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                />
              </div>
            </div>

            {/* Address Details */}
            <div className="space-y-4">
              <h3 className="font-serif text-md font-bold text-[#2D0B0C] border-b border-[#FAF6F0] pb-2">Business Location</h3>
              
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Physical Address *</label>
                <textarea
                  rows={2}
                  required
                  value={info.address || ''}
                  onChange={(e) => handleFieldChange('address', e.target.value)}
                  className="w-full border border-[#D4A64A]/30 px-3 py-2.5 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Working Hours</label>
                <input
                  type="text"
                  value={info.hours || ''}
                  onChange={(e) => handleFieldChange('hours', e.target.value)}
                  placeholder="e.g. Mon - Sat: 9:00 AM - 6:00 PM"
                  className="w-full border border-[#D4A64A]/30 px-3 py-2.5 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm"
                />
              </div>
            </div>

          </div>

          <div className="pt-4 border-t border-[#FAF6F0] flex items-center justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#3E0F12] text-white text-[11px] font-bold tracking-widest uppercase px-8 py-3.5 hover:bg-[#2D0B0C] transition-colors rounded-sm"
            >
              <Save className="w-4 h-4" />
              Save Details
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}
