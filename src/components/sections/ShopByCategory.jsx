import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/homeData';

export default function ShopByCategory() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 200, behavior: 'smooth' });
    }
  };

  return (
    <section
      className="w-full bg-[#FAF6F0] py-8"
      id="shop-by-category"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-6">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[#C8922A] font-medium mb-1">Explore</p>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D0B0C] leading-tight">
            Shop by Category
          </h2>
          <div className="mt-2.5 w-12 h-[2px] bg-[#D4A64A]/30 mx-auto" />
        </div>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll(-1)}
            aria-label="Scroll left"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-9 h-9 rounded-full border border-[#D4A64A]/40 bg-white items-center justify-center shadow-sm hover:bg-[#FAF6F0] transition-all"
          >
            <ChevronLeft className="w-4 h-4 text-[#2D0B0C]" />
          </button>

          {/* Scrollable row */}
          <div
            ref={scrollRef}
            className="flex gap-12 sm:gap-16 overflow-x-auto scrollbar-none pb-2 md:justify-center"
          >
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={cat.slug}
                className="flex flex-col items-center gap-2.5 shrink-0 group"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-[4px] border-[#C8922A] group-hover:border-[#3E0F12] transition-all shadow-sm">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#2D0B0C] group-hover:text-[#C8922A] transition-colors text-center">
                  {cat.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Right arrow */}
          <button
            onClick={() => scroll(1)}
            aria-label="Scroll right"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-9 h-9 rounded-full border border-[#D4A64A]/40 bg-white items-center justify-center shadow-sm hover:bg-[#FAF6F0] transition-all"
          >
            <ChevronRight className="w-4 h-4 text-[#2D0B0C]" />
          </button>
        </div>
      </div>
    </section>
  );
}
