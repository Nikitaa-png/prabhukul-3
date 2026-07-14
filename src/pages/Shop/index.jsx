import React, { useState } from 'react';
import SEO from '../../components/common/SEO';
import { products } from '../../data/catalog';
import bgImg from '../../assets/images/WhatsApp Image 2026-07-14 at 03.25.12.jpeg';
import { Star, Heart, ShoppingCart, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = ['All', 'Hing', 'Digestive', 'Tea', 'Hing Dana'];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');

  // Filter products by category AND search query
  let filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = 
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort products
  if (sortBy === 'price-asc') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating-desc') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  return (
    <>
      <SEO 
        title="Shop Collections – Handcrafted Organic Spices & Digestives" 
        description="Browse through the premium collections of organic asafoetida (hing), digestives, amla candies, and tea at Prabhukul." 
      />
      <div 
        className="w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0]"
        style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="max-w-7xl mx-auto space-y-10">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 
              className="font-serif text-4xl sm:text-5xl font-bold text-[#3E0F12] uppercase tracking-wide"
              style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
            >
              Shop Our Products
            </h1>
            <p className="font-sans text-[13px] text-[#5C534E] max-w-xl mx-auto leading-relaxed">
              Explore our full range of authentic Hathras Hing, herbal digestive candies, premium Assamese tea, and pure resin dana.
            </p>
            <div className="flex justify-center mt-2">
              <span className="text-[#D4A64A] text-lg">✦ ❖ ✦</span>
            </div>
          </div>

          {/* Filters Bar: Search, Categories, Sort */}
          <div className="bg-white/90 border border-[#D4A64A]/25 p-5 md:p-6 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9E9087]" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-[#D4A64A]/40 bg-white pl-10 pr-4 py-2.5 text-[13px] text-[#2D0B0C] placeholder-[#9E9087] focus:outline-none focus:border-[#3E0F12] transition-colors"
              />
            </div>

            {/* Categories (Pills) */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider transition-all border ${
                    selectedCategory === cat
                      ? 'bg-[#3E0F12] text-white border-[#3E0F12]'
                      : 'bg-white text-[#5C534E] border-[#D4A64A]/30 hover:border-[#3E0F12] hover:text-[#3E0F12]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Sort Dropdown */}
            <div className="w-full md:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full border border-[#D4A64A]/40 bg-white px-3 py-2.5 text-[12px] font-semibold text-[#2D0B0C] uppercase tracking-wider focus:outline-none focus:border-[#3E0F12] transition-colors"
              >
                <option value="default">Default Sort</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Popularity / Rating</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white/80 border border-[#D4A64A]/25 p-12 text-center space-y-3">
              <p className="font-serif text-xl text-[#3E0F12] font-semibold">No products found</p>
              <p className="font-sans text-[13px] text-[#5C534E]">Try resetting your search query or choosing another category.</p>
              <button 
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); setSortBy('default'); }}
                className="bg-[#3E0F12] text-white text-[11px] font-bold tracking-widest uppercase px-6 py-2.5 hover:bg-[#2D0B0C] transition-colors mt-2"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => {
                const stars = Math.round(product.rating);
                const weight = product.title.match(/\d+\s*[gG]m?/)?.[0] ?? 'Standard';

                return (
                  <div key={product.id} className="group flex flex-col bg-white border border-[#E8DDD0] hover:shadow-lg transition-all duration-300">
                    {/* Image area */}
                    <div className="relative overflow-hidden bg-[#FAF6F0] aspect-[4/5] flex items-center justify-center p-6">
                      {product.isFeatured && (
                        <div className="absolute top-2 left-2 z-10 bg-[#3E0F12] text-[#E6B747] text-[8px] font-bold tracking-widest uppercase px-2 py-1 leading-tight border border-[#E6B747]/40">
                          FEATURED
                        </div>
                      )}
                      <Link to={`/product/${product.id}`} className="w-full h-full flex items-center justify-center">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="max-h-[180px] max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </Link>

                      {/* Wishlist */}
                      <button
                        aria-label="Add to wishlist"
                        className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white border border-[#E8DDD0] flex items-center justify-center hover:border-[#3E0F12] transition-all"
                      >
                        <Heart className="w-3.5 h-3.5 text-[#5C534E]" />
                      </button>
                    </div>

                    {/* Info */}
                    <div className="flex flex-col flex-1 p-4 gap-2 text-left">
                      <Link to={`/product/${product.id}`}>
                        <p className="font-sans text-[13px] font-semibold text-[#2D0B0C] leading-snug line-clamp-2 hover:text-[#3E0F12] transition-colors">
                          {product.title}
                        </p>
                      </Link>

                      <p className="text-[11px] text-[#9E9087]">
                        {weight}
                      </p>

                      {/* Stars */}
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${i < stars ? 'text-[#E6B747] fill-[#E6B747]' : 'text-gray-300 fill-gray-200'}`}
                          />
                        ))}
                        <span className="text-[10px] text-[#5C534E] ml-1">({product.rating})</span>
                      </div>

                      {/* Price */}
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[16px] font-bold text-[#2D0B0C]">₹{product.price}.00</span>
                        {product.originalPrice && (
                          <span className="text-[11px] text-[#9E9087] line-through">₹{product.originalPrice}.00</span>
                        )}
                      </div>

                      {/* Add to Cart */}
                      <button className="w-full flex items-center justify-center gap-2 bg-[#163728] text-white text-[10px] font-bold tracking-widest uppercase py-2.5 hover:bg-[#0C1C12] transition-colors mt-auto">
                        <ShoppingCart className="w-3.5 h-3.5" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </div>
    </>
  );
}
