import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import heritageImg from '../../assets/images/hero-slide-5.jpg';

export default function OurStoryPreview() {
  return (
    <section className="w-full bg-[#F5EDE0] py-16 border-t border-[#D4A64A]/25" id="our-journey-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <span className="text-[#C8922A] text-sm">✦</span>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#C8922A] font-semibold">Our Journey</p>
              <span className="text-[#C8922A] text-sm">✦</span>
            </div>

            <h2 
              className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0B0C] text-center lg:text-left"
              style={{ fontFamily: "'Playfair Display','Cormorant Garamond',serif" }}
            >
              A Legacy Crafted Over Generations
            </h2>
            <div className="w-12 h-[1px] bg-[#D4A64A] mx-auto lg:mx-0" />

            <p className="font-sans text-[13px] text-[#5C534E] leading-relaxed text-center lg:text-left">
              Every pinch of Prabhukul Hing tells a story of dedication, starting in the historic town of Hathras. For over 40 years, we have preserved traditional processing methods to deliver the finest aroma and unmatched purity to kitchens across India.
            </p>

            {/* Quick Timeline Preview (20-30% of content) */}
            <div className="flex gap-4 p-4 border border-[#D4A64A]/30 bg-white/50">
              <div className="w-10 h-10 rounded-full border border-[#D4A64A]/40 flex items-center justify-center shrink-0 bg-[#FAF6F0]">
                <Calendar className="w-4 h-4 text-[#163728]" />
              </div>
              <div className="text-left">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#2D0B0C]">1985 – The Humble Beginning</h3>
                <p className="text-[11px] text-[#5C534E] mt-0.5 leading-relaxed">
                  Our family began sourcing raw asafoetida with one focus: uncompromised quality.
                </p>
              </div>
            </div>

            <div className="pt-2 text-center lg:text-left">
              <Link 
                to="/our-story"
                className="inline-flex items-center gap-2 border border-[#2D0B0C] text-[#2D0B0C] text-[11px] font-semibold tracking-widest uppercase px-6 py-3 hover:bg-[#2D0B0C] hover:text-white transition-all"
              >
                Read Our Story <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Image Block */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="border border-[#D4A64A]/35 p-3 bg-white/80 shadow-md w-full max-w-md">
              <img 
                src={heritageImg} 
                alt="Our Heritage in Hathras" 
                className="w-full h-[260px] object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#3E0F12] text-white p-4 shadow-lg border border-[#E6B747]/40 max-w-[180px] hidden sm:block text-left">
              <p className="text-[9px] uppercase tracking-wider text-[#E6B747]">Founder's Philosophy</p>
              <p className="text-[11px] italic mt-1 font-serif text-gray-200">"Purity is not standard; it is our promise."</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
