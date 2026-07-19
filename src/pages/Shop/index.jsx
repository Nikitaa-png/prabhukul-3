import React, { useState, useEffect } from 'react';
import SEO from '../../components/common/SEO';
import { getProducts, getCategories } from '../../services/db';
import { Star, Heart, ShoppingCart, Search, SlidersHorizontal, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  useEffect(() => {
    setProducts(getProducts().filter(p => p.visible !== false));
    const dbCats = getCategories().map(c => c.name);
    setCategories(['All', ...dbCats.filter(c => c !== 'All Products')]);
  }, []);

  // Prevent background scroll when mobile filter drawer is open
  useEffect(() => {
    if (showMobileFilters) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showMobileFilters]);

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
      
      {/* Shop Page Banner */}
      <div className="shop-banner">
        <img 
          src="/images/prabhukuldana,powder/prabhukulposter/image.png" 
          alt="Prabhukul Shop Banner" 
        />
      </div>

      {/* Compact Title & Breadcrumb */}
      <div className="w-full bg-[#FAF6F0] pt-8 pb-4 md:pt-10 md:pb-5 lg:pt-12 lg:pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0B0C] tracking-wide uppercase">
            Shop
          </h1>
          <nav className="flex items-center justify-center gap-1.5 mt-1.5 sm:mt-2 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#C8922A]">
            <Link to="/" className="hover:text-[#163728] transition-colors">Home</Link>
            <span className="text-[#E5DFD5] font-normal">/</span>
            <span className="text-[#5C534E]">Shop</span>
          </nav>
        </div>
      </div>

      {/* Main Container */}
      <div className="w-full bg-[#FAF6F0] pb-16 md:pb-20 pt-8 md:pt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Product Toolbar */}
          <div className="flex flex-col md:flex-row items-center justify-between bg-white border border-[#E5DFD5] rounded-[14px] px-5 py-3 gap-4 shadow-sm mb-6 md:mb-8">
            <div className="text-[13px] text-[#5C534E] font-semibold shrink-0 text-left w-full md:w-auto">
              Showing <span className="font-bold text-[#163728]">{filteredProducts.length}</span> of <span className="font-bold text-[#2D0B0C]">{products.length}</span> products
            </div>
            
            {/* Center Search Input */}
            <div className="relative w-full max-w-md mx-auto md:mx-4">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9E9087]" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full border border-[#E5DFD5] bg-[#FAF6F0]/20 pl-10 pr-4 py-2.5 text-xs text-[#2D0B0C] placeholder-[#9E9087] focus:outline-none focus:border-[#163728] rounded-[8px] transition-colors"
              />
            </div>

            {/* Right Sort Dropdown */}
            <div className="w-full md:w-48 shrink-0 flex items-center gap-2.5">
              {/* Mobile Filter Button */}
              <button
                onClick={() => setShowMobileFilters(true)}
                className="lg:hidden inline-flex items-center justify-center gap-1.5 border border-[#E5DFD5] bg-white hover:border-[#163728] text-[#5C534E] hover:text-[#163728] px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider rounded-[8px] transition-colors shrink-0"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Filters
              </button>
              
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full border border-[#E5DFD5] bg-white px-3 py-2 text-[12px] font-semibold text-[#2D0B0C] uppercase tracking-wider focus:outline-none focus:border-[#163728] rounded-[8px] transition-colors cursor-pointer"
              >
                <option value="default">Default Sort</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Popularity / Rating</option>
              </select>
            </div>
          </div>

          {/* Mobile Filter Drawer (Modal Overlay) */}
          {showMobileFilters && (
            <div className="lg:hidden fixed inset-0 z-50 flex">
              {/* Overlay Backdrop */}
              <div 
                className="fixed inset-0 bg-black/45 transition-opacity"
                onClick={() => setShowMobileFilters(false)}
              />
              
              {/* Drawer Content */}
              <div className="relative flex flex-col w-full max-w-xs bg-white h-full shadow-xl z-10 p-6 overflow-y-auto">
                <div className="flex items-center justify-between border-b border-[#E5DFD5] pb-4 mb-6">
                  <h3 className="font-serif text-sm font-bold text-[#2D0B0C] uppercase tracking-wider">Filters</h3>
                  <button 
                    onClick={() => setShowMobileFilters(false)}
                    className="p-1 rounded-full hover:bg-gray-100 text-[#5C534E]"
                    aria-label="Close filters"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="space-y-6">
                  {/* Category List Filter block */}
                  <div className="space-y-3">
                    <h4 className="font-serif text-xs font-bold text-[#2D0B0C] uppercase tracking-wider">Categories</h4>
                    <div className="flex flex-col gap-1.5">
                      {categories.map((cat) => {
                        const isSelected = selectedCategory === cat;
                        return (
                          <button
                            key={cat}
                            onClick={() => {
                              setSelectedCategory(cat);
                              setShowMobileFilters(false);
                            }}
                            className={`w-full text-left px-3 py-2.5 text-xs uppercase font-semibold tracking-wider rounded-[8px] transition-all border ${
                              isSelected
                                ? 'bg-[#163728] text-white border-[#163728]'
                                : 'bg-white text-[#5C534E] border-[#E5DFD5] hover:border-[#163728] hover:text-[#163728]'
                            }`}
                          >
                            {cat}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedCategory('All');
                      setSearchQuery('');
                      setSortBy('default');
                      setShowMobileFilters(false);
                    }}
                    className="w-full bg-white hover:bg-[#FAF6F0] border border-[#3E0F12] text-[#3E0F12] hover:text-[#2D0B0C] text-[10px] font-bold tracking-widest uppercase py-3 rounded-[8px] transition-all"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Main Category & Product Area */}
          <div className="flex flex-col lg:flex-row gap-8 relative">
            
            {/* Left Category Column */}
            <div className="hidden lg:block w-[24%] border-r border-[#E5DFD5]/50 pr-6 space-y-3 relative self-start">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-5 py-3.5 text-xs uppercase font-bold tracking-wider rounded-[8px] transition-all duration-[200ms] relative ${
                      isSelected
                        ? 'bg-[#163728] text-white shadow-sm'
                        : 'bg-white text-[#2D0B0C] border border-[#E5DFD5] hover:border-[#163728]/60 hover:text-[#163728]'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute right-[-26px] top-1/2 -translate-y-1/2 w-[3px] h-8 bg-[#D4A64A] rounded-full z-10" />
                    )}
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Mobile/Tablet horizontally scrollable category list */}
            <div className="lg:hidden w-full overflow-x-auto scrollbar-none flex gap-2.5 pb-2 mb-6">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`shrink-0 px-5 py-2.5 text-[10px] uppercase font-bold tracking-wider rounded-[8px] transition-all duration-[200ms] border ${
                      isSelected
                        ? 'bg-[#163728] text-white border-[#163728]'
                        : 'bg-white text-[#2D0B0C] border-[#E5DFD5] hover:border-[#163728] hover:text-[#163728]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Right Product Feed area */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="bg-white border border-[#E5DFD5] rounded-[14px] p-16 text-center space-y-4 shadow-sm">
                  <p className="font-serif text-lg text-[#3E0F12] font-semibold uppercase tracking-wide">No products found</p>
                  <p className="font-sans text-xs sm:text-sm text-[#5C534E] max-w-sm mx-auto">
                    Try adjusting your search keywords, switching the category filter, or resetting all search filters.
                  </p>
                  <button 
                    onClick={() => { setSelectedCategory('All'); setSearchQuery(''); setSortBy('default'); }}
                    className="bg-[#163728] hover:bg-[#0C1C12] text-white text-[11px] font-bold tracking-widest uppercase px-6 py-3 rounded-[8px] transition-colors mt-2"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </>
  );
}

/* Redesigned Product Card to match the reference */
function ProductCard({ product }) {
  const stars = Math.round(product.rating || 5);
  const weight = product.title.match(/\d+\s*[gG]m?/)?.[0] ?? 'Standard';

  return (
    <div 
      className="group flex flex-col justify-between bg-white border border-[#E5DFD5] hover:border-[#163728] rounded-[14px] overflow-hidden transition-all duration-[220ms] ease-in-out hover:-translate-y-1 hover:shadow-lg h-full relative"
    >
      {/* Badges container */}
      <div className="absolute top-5 left-5 z-10 flex flex-col gap-1.5">
        {product.isFeatured && (
          <span className="bg-[#163728] text-white text-[8px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-[4px] border border-[#163728]/10 shadow-sm">
            Featured
          </span>
        )}
        {product.originalPrice && (
          <span className="bg-[#3E0F12] text-[#E6B747] text-[8px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-[4px] border border-[#E6B747]/25 shadow-sm">
            Sale
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button
        aria-label="Add to wishlist"
        className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/95 hover:bg-white border border-[#E5DFD5] hover:border-[#163728]/60 flex items-center justify-center transition-all z-10 shadow-sm hover:scale-105 active:scale-95"
      >
        <Heart className="w-3.5 h-3.5 text-[#5C534E] hover:text-[#3E0F12]" />
      </button>

      {/* Image container/panel with soft cream background */}
      <div className="w-[calc(100%-32px)] aspect-square bg-[#FAF6F0] rounded-[10px] overflow-hidden relative flex items-center justify-center mt-4 mx-4 shrink-0">
        <Link to={`/product/${product.id}`} className="w-full h-full flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain transition-transform duration-[220ms] ease-in-out group-hover:scale-[1.02]"
            style={{
              padding: product.id === 1 ? '16px' : '28px'
            }}
            loading="lazy"
          />
        </Link>
      </div>

      {/* Info section with clean layout */}
      <div className="p-5 flex flex-col flex-grow justify-between text-left gap-3">
        <div className="space-y-2">
          <Link to={`/product/${product.id}`}>
            <h3 className="font-serif text-[15px] font-bold text-[#2D0B0C] leading-snug group-hover:text-[#163728] transition-colors duration-[220ms] ease-in-out line-clamp-2 min-h-[44px]">
              {product.title}
            </h3>
          </Link>

          <p className="font-sans text-[11px] text-[#5C534E] leading-relaxed line-clamp-2 min-h-[32px]">
            {product.description}
          </p>

          <div className="flex items-center justify-between text-[11px] text-[#9E9087] pt-1">
            <span>{weight}</span>
            {/* Stars */}
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${i < stars ? 'text-[#E6B747] fill-[#E6B747]' : 'text-gray-300 fill-gray-200'}`}
                />
              ))}
              <span className="text-[10px] text-[#5C534E] ml-1">({product.rating || '5.0'})</span>
            </div>
          </div>
        </div>

        {/* Price and Add to Cart wrapper */}
        <div className="flex items-center justify-between gap-2 pt-3 border-t border-[#E5DFD5]/35 mt-auto">
          <div className="flex items-baseline gap-1.5">
            <span className="font-sans text-[15px] font-bold text-[#163728]">
              ₹{product.price}.00
            </span>
            {product.originalPrice && (
              <span className="font-sans text-[11px] text-[#9E9087] line-through">
                ₹{product.originalPrice}.00
              </span>
            )}
          </div>

          <button 
            className="w-8.5 h-8.5 bg-[#163728] hover:bg-[#0C1C12] text-white rounded-full flex items-center justify-center transition-all duration-[220ms] ease-in-out hover:scale-105 active:scale-95 shadow-sm shrink-0" 
            title="Add to Cart"
            aria-label="Add to Cart"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
