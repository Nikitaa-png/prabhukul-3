import React, { useState } from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { certifications } from '../../data/homeData';
import bgImg from '../../assets/images/WhatsApp Image 2026-07-14 at 03.25.12.jpeg';

export default function Certifications() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="w-full py-14" id="certifications" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C8922A] font-medium mb-2">Our Credentials</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0B0C]">Certifications & Trust</h2>
          <div className="mt-3 w-12 h-[2px]  mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {certifications.map((cert) => (
            <button
              key={cert.id}
              onClick={() => setLightbox(cert)}
              className="flex flex-col items-center gap-3 p-8 border border-[#D4A64A]/30  hover:border-[#D4A64A]/70 hover:shadow-md transition-all text-center group"
            >
              <div className="w-14 h-14 rounded-full bg-[#3E0F12]/8 border border-[#D4A64A]/40 flex items-center justify-center group-hover:bg-[#3E0F12]/15 transition-colors">
                <ShieldCheck className="w-7 h-7 text-[#3E0F12]" strokeWidth={1.5} />
              </div>
              <div>
                <p className="font-serif text-[15px] font-bold text-[#2D0B0C]">{cert.title}</p>
                <p className="text-[11px] text-[#5C534E] mt-1">{cert.desc}</p>
              </div>
              {cert.placeholder && (
                <span className="text-[9px] text-[#9E9087] italic">Click to view certificate</span>
              )}
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <div
              className=" max-w-md w-full p-8 relative text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 text-[#5C534E] hover:text-[#2D0B0C]"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <ShieldCheck className="w-12 h-12 text-[#3E0F12] mx-auto mb-4" strokeWidth={1.4} />
              <h3 className="font-serif text-xl font-bold text-[#2D0B0C] mb-2">{lightbox.title}</h3>
              <p className="text-[13px] text-[#5C534E]">{lightbox.desc}</p>
              <p className="mt-4 text-[11px] text-[#9E9087] italic">
                Certificate image coming soon. Please contact us for verification.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

