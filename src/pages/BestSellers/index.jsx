import React from 'react';
import SEO from '../../components/common/SEO';
import { products } from '../../data/catalog';
import { bestSellerIds } from '../../data/homeData';
import bgImg from '../../assets/images/WhatsApp Image 2026-07-14 at 03.25.12.jpeg';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BestSellersPage() {
  // Load all best seller products
  const items = bestSellerIds.map((id) => products.find((p) => p.id === id)).filter(Boolean);

  return (
    <>
      <SEO 
        title="Best Sellers – Most Loved Spices & Digestives" 
        description="Browse the most popular, high-rating, and best-selling organic hing and digestives at Prabhukul." 
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
              Best Selling Products
            </h1>
            <p className="font-sans text-[13px] text-[#5C534E] max-w-xl mx-auto leading-relaxed">
              These are the highest rated products loved by our customers. Experience Hathras heritage with every single purchase.
            </p>
            <div className="flex justify-center mt-2">
              <span className="text-[#D4A64A] text-lg">✦ ❖ ✦</span>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((product) => {
              const stars = Math.round(product.rating);
              const weight = product.title.match(/\d+\s*[gG]m?/)?.[0] ?? 'Standard';

              return (
                <div key={product.id} className="group flex flex-col bg-white border border-[#E8DDD0] hover:shadow-lg transition-all duration-300">
                  {/* Image area */}
                  <div className="relative overflow-hidden bg-[#FAF6F0] aspect-[4/5] flex items-center justify-center p-6">
                    <div className="absolute top-0 left-0 z-10 bg-[#3E0F12] text-white text-[8px] font-bold tracking-widest uppercase px-2 py-3 leading-tight text-center"
                      style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                      BEST SELLER
                    </div>
                    <Link to={`/product/${product.id}`} className="w-full h-full flex items-center justify-center">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="max-h-[220px] max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                      />
                    </Link>
                    <button
                      aria-label="Add to wishlist"
                      className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white border border-[#E8DDD0] flex items-center justify-center hover:border-[#3E0F12] transition-all"
                    >
                      <Heart className="w-3.5 h-3.5 text-[#5C534E]" />
                    </button>
                  </div>

                  {/* Info */}
                  <div className="flex flex-col flex-1 p-5 gap-2 text-left">
                    <Link to={`/product/${product.id}`}>
                      <p className="font-sans text-[14px] font-semibold text-[#2D0B0C] leading-snug line-clamp-2 hover:text-[#3E0F12] transition-colors">
                        {product.title}
                      </p>
                    </Link>
                    <p className="text-[11px] text-[#9E9087]">{weight}</p>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${i < stars ? 'text-[#E6B747] fill-[#E6B747]' : 'text-gray-300 fill-gray-200'}`}
                        />
                      ))}
                      <span className="text-[10px] text-[#5C534E] ml-1">({product.rating})</span>
                    </div>
                    <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed line-clamp-2 mt-1">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="text-[16px] font-bold text-[#2D0B0C]">₹{product.price}.00</span>
                      {product.originalPrice && (
                        <span className="text-[11px] text-[#9E9087] line-through">₹{product.originalPrice}.00</span>
                      )}
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 bg-[#163728] text-white text-[10px] font-bold tracking-widest uppercase py-2.5 hover:bg-[#0C1C12] transition-colors mt-4">
                      <ShoppingCart className="w-3.5 h-3.5" /> Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
}
