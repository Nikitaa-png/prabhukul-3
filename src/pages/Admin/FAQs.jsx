import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Check, AlertCircle } from 'lucide-react';
import { getFAQs, saveFAQs } from '../../services/db';

export default function FAQs() {
  const [faqs, setFaqs] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingFaq, setEditingFaq] = useState(null);

  const [formFields, setFormFields] = useState({
    q: '',
    a: ''
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setFaqs(getFAQs());
  };

  const handleOpenAddForm = () => {
    setEditingFaq(null);
    setFormFields({
      q: '',
      a: ''
    });
    setIsFormOpen(true);
  };

  const handleOpenEditForm = (f) => {
    setEditingFaq(f);
    setFormFields({
      q: f.q || '',
      a: f.a || ''
    });
    setIsFormOpen(true);
  };

  const handleDelete = (questionText) => {
    if (window.confirm('Are you sure you want to delete this FAQ?')) {
      const updated = faqs.filter((f) => f.q !== questionText);
      saveFAQs(updated);
      setFaqs(updated);
      setSuccess('FAQ deleted successfully.');
      setTimeout(() => setSuccess(''), 3000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formFields.q.trim() || !formFields.a.trim()) {
      setError('Please fill in required fields (Question, Answer).');
      return;
    }

    let updated = [...faqs];

    if (editingFaq) {
      // Edit
      updated = updated.map((f) => 
        f.q === editingFaq.q 
          ? { ...f, ...formFields } 
          : f
      );
    } else {
      // Add
      updated.push({
        ...formFields
      });
    }

    try {
      saveFAQs(updated);
      setFaqs(updated);
      setIsFormOpen(false);
      setSuccess(editingFaq ? 'FAQ updated successfully.' : 'FAQ created successfully.');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to save FAQ: ' + err.message);
    }
  };

  return (
    <div className="space-y-6 text-left">
      
      {/* Head section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-[#E8DDD0] p-6 shadow-sm rounded-sm">
        <div>
          <h2 className="font-serif text-xl font-bold text-[#2D0B0C] uppercase tracking-wider">Frequently Asked Questions</h2>
          <p className="font-sans text-[12px] text-[#5C534E] mt-1">Manage standard questions and answers rendered in the FAQ accordions.</p>
        </div>

        <button
          onClick={handleOpenAddForm}
          className="flex items-center justify-center gap-2 bg-[#3E0F12] text-white text-[11px] font-bold tracking-widest uppercase px-5 py-3 hover:bg-[#2D0B0C] transition-colors rounded-sm"
        >
          <Plus className="w-4 h-4" />
          Add FAQ
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
        /* List FAQs */
        <div className="bg-white border border-[#E8DDD0] shadow-sm rounded-sm divide-y divide-[#E8DDD0]">
          {faqs.length === 0 ? (
            <p className="p-8 text-center text-gray-400">No FAQ entries registered.</p>
          ) : (
            faqs.map((faq) => (
              <div key={faq.q} className="p-5 flex justify-between items-start gap-4">
                <div className="space-y-1.5 flex-1">
                  <h4 className="font-serif text-[14px] font-bold text-[#2D0B0C]">Q: {faq.q}</h4>
                  <p className="font-sans text-[12px] text-gray-500 leading-relaxed">A: {faq.a}</p>
                </div>
                
                <div className="flex gap-1.5 shrink-0">
                  <button
                    onClick={() => handleOpenEditForm(faq)}
                    className="p-1.5 border border-[#E8DDD0] text-gray-500 hover:text-[#3E0F12] rounded-sm transition-colors"
                  >
                    <Edit2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => handleDelete(faq.q)}
                    className="p-1.5 border border-red-100 text-red-500 hover:text-red-700 rounded-sm transition-colors"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        /* Create/Edit FAQ Form */
        <div className="bg-white border border-[#E8DDD0] shadow-sm rounded-sm p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-[#FAF6F0] pb-4">
            <h3 className="font-serif text-lg font-bold text-[#2D0B0C]">
              {editingFaq ? 'Edit FAQ Entry' : 'Add New FAQ Entry'}
            </h3>
            <button
              onClick={() => setIsFormOpen(false)}
              className="text-[10px] uppercase font-bold tracking-widest text-[#5C534E] hover:text-[#3E0F12] border border-[#E8DDD0] px-3.5 py-1.5 hover:bg-[#FAF6F0] transition-colors"
            >
              Cancel
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Question Text *</label>
                <input
                  type="text"
                  required
                  value={formFields.q}
                  onChange={(e) => setFormFields({ ...formFields, q: e.target.value })}
                  className="w-full border border-[#D4A64A]/30 px-3 py-2.5 text-[12px] text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Answer Description *</label>
                <textarea
                  rows={4}
                  required
                  value={formFields.a}
                  onChange={(e) => setFormFields({ ...formFields, a: e.target.value })}
                  className="w-full border border-[#D4A64A]/30 px-3 py-2.5 text-[12px] text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                />
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
                {editingFaq ? 'Update FAQ' : 'Create FAQ'}
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
}
