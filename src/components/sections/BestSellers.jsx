import React, { useRef } from 'react';
import { Heart, ShoppingCart, Star, ChevronLeft, ChevronRight, ArrowRight, Leaf, ShieldCheck, Flame, Truck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../../data/catalog';
import { bestSellerIds } from '../../data/homeData';
import bgImg from '../../assets/images/WhatsApp Image 2026-07-14 at 03.25.12.jpeg';

const trustBadges = [
  { icon: Leaf,        title: '100% Pure',        sub: 'No Additives' },
  { icon: ShieldCheck, title: 'Premium Quality',   sub: 'Finest Ingredients' },
  { icon: Flame,       title: 'Strong Aroma',      sub: 'Great Taste' },
  { icon: Truck,       title: 'Pan India Delivery', sub: 'Fast & Reliable' },
  { icon: Award,       title: 'Trusted Since 1985', sub: 'Pure & Authentic' },
];

export default function BestSellers() {
  const scrollRef = useRef(null);
  const items = bestSellerIds.map((id) => products.find((p) => p.id === id)).filter(Boolean);

  const scroll = (dir) => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: dir * 300, behavior: 'smooth' });
  };

  return (
    <section className="w-full py-16" id="best-sellers" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div className="text-center sm:text-left">
            {/* Ornamental label */}
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
              <div className="w-6 h-[1px] bg-[#D4A64A]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#C8922A] font-semibold border border-[#D4A64A]/50 px-3 py-0.5">
                ✦ Our Bestsellers
              </span>
              <div className="w-6 h-[1px] bg-[#D4A64A]" />
            </div>
            <h2
              className="font-serif text-4xl sm:text-5xl font-bold text-[#163728] tracking-wide uppercase"
              style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
            >
              Best Sellers
            </h2>
            <div className="flex justify-center sm:justify-start mt-2">
              <span className="text-[#D4A64A] text-lg">✦</span>
            </div>
            <p className="font-sans text-[13px] text-[#5C534E] mt-2">
              Handpicked favorites loved by our customers
            </p>
          </div>

          <Link
            to="/shop"
            className="self-center sm:self-end inline-flex items-center gap-2 border border-[#3E0F12] text-[#3E0F12] text-[11px] font-semibold tracking-widest uppercase px-5 py-2.5 hover:bg-[#3E0F12] hover:text-white transition-all shrink-0"
          >
            View All Products <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 rounded-full bg-white border border-[#D4A64A]/40 items-center justify-center shadow hover:bg-[#FAF6F0] transition-all"
          >
            <ChevronLeft className="w-5 h-5 text-[#2D0B0C]" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scrollbar-none pb-2"
          >
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll(1)}
            aria-label="Next"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 rounded-full bg-white border border-[#D4A64A]/40 items-center justify-center shadow hover:bg-[#FAF6F0] transition-all"
          >
            <ChevronRight className="w-5 h-5 text-[#2D0B0C]" />
          </button>
        </div>

        {/* Trust strip */}
        <div className="mt-12 border border-[#E6B747]/40 bg-[#3E0F12] rounded-sm px-4 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {trustBadges.map(({ icon: Icon, title, sub }) => (
              <div key={title} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#E6B747]/40 flex items-center justify-center shrink-0">
                  <Icon className="w-4.5 h-4.5 text-[#E6B747]" strokeWidth={1.6} />
                </div>
                <div>
                  <p className="text-[12px] font-bold text-white leading-tight">{title}</p>
                  <p className="text-[10px] text-gray-300">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function ProductCard({ product }) {
  const stars = Math.round(product.rating);

  return (
    <div className="group flex flex-col bg-white border border-[#E8DDD0] hover:shadow-lg transition-all duration-300 shrink-0 w-[220px] sm:w-[240px]">
      {/* Image area */}
      <div className="relative overflow-hidden bg-[#FAF6F0] aspect-[4/5]">
        {/* BEST SELLER ribbon */}
        <div className="absolute top-0 left-0 z-10 bg-[#3E0F12] text-white text-[8px] font-bold tracking-widest uppercase px-2 py-3 leading-tight text-center"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          BEST SELLER
        </div>

        <Link to={`/product/${product.id}`} className="absolute inset-0 flex items-center justify-center p-8">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
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
      <div className="flex flex-col flex-1 p-4 gap-2">
        <Link to={`/product/${product.id}`}>
          <p className="font-sans text-[13px] font-semibold text-[#2D0B0C] leading-snug line-clamp-2 hover:text-[#3E0F12] transition-colors">
            {product.title}
          </p>
        </Link>

        {/* Weight/variant from title */}
        <p className="text-[11px] text-[#9E9087]">
          {product.title.match(/\d+\s*[gG]m?/)?.[0] ?? 'Standard'}
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
        <button className="w-full flex items-center justify-center gap-2 bg-[#163728] text-white text-[10px] font-bold tracking-widest uppercase py-2.5 hover:bg-[#0C1C12] transition-colors mt-1">
          <ShoppingCart className="w-3.5 h-3.5" />
          Add to Cart
        </button>

        {/* View Details */}
        <Link
          to={`/product/${product.id}`}
          className="w-full flex items-center justify-center gap-1.5 text-[#3E0F12] text-[10px] font-semibold tracking-widest uppercase py-1.5 hover:text-[#C8922A] transition-colors"
        >
          View Details <ArrowRight className="w-3 h-3" />
        </Link>
      </div>
    </div>
  );
}

