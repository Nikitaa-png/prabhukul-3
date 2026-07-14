import React from 'react';
import SEO from '../../components/common/SEO';
import bgImg from '../../assets/images/WhatsApp Image 2026-07-14 at 03.25.12.jpeg';
import { whyChoose } from '../../data/homeData';
import { MapPin, BadgeCheck, Wind, Heart, Truck, Headphones } from 'lucide-react';

const iconMap = { MapPin, BadgeCheck, Wind, Heart, Truck, Headphones };

export default function WhyChooseUs() {
  return (
    <>
      <SEO 
        title="Why Choose Us – Prabhukul Quality and Shipping Standards" 
        description="Read about our Hathras pedigree, fast Pan-India shipping, organic packaging, and excellent customer service." 
      />
      <div 
        className="w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0]"
        style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="max-w-4xl mx-auto bg-white/95 border border-[#D4A64A]/30 p-8 sm:p-12 shadow-xl rounded-sm space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center text-[#3E0F12]">
              <Heart className="w-8 h-8" />
            </div>
            <h1 
              className="font-serif text-4xl sm:text-5xl font-bold text-[#3E0F12] uppercase tracking-wide"
              style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
            >
              Why Choose Prabhukul
            </h1>
            <p className="text-[#C8922A] text-xs uppercase tracking-[0.2em] font-semibold">Our Promises to You</p>
            <div className="flex justify-center mt-2">
              <span className="text-[#D4A64A] text-lg">✦ ❖ ✦</span>
            </div>
          </div>

          {/* Grid of All 6 Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {whyChoose.map((item) => {
              const Icon = iconMap[item.icon] || BadgeCheck;
              return (
                <div key={item.title} className="p-6 border border-[#D4A64A]/25 bg-[#FAF6F0]/50 space-y-3">
                  <div className="w-10 h-10 rounded-full bg-[#163728]/8 border border-[#163728]/15 flex items-center justify-center text-[#163728]">
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>
                  <h2 className="font-serif font-bold text-[18px] text-[#2D0B0C]">{item.title}</h2>
                  <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Customer Centricity and FAQ Preview */}
          <div className="border-t border-[#D4A64A]/20 pt-8 text-left space-y-4">
            <h2 className="font-serif text-2xl font-bold text-[#163728]">Unconditional Satisfaction Guarantee</h2>
            <p className="font-sans text-[13px] text-[#5C534E] leading-relaxed">
              We stand behind every single product that leaves our Hathras packaging house. If your purchase suffers from transit damage or does not meet your expectations in freshness or aroma, please contact our customer support team immediately. We provide free replacements and assistance for peace of mind.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}
