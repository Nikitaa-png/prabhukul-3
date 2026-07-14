import React from 'react';
import { Leaf } from 'lucide-react';
import { hingBenefits } from '../../data/homeData';

export default function HingBenefits() {
  return (
    <section className="w-full py-14" id="hing-benefits">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Content */}
        <div className="text-center md:text-left">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C8922A] font-medium mb-3">The Spice Science</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0B0C] mb-2 leading-tight">
            Benefits of Hing
          </h2>
          <div className="w-12 h-[2px] bg-[#D4A64A]/30 mx-auto md:mx-0 mb-6" />

          <div className="space-y-5 text-left">
            {hingBenefits.map((item) => (
              <div key={item.title} className="flex gap-3 items-start">
                <div className="w-6 h-6 shrink-0 rounded-full bg-[#163728]/10 flex items-center justify-center mt-0.5">
                  <Leaf className="w-3.5 h-3.5 text-[#163728]" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-sans text-[13px] font-semibold text-[#2D0B0C]">{item.title}</p>
                  <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-[10px] text-[#9E9087] italic border-l-2 border-[#D4A64A]/40 pl-3">
            Disclaimer: Hing has been used in traditional Ayurvedic practice for centuries. This content is informational only and not a substitute for professional medical advice.
          </p>
        </div>

      </div>
    </section>
  );
}
