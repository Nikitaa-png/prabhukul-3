import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getBlocks } from '../../services/db';

export default function ShopByCategory() {
  const [categories, setCategories] = useState([]);
  const [config, setConfig] = useState(null);

  useEffect(() => {
    setCategories(getCategories());
    setConfig(getBlocks().shopByCategory || { enabled: true, heading: 'Shop by Category', subtitle: 'Explore' });
  }, []);

  if (!config || !config.enabled) return null;

  return (
    <section className="w-full bg-[#F8F3EA] py-10 md:py-[60px] lg:py-20" id="shop-by-category">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section header */}
        <div className="text-center mb-10">
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#C8922A] font-semibold block mb-1.5">
            ✦ {config.subtitle || 'Explore'} ✦
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0B0C] tracking-wide uppercase">
            {config.heading || 'Shop by Category'}
          </h2>
          <div className="w-12 h-[2px] bg-[#D4A64A] mx-auto mt-3 mb-3" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} cat={cat} />
          ))}
        </div>

      </div>
    </section>
  );
}

function CategoryCard({ cat }) {
  return (
    <Link
      to={cat.slug}
      className="group flex flex-col justify-between bg-white border border-[#E5DFD5] hover:border-[#163728]/60 rounded-[16px] p-3 relative overflow-hidden transition-all duration-[250ms] ease-in-out hover:-translate-y-[6px] aspect-square"
      style={{ aspectRatio: '1 / 1' }}
    >
      {/* Arched image container with texture bg */}
      <div className="flex-1 w-full bg-[#FAF6F0] rounded-t-[100px] rounded-b-none flex items-center justify-center p-6 relative overflow-hidden min-h-0">
        <img
          src={cat.image}
          alt={cat.name}
          className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-[250ms] ease-in-out group-hover:scale-[1.03]"
        />
      </div>
      
      {/* Clean white info area */}
      <div className="bg-white pt-3 pb-1 text-center shrink-0">
        <span className="font-serif text-[13px] font-bold text-[#2D0B0C] group-hover:text-[#163728] transition-colors duration-[250ms] ease-in-out uppercase tracking-wider block">
          {cat.name}
        </span>
      </div>
    </Link>
  );
}
