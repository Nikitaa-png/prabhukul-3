import React from 'react';
import { Award, ShieldCheck, Users, Truck, Sparkles } from 'lucide-react';

export default function TrustStatsStrip() {
  const stats = [
    {
      value: '40+',
      label: 'Years of Legacy',
      icon: Award
    },
    {
      value: '100%',
      label: 'Pure & Natural',
      icon: Sparkles
    },
    {
      value: '5000+',
      label: 'Happy Customers',
      icon: Users
    },
    {
      value: 'Pan India',
      label: 'Delivery',
      icon: Truck
    },
    {
      value: 'ISO 9001:2015',
      label: 'Certified Quality',
      icon: ShieldCheck
    }
  ];

  return (
    <section className="w-full bg-[#3E0F12] text-white py-6 border-y-2 border-[#E6B747] relative overflow-hidden" id="trust-stats-strip">
      {/* Decorative subtle visual accent lines */}
      <div className="absolute inset-x-0 top-0.5 h-[1px] bg-[#E6B747]/30" />
      <div className="absolute inset-x-0 bottom-0.5 h-[1px] bg-[#E6B747]/30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#E6B747]/20">
          {stats.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.label} 
                className={`flex flex-col sm:flex-row items-center justify-center text-center sm:text-left gap-3 px-3 ${
                  index >= 2 ? 'pt-4 md:pt-0' : ''
                } ${index === 1 ? 'pt-4 sm:pt-0' : ''}`}
              >
                {/* Gold Circle Icon Container */}
                <div className="w-10 h-10 rounded-full border border-[#E6B747]/50 flex items-center justify-center bg-[#E6B747]/10 shrink-0 shadow-sm">
                  <Icon className="w-5 h-5 text-[#E6B747]" strokeWidth={1.5} />
                </div>
                
                {/* Stats Info */}
                <div className="flex flex-col">
                  <span className="font-serif text-lg md:text-xl font-bold text-[#E6B747] tracking-wide leading-tight">
                    {item.value}
                  </span>
                  <span className="font-sans text-[10px] md:text-[11px] uppercase tracking-widest text-gray-300 font-medium leading-tight mt-0.5">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

