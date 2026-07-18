import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Plus, Edit2, Trash2, Check, AlertCircle, Eye, EyeOff, Search } from 'lucide-react';
import { getProducts, saveProduct, deleteProduct, getMedia } from '../../services/db';

const CATEGORIES = ['Hing', 'Digestive', 'Tea', 'Hing Dana'];

export default function Products() {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [media, setMedia] = useState([]);
  const [search, setSearch] = useState('');
  
  // Editor state
  const [editingProduct, setEditingProduct] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formFields, setFormFields] = useState({
    title: '',
    price: '',
    originalPrice: '',
    category: 'Hing',
    description: '',
    fullDescription: '',
    image: '',
    rating: 5,
    isFeatured: false,
    isBestSeller: false,
    stock: 100,
    visible: true
  });

  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    loadData();
    // Check if query wants to trigger add immediately
    if (searchParams.get('action') === 'add') {
      handleOpenAddForm();
    }
  }, [searchParams]);

  const loadData = () => {
    setProducts(getProducts());
    setMedia(getMedia());
  };

  const handleOpenAddForm = () => {
    setEditingProduct(null);
    setFormFields({
      title: '',
      price: '',
      originalPrice: '',
      category: 'Hing',
      description: '',
      fullDescription: '',
      image: media.length > 0 ? media[0].url : '',
      rating: 5,
      isFeatured: false,
      isBestSeller: false,
      stock: 100,
      visible: true
    });
    setIsFormOpen(true);
  };

  const handleOpenEditForm = (p) => {
    setEditingProduct(p);
    setFormFields({
      title: p.title || '',
      price: p.price || '',
      originalPrice: p.originalPrice || '',
      category: p.category || 'Hing',
      description: p.description || '',
      fullDescription: p.fullDescription || '',
      image: p.image || '',
      rating: p.rating || 5,
      isFeatured: !!p.isFeatured,
      isBestSeller: !!p.isBestSeller,
      stock: p.stock !== undefined ? p.stock : 100,
      visible: p.visible !== undefined ? p.visible : true
    });
    setIsFormOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id);
      loadData();
      setSuccess('Product deleted successfully.');
      setTimeout(() => setSuccess(''), 3000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formFields.title.trim() || !formFields.price) {
      setError('Please fill in required fields (Name, Price).');
      return;
    }

    const payload = {
      ...formFields,
      price: Number(formFields.price),
      originalPrice: formFields.originalPrice ? Number(formFields.originalPrice) : undefined,
      rating: Number(formFields.rating),
      stock: Number(formFields.stock)
    };

    if (editingProduct) {
      payload.id = editingProduct.id;
    }

    try {
      saveProduct(payload);
      loadData();
      setIsFormOpen(false);
      setSuccess(editingProduct ? 'Product updated successfully.' : 'Product created successfully.');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      setError('Failed to save product: ' + err.message);
    }
  };

  const filteredItems = products.filter((p) => 
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 text-left">
      
      {/* Head section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-[#E8DDD0] p-6 shadow-sm rounded-sm">
        <div>
          <h2 className="font-serif text-xl font-bold text-[#2D0B0C] uppercase tracking-wider">Product Catalog Management</h2>
          <p className="font-sans text-[12px] text-[#5C534E] mt-1">Manage, edit, delete, or add premium products to your public catalog.</p>
        </div>

        <button
          onClick={handleOpenAddForm}
          className="flex items-center justify-center gap-2 bg-[#3E0F12] text-white text-[11px] font-bold tracking-widest uppercase px-5 py-3 hover:bg-[#2D0B0C] transition-colors rounded-sm"
        >
          <Plus className="w-4 h-4" />
          Add Product
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

      {/* Products list view */}
      {!isFormOpen ? (
        <div className="bg-white border border-[#E8DDD0] shadow-sm rounded-sm overflow-hidden">
          
          {/* Search bar */}
          <div className="p-4 border-b border-[#E8DDD0] bg-[#FAF6F0]/20 flex items-center gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9E9087]" />
              <input
                type="text"
                placeholder="Search products by title or category..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 border border-[#D4A64A]/30 text-[12px] text-[#2D0B0C] placeholder-[#9E9087] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-[12px] text-left border-collapse">
              <thead>
                <tr className="bg-[#FAF6F0] border-b border-[#E8DDD0] text-gray-500 font-bold uppercase tracking-wider text-[10px]">
                  <th className="p-4 w-16">Image</th>
                  <th className="p-4">Product Name</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Price</th>
                  <th className="p-4">Stock</th>
                  <th className="p-4">Badges</th>
                  <th className="p-4 w-28 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E8DDD0]">
                {filteredItems.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="p-8 text-center text-gray-400">
                      No products found matching filters.
                    </td>
                  </tr>
                ) : (
                  filteredItems.map((p) => (
                    <tr key={p.id} className="hover:bg-[#FAF6F0]/20 transition-colors">
                      <td className="p-4">
                        <div className="w-10 h-10 border border-[#E8DDD0] rounded-sm bg-white flex items-center justify-center p-1 overflow-hidden">
                          <img src={p.image} alt={p.title} className="max-h-full max-w-full object-contain" />
                        </div>
                      </td>
                      <td className="p-4 font-semibold text-[#2D0B0C]">{p.title}</td>
                      <td className="p-4 text-gray-600">{p.category}</td>
                      <td className="p-4 font-bold text-[#3E0F12]">
                        ₹{p.price}.00 
                        {p.originalPrice && <span className="text-[10px] text-gray-400 line-through font-normal ml-1.5">₹{p.originalPrice}.00</span>}
                      </td>
                      <td className="p-4 font-semibold">{p.stock !== undefined ? p.stock : 100}</td>
                      <td className="p-4 space-x-1.5">
                        {p.isBestSeller && (
                          <span className="inline-block px-1.5 py-0.5 text-[8px] font-bold text-white bg-[#3E0F12] tracking-wider uppercase rounded-sm">Bestseller</span>
                        )}
                        {p.isFeatured && (
                          <span className="inline-block px-1.5 py-0.5 text-[8px] font-bold text-[#E6B747] bg-[#3E0F12] border border-[#E6B747]/30 tracking-wider uppercase rounded-sm">Featured</span>
                        )}
                        {p.visible === false && (
                          <span className="inline-block px-1.5 py-0.5 text-[8px] font-bold text-gray-500 bg-gray-100 tracking-wider uppercase rounded-sm">Hidden</span>
                        )}
                      </td>
                      <td className="p-4 space-x-2 text-center">
                        <button
                          onClick={() => handleOpenEditForm(p)}
                          className="inline-flex items-center justify-center p-1.5 border border-[#E8DDD0] text-gray-600 hover:text-[#3E0F12] hover:bg-[#FAF6F0] rounded-sm transition-all"
                        >
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => handleDelete(p.id)}
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
        </div>
      ) : (
        /* Form creation / edit view */
        <div className="bg-white border border-[#E8DDD0] shadow-sm rounded-sm p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-[#FAF6F0] pb-4">
            <h3 className="font-serif text-lg font-bold text-[#2D0B0C]">
              {editingProduct ? 'Edit Catalog Product' : 'Add New Catalog Product'}
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
              
              {/* Left col */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Product Title *</label>
                  <input
                    type="text"
                    required
                    value={formFields.title}
                    onChange={(e) => setFormFields({ ...formFields, title: e.target.value })}
                    className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Category *</label>
                    <select
                      value={formFields.category}
                      onChange={(e) => setFormFields({ ...formFields, category: e.target.value })}
                      className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                    >
                      {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Stock Quantity</label>
                    <input
                      type="number"
                      value={formFields.stock}
                      onChange={(e) => setFormFields({ ...formFields, stock: Number(e.target.value) })}
                      className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Price (₹) *</label>
                    <input
                      type="number"
                      required
                      value={formFields.price}
                      onChange={(e) => setFormFields({ ...formFields, price: e.target.value })}
                      className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Original Price (₹)</label>
                    <input
                      type="number"
                      value={formFields.originalPrice}
                      onChange={(e) => setFormFields({ ...formFields, originalPrice: e.target.value })}
                      className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Product Image URL *</label>
                  <select
                    value={formFields.image}
                    onChange={(e) => setFormFields({ ...formFields, image: e.target.value })}
                    className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                  >
                    {media.map((m) => (
                      <option key={m.id} value={m.url}>{m.name} ({m.alt})</option>
                    ))}
                  </select>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="w-16 h-16 border border-[#E8DDD0] rounded-sm bg-white p-2.5 overflow-hidden flex items-center justify-center">
                      <img src={formFields.image} alt="Preview" className="max-h-full max-w-full object-contain" />
                    </div>
                    <p className="text-[10px] text-gray-500">Preview image matches current URL selection. You can upload other images inside the Media Library page.</p>
                  </div>
                </div>
              </div>

              {/* Right col */}
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Short Description</label>
                  <textarea
                    rows={2}
                    value={formFields.description}
                    onChange={(e) => setFormFields({ ...formFields, description: e.target.value })}
                    className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] uppercase tracking-wider text-[#5C534E] font-bold">Full Description / Detail Content</label>
                  <textarea
                    rows={4}
                    value={formFields.fullDescription}
                    onChange={(e) => setFormFields({ ...formFields, fullDescription: e.target.value })}
                    className="w-full border border-[#D4A64A]/30 px-3 py-2 text-[12px] text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] rounded-sm bg-white"
                  />
                </div>

                {/* Flags grid */}
                <div className="grid grid-cols-2 gap-4 bg-[#FAF6F0]/40 p-4 border border-[#E8DDD0] rounded-sm">
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      id="isBestSeller"
                      checked={formFields.isBestSeller}
                      onChange={(e) => setFormFields({ ...formFields, isBestSeller: e.target.checked })}
                      className="accent-[#3E0F12]"
                    />
                    <label htmlFor="isBestSeller" className="text-[11px] font-bold uppercase tracking-wider text-[#2D0B0C] cursor-pointer">Mark Bestseller</label>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <input
                      type="checkbox"
                      id="isFeatured"
                      checked={formFields.isFeatured}
                      onChange={(e) => setFormFields({ ...formFields, isFeatured: e.checked ? true : e.target.checked })}
                      className="accent-[#3E0F12]"
                    />
                    <label htmlFor="isFeatured" className="text-[11px] font-bold uppercase tracking-wider text-[#2D0B0C] cursor-pointer">Mark Featured</label>
                  </div>
                  <div className="flex items-center gap-2.5 col-span-2">
                    <input
                      type="checkbox"
                      id="visible"
                      checked={formFields.visible}
                      onChange={(e) => setFormFields({ ...formFields, visible: e.target.checked })}
                      className="accent-[#3E0F12]"
                    />
                    <label htmlFor="visible" className="text-[11px] font-bold uppercase tracking-wider text-[#2D0B0C] cursor-pointer">Show on Public Website</label>
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
                {editingProduct ? 'Update Product' : 'Add Product'}
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
}
