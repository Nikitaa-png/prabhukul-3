import React, { useState, useEffect } from 'react';
import { Save, Check, AlertCircle, Edit2, Plus, Trash2 } from 'lucide-react';
import { getHomeData, saveHomeData, getMedia } from '../../services/db';

export default function Banners() {
  const [data, setData] = useState(null);
  const [media, setMedia] = useState([]);
  const [editingBanner, setEditingBanner] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [formFields, setFormFields] = useState({
    title: '',
    subtitle: '',
    cta: '',
    ctaLink: '',
    bg: '#3E0F12',
    image: '',
    wide: false
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setData(getHomeData());
    setMedia(getMedia());
  };

  if (!data) return <div className="text-gray-500">Loading banner settings...</div>;

  const handleOpenAddForm = () => {
    setEditingBanner(null);
    setFormFields({
      title: '',
      subtitle: '',
      cta: '',
      ctaLink: '',
      bg: '#3E0F12',
      image: media.length > 0 ? media[0].url : '',
      wide: false
    });
    setIsFormOpen(true);
  };

  const handleOpenEditForm = (b) => {
    setEditingBanner(b);
    setFormFields({
      title: b.title || '',
      subtitle: b.subtitle || '',
      cta: b.cta || '',
      ctaLink: b.ctaLink || '',
      bg: b.bg || '#3E0F12',
      image: b.image || '',
      wide: !!b.wide
    });
    setIsFormOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this banner?')) {
      const updated = { ...data };
      updated.promoBanners = updated.promoBanners.filter((b) => b.id !== id);
      saveHomeData(updated);
      setData(updated);
      setSuccess('Banner deleted successfully.');
      setTimeout(() => setSuccess(''), 3000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    const updated = { ...data };

    if (editingBanner) {
      // Edit
      updated.promoBanners = updated.promoBanners.map((b) => 
        b.id === editingBanner.id 
          ? { ...b, ...formFields } 
          : b
      );
    } else {
      // Add
      const newId = updated.promoBanners.length > 0 ? Math.max(...updated.promoBanners.map(b => b.id)) + 1 : 1;
      updated.promoBanners.push({
        ...formFields,
        id: newId
      });
    }

    try {
      saveHomeData(updated);
      setData(updated);
      setIsFormOpen(false);
      setSuccess(editingBanner ? 'Banner updated successfully.' : 'Banner created successfully.');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to save banner: ' + err.message);
    }
  };

  return (
    <div className="space-y-6 text-left">
      
      {/* Head */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-[#E8DDD0] p-6 shadow-sm rounded-sm">
        <div>
          <h2 className="font-serif text-xl font-bold text-[#2D0B0C] uppercase tracking-wider">Homepage Banner Configuration</h2>
          <p className="font-sans text-[12px] text-[#5C534E] mt-1">Configure layout cards and promo blocks that render on the Homepage.</p>
        </div>

        <button
          onClick={handleOpenAddForm}
          className="flex items-center justify-center gap-2 bg-[#3E0F12] text-white text-[11px] font-bold tracking-widest uppercase px-5 py-3 hover:bg-[#2D0B0C] transition-colors rounded-sm"
        >
          <Plus className="w-4 h-4" />
          Add Banner
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

      {!isFormOpen ? (
        /* List Banners */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.promoBanners.map((banner) => (
            <div 
              key={banner.id} 
              className="bg-white border border-[#E8DDD0] shadow-sm rounded-sm p-5 space-y-4 flex flex-col justify-between"
              style={{ borderLeft: `5px solid ${banner.bg}` }}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] uppercase tracking-widest font-bold text-[#C8922A]">{banner.subtitle || 'Promo'}</span>
                  {banner.wide && <span className="text-[8px] uppercase tracking-widest font-bold bg-[#163728]/10 text-[#163728] px-1.5 py-0.5 rounded-sm">Wide Card</span>}
                </div>
                <h4 className="font-serif text-lg font-bold text-[#2D0B0C]">{banner.title}</h4>
                <div className="w-10 h-10 border border-[#E8DDD0] rounded-sm bg-white p-1 overflow-hidden flex items-center justify-center">
                  <img src={banner.image} alt={banner.title} className="max-h-full max-w-full object-contain" />
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-[#FAF6F0] gap-2">
                <button
                  onClick={() => handleOpenEditForm(banner)}
                  className="flex-1 text-center py-2 text-[10px] uppercase font-bold tracking-widest border border-[#E8DDD0] hover:bg-[#FAF6F0] transition-colors text-[#2D0B0C]"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(banner.id)}
                  className="p-2 border border-red-100 text-red-500 hover:text-red-700 hover:bg-red-50 transition-colors rounded-sm"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Edit/Create Form */
        <div className="bg-white border border-[#E8DDD0] shadow-sm rounded-sm p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-[#FAF6F0] pb-4">
            <h3 className="font-serif text-lg font-bold text-[#2D0B0C]">
              {editingBanner ? 'Edit Banner Card' : 'Create Banner Card'}
            </h3>
            <button
              onClick={() => setIsFormOpen(false)}
              className="text-[10px] uppercase font-bold tracking-widest text-[#5C534E] hover:text-[#3E0F12] border border-[#E8DDD0] px-3.5 py-1.5 hover:bg-[#FAF6F0] transition-colors"
            >
              Cancel
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Banner Title *</label>
                  <input
                    type="text"
                    required
                    value={formFields.title}
                    onChange={(e) => setFormFields({ ...formFields, title: e.target.value })}
                    className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Subtitle Label</label>
                  <input
                    type="text"
                    value={formFields.subtitle}
                    onChange={(e) => setFormFields({ ...formFields, subtitle: e.target.value })}
                    className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">CTA Button Label</label>
                    <input
                      type="text"
                      value={formFields.cta}
                      onChange={(e) => setFormFields({ ...formFields, cta: e.target.value })}
                      className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">CTA Redirect Link</label>
                    <input
                      type="text"
                      value={formFields.ctaLink}
                      onChange={(e) => setFormFields({ ...formFields, ctaLink: e.target.value })}
                      className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Background Theme (Hex) *</label>
                    <div className="flex gap-2">
                      <input
                        type="color"
                        value={formFields.bg}
                        onChange={(e) => setFormFields({ ...formFields, bg: e.target.value })}
                        className="w-10 h-10 border border-[#D4A64A]/30 p-1 bg-white cursor-pointer"
                      />
                      <input
                        type="text"
                        required
                        value={formFields.bg}
                        onChange={(e) => setFormFields({ ...formFields, bg: e.target.value })}
                        className="flex-1 border border-[#D4A64A]/30 px-3 py-2 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm font-mono"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1 flex flex-col justify-end pb-2">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        id="wide"
                        checked={formFields.wide}
                        onChange={(e) => setFormFields({ ...formFields, wide: e.target.checked })}
                        className="accent-[#3E0F12]"
                      />
                      <label htmlFor="wide" className="text-[11px] font-bold uppercase tracking-wider text-[#2D0B0C] cursor-pointer">Span Full-Width</label>
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Image Selector *</label>
                  <select
                    value={formFields.image}
                    onChange={(e) => setFormFields({ ...formFields, image: e.target.value })}
                    className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                  >
                    {media.map((m) => (
                      <option key={m.id} value={m.url}>{m.name}</option>
                    ))}
                  </select>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="w-14 h-14 border border-[#E8DDD0] bg-white p-1 overflow-hidden flex items-center justify-center">
                      <img src={formFields.image} alt="Preview" className="max-h-full max-w-full object-contain" />
                    </div>
                    <p className="text-[10px] text-gray-500">Preview matches selection.</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-[#FAF6F0] flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setIsFormOpen(false)}
                className="text-[10px] uppercase font-bold tracking-widest text-[#5C534E] border border-[#E8DDD0] px-6 py-3 hover:bg-[#FAF6F0] transition-colors rounded-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#3E0F12] text-white text-[11px] font-bold tracking-widest uppercase px-8 py-3 hover:bg-[#2D0B0C] transition-colors rounded-sm"
              >
                {editingBanner ? 'Update Banner' : 'Create Banner'}
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
}
