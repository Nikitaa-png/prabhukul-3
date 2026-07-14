import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, ShieldCheck, Wind, Users } from 'lucide-react';
import heritageImg from '../../assets/images/hero-slide-5.jpg';
import bgImg from '../../assets/images/WhatsApp Image 2026-07-14 at 03.25.12.jpeg';
import productImg from '../../assets/images/WhatsApp Image 2026-07-14 at 03.43.45.jpeg';
import teaImg from '../../assets/images/WhatsApp Image 2026-07-14 at 12.22.07.jpeg';

const trustPillars = [
  { icon: Leaf,        label: '100% Pure',        sub: 'No Additives' },
  { icon: Users,       label: 'Trusted by',        sub: 'Millions' },
  { icon: Wind,        label: 'Strong Aroma',      sub: 'Great Taste' },
  { icon: ShieldCheck, label: 'Quality You Can',   sub: 'Trust Every Time' },
];

const journey = [
  {
    icon: Leaf,
    title: '1985 – The Beginning',
    desc: 'Our journey began in Hathras with a simple promise – to offer pure, authentic and high quality hing.',
  },
  {
    icon: Wind,
    title: 'Crafted with Care',
    desc: 'Using traditional methods and the finest ingredients to preserve its natural aroma and flavour.',
  },
  {
    icon: ShieldCheck,
    title: 'Trusted for Generations',
    desc: 'From our family to yours – a legacy of purity, passed down and perfected over the years.',
  },
];

export default function BrandStory() {
  return (
    <section className="w-full" id="brand-story" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

      {/* ── ROW 1: About Us ──────────────────────────────────── */}
      <div className="w-full py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left */}
            <div className="space-y-6">
              {/* Label */}
              <div className="flex items-center gap-2">
                <span className="text-[#C8922A] text-sm">✦</span>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#C8922A] font-semibold">About Prabhukul</p>
                <span className="text-[#C8922A] text-sm">✦</span>
              </div>

              {/* Heading */}
              <h2
                className="font-serif text-4xl sm:text-5xl font-bold leading-[1.1]"
                style={{ fontFamily: "'Playfair Display','Cormorant Garamond',serif" }}
              >
                <span className="text-[#163728]">Rooted in Tradition.</span><br />
                <span className="text-[#3E0F12]">Committed to Purity.</span>
              </h2>
              <div className="flex items-center gap-2">
                <div className="w-8 h-[1px] bg-[#D4A64A]" />
                <span className="text-[#D4A64A]">❖</span>
                <div className="w-8 h-[1px] bg-[#D4A64A]" />
              </div>

              {/* Body */}
              <p className="font-sans text-[13px] text-[#5C534E] leading-relaxed max-w-md">
                Since 1985, Prabhukul has been a name synonymous with pure and authentic asafoetida. Born in the heart of Hathras (U.P.) – the global hub of hing – we have dedicated our journey to delivering uncompromised quality, unmatched aroma and natural goodness in every pack.
              </p>

              {/* Trust pillars strip */}
              <div className="grid grid-cols-4 gap-3 bg-[#163728] px-4 py-4">
                {trustPillars.map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex flex-col items-center text-center gap-1.5">
                    <div className="w-8 h-8 rounded-full border border-[#E6B747]/40 flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5 text-[#E6B747]" strokeWidth={1.6} />
                    </div>
                    <p className="text-[10px] font-bold text-white leading-tight">{label}</p>
                    <p className="text-[9px] text-gray-300 leading-tight">{sub}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: product image */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Pure & Authentic badge */}
              <div className="absolute top-4 right-4 z-10 w-20 h-20 rounded-full bg-[#3E0F12] border-2 border-[#E6B747] flex flex-col items-center justify-center text-center shadow-lg">
                <p className="text-[7px] text-[#E6B747] font-bold uppercase tracking-wide leading-tight">Pure &<br />Authentic</p>
                <p className="text-[11px] text-white font-bold uppercase leading-tight">HING</p>
                <p className="text-[7px] text-[#E6B747] uppercase tracking-wide">Since 1985</p>
              </div>
              <img
                src={productImg}
                alt="Prabhukul Hing Products"
                className="w-full max-w-lg max-h-[420px] object-contain"
              />
            </div>

          </div>
        </div>
      </div>

      {/* ── ROW 2: Journey + Quote ────────────────────────────── */}
      <div className="w-full border-t border-[#D4A64A]/20 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

            {/* Col 1: Tea product image */}
            <div className="overflow-hidden shadow-md">
              <img
                src={teaImg}
                alt="Prabhukul Premium Tea"
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Col 2: Journey steps */}
            <div className="space-y-6">
              {journey.map(({ icon: Icon, title, desc }, i) => (
                <div key={title} className="flex gap-4 items-start relative">
                  <div className="flex flex-col items-center">
                    <div className="w-9 h-9 rounded-full border-2 border-[#D4A64A]/50 bg-[#FAF6F0] flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#163728]" strokeWidth={1.6} />
                    </div>
                    {i < journey.length - 1 && (
                      <div className="w-[1px] h-6 bg-[#D4A64A]/30 mt-1" />
                    )}
                  </div>
                  <div>
                    <p className="font-sans text-[13px] font-bold text-[#2D0B0C]">{title}</p>
                    <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Col 3: Quote + heritage image */}
            <div className="space-y-4">
              <div className="bg-white/80 border border-[#D4A64A]/30 p-5 shadow-sm">
                <p className="text-[#D4A64A] text-3xl font-serif leading-none mb-2">"</p>
                <p className="font-sans text-[13px] text-[#5C534E] leading-relaxed italic">
                  Prabhukul Hing is not just an ingredient, it's an emotion of trust, purity and tradition in every meal.
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="w-6 h-[1px] bg-[#D4A64A]" />
                  <span className="text-[#D4A64A] text-xs">❖</span>
                  <div className="w-6 h-[1px] bg-[#D4A64A]" />
                </div>
                <p className="text-[11px] font-semibold text-[#2D0B0C] mt-2">– The Prabhukul Family</p>
              </div>

              <div className="overflow-hidden shadow-sm">
                <img
                  src={heritageImg}
                  alt="Heritage of Hathras"
                  className="w-full h-[130px] object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Bottom tagline strip ──────────────────────────────── */}
      <div className="w-full bg-[#163728] py-4">
        <div className="max-w-7xl mx-auto px-4 text-center flex items-center justify-center gap-3">
          <span className="text-[#E6B747] text-sm">✦</span>
          <p className="text-[11px] sm:text-[13px] font-bold uppercase tracking-[0.3em] text-[#E6B747]">
            Prabhukul – Shuddhta Ki Pehchaan, Swaad Ka Mastaan !
          </p>
          <span className="text-[#E6B747] text-sm">✦</span>
        </div>
      </div>

    </section>
  );
}
