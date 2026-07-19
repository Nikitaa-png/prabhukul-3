import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';
import { getProducts, getCategories } from '../../services/db';

// Animation configurations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 1, 0.5, 1]
    }
  }
};

export default function PopularHings() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Load products and categories from database
    const dbProducts = getProducts().filter(p => p.visible !== false);
    setProducts(dbProducts);

    const dbCats = getCategories().map(c => c.name);
    setCategories(['All', ...dbCats.filter(c => c !== 'All Products')]);
  }, []);

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  // Show up to 4 popular products per category
  const displayedProducts = filteredProducts.slice(0, 4);

  return (
    <motion.section 
      className="w-full bg-[#FFFFFF] py-10 md:py-[60px] lg:py-20 relative overflow-hidden border-b border-[#E5DFD5]/30"
      id="popular-hings"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-8 lg:mb-12">
          <motion.h2 
            className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0B0C] tracking-wide uppercase"
            variants={fadeUpVariants}
          >
            Popular Hings
          </motion.h2>
          <motion.div 
            className="w-12 h-[2px] bg-[#D4A64A] mx-auto mt-3"
            variants={fadeUpVariants}
          />
        </div>

        {/* Two-Part Layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Category Sidebar (Desktop Navigation) */}
          <div className="w-full lg:w-[24%] shrink-0">
            {/* Desktop vertical tab list with border-indicator side-lines */}
            <div className="hidden lg:flex flex-col gap-3 relative pl-3 border-l-2 border-[#E5DFD5]">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    role="tab"
                    aria-selected={isSelected}
                    className={`w-full text-left px-4 py-3 text-xs uppercase font-bold tracking-wider rounded-[8px] transition-all duration-[200ms] relative ${
                      isSelected
                        ? 'bg-[#163728] text-white'
                        : 'bg-white text-[#5C534E] border border-[#E5DFD5] hover:border-[#163728] hover:text-[#163728]'
                    }`}
                  >
                    {isSelected && (
                      <span className="absolute left-[-14px] top-1/2 -translate-y-1/2 w-[3px] h-6 bg-[#D4A64A] rounded-full" />
                    )}
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Mobile/Tablet horizontally scrollable pills */}
            <div className="lg:hidden w-full overflow-x-auto scrollbar-none flex gap-2.5 pb-2 mb-6 -mx-4 px-4">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    role="tab"
                    aria-selected={isSelected}
                    className={`shrink-0 px-5 py-2.5 text-[10px] uppercase font-bold tracking-wider rounded-[8px] transition-all duration-[200ms] border ${
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

          {/* Right Product Grid */}
          <div className="w-full lg:w-[76%] flex-1">
            {displayedProducts.length === 0 ? (
              <div className="bg-white border border-[#E5DFD5] rounded-[14px] p-12 text-center text-xs text-[#5C534E]">
                No products available in this category.
              </div>
            ) : (
              <motion.div 
                className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                variants={containerVariants}
              >
                {displayedProducts.map((product) => (
                  <motion.div key={product.id} variants={fadeUpVariants}>
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

        </div>

      </div>
    </motion.section>
  );
}

function ProductCard({ product }) {
  const stars = Math.round(product.rating || 5);
  const weight = product.title.match(/\d+\s*[gG]m?/)?.[0] ?? 'Standard';

  return (
    <div 
      className="group flex flex-col justify-between bg-white border border-[#E5DFD5] hover:border-[#163728]/80 hover:-translate-y-1 hover:shadow-lg rounded-[14px] overflow-hidden transition-all duration-[220ms] ease-in-out h-full relative"
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
        aria-label={`Add ${product.title} to wishlist`}
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

      {/* Card Info area */}
      <div className="bg-white p-5 flex flex-col flex-grow justify-between text-left gap-3">
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
            title={`Add ${product.title} to cart`}
            aria-label={`Add ${product.title} to cart`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
