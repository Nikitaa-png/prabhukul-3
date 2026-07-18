import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Plus, Edit2, Trash2, Check, AlertCircle, Eye, EyeOff } from 'lucide-react';
import { getBlogs, saveBlogs, getMedia } from '../../services/db';

export default function Blogs() {
  const [searchParams] = useSearchParams();
  const [blogs, setBlogs] = useState([]);
  const [media, setMedia] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);

  const [formFields, setFormFields] = useState({
    title: '',
    slug: '',
    date: '',
    category: 'Cooking Tips',
    readTime: '3 min read',
    excerpt: '',
    content: '',
    image: '',
    published: true
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    loadData();
    if (searchParams.get('action') === 'add') {
      handleOpenAddForm();
    }
  }, [searchParams]);

  const loadData = () => {
    setBlogs(getBlogs());
    setMedia(getMedia());
  };

  const handleOpenAddForm = () => {
    setEditingBlog(null);
    setFormFields({
      title: '',
      slug: '',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      category: 'Cooking Tips',
      readTime: '3 min read',
      excerpt: '',
      content: '',
      image: media.length > 0 ? media[0].url : '',
      published: true
    });
    setIsFormOpen(true);
  };

  const handleOpenEditForm = (b) => {
    setEditingBlog(b);
    setFormFields({
      title: b.title || '',
      slug: b.slug || '',
      date: b.date || '',
      category: b.category || 'Cooking Tips',
      readTime: b.readTime || '3 min read',
      excerpt: b.excerpt || '',
      content: b.content || '',
      image: b.image || '',
      published: b.published !== undefined ? b.published : true
    });
    setIsFormOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      const updated = blogs.filter((b) => b.id !== id);
      saveBlogs(updated);
      setBlogs(updated);
      setSuccess('Article deleted successfully.');
      setTimeout(() => setSuccess(''), 3000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formFields.title.trim() || !formFields.content.trim()) {
      setError('Please fill in required fields (Title, Content Body).');
      return;
    }

    let updated = [...blogs];

    if (editingBlog) {
      // Edit
      updated = updated.map((b) => 
        b.id === editingBlog.id 
          ? { ...b, ...formFields } 
          : b
      );
    } else {
      // Add
      const newId = blogs.length > 0 ? Math.max(...blogs.map(b => b.id)) + 1 : 1;
      updated.push({
        ...formFields,
        id: newId
      });
    }

    try {
      saveBlogs(updated);
      setBlogs(updated);
      setIsFormOpen(false);
      setSuccess(editingBlog ? 'Article updated successfully.' : 'Article published successfully.');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to save blog post: ' + err.message);
    }
  };

  return (
    <div className="space-y-6 text-left">
      
      {/* Head section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-[#E8DDD0] p-6 shadow-sm rounded-sm">
        <div>
          <h2 className="font-serif text-xl font-bold text-[#2D0B0C] uppercase tracking-wider">Blog Articles Management</h2>
          <p className="font-sans text-[12px] text-[#5C534E] mt-1">Manage articles, cooking tips, health advice, and news updates.</p>
        </div>

        <button
          onClick={handleOpenAddForm}
          className="flex items-center justify-center gap-2 bg-[#3E0F12] text-white text-[11px] font-bold tracking-widest uppercase px-5 py-3 hover:bg-[#2D0B0C] transition-colors rounded-sm"
        >
          <Plus className="w-4 h-4" />
          Write Post
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
        /* Blog grid listing */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white border border-[#E8DDD0] shadow-sm rounded-sm flex flex-col justify-between overflow-hidden">
              <div>
                <div className="h-44 bg-[#FAF6F0] border-b border-[#E8DDD0] overflow-hidden flex items-center justify-center relative">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                  {!blog.published && (
                    <span className="absolute top-2 left-2 bg-gray-500 text-white text-[8px] font-bold tracking-wider px-2 py-1 uppercase rounded-sm z-10 shadow">
                      Draft / Hidden
                    </span>
                  )}
                </div>
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-wide">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span className="text-[#C8922A]">{blog.category}</span>
                  </div>
                  <h4 className="font-serif text-md font-bold text-[#2D0B0C] line-clamp-1">{blog.title}</h4>
                  <p className="font-sans text-[12px] text-gray-500 line-clamp-2 leading-relaxed">{blog.excerpt}</p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-[#FAF6F0]/20 mt-4 flex items-center justify-between gap-2">
                <button
                  onClick={() => handleOpenEditForm(blog)}
                  className="flex-1 py-2 text-center text-[10px] uppercase font-bold tracking-widest border border-[#E8DDD0] hover:bg-[#FAF6F0] text-[#2D0B0C] transition-colors rounded-sm"
                >
                  Edit Article
                </button>
                <button
                  onClick={() => handleDelete(blog.id)}
                  className="p-2 border border-red-100 text-red-500 hover:text-red-700 hover:bg-red-50 transition-colors rounded-sm"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Blog Editor form */
        <div className="bg-white border border-[#E8DDD0] shadow-sm rounded-sm p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-[#FAF6F0] pb-4">
            <h3 className="font-serif text-lg font-bold text-[#2D0B0C]">
              {editingBlog ? 'Edit Blog Article' : 'Write New Blog Article'}
            </h3>
            <button
              onClick={() => setIsFormOpen(false)}
              className="text-[10px] uppercase font-bold tracking-widest text-[#5C534E] hover:text-[#3E0F12] border border-[#E8DDD0] px-3.5 py-1.5 hover:bg-[#FAF6F0] transition-colors"
            >
              Cancel
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Left columns */}
              <div className="md:col-span-2 space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Article Title *</label>
                  <input
                    type="text"
                    required
                    value={formFields.title}
                    onChange={(e) => setFormFields({ ...formFields, title: e.target.value, slug: '/blog/' + e.target.value.toLowerCase().replace(/[^a-z0-9]+/g, '-') })}
                    className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Autogenerated URL Slug *</label>
                  <input
                    type="text"
                    required
                    value={formFields.slug}
                    onChange={(e) => setFormFields({ ...formFields, slug: e.target.value })}
                    className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-[#FAF6F0]/20 font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Excerpt / Summary Description</label>
                  <input
                    type="text"
                    value={formFields.excerpt}
                    onChange={(e) => setFormFields({ ...formFields, excerpt: e.target.value })}
                    className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Full Article Content (Markdown/HTML supported) *</label>
                  <textarea
                    rows={8}
                    required
                    value={formFields.content}
                    onChange={(e) => setFormFields({ ...formFields, content: e.target.value })}
                    className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                  />
                </div>
              </div>

              {/* Right column settings */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Publish Date</label>
                  <input
                    type="text"
                    value={formFields.date}
                    onChange={(e) => setFormFields({ ...formFields, date: e.target.value })}
                    className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Category</label>
                    <input
                      type="text"
                      value={formFields.category}
                      onChange={(e) => setFormFields({ ...formFields, category: e.target.value })}
                      className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Read Time</label>
                    <input
                      type="text"
                      value={formFields.readTime}
                      onChange={(e) => setFormFields({ ...formFields, readTime: e.target.value })}
                      className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Featured Image</label>
                  <select
                    value={formFields.image}
                    onChange={(e) => setFormFields({ ...formFields, image: e.target.value })}
                    className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                  >
                    {media.map((m) => (
                      <option key={m.id} value={m.url}>{m.name}</option>
                    ))}
                  </select>
                  <div className="mt-3 border border-[#E8DDD0] bg-white h-28 overflow-hidden flex items-center justify-center p-1 rounded-sm">
                    <img src={formFields.image} alt="Preview" className="max-h-full max-w-full object-contain" />
                  </div>
                </div>

                <div className="bg-[#FAF6F0]/40 p-4 border border-[#E8DDD0] rounded-sm">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      id="published"
                      checked={formFields.published}
                      onChange={(e) => setFormFields({ ...formFields, published: e.target.checked })}
                      className="accent-[#3E0F12]"
                    />
                    <label htmlFor="published" className="text-[11px] font-bold uppercase tracking-wider text-[#2D0B0C] cursor-pointer">Publish Immediately</label>
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
                {editingBlog ? 'Update Article' : 'Publish Article'}
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
}
