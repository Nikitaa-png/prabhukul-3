import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Check, AlertCircle, Star } from 'lucide-react';
import { getTestimonials, saveTestimonials, getMedia } from '../../services/db';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [media, setMedia] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState(null);

  const [formFields, setFormFields] = useState({
    name: '',
    role: '',
    rating: 5,
    comment: '',
    image: ''
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setTestimonials(getTestimonials());
    setMedia(getMedia());
  };

  const handleOpenAddForm = () => {
    setEditingTestimonial(null);
    setFormFields({
      name: '',
      role: '',
      rating: 5,
      comment: '',
      image: media.length > 0 ? media[0].url : ''
    });
    setIsFormOpen(true);
  };

  const handleOpenEditForm = (t) => {
    setEditingTestimonial(t);
    setFormFields({
      name: t.name || '',
      role: t.role || '',
      rating: t.rating || 5,
      comment: t.comment || '',
      image: t.image || ''
    });
    setIsFormOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      // Testimonials might use name as key if no id exists. Let's make sure
      const updated = testimonials.filter((t) => t.name !== id);
      saveTestimonials(updated);
      setTestimonials(updated);
      setSuccess('Testimonial deleted successfully.');
      setTimeout(() => setSuccess(''), 3000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formFields.name.trim() || !formFields.comment.trim()) {
      setError('Please fill in required fields (Name, Review Comment).');
      return;
    }

    let updated = [...testimonials];

    if (editingTestimonial) {
      // Edit
      updated = updated.map((t) => 
        t.name === editingTestimonial.name 
          ? { ...t, ...formFields } 
          : t
      );
    } else {
      // Add
      updated.push({
        ...formFields
      });
    }

    try {
      saveTestimonials(updated);
      setTestimonials(updated);
      setIsFormOpen(false);
      setSuccess(editingTestimonial ? 'Testimonial updated successfully.' : 'Testimonial created successfully.');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to save testimonial: ' + err.message);
    }
  };

  return (
    <div className="space-y-6 text-left">
      
      {/* Head section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-[#E8DDD0] p-6 shadow-sm rounded-sm">
        <div>
          <h2 className="font-serif text-xl font-bold text-[#2D0B0C] uppercase tracking-wider">Testimonials Management</h2>
          <p className="font-sans text-[12px] text-[#5C534E] mt-1">Configure customer reviews and star ratings displayed in the footer slider.</p>
        </div>

        <button
          onClick={handleOpenAddForm}
          className="flex items-center justify-center gap-2 bg-[#3E0F12] text-white text-[11px] font-bold tracking-widest uppercase px-5 py-3 hover:bg-[#2D0B0C] transition-colors rounded-sm"
        >
          <Plus className="w-4 h-4" />
          Add Review
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
        /* List Testimonials */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white border border-[#E8DDD0] shadow-sm rounded-sm p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex gap-1.5 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < t.rating ? 'fill-current' : 'text-gray-200'}`} />
                  ))}
                </div>
                <p className="font-sans text-[13px] text-gray-600 italic leading-relaxed">"{t.comment}"</p>
              </div>

              <div className="flex items-center justify-between border-t border-[#FAF6F0] pt-4 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-[#E8DDD0]">
                    <img src={t.image || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h5 className="font-serif text-[13px] font-bold text-[#2D0B0C] leading-none">{t.name}</h5>
                    <span className="text-[10px] text-gray-400 font-semibold">{t.role}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleOpenEditForm(t)}
                    className="p-1.5 border border-[#E8DDD0] text-gray-500 hover:text-[#3E0F12] rounded-sm transition-colors"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDelete(t.name)}
                    className="p-1.5 border border-red-100 text-red-500 hover:text-red-700 rounded-sm transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Create/Edit Testimonial Form */
        <div className="bg-white border border-[#E8DDD0] shadow-sm rounded-sm p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-[#FAF6F0] pb-4">
            <h3 className="font-serif text-lg font-bold text-[#2D0B0C]">
              {editingTestimonial ? 'Edit Review Post' : 'Add New Review Post'}
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
                  <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Author Name *</label>
                  <input
                    type="text"
                    required
                    value={formFields.name}
                    onChange={(e) => setFormFields({ ...formFields, name: e.target.value })}
                    className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Author Role / Location</label>
                    <input
                      type="text"
                      value={formFields.role}
                      onChange={(e) => setFormFields({ ...formFields, role: e.target.value })}
                      className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Star Rating (1-5)</label>
                    <select
                      value={formFields.rating}
                      onChange={(e) => setFormFields({ ...formFields, rating: Number(e.target.value) })}
                      className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                    >
                      {[5, 4, 3, 2, 1].map(n => <option key={n} value={n}>{n} Stars</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Avatar Image Selector</label>
                  <select
                    value={formFields.image}
                    onChange={(e) => setFormFields({ ...formFields, image: e.target.value })}
                    className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                  >
                    {media.map((m) => (
                      <option key={m.id} value={m.url}>{m.name}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Review Comment *</label>
                  <textarea
                    rows={3}
                    required
                    value={formFields.comment}
                    onChange={(e) => setFormFields({ ...formFields, comment: e.target.value })}
                    className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                  />
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
                {editingTestimonial ? 'Update Review' : 'Create Review'}
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
}
