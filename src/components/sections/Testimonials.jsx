import React, { useState, useEffect } from 'react';
import { Star, Quote } from 'lucide-react';
import { getTestimonials, getBlocks } from '../../services/db';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [config, setConfig] = useState(null);

  useEffect(() => {
    setTestimonials(getTestimonials());
    setConfig(getBlocks().testimonials || { enabled: true, heading: 'Customer Reviews', subtitle: 'What Our Customers Say' });
  }, []);

  if (!config || !config.enabled) return null;
  return (
    <section className="w-full py-14 bg-[#F5EDE0] border-t border-[#D4A64A]/25" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C8922A] font-medium mb-2">{config.subtitle || 'What Our Customers Say'}</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0B0C]">{config.heading || 'Customer Testimonials'}</h2>
          <div className="mt-3 w-12 h-[2px]  mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="flex flex-col bg-white border border-[#D4A64A]/25 p-6 hover:shadow-md transition-shadow">
              <Quote className="w-6 h-6 text-[#D4A64A] mb-3" strokeWidth={1.5} />

              <p className="font-sans text-[13px] text-[#5C534E] leading-relaxed flex-1 italic">
                "{t.comment || t.quote}"
              </p>

              <div className="mt-5 pt-4 border-t border-[#D4A64A]/20 flex items-center justify-between">
                <div>
                  <p className="font-serif text-[14px] font-bold text-[#2D0B0C]">{t.name}</p>
                  {(t.role || t.location) && (
                    <p className="text-[11px] text-[#9E9087]">{t.role || t.location}</p>
                  )}
                </div>
                <div className="flex gap-0.5 text-[#E6B747]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < (t.rating || 5) ? 'fill-current' : 'text-gray-200'}`} />
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



