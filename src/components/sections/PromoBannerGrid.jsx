import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Heart, ShoppingCart, Star, ArrowRight } from 'lucide-react';
import { products } from '../../data/catalog';

// Category pill SVG icons (line-art style matching reference)
const CategoryIcons = {
  all: () => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M20 8c-1.5 0-3 .8-3.8 2L8 22c-.8 1.2-.8 2.8 0 4 .8 1.2 2 2 3.8 2h16.4c1.8 0 3-.8 3.8-2 .8-1.2.8-2.8 0-4L23.8 10C23 8.8 21.5 8 20 8z"/>
      <circle cx="20" cy="20" r="3"/>
    </svg>
  ),
  hing: () => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <rect x="10" y="12" width="20" height="22" rx="2"/>
      <path d="M14 12V10a6 6 0 0112 0v2"/>
      <path d="M16 22h8M16 26h5"/>
    </svg>
  ),
  powder: () => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <ellipse cx="20" cy="28" rx="10" ry="5"/>
      <path d="M10 28V20c0-2 4-6 10-8s10 2 10 6v10"/>
      <path d="M15 24c2-1 5-1 7 0"/>
    </svg>
  ),
  tablets: () => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <circle cx="14" cy="20" r="6"/>
      <circle cx="26" cy="20" r="6"/>
      <path d="M14 14v12M26 14v12"/>
    </svg>
  ),
  spice: () => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M20 8v4M14 10l2 3M26 10l-2 3"/>
      <path d="M10 20c0-5.5 4.5-10 10-10s10 4.5 10 10"/>
      <path d="M10 20c0 3 1.5 5.5 4 7l2 5h8l2-5c2.5-1.5 4-4 4-7"/>
      <path d="M15 27h10"/>
    </svg>
  ),
  gift: () => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <rect x="8" y="18" width="24" height="16" rx="1"/>
      <rect x="8" y="13" width="24" height="5" rx="1"/>
      <path d="M20 13V34"/>
      <path d="M20 13c0 0-4-8 0-8s0 8 0 8"/>
      <path d="M20 13c0 0 4-8 0-8s0 8 0 8"/>
    </svg>
  ),
  combo: () => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <rect x="8" y="14" width="14" height="18" rx="1"/>
      <rect x="18" y="10" width="14" height="18" rx="1"/>
      <path d="M12 20h6M12 25h4M22 16h6M22 21h4"/>
    </svg>
  ),
  tea: () => (
    <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
      <path d="M10 18h16l-2 12H12L10 18z"/>
      <path d="M26 20c2 0 4 1 4 3s-2 3-4 3"/>
      <path d="M14 12c0-2 2-3 2-5M18 12c0-2 2-3 2-5M22 12c0-2 2-3 2-5"/>
    </svg>
  ),
};

const filterCategories = [
  { label: 'All Products',   value: 'All',       icon: 'all'     },
  { label: 'Hing Compounds', value: 'Hing',      icon: 'hing'    },
  { label: 'Hing Powders',   value: 'HingPowder',icon: 'powder'  },
  { label: 'Hing Tablets',   value: 'HingTablet',icon: 'tablets' },
  { label: 'Spice Blends',   value: 'Spice',     icon: 'spice'   },
  { label: 'Gift Packs',     value: 'Gift',      icon: 'gift'    },
  { label: 'Combo Packs',    value: 'Combo',     icon: 'combo'   },
  { label: 'Tea',            value: 'Tea',       icon: 'tea'     },
];

const collectionIds = [14, 1, 8, 11, 19, 9, 10, 16];
const badgeMap = {
  14: 'BEST SELLER', 1: 'BEST SELLER', 8: 'BEST SELLER',
  19: 'BEST SELLER', 9: 'BEST SELLER', 10: 'BEST SELLER',
  11: 'BEST SELLER', 16: 'BEST SELLER',
};

export default function PromoBannerGrid() {
  const catRef = useRef(null);
  const scrollRef = useRef(null);
  const scrollCat = (dir) => catRef.current?.scrollBy({ left: dir * 200, behavior: 'smooth' });
  const scroll = (dir) => scrollRef.current?.scrollBy({ left: dir * 270, behavior: 'smooth' });

  const collectionProducts = collectionIds.map((id) => products.find((p) => p.id === id)).filter(Boolean);

  return (
    <section className="w-full bg-[#F5EDE0] py-16" id="promo-banners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="flex-1 max-w-[60px] h-[1px] bg-[#D4A64A]" />
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#C8922A] font-semibold">✦ Explore Our Finest ✦</p>
            <div className="flex-1 max-w-[60px] h-[1px] bg-[#D4A64A]" />
          </div>
          <h2
            className="font-serif text-5xl sm:text-6xl font-bold text-[#163728] uppercase tracking-wide"
            style={{ fontFamily: "'Playfair Display','Cormorant Garamond',serif" }}
          >
            Our Collection
          </h2>
          <div className="flex justify-center my-3">
            <span className="text-[#D4A64A] text-xl">✦</span>
          </div>
          <p className="font-sans text-[13px] text-[#5C534E] leading-relaxed">
            Pure ingredients. Timeless tradition. Unmatched taste.<br />
            Handcrafted with care, just for you.
          </p>
        </div>

        {/* Category pills */}
        <div className="relative mb-10">
          <button
            onClick={() => scrollCat(-1)}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-8 h-8 rounded-full bg-white border border-[#D4A64A]/50 items-center justify-center shadow hover:bg-[#FAF6F0] transition-all"
          >
            <ChevronLeft className="w-4 h-4 text-[#5C3A1E]" />
          </button>

          <div ref={catRef} className="flex gap-8 overflow-x-auto scrollbar-none justify-start sm:justify-center px-6 sm:px-0">
            {filterCategories.map((cat) => {
              const Icon = CategoryIcons[cat.icon];
              return (
                <div key={cat.value} className="flex flex-col items-center gap-3 shrink-0 cursor-pointer group">
                  <div className="w-20 h-20 rounded-full border-2 border-[#C8922A]/60 bg-white/80 flex items-center justify-center text-[#C8922A] group-hover:border-[#C8922A] group-hover:bg-[#C8922A]/10 transition-all">
                    <Icon />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-center text-[#5C3A1E] leading-tight max-w-[80px] group-hover:text-[#C8922A] transition-colors">
                    {cat.label}
                  </span>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => scrollCat(1)}
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-8 h-8 rounded-full bg-white border border-[#D4A64A]/50 items-center justify-center shadow hover:bg-[#FAF6F0] transition-all"
          >
            <ChevronRight className="w-4 h-4 text-[#5C3A1E]" />
          </button>
        </div>

        {/* Cards carousel */}
        <div className="relative">
          <button onClick={() => scroll(-1)} className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-10 h-10 rounded-full bg-white border border-[#D4A64A]/40 items-center justify-center shadow hover:bg-[#FAF6F0] transition-all">
            <ChevronLeft className="w-5 h-5 text-[#2D0B0C]" />
          </button>

          <div ref={scrollRef} className="flex gap-5 overflow-x-auto scrollbar-none pb-2">
            {collectionProducts.map((product) => (
              <CollectionCard key={product.id} product={product} badge={badgeMap[product.id]} />
            ))}
          </div>

          <button onClick={() => scroll(1)} className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-10 h-10 rounded-full bg-white border border-[#D4A64A]/40 items-center justify-center shadow hover:bg-[#FAF6F0] transition-all">
            <ChevronRight className="w-5 h-5 text-[#2D0B0C]" />
          </button>
        </div>

      </div>
    </section>
  );
}

function CollectionCard({ product, _badge }) {
  const stars = Math.round(product.rating);
  const weight = product.title.match(/\d+\s*[gG]m?/)?.[0] ?? 'Standard';

  return (
    <div className="group flex flex-col bg-white border border-[#E8DDD0] hover:shadow-xl transition-all duration-300 shrink-0 w-[210px] sm:w-[220px]">

      {/* Image */}
      <div className="relative bg-white flex items-center justify-center px-4 pt-8 pb-3" style={{ minHeight: '200px' }}>
        <button aria-label="Wishlist" className="absolute top-2 right-2 w-7 h-7 rounded-full border border-[#E8DDD0] bg-white flex items-center justify-center hover:border-[#3E0F12] transition-all z-10">
          <Heart className="w-3.5 h-3.5 text-[#9E9087]" />
        </button>
        <Link to={`/product/${product.id}`} className="absolute inset-0 flex items-center justify-center p-8">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </Link>
      </div>

      {/* Divider */}
      <div className="h-[1px] bg-[#E8DDD0] mx-0" />

      {/* Info */}
      <div className="flex flex-col flex-1 px-4 pt-3 pb-4 gap-1.5">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-sans text-[13px] font-semibold text-[#1A1A1A] leading-snug hover:text-[#3E0F12] transition-colors line-clamp-2">
            {product.title}
          </h3>
        </Link>
        <p className="text-[11px] text-[#9E9087]">{weight}</p>

        {/* Stars */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className={`w-3 h-3 ${i < stars ? 'text-[#E6B747] fill-[#E6B747]' : 'text-gray-300 fill-gray-200'}`} />
          ))}
          <span className="text-[10px] text-[#9E9087] ml-0.5">({product.rating})</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[16px] font-bold text-[#1A1A1A]">₹{product.price}.00</span>
          {product.originalPrice && (
            <span className="text-[11px] text-[#9E9087] line-through">₹{product.originalPrice}.00</span>
          )}
        </div>

        {/* Add to cart */}
        <button className="mt-2 w-full flex items-center justify-center gap-2 bg-[#163728] text-white text-[10px] font-bold tracking-[0.15em] uppercase py-2.5 hover:bg-[#0C1C12] transition-colors">
          <ShoppingCart className="w-3.5 h-3.5" /> Add to Cart
        </button>

        {/* View details */}
        <Link to={`/product/${product.id}`} className="w-full flex items-center justify-center gap-1 text-[#2D0B0C] text-[10px] font-semibold tracking-wider uppercase py-1.5 hover:text-[#C8922A] transition-colors">
          View Details <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}
