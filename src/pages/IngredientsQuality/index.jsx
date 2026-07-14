import React from 'react';
import SEO from '../../components/common/SEO';
import bgImg from '../../assets/images/WhatsApp Image 2026-07-14 at 03.25.12.jpeg';
import { qualityPoints, processSteps } from '../../data/homeData';
import { CheckCircle, ShieldCheck, Info, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function IngredientsQualityPage() {
  return (
    <>
      <SEO 
        title="Ingredients & Quality – Sourcing and Laboratory Standards" 
        description="Read about our sourcing of raw Ferula resin, laboratory grading, quality certifications, and hygienic packaging at Prabhukul." 
      />
      <div 
        className="w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0]"
        style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="max-w-4xl mx-auto bg-white/95 border border-[#D4A64A]/30 p-8 sm:p-12 shadow-xl rounded-sm space-y-12">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center text-[#163728]">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h1 
              className="font-serif text-4xl sm:text-5xl font-bold text-[#3E0F12] uppercase tracking-wide"
              style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
            >
              Ingredients & Quality
            </h1>
            <p className="text-[#C8922A] text-xs uppercase tracking-[0.2em] font-semibold">ISO 9001:2015 Certified Sourcing & Compounding</p>
            <div className="flex justify-center mt-2">
              <span className="text-[#D4A64A] text-lg">✦ ❖ ✦</span>
            </div>
          </div>

          {/* Sourcing Introduction */}
          <div className="space-y-4 text-left">
            <h2 className="font-serif text-2xl font-bold text-[#163728]">How We Source Raw Resin</h2>
            <p className="font-sans text-[13px] text-[#5C534E] leading-relaxed">
              True asafoetida starts as a milky sap harvested from the roots of wild Ferula plants native to high-altitude deserts. These raw crystals are solid, extremely aromatic, and naturally loaded with essential volatile oils. 
            </p>
            <p className="font-sans text-[13px] text-[#5C534E] leading-relaxed">
              At Prabhukul, we source our raw resin directly from selected agricultural growers. Each batch undergoes moisture-checking and sorting to remove sand, twigs, or standard impurities. We import only the finest grade resin for processing in Hathras, UP.
            </p>
          </div>

          {/* Quality Grid (4 key points) */}
          <div className="space-y-6 text-left">
            <h2 className="font-serif text-2xl font-bold text-[#3E0F12]">Our Quality Standards</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {qualityPoints.map((point) => (
                <div key={point.title} className="flex gap-3 p-4 border border-[#D4A64A]/25 bg-[#FAF6F0]/50 rounded-sm">
                  <CheckCircle className="w-5 h-5 text-[#163728] shrink-0 mt-0.5" strokeWidth={1.8} />
                  <div>
                    <h3 className="font-sans text-[13px] font-bold text-[#2D0B0C]">{point.title}</h3>
                    <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed mt-1">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Manufacturing Process */}
          <div className="space-y-8 text-left border-t border-[#D4A64A]/20 pt-8">
            <h2 className="font-serif text-2xl font-bold text-[#163728]">Our Processing Method</h2>
            <div className="space-y-6">
              {processSteps.map((step) => (
                <div key={step.step} className="flex gap-4 items-start bg-white p-4 border border-[#D4A64A]/20 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#163728] text-white flex items-center justify-center shrink-0 font-serif font-bold text-[14px]">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="font-serif text-[15px] font-bold text-[#2D0B0C]">{step.title}</h3>
                    <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Redirect */}
          <div className="bg-[#FAF6F0] p-6 border border-[#D4A64A]/30 text-center rounded-sm space-y-4">
            <div className="flex justify-center text-[#C8922A]">
              <Info className="w-6 h-6" />
            </div>
            <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed">
              Have questions about how to store your hing, or whether our products contain gluten? Visit our FAQ section for complete storage and usage advice.
            </p>
            <Link 
              to="/faq"
              className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#3E0F12] hover:text-[#C8922A] transition-colors"
            >
              Go to FAQs <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
