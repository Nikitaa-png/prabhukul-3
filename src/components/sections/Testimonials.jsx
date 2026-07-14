import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/homeData';

export default function Testimonials() {
  return (
    <section className="w-full py-14" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C8922A] font-medium mb-2">What Our Customers Say</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0B0C]">Customer Testimonials</h2>
          <div className="mt-3 w-12 h-[2px]  mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col  border border-[#D4A64A]/25 p-6 hover:shadow-md transition-shadow">
              <Quote className="w-6 h-6 text-[#D4A64A] mb-3" strokeWidth={1.5} />

              <p className="font-sans text-[13px] text-[#5C534E] leading-relaxed flex-1 italic">
                "{t.quote}"
              </p>

              <div className="mt-5 pt-4 border-t border-[#D4A64A]/20 flex items-center justify-between">
                <div>
                  <p className="font-serif text-[14px] font-bold text-[#2D0B0C]">{t.name}</p>
                  {t.location && (
                    <p className="text-[11px] text-[#9E9087]">{t.location}</p>
                  )}
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-[#E6B747] fill-[#E6B747]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



