import React from 'react';
import { CheckCircle } from 'lucide-react';
import { qualityPoints } from '../../data/homeData';
import bgImg from '../../assets/images/WhatsApp Image 2026-07-14 at 03.25.12.jpeg';

export default function IngredientsQuality() {
  return (
    <section className="w-full py-14" id="ingredients-quality" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C8922A] font-medium mb-2">Purity First</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0B0C]">Ingredients & Quality</h2>
          <div className="mt-3 w-12 h-[2px]  mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left: image collage */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { src: 'https://prabhukul.com/wp-content/uploads/2022/10/Hing39-600x744.jpg', alt: 'Raw Hing' },
              { src: 'https://prabhukul.com/wp-content/uploads/2022/10/Hing24-600x744.jpg', alt: 'Hing Matki' },
              { src: 'https://prabhukul.com/wp-content/uploads/2023/05/Hing13-600x744.jpg', alt: 'Compound Hing' },
              { src: 'https://prabhukul.com/wp-content/uploads/2023/05/compound4-600x744.jpg', alt: 'Hing Packaging' },
            ].map((img) => (
              <div key={img.alt} className="aspect-square overflow-hidden border border-[#D4A64A]/20">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            ))}
          </div>

          {/* Right: quality points */}
          <div className="space-y-5">
            <p className="font-sans text-[14px] text-[#5C534E] leading-relaxed">
              Every Prabhukul product starts with raw <strong className="text-[#2D0B0C]">Ferula asafoetida resin</strong> sourced directly from Hathras — India's premier hing belt. We don't cut corners at any stage.
            </p>

            <div className="space-y-4">
              {qualityPoints.map((point) => (
                <div key={point.title} className="flex gap-3 p-4  border border-[#D4A64A]/20">
                  <CheckCircle className="w-5 h-5 text-[#163728] shrink-0 mt-0.5" strokeWidth={1.8} />
                  <div>
                    <p className="font-sans text-[13px] font-semibold text-[#2D0B0C]">{point.title}</p>
                    <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed">{point.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

