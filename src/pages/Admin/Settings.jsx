import React, { useState, useEffect } from 'react';
import { Save, Check, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { getAdminSettings, saveAdminSettings } from '../../services/db';

export default function Settings() {
  const [settings, setSettings] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setSettings(getAdminSettings());
  }, []);

  if (!settings) return <div className="text-gray-500">Loading global configurations...</div>;

  const handleFieldChange = (field, val) => {
    setSettings({ ...settings, [field]: val });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setError('');

    if (!settings.adminUsername.trim() || !settings.adminPassword.trim()) {
      setError('Credentials fields cannot be left blank.');
      return;
    }

    try {
      saveAdminSettings(settings);
      setSuccess('Settings updated successfully. Admin credentials modified.');
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
          <h2 className="font-serif text-xl font-bold text-[#2D0B0C] uppercase tracking-wider">Website Global Settings</h2>
          <p className="font-sans text-[12px] text-[#5C534E] mt-1">Configure admin logins, global titles, and cache configurations.</p>
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

      <div className="bg-white border border-[#E8DDD0] shadow-sm rounded-sm p-6">
        <form onSubmit={handleSave} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Admin profile fields */}
            <div className="space-y-4">
              <h3 className="font-serif text-md font-bold text-[#2D0B0C] border-b border-[#FAF6F0] pb-2">Administrative Profile</h3>
              
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Admin Username *</label>
                <input
                  type="text"
                  required
                  value={settings.adminUsername || ''}
                  onChange={(e) => handleFieldChange('adminUsername', e.target.value)}
                  className="w-full border border-[#D4A64A]/30 px-3 py-2.5 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Admin Password *</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={settings.adminPassword || ''}
                    onChange={(e) => handleFieldChange('adminPassword', e.target.value)}
                    className="w-full border border-[#D4A64A]/30 pl-3 pr-10 py-2.5 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-[#3E0F12]"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Global Meta Info */}
            <div className="space-y-4">
              <h3 className="font-serif text-md font-bold text-[#2D0B0C] border-b border-[#FAF6F0] pb-2">Site Configuration</h3>
              
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Global Site Title Prefix</label>
                <input
                  type="text"
                  value={settings.siteTitle || ''}
                  onChange={(e) => handleFieldChange('siteTitle', e.target.value)}
                  className="w-full border border-[#D4A64A]/30 px-3 py-2.5 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                />
              </div>

              <div className="space-y-1 pt-1">
                <span className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold block mb-1">Sandbox Database Action</span>
                <button
                  type="button"
                  onClick={() => {
                    if (window.confirm('This will wipe all localstorage updates and restore site content to original defaults. Proceed?')) {
                      localStorage.clear();
                      window.location.reload();
                    }
                  }}
                  className="px-4 py-2 border border-red-200 bg-red-50 text-red-700 text-[10px] font-bold tracking-widest uppercase hover:bg-red-100 transition-colors rounded-sm"
                >
                  Reset Default Site Data
                </button>
              </div>
            </div>

          </div>

          <div className="pt-4 border-t border-[#FAF6F0] flex items-center justify-end">
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#3E0F12] text-white text-[11px] font-bold tracking-widest uppercase px-8 py-3.5 hover:bg-[#2D0B0C] transition-colors rounded-sm"
            >
              <Save className="w-4 h-4" />
              Save Configurations
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}
