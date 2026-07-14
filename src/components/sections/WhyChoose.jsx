import React from 'react';
import { MapPin, BadgeCheck, Wind, Heart, Truck, Headphones } from 'lucide-react';
import { whyChoose } from '../../data/homeData';

const iconMap = { MapPin, BadgeCheck, Wind, Heart, Truck, Headphones };

export default function WhyChoose() {
  return (
    <section className="w-full bg-[#F5EDE0] py-14" id="why-choose">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C8922A] font-medium mb-2">Our Promise</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0B0C]">Why Choose Prabhukul</h2>
          <div className="mt-3 w-12 h-[2px]  mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChoose.map((item) => {
            const Icon = iconMap[item.icon] || BadgeCheck;
            return (
              <div
                key={item.title}
                className="flex gap-4 p-5 border border-[#D4A64A]/25  hover:border-[#D4A64A]/60 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 shrink-0 rounded-full bg-[#163728]/8 border border-[#163728]/15 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#163728]" strokeWidth={1.6} />
                </div>
                <div>
                  <h3 className="font-serif text-[15px] font-bold text-[#2D0B0C] mb-1">{item.title}</h3>
                  <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



