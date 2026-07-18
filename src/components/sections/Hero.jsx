import React from 'react';
import { Play } from 'lucide-react';
import heroBannerImg from '../../assets/images/WhatsApp Image 2026-07-14 at 02.14.07.jpeg';

export default function Hero() {
  return (
    <section id="hero-section" className="w-full bg-[#F8F3EA]">

      {/* ── DESKTOP (lg+) ─────────────────────────────────────────── */}
      <div className="hidden lg:block w-full relative">

        {/* Banner — full width, natural aspect ratio, never cropped */}
        <img
          src={heroBannerImg}
          alt="Prabhukul Hing banner"
          className="block w-full h-auto select-none pointer-events-none"
        />

        {/* Overlay — sits on top, covers left ~35% */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-[35%] h-full flex items-center pl-[5%] pr-4">
            <div className="space-y-6 w-full">

              {/* Heading */}
              <h1
                className="font-serif text-[clamp(2rem,3.2vw,3.25rem)] font-bold text-[#2D0B0C] leading-[1.12] tracking-tight"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
              >
                Pure Taste.<br />Timeless Tradition.
              </h1>

              {/* Description */}
              <p
                className="text-[clamp(0.78rem,1.05vw,1rem)] text-[#5C534E] leading-relaxed max-w-sm"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Prabhukul brings you the finest quality asafoetida and spices,
                crafted with care and trusted for generations.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="/shop"
                  className=" text-white text-[11px] font-semibold tracking-widest uppercase px-7 py-3 hover:bg-[#0C1C12]/90 transition-all"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Shop Now
                </a>
                <a
                  href="/about"
                  className="border border-[#5C534E]/40 text-[#2D0B0C] text-[11px] font-semibold tracking-widest uppercase px-5 py-3 flex items-center gap-2 hover:border-[#5C534E]/70 transition-all"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  Our Story
                  <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0">
                    <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                  </span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE / TABLET (below lg) ────────────────────────────── */}
      <div className="lg:hidden flex flex-col w-full">

        {/* Text block */}
        <div className="px-5 pt-10 pb-6 space-y-5">
          <h1
            className="font-serif text-[2rem] sm:text-[2.4rem] font-bold text-[#2D0B0C] leading-[1.12] tracking-tight"
            style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
          >
            Pure Taste.<br />Timeless Tradition.
          </h1>
          <p
            className="text-sm text-[#5C534E] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Prabhukul brings you the finest quality asafoetida and spices,
            crafted with care and trusted for generations.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/shop"
              className=" text-white text-[11px] font-semibold tracking-widest uppercase px-6 py-3 hover:bg-[#0C1C12]/90 transition-all"
            >
              Shop Now
            </a>
            <a
              href="/about"
              className="border border-[#5C534E]/40 text-[#2D0B0C] text-[11px] font-semibold tracking-widest uppercase px-4 py-3 flex items-center gap-2 hover:border-[#5C534E]/70 transition-all"
            >
              Our Story
              <span className="w-4 h-4 rounded-full border border-current flex items-center justify-center shrink-0">
                <Play className="w-2 h-2 fill-current ml-0.5" />
              </span>
            </a>
          </div>
        </div>

        {/* Banner image */}
        <img
          src={heroBannerImg}
          alt="Prabhukul Hing banner"
          className="w-full h-auto select-none pointer-events-none"
        />

      </div>

    </section>
  );
}

