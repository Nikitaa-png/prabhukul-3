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
      <div className="shop-banner-container">
        <img 
          src="/images/prabhukuldana,powder/prabhukulposter/file_0000000085647207a9146014fbbad819.png" 
          alt="The Secret Behind Every Delicious Meal - Prabhukul Hing Compound" 
          className="shop-banner-img" 
        />
      </div>

      {/* Compact Title & Breadcrumb */}
      <div className="w-full bg-[#FAF6F0] pt-4 pb-1.5 md:pt-6 md:pb-2.5 lg:pt-8 lg:pb-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D0B0C] tracking-wide uppercase">
            Shop
          </h1>
          <nav className="flex items-center gap-1.5 mt-1 sm:mt-1.5 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#C8922A]">
            <Link to="/" className="hover:text-[#163728] transition-colors">Home</Link>
            <span className="text-[#E5DFD5] font-normal">/</span>
            <span className="text-[#5C534E]">Shop</span>
          </nav>
        </div>
      </div>

      {/* Main Container */}
      <div className="w-full bg-[#FAF6F0] pb-10 pt-2 md:pt-3 lg:pt-4 px-4 sm:px-6 lg:px-8 min-h-[60vh]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 relative">
          
          {/* Desktop Filter Sidebar (Sticky) */}
          <aside className="hidden lg:block w-64 shrink-0 sticky top-24 self-start bg-white border border-[#E5DFD5] rounded-[14px] p-6 shadow-sm">
            <FilterContent 
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onReset={() => { setSelectedCategory('All'); setSearchQuery(''); setSortBy('default'); }}
            />
          </aside>

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
                
                <FilterContent 
                  categories={categories}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  onReset={() => { setSelectedCategory('All'); setSearchQuery(''); setSortBy('default'); }}
                  isMobile={true}
                  closeDrawer={() => setShowMobileFilters(false)}
                />
              </div>
            </div>
          )}

          {/* Product Feed Area */}
          <div className="flex-1 space-y-6">
            
            {/* Product Toolbar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between bg-white border border-[#E5DFD5] rounded-[14px] px-5 py-4 gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                {/* Mobile Filter Trigger Button */}
                <button
                  onClick={() => setShowMobileFilters(true)}
                  className="lg:hidden inline-flex items-center gap-2 border border-[#E5DFD5] bg-white hover:border-[#163728] text-[#5C534E] hover:text-[#163728] px-4 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-[8px] transition-colors"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5" />
                  Filters
                </button>
                
                <p className="font-sans text-[13px] text-[#5C534E]">
                  Showing <span className="font-bold text-[#163728]">{filteredProducts.length}</span> of <span className="font-bold text-[#2D0B0C]">{products.length}</span> products
                </p>
              </div>

              <div className="flex items-center gap-3 justify-between sm:justify-end">
                {/* Sort Dropdown */}
                <div className="w-full sm:w-48">
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
            </div>

            {/* Product Grid / Empty State */}
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
              <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

          </div>

        </div>
      </div>
    </>
  );
}

/* Sidebar filter list component */
function FilterContent({ 
  categories, 
  selectedCategory, 
  setSelectedCategory, 
  searchQuery, 
  setSearchQuery, 
  onReset,
  isMobile,
  closeDrawer 
}) {
  return (
    <div className="space-y-6">
      {/* Search Filter block */}
      <div className="space-y-2">
        <h4 className="font-serif text-xs font-bold text-[#2D0B0C] uppercase tracking-wider">Search</h4>
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9E9087]" />
          <input
            type="text"
            placeholder="Type keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full border border-[#E5DFD5] bg-white pl-10 pr-4 py-2.5 text-xs text-[#2D0B0C] placeholder-[#9E9087] focus:outline-none focus:border-[#163728] rounded-[8px] transition-colors"
          />
        </div>
      </div>

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
                  if (isMobile && closeDrawer) closeDrawer();
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

      {/* Reset button */}
      <button
        onClick={() => {
          onReset();
          if (isMobile && closeDrawer) closeDrawer();
        }}
        className="w-full bg-white hover:bg-[#FAF6F0] border border-[#3E0F12] text-[#3E0F12] hover:text-[#2D0B0C] text-[10px] font-bold tracking-widest uppercase py-3 rounded-[8px] transition-all"
      >
        Clear All Filters
      </button>
    </div>
  );
}

/* Redesigned Product Card */
function ProductCard({ product }) {
  const stars = Math.round(product.rating);
  const weight = product.title.match(/\d+\s*[gG]m?/)?.[0] ?? 'Standard';

  return (
    <div 
      className="group flex flex-col justify-between bg-white border border-[#E5DFD5] hover:border-[#163728] rounded-[14px] overflow-hidden transition-all duration-[250ms] ease-in-out hover:-translate-y-[5px] hover:shadow-md aspect-square relative"
      style={{ aspectRatio: '1 / 1' }}
    >
      {/* Badges container */}
      <div className="absolute top-3.5 left-3.5 z-10 flex flex-col gap-1.5">
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
        className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/95 hover:bg-white border border-[#E5DFD5] hover:border-[#163728]/60 flex items-center justify-center transition-all z-10 shadow-sm hover:scale-105 active:scale-95"
      >
        <Heart className="w-3.5 h-3.5 text-[#5C534E] hover:text-[#3E0F12]" />
      </button>

      {/* Image container with light cream background */}
      <div className="flex-1 w-full bg-[#FAF6F0] p-4 flex items-center justify-center relative overflow-hidden min-h-0">
        <Link to={`/product/${product.id}`} className="w-full h-full flex items-center justify-center animate-fadeIn">
          <img
            src={product.image}
            alt={product.title}
            className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-[250ms] ease-in-out group-hover:scale-[1.03]"
            loading="lazy"
          />
        </Link>
      </div>

      {/* White info section */}
      <div className="bg-white p-4 flex flex-col gap-1.5 border-t border-[#E5DFD5]/40 shrink-0 text-left">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-sans text-[13px] font-semibold text-[#2D0B0C] group-hover:text-[#163728] transition-colors duration-[250ms] ease-in-out line-clamp-1">
            {product.title}
          </h3>
        </Link>

        <div className="flex items-center justify-between text-[11px] text-[#9E9087]">
          <span>{weight}</span>
          {/* Stars */}
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < stars ? 'text-[#E6B747] fill-[#E6B747]' : 'text-gray-300 fill-gray-200'}`}
              />
            ))}
            <span className="text-[10px] text-[#5C534E] ml-1">({product.rating})</span>
          </div>
        </div>

        {/* Price and Add to Cart wrapper */}
        <div className="flex items-center justify-between mt-1 gap-2">
          <div className="flex items-baseline gap-1.5">
            <span className="font-sans text-sm font-bold text-[#2D0B0C]">
              ₹{product.price}.00
            </span>
            {product.originalPrice && (
              <span className="font-sans text-[10px] text-[#9E9087] line-through">
                ₹{product.originalPrice}.00
              </span>
            )}
          </div>

          <button className="bg-[#163728] hover:bg-[#0C1C12] text-white p-2 rounded-[8px] transition-colors duration-[250ms] ease-in-out flex items-center justify-center group-hover:px-3 hover:scale-105 active:scale-95 shadow-sm" title="Add to Cart">
            <ShoppingCart className="w-3.5 h-3.5" />
            <span className="w-0 overflow-hidden group-hover:w-auto group-hover:ml-1 text-[9px] font-bold tracking-widest uppercase transition-all duration-[250ms] ease-in-out whitespace-nowrap">
              Add
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
