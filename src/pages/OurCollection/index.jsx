import React from 'react';
import SEO from '../../components/common/SEO';
import { products } from '../../data/catalog';
import bgImg from '../../assets/images/WhatsApp Image 2026-07-14 at 03.25.12.jpeg';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const collectionGroups = [
  {
    category: 'Hing',
    title: 'Compounded Hing Specialties',
    desc: 'Our signature compounded dela and chura (powdered) hing blends, sourced directly from raw crystals in Hathras. Perfect for day-to-day cooking, tempering, and slow-cooked curries.'
  },
  {
    category: 'Hing Dana',
    title: 'Pure Hing Dana (Resin)',
    desc: 'Concentrated crystals and granules of raw, unrefined asafoetida resin. Used for clinical ayurvedic preparations and extreme potency tempering.'
  },
  {
    category: 'Digestive',
    title: 'Ayurvedic Digestives & Churnas',
    desc: 'Tangy and flavorful digestives like Hingwati, Pudina Wati, and Anardana candies, formulated under traditional Ayurvedic texts to stimulate digestion and relieve bloating.'
  },
  {
    category: 'Tea',
    title: 'Assam Gardens Selection',
    desc: 'Bold Assamese tea blends infused with traditional aromatic warm cardamoms and ginger roots for the perfect cup of Masala Chai.'
  }
];

export default function OurCollection() {
  return (
    <>
      <SEO 
        title="Our Collection – Premium Compounded Spices & Botanicals" 
        description="Explore the full categorised collections of Hathras hing, digestive churnas, and premium Assamese tea by Prabhukul." 
      />
      <div 
        className="w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0]"
        style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Main Header */}
          <div className="text-center space-y-4">
            <h1 
              className="font-serif text-4xl sm:text-5xl font-bold text-[#3E0F12] uppercase tracking-wide"
              style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
            >
              Our Collections
            </h1>
            <p className="font-sans text-[13px] text-[#5C534E] max-w-xl mx-auto leading-relaxed">
              Carefully curated culinary and wellness selections. Every category reflects our family promise of absolute purity.
            </p>
            <div className="flex justify-center mt-2">
              <span className="text-[#D4A64A] text-lg">✦ ❖ ✦</span>
            </div>
          </div>

          {/* Grouped lists */}
          {collectionGroups.map((group) => {
            const groupProducts = products.filter(p => p.category === group.category);
            return (
              <div key={group.category} className="space-y-6 border-b border-[#D4A64A]/25 pb-12 last:border-b-0 text-left">
                {/* Group Title and Info */}
                <div className="space-y-2 max-w-3xl">
                  <h2 className="font-serif text-2xl font-bold text-[#163728]">{group.title}</h2>
                  <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed">{group.desc}</p>
                </div>

                {/* Products grid for this group */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {groupProducts.map((product) => {
                    const stars = Math.round(product.rating);
                    const weight = product.title.match(/\d+\s*[gG]m?/)?.[0] ?? 'Standard';

                    return (
                      <div key={product.id} className="group flex flex-col bg-white border border-[#E8DDD0] hover:shadow-lg transition-all duration-300">
                        <div className="relative overflow-hidden bg-[#FAF6F0] aspect-[4/5] flex items-center justify-center p-6">
                          <Link to={`/product/${product.id}`} className="w-full h-full flex items-center justify-center">
                            <img
                              src={product.image}
                              alt={product.title}
                              className="max-h-[160px] max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
                            />
                          </Link>
                          <button
                            aria-label="Add to wishlist"
                            className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white border border-[#E8DDD0] flex items-center justify-center hover:border-[#3E0F12] transition-all"
                          >
                            <Heart className="w-3.5 h-3.5 text-[#5C534E]" />
                          </button>
                        </div>
                        <div className="flex flex-col flex-1 p-4 gap-2 text-left">
                          <Link to={`/product/${product.id}`}>
                            <p className="font-sans text-[13px] font-semibold text-[#2D0B0C] leading-snug line-clamp-2 hover:text-[#3E0F12] transition-colors">
                              {product.title}
                            </p>
                          </Link>
                          <p className="text-[11px] text-[#9E9087]">{weight}</p>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${i < stars ? 'text-[#E6B747] fill-[#E6B747]' : 'text-gray-300 fill-gray-200'}`}
                              />
                            ))}
                            <span className="text-[10px] text-[#5C534E] ml-1">({product.rating})</span>
                          </div>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-[16px] font-bold text-[#2D0B0C]">₹{product.price}.00</span>
                          </div>
                          <button className="w-full flex items-center justify-center gap-2 bg-[#163728] text-white text-[10px] font-bold tracking-widest uppercase py-2.5 hover:bg-[#0C1C12] transition-colors mt-auto">
                            <ShoppingCart className="w-3.5 h-3.5" /> Add to Cart
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </>
  );
}
