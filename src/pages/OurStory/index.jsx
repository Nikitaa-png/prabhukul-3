import React from 'react';
import SEO from '../../components/common/SEO';
import bgImg from '../../assets/images/WhatsApp Image 2026-07-14 at 03.25.12.jpeg';
import heritageImg from '../../assets/images/hero-slide-5.jpg';
import { Calendar, Compass, Wind } from 'lucide-react';

const historyTimeline = [
  {
    year: '1985',
    title: 'Inception in Hathras',
    desc: 'Prabhukul was founded in Hathras, Uttar Pradesh — the culinary capital of asafoetida. We started as a small, family-owned unit with a single objective: to source the highest quality raw crystals and process them traditional-style.'
  },
  {
    year: '1998',
    title: 'Expanding Compounding Mastery',
    desc: 'After years of honing our craft, we introduced specialized compounding methods using traditional wheat and rice flour bases. This made our hing easier to measure and temper in domestic kitchens without losing its strong aroma.'
  },
  {
    year: '2012',
    title: 'ISO Certification and Quality Standardization',
    desc: 'We standard-certified our production facilities under ISO 9001:2015. We introduced batch testing laboratories to verify moisture, purity levels, and volatile oil content for every pack.'
  },
  {
    year: '2020',
    title: 'National Distribution & Premium Lines',
    desc: 'Prabhukul launched its flagship premium products (including Pure Hing Matki and Ideal Compound Hing) online, expanding delivery pan-India. Today, over 5,000 households and restaurants trust Prabhukul for their daily spices.'
  }
];

export default function OurStory() {
  return (
    <>
      <SEO 
        title="Our Story – 40 Years of Sourcing Premium Hing" 
        description="Learn the history and journey of Prabhukul, from our founding in Hathras in 1985 to becoming a trusted national brand." 
      />
      <div 
        className="w-full min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0]"
        style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="max-w-4xl mx-auto bg-white/95 border border-[#D4A64A]/30 p-8 sm:p-12 shadow-xl rounded-sm space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center text-[#C8922A]">
              <Compass className="w-8 h-8" />
            </div>
            <h1 
              className="font-serif text-4xl sm:text-5xl font-bold text-[#3E0F12] uppercase tracking-wide"
              style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
            >
              Our Story
            </h1>
            <p className="text-[#C8922A] text-xs uppercase tracking-[0.2em] font-semibold">The Journey of Prabhukul Spices</p>
            <div className="flex justify-center mt-2">
              <span className="text-[#D4A64A] text-lg">✦ ❖ ✦</span>
            </div>
          </div>

          {/* Section 1: Intro with image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-left">
              <h2 className="font-serif text-2xl font-bold text-[#163728]">Rooted in India's Hing Capital</h2>
              <p className="font-sans text-[13px] text-[#5C534E] leading-relaxed">
                Asafoetida is not native to India, yet Hathras has become the world center for its processing. Raw resin crystals are imported from high-altitude regions like Afghanistan and Iran, then crafted through traditional secrets into the spice we love.
              </p>
              <p className="font-sans text-[13px] text-[#5C534E] leading-relaxed">
                Our founders understood this legacy. We set out to bridge the gap between hard-to-find raw imports and standard grocery stores, maintaining absolute freshness.
              </p>
            </div>
            <div className="border border-[#D4A64A]/35 p-2 bg-[#FAF6F0]">
              <img src={heritageImg} alt="Hathras Heritage" className="w-full h-[220px] object-cover" />
            </div>
          </div>

          {/* Section 2: Timeline */}
          <div className="space-y-8">
            <h2 className="font-serif text-2xl font-bold text-[#3E0F12] text-center">Our Timeline</h2>
            <div className="space-y-6 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-[1px] before:bg-[#D4A64A]/40 pl-10 text-left">
              {historyTimeline.map((item) => (
                <div key={item.year} className="relative space-y-2">
                  {/* Timeline dot */}
                  <div className="absolute -left-[34px] top-1 w-5 h-5 rounded-full border-2 border-[#D4A64A] bg-white flex items-center justify-center">
                    <Calendar className="w-2.5 h-2.5 text-[#3E0F12]" />
                  </div>
                  <div className="bg-[#FAF6F0]/40 border border-[#D4A64A]/20 p-5 rounded-sm">
                    <span className="text-sm font-bold text-[#C8922A]">{item.year}</span>
                    <h3 className="font-serif text-[16px] font-bold text-[#2D0B0C] mt-0.5">{item.title}</h3>
                    <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed mt-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Section */}
          <div className="bg-[#163728] text-white p-8 rounded-sm text-center relative border border-[#E6B747]/45">
            <Wind className="w-8 h-8 text-[#E6B747] mx-auto mb-4 opacity-80" />
            <p className="font-serif text-[16px] italic leading-relaxed text-gray-200">
              "We preserve the purity of old Hathras traditions so that your kitchen can experience the true aroma of Vedic seasonings."
            </p>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#E6B747] mt-4">— The Prabhukul Family</p>
          </div>

        </div>
      </div>
    </>
  );
}
