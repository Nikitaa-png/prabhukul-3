import React from 'react';
import { products } from '../../data/catalog';

/**
 * Continuous Loop Marquee Section:
 * - Displays signature collection pieces
 * - Soft transparent fade overlays on the edges
 * - Interactive hover scale-up
 */
const SignatureStrip = ({ onProductSelect }) => {
  const signatureProducts = [
    products.find(p => p.id === 1),  // Pure Hing Matki 10gm
    products.find(p => p.id === 10), // Prabhukul Hing 10gm
    products.find(p => p.id === 12), // Prabhukul Premium Hingwati 20gm
    products.find(p => p.id === 16), // Prabhukul Select Compound Hing 50gm
  ].filter(Boolean).map(p => ({
    id: p.id,
    name: p.title,
    image: p.image,
    realCatalogId: p.id
  }));

  // Repeat products to create a seamless scrolling marquee
  const marqueeItems = [...signatureProducts, ...signatureProducts, ...signatureProducts, ...signatureProducts];

  return (
    <div className="relative z-10 w-full bg-brand-cream border-y border-brand-sage/20 py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-3.5 flex items-center justify-between text-brand-text">
        <span className="font-body text-[10px] tracking-[0.25em] uppercase text-brand-green font-bold">
          Signature Selection
        </span>
        <span className="font-body text-[10px] tracking-[0.25em] uppercase text-[#D4A64A] hidden sm:block font-bold">
          Three Generations of Purity
        </span>
      </div>

      {/* Marquee Loop */}
      <div className="w-full overflow-hidden relative">
        {/* Transparent edge gradient masks */}
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#163728] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#163728] to-transparent z-10 pointer-events-none" />
        
        <div className="animate-marquee flex gap-8">
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="flex items-center space-x-4 bg-brand-bg px-5 py-3 border border-brand-sage/30 hover:border-[#D4A64A]/30 transition-colors duration-300 min-w-[280px] sm:min-w-[320px] group cursor-pointer"
              onClick={() => onProductSelect && onProductSelect(item.realCatalogId)}
            >
              {/* Product Thumbnail */}
              <div className="w-14 h-14  overflow-hidden flex-shrink-0 shadow-sm border border-brand-sage/10">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              {/* Product details */}
              <div className="flex flex-col text-left">
                <h4 className="font-heading text-sm text-brand-text font-medium tracking-wide">
                  {item.name}
                </h4>
                <span className="font-body text-[9px] tracking-widest text-brand-green uppercase mt-1 group-hover:text-brand-green-hover transition-colors duration-300 font-bold">
                  Shop Now ➔
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignatureStrip;

