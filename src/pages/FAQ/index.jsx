import React, { useState } from 'react';
import SEO from '../../components/common/SEO';
import { faqs } from '../../data/homeData';
import bgImg from '../../assets/images/WhatsApp Image 2026-07-14 at 03.25.12.jpeg';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SEO 
        title="Frequently Asked Questions – Sourcing, Quality, Shipping FAQs" 
        description="Get detailed answers to commonly asked questions about Prabhukul hing compounding, gluten content, wholesale orders, and delivery." 
      />
      <div 
        className="w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0]"
        style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="max-w-3xl mx-auto bg-white/95 border border-[#D4A64A]/30 p-8 sm:p-12 shadow-xl rounded-sm space-y-10">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center text-[#3E0F12]">
              <HelpCircle className="w-8 h-8" />
            </div>
            <h1 
              className="font-serif text-4xl sm:text-5xl font-bold text-[#3E0F12] uppercase tracking-wide"
              style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
            >
              Frequently Asked Questions
            </h1>
            <p className="font-sans text-[13px] text-[#5C534E] max-w-xl mx-auto leading-relaxed">
              Find detailed explanations regarding pure vs compound hing, allergy concerns, storage recommendations, and orders.
            </p>
            <div className="flex justify-center mt-2">
              <span className="text-[#D4A64A] text-lg">✦ ❖ ✦</span>
            </div>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4 text-left">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className="border border-[#D4A64A]/25 rounded-sm overflow-hidden bg-white/70 hover:border-[#D4A64A]/60 transition-colors"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-sans text-[13px] sm:text-[14px] font-semibold text-[#2D0B0C]">
                      {faq.q}
                    </span>
                    <span className="text-[#C8922A] shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 border-t border-[#D4A64A]/10 bg-[#FAF6F0]/20">
                      <p className="font-sans text-[12px] sm:text-[13px] text-[#5C534E] leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </>
  );
}
