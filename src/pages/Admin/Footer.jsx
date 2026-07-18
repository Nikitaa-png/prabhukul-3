import React, { useState, useEffect } from 'react';
import { Save, Check, AlertCircle } from 'lucide-react';
import { getFooterSettings, saveFooterSettings } from '../../services/db';

export default function Footer() {
  const [footer, setFooter] = useState(null);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setFooter(getFooterSettings());
  }, []);

  if (!footer) return <div className="text-gray-500">Loading footer settings...</div>;

  const handleFieldChange = (field, val) => {
    setFooter({ ...footer, [field]: val });
  };

  const handleSocialChange = (index, href) => {
    const updatedSocial = [...footer.social];
    updatedSocial[index].href = href;
    setFooter({ ...footer, social: updatedSocial });
  };

  const handlePoweredByChange = (field, val) => {
    setFooter({
      ...footer,
      poweredBy: {
        ...footer.poweredBy,
        [field]: val
      }
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setError('');

    try {
      saveFooterSettings(footer);
      setSuccess('Footer configurations saved successfully.');
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
          <h2 className="font-serif text-xl font-bold text-[#2D0B0C] uppercase tracking-wider">Footer Settings Management</h2>
          <p className="font-sans text-[12px] text-[#5C534E] mt-1">Configure company description, social handle links, and bottom copyright listings.</p>
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
            
            {/* Direct configurations */}
            <div className="space-y-4">
              <h3 className="font-serif text-md font-bold text-[#2D0B0C] border-b border-[#FAF6F0] pb-2">Footer Content details</h3>
              
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Footer Brand Description *</label>
                <textarea
                  rows={3}
                  required
                  value={footer.description || ''}
                  onChange={(e) => handleFieldChange('description', e.target.value)}
                  className="w-full border border-[#D4A64A]/30 px-3 py-2.5 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                />
              </div>

              {/* Social Channels */}
              <div className="space-y-3.5 pt-2">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#163728]">Social Channels Handle URL</h4>
                {footer.social && footer.social.map((s, idx) => (
                  <div key={s.name} className="space-y-1">
                    <label className="text-[10px] text-gray-500 font-semibold">{s.name} Link</label>
                    <input
                      type="text"
                      value={s.href || ''}
                      onChange={(e) => handleSocialChange(idx, e.target.value)}
                      className="w-full border border-[#D4A64A]/30 px-3 py-1.5 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Copyright & Powered By Credits */}
            <div className="space-y-4">
              <h3 className="font-serif text-md font-bold text-[#2D0B0C] border-b border-[#FAF6F0] pb-2">Credits & Copyright</h3>
              
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Copyright Label</label>
                <input
                  type="text"
                  value={footer.copyright || '© 2026 Prabhukul. All rights reserved.'}
                  onChange={(e) => handleFieldChange('copyright', e.target.value)}
                  className="w-full border border-[#D4A64A]/30 px-3 py-2.5 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                />
              </div>

              <div className="space-y-4 pt-2">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#163728]">External Powered By Link</h4>
                <div className="space-y-1">
                  <label className="text-[10px] text-gray-500 font-semibold">Credit Label *</label>
                  <input
                    type="text"
                    required
                    value={footer.poweredBy ? footer.poweredBy.label : 'Kalvix Nexus'}
                    onChange={(e) => handlePoweredByChange('label', e.target.value)}
                    className="w-full border border-[#D4A64A]/30 px-3 py-1.5 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-gray-500 font-semibold">Credit Website Link URL *</label>
                  <input
                    type="text"
                    required
                    value={footer.poweredBy ? footer.poweredBy.href : 'https://kalvixnexus.com'}
                    onChange={(e) => handlePoweredByChange('href', e.target.value)}
                    className="w-full border border-[#D4A64A]/30 px-3 py-1.5 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm font-mono"
                  />
                </div>
              </div>
            </div>

          </div>

          <div className="pt-4 border-t border-[#FAF6F0] flex items-center justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#3E0F12] text-white text-[11px] font-bold tracking-widest uppercase px-8 py-3.5 hover:bg-[#2D0B0C] transition-colors rounded-sm"
            >
              <Save className="w-4 h-4" />
              Save Footer Settings
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}
