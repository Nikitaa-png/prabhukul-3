import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Check, AlertCircle, ArrowUp, ArrowDown } from 'lucide-react';
import { getCategories, saveCategories, getMedia } from '../../services/db';

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [media, setMedia] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  
  const [formFields, setFormFields] = useState({
    name: '',
    slug: '',
    image: '',
    visible: true
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setCategories(getCategories());
    setMedia(getMedia());
  };

  const handleOpenAddForm = () => {
    setEditingCategory(null);
    setFormFields({
      name: '',
      slug: '',
      image: media.length > 0 ? media[0].url : '',
      visible: true
    });
    setIsFormOpen(true);
  };

  const handleOpenEditForm = (cat) => {
    setEditingCategory(cat);
    setFormFields({
      name: cat.name || '',
      slug: cat.slug || '',
      image: cat.image || '',
      visible: cat.visible !== undefined ? cat.visible : true
    });
    setIsFormOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      const updated = categories.filter((c) => c.id !== id);
      saveCategories(updated);
      setCategories(updated);
      setSuccess('Category deleted successfully.');
      setTimeout(() => setSuccess(''), 3000);
    }
  };

  const handleMove = (index, direction) => {
    const updated = [...categories];
    const targetIdx = index + direction;
    if (targetIdx < 0 || targetIdx >= updated.length) return;
    
    // Swap
    const temp = updated[index];
    updated[index] = updated[targetIdx];
    updated[targetIdx] = temp;
    
    saveCategories(updated);
    setCategories(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formFields.name.trim() || !formFields.slug.trim()) {
      setError('Please fill in required fields (Name, Slug).');
      return;
    }

    let updated = [...categories];

    if (editingCategory) {
      // Edit
      updated = updated.map((c) => 
        c.id === editingCategory.id 
          ? { ...c, ...formFields } 
          : c
      );
    } else {
      // Add new
      const newId = categories.length > 0 ? Math.max(...categories.map(c => c.id)) + 1 : 1;
      updated.push({
        ...formFields,
        id: newId
      });
    }

    try {
      saveCategories(updated);
      setCategories(updated);
      setIsFormOpen(false);
      setSuccess(editingCategory ? 'Category updated successfully.' : 'Category created successfully.');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to save category: ' + err.message);
    }
  };

  return (
    <div className="space-y-6 text-left">
      
      {/* Head section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-[#E8DDD0] p-6 shadow-sm rounded-sm">
        <div>
          <h2 className="font-serif text-xl font-bold text-[#2D0B0C] uppercase tracking-wider">Category Management</h2>
          <p className="font-sans text-[12px] text-[#5C534E] mt-1">Configure categories rendered in headers, filters, and homepage circles.</p>
        </div>

        <button
          onClick={handleOpenAddForm}
          className="flex items-center justify-center gap-2 bg-[#3E0F12] text-white text-[11px] font-bold tracking-widest uppercase px-5 py-3 hover:bg-[#2D0B0C] transition-colors rounded-sm"
        >
          <Plus className="w-4 h-4" />
          Add Category
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
        /* List Categories */
        <div className="bg-white border border-[#E8DDD0] shadow-sm rounded-sm overflow-hidden">
          <table className="w-full text-[12px] text-left border-collapse">
            <thead>
              <tr className="bg-[#FAF6F0] border-b border-[#E8DDD0] text-gray-500 font-bold uppercase tracking-wider text-[10px]">
                <th className="p-4 w-16">Image</th>
                <th className="p-4">Category Name</th>
                <th className="p-4">Slug / Link</th>
                <th className="p-4 w-28 text-center">Reorder</th>
                <th className="p-4 w-28 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E8DDD0]">
              {categories.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-gray-400">
                    No categories found.
                  </td>
                </tr>
              ) : (
                categories.map((c, idx) => (
                  <tr key={c.id} className="hover:bg-[#FAF6F0]/20 transition-colors">
                    <td className="p-4">
                      <div className="w-9 h-9 rounded-full border border-[#E8DDD0] bg-white flex items-center justify-center p-0.5 overflow-hidden">
                        <img src={c.image} alt={c.name} className="w-full h-full object-cover rounded-full" />
                      </div>
                    </td>
                    <td className="p-4 font-semibold text-[#2D0B0C]">{c.name}</td>
                    <td className="p-4 text-gray-600 font-mono">{c.slug}</td>
                    <td className="p-4 text-center">
                      <div className="inline-flex items-center justify-center gap-1.5">
                        <button
                          disabled={idx === 0}
                          onClick={() => handleMove(idx, -1)}
                          className="p-1 border border-[#E8DDD0] text-gray-600 hover:bg-[#FAF6F0] disabled:opacity-30 rounded-sm"
                        >
                          <ArrowUp className="w-3 h-3" />
                        </button>
                        <button
                          disabled={idx === categories.length - 1}
                          onClick={() => handleMove(idx, 1)}
                          className="p-1 border border-[#E8DDD0] text-gray-600 hover:bg-[#FAF6F0] disabled:opacity-30 rounded-sm"
                        >
                          <ArrowDown className="w-3 h-3" />
                        </button>
                      </div>
                    </td>
                    <td className="p-4 space-x-2 text-center">
                      <button
                        onClick={() => handleOpenEditForm(c)}
                        className="inline-flex items-center justify-center p-1.5 border border-[#E8DDD0] text-gray-600 hover:text-[#3E0F12] hover:bg-[#FAF6F0] rounded-sm transition-all"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(c.id)}
                        className="inline-flex items-center justify-center p-1.5 border border-red-100 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-sm transition-all"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      ) : (
        /* Edit/Create Category Form */
        <div className="bg-white border border-[#E8DDD0] shadow-sm rounded-sm p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-[#FAF6F0] pb-4">
            <h3 className="font-serif text-lg font-bold text-[#2D0B0C]">
              {editingCategory ? 'Edit Category' : 'Add New Category'}
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
                  <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Category Name *</label>
                  <input
                    type="text"
                    required
                    value={formFields.name}
                    onChange={(e) => setFormFields({ ...formFields, name: e.target.value, slug: '/shop?category=' + encodeURIComponent(e.target.value) })}
                    className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Slug URL (Autogenerated) *</label>
                  <input
                    type="text"
                    required
                    value={formFields.slug}
                    onChange={(e) => setFormFields({ ...formFields, slug: e.target.value })}
                    className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-[#FAF6F0]/20 font-mono"
                  />
                </div>
              </div>

              <div className="space-y-4">
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
                    <div className="w-12 h-12 rounded-full border border-[#E8DDD0] bg-white p-0.5 overflow-hidden flex items-center justify-center">
                      <img src={formFields.image} alt="Preview" className="w-full h-full object-cover rounded-full" />
                    </div>
                    <p className="text-[10px] text-gray-500">Preview image matches current selection.</p>
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
                {editingCategory ? 'Update Category' : 'Add Category'}
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
}
