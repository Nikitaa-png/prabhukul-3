import React, { useState, useEffect } from 'react';
import { Save, Check, RefreshCw, Eye, EyeOff, AlertCircle } from 'lucide-react';
import { getHomeData, saveHomeData, getMedia } from '../../services/db';

export default function Homepage() {
  const [data, setData] = useState(null);
  const [media, setMedia] = useState([]);
  const [expandedSection, setExpandedSection] = useState(null);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setData(getHomeData());
    setMedia(getMedia());
  }, []);

  if (!data) return <div className="text-[#5C534E]">Loading homepage configurations...</div>;

  const handleToggleBlock = (blockKey) => {
    const updated = { ...data };
    updated.blocks[blockKey].enabled = !updated.blocks[blockKey].enabled;
    setData(updated);
  };

  const handleFieldChange = (blockKey, field, val) => {
    const updated = { ...data };
    updated.blocks[blockKey][field] = val;
    setData(updated);
  };

  const handleNestedFieldChange = (key, field, val) => {
    const updated = { ...data };
    updated[key][field] = val;
    setData(updated);
  };

  const handleSave = () => {
    try {
      saveHomeData(data);
      setSuccess('Draft and Live settings published successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to save settings: ' + err.message);
      setTimeout(() => setError(''), 4000);
    }
  };

  const sectionsList = [
    { key: 'announcementBar', name: 'Announcement Bar', fields: [{ name: 'text', label: 'Announcement Banner Text', type: 'text' }] },
    { key: 'hero', name: 'Hero Slides Banner', fields: [{ name: 'heading', label: 'Slide Heading Title', type: 'text' }, { name: 'subtitle', label: 'Slide Subtitle description', type: 'text' }] },
    { key: 'trustStatsStrip', name: 'Trust Statistics Strip', fields: [] },
    { key: 'shopByCategory', name: 'Shop by Category Carousel', fields: [{ name: 'heading', label: 'Header Title', type: 'text' }] },
    { key: 'bestSellers', name: 'Best Sellers Carousel', fields: [{ name: 'heading', label: 'Header Title', type: 'text' }, { name: 'subtitle', label: 'Header Subtext', type: 'text' }] },
    { key: 'promoBanners', name: 'Promotional Banners Grid', fields: [] },
    { key: 'brandStory', name: 'About Preview (Brand Story)', fields: [{ name: 'heading', label: 'Story Header', type: 'text' }, { name: 'subtitle', label: 'Story Label', type: 'text' }] },
    { key: 'whyChoose', name: 'Why Choose Us', fields: [{ name: 'heading', label: 'Header Title', type: 'text' }, { name: 'subtitle', label: 'Header Subtitle', type: 'text' }] },
    { key: 'hingBenefits', name: 'Benefits of Hing Grid', fields: [{ name: 'heading', label: 'Header Title', type: 'text' }, { name: 'subtitle', label: 'Header Subtitle', type: 'text' }] },
    { key: 'ingredientsQuality', name: 'Ingredients & Quality Preview', fields: [{ name: 'heading', label: 'Header Title', type: 'text' }, { name: 'subtitle', label: 'Header Subtitle', type: 'text' }] },
    { key: 'manufacturingProcess', name: 'Manufacturing Process', fields: [{ name: 'heading', label: 'Header Title', type: 'text' }, { name: 'subtitle', label: 'Header Subtitle', type: 'text' }] },
    { key: 'testimonials', name: 'Customer Testimonials', fields: [{ name: 'heading', label: 'Header Title', type: 'text' }, { name: 'subtitle', label: 'Header Subtitle', type: 'text' }] },
    { key: 'certifications', name: 'Certifications Standards', fields: [{ name: 'heading', label: 'Header Title', type: 'text' }, { name: 'subtitle', label: 'Header Subtitle', type: 'text' }] },
    { key: 'faqs', name: 'FAQs Accordion Preview', fields: [{ name: 'heading', label: 'Header Title', type: 'text' }, { name: 'subtitle', label: 'Header Subtitle', type: 'text' }] },
    { key: 'blogs', name: 'Latest Blogs Feed', fields: [{ name: 'heading', label: 'Header Title', type: 'text' }, { name: 'subtitle', label: 'Header Subtitle', type: 'text' }] },
    { key: 'contactPreview', name: 'Contact Info Preview', fields: [{ name: 'heading', label: 'Header Title', type: 'text' }, { name: 'subtitle', label: 'Header Subtitle', type: 'text' }] },
    { key: 'newsletter', name: 'Newsletter Stay Connected', fields: [{ name: 'heading', label: 'Header Title', type: 'text' }, { name: 'subtitle', label: 'Header Subtitle', type: 'text' }] },
    { key: 'footer', name: 'Footer Settings', fields: [] },
  ];

  return (
    <div className="space-y-6 text-left">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-[#E8DDD0] p-6 shadow-sm rounded-sm">
        <div>
          <h2 className="font-serif text-xl font-bold text-[#2D0B0C] uppercase tracking-wider">Homepage Block Management</h2>
          <p className="font-sans text-[12px] text-[#5C534E] mt-1">Configure layout order, enable/disable section blocks, and edit headlines dynamically.</p>
        </div>

        <button
          onClick={handleSave}
          className="flex items-center justify-center gap-2 bg-[#3E0F12] text-white text-[11px] font-bold tracking-widest uppercase px-6 py-3 hover:bg-[#2D0B0C] transition-colors rounded-sm"
        >
          <Save className="w-4 h-4" />
          Publish Changes
        </button>
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

      {/* Blocks Listing */}
      <div className="bg-white border border-[#E8DDD0] shadow-sm rounded-sm overflow-hidden divide-y divide-[#E8DDD0]">
        {sectionsList.map((sec) => {
          const blockState = data.blocks[sec.key] || { enabled: true };
          const isExpanded = expandedSection === sec.key;

          return (
            <div key={sec.key} className="p-4 sm:p-5">
              
              {/* Head row */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleToggleBlock(sec.key)}
                    aria-label={blockState.enabled ? 'Disable block' : 'Enable block'}
                    className={`p-1.5 rounded-sm border ${
                      blockState.enabled 
                        ? 'bg-[#163728]/10 border-[#163728]/25 text-[#163728]' 
                        : 'bg-gray-100 border-gray-200 text-gray-400'
                    }`}
                  >
                    {blockState.enabled ? <Eye className="w-4.5 h-4.5" /> : <EyeOff className="w-4.5 h-4.5" />}
                  </button>
                  <div>
                    <h4 className={`text-[13px] font-bold uppercase tracking-wider ${blockState.enabled ? 'text-[#2D0B0C]' : 'text-gray-400 line-through'}`}>
                      {sec.name}
                    </h4>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-[#C8922A]">
                      {blockState.enabled ? 'Active / Visible' : 'Disabled / Hidden'}
                    </span>
                  </div>
                </div>

                {sec.fields.length > 0 && (
                  <button
                    onClick={() => setExpandedSection(isExpanded ? null : sec.key)}
                    className="text-[10px] uppercase font-bold tracking-widest text-[#3E0F12] border border-[#E8DDD0] px-3.5 py-1.5 hover:bg-[#FAF6F0] transition-colors"
                  >
                    {isExpanded ? 'Collapse' : 'Edit Text'}
                  </button>
                )}
              </div>

              {/* Expansion edit area */}
              {isExpanded && blockState.enabled && (
                <div className="mt-5 p-4 bg-[#FAF6F0]/40 border border-[#E8DDD0] rounded-sm space-y-4 animate-fadeIn">
                  <div className="grid grid-cols-1 gap-4">
                    {sec.fields.map((f) => (
                      <div key={f.name} className="space-y-1">
                        <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">{f.label}</label>
                        <input
                          type="text"
                          value={blockState[f.name] || ''}
                          onChange={(e) => handleFieldChange(sec.key, f.name, e.target.value)}
                          className="w-full border border-[#D4A64A]/30 bg-white px-3.5 py-2.5 text-[12px] text-[#2D0B0C] placeholder-[#9E9087] focus:outline-none focus:border-[#3E0F12] rounded-sm transition-colors"
                        />
                      </div>
                    ))}
                  </div>

                  {/* BrandStory Special Sub-Blocks */}
                  {sec.key === 'brandStory' && (
                    <div className="space-y-4 pt-4 border-t border-[#E8DDD0]">
                      <h5 className="text-[11px] uppercase tracking-wider font-bold text-[#163728]">Detailed Story Preview Content</h5>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Main Text Paragraph</label>
                        <textarea
                          rows={3}
                          value={data.brandStory.body ? data.brandStory.body[0] : ''}
                          onChange={(e) => {
                            const updated = { ...data };
                            updated.brandStory.body[0] = e.target.value;
                            setData(updated);
                          }}
                          className="w-full border border-[#D4A64A]/30 bg-white px-3.5 py-2.5 text-[12px] text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] rounded-sm transition-colors"
                        />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Button CTA Label</label>
                          <input
                            type="text"
                            value={data.brandStory.ctaLabel || ''}
                            onChange={(e) => handleNestedFieldChange('brandStory', 'ctaLabel', e.target.value)}
                            className="w-full border border-[#D4A64A]/30 bg-white px-3.5 py-2 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Button CTA Redirect Link</label>
                          <input
                            type="text"
                            value={data.brandStory.ctaLink || ''}
                            onChange={(e) => handleNestedFieldChange('brandStory', 'ctaLink', e.target.value)}
                            className="w-full border border-[#D4A64A]/30 bg-white px-3.5 py-2 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Newsletter Special Sub-Blocks */}
                  {sec.key === 'newsletter' && (
                    <div className="space-y-4 pt-4 border-t border-[#E8DDD0]">
                      <h5 className="text-[11px] uppercase tracking-wider font-bold text-[#163728]">Newsletter Text Content</h5>
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Paragraph Description</label>
                        <input
                          type="text"
                          value={data.newsletterContent.subtext || ''}
                          onChange={(e) => handleNestedFieldChange('newsletterContent', 'subtext', e.target.value)}
                          className="w-full border border-[#D4A64A]/30 bg-white px-3.5 py-2 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm"
                        />
                      </div>
                    </div>
                  )}

                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
}
