import React from 'react';
import { Leaf } from 'lucide-react';
import { hingBenefits } from '../../data/homeData';
import benefitsImg from '../../assets/images/uploaded-hing-compound-benefits.jpg';

export default function HingBenefits() {
  return (
    <section className="w-full py-16" id="hing-benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Benefits Content */}
          <div className="space-y-6 text-left">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#C8922A] font-bold mb-2">The Spice Science</p>
              <h2 
                className="font-serif text-3xl sm:text-4xl font-bold text-[#3E0F12] uppercase tracking-wide"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
              >
                Benefits of Hing
              </h2>
              <div className="mt-3 w-16 h-[2px] bg-[#D4A64A]" />
            </div>

            <div className="space-y-4">
              {hingBenefits.map((item) => (
                <div 
                  key={item.title} 
                  className="flex gap-4 p-4 bg-white/70 border border-[#D4A64A]/20 rounded-sm hover:shadow-sm transition-all"
                >
                  <div className="w-8 h-8 shrink-0 rounded-full bg-[#163728]/10 flex items-center justify-center mt-0.5">
                    <Leaf className="w-4 h-4 text-[#163728]" strokeWidth={1.8} />
                  </div>
                  <div>
                    <p className="font-sans text-[13px] font-semibold text-[#2D0B0C]">{item.title}</p>
                    <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[10px] text-[#9E9087] italic border-l-2 border-[#D4A64A]/40 pl-3">
              Disclaimer: Hing has been used in traditional Ayurvedic practice for centuries. This content is informational only and not a substitute for professional medical advice.
            </p>
          </div>

          {/* Right Column: Premium Image Frame */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative border border-[#D4A64A]/30 p-2.5 bg-white shadow-md rounded-sm max-w-md w-full overflow-hidden group">
              <img
                src={benefitsImg}
                alt="Prabhukul Ideal Hing Compound Benefits"
                className="w-full h-auto object-cover rounded-sm group-hover:scale-101 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#3E0F12]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
