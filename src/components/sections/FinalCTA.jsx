import React from 'react';
import { Link } from 'react-router-dom';
import { finalCTA } from '../../data/homeData';

export default function FinalCTA() {
  return (
    <section className="w-full bg-[#3E0F12] py-16" id="final-cta">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div className="w-12 h-[1px] bg-[#E6B747]/60 mx-auto mb-6" />
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-[#FAF6F0] leading-tight mb-4">
          {finalCTA.heading}
        </h2>
        <p className="font-sans text-[13px] text-[#E8DDD0] leading-relaxed mb-8 max-w-lg mx-auto">
          {finalCTA.subtext}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to={finalCTA.primary.link}
            className="bg-[#E6B747] text-[#2D0B0C] text-[12px] font-bold tracking-widest uppercase px-9 py-3.5 hover:bg-[#D4A64A] transition-colors"
          >
            {finalCTA.primary.label}
          </Link>
          <Link
            to={finalCTA.secondary.link}
            className="border border-[#FAF6F0]/30 text-[#FAF6F0] text-[12px] font-semibold tracking-widest uppercase px-7 py-3.5 hover:border-[#FAF6F0]/65 hover:bg-[#FAF6F0]/10 transition-all"
          >
            {finalCTA.secondary.label}
          </Link>
        </div>
        <div className="w-12 h-[1px] bg-[#E6B747]/60 mx-auto mt-8" />
      </div>
    </section>
  );
}
