import React from 'react';
import { Leaf } from 'lucide-react';
import { hingBenefits } from '../../data/homeData';

export default function HingBenefits() {
  return (
    <section className="w-full py-14" id="hing-benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: content */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#C8922A] font-medium mb-3">The Spice Science</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0B0C] mb-2 leading-tight">
              Benefits of Hing
            </h2>
            <div className="w-12 h-[2px]  mb-6" />

            <div className="space-y-4">
              {hingBenefits.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <div className="w-6 h-6 shrink-0 rounded-full bg-[#163728]/10 flex items-center justify-center mt-0.5">
                    <Leaf className="w-3 h-3 text-[#163728]" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-sans text-[13px] font-semibold text-[#2D0B0C]">{item.title}</p>
                    <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[10px] text-[#9E9087] italic border-l-2 border-[#D4A64A]/40 pl-3">
              Disclaimer: Hing has been used in traditional Ayurvedic practice for centuries. This content is informational only and not a substitute for professional medical advice.
            </p>
          </div>

          {/* Right: product visual */}
          <div className="lg:pt-8">
            <div className="aspect-square max-w-sm mx-auto lg:mx-0 overflow-hidden border border-[#D4A64A]/30">
              <img
                src="https://prabhukul.com/wp-content/uploads/2022/10/Hing24-600x744.jpg"
                alt="Prabhukul Pure Hing"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}



