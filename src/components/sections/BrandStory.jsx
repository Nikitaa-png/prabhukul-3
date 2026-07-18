import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, ShieldCheck, Wind, Users } from 'lucide-react';
import productImg from '../../assets/images/about-hing-2.jpg';
import { getBlocks, getAboutContent } from '../../services/db';

const trustPillars = [
  { icon: Leaf,        label: '100% Pure',        sub: 'No Additives' },
  { icon: Users,       label: 'Trusted by',        sub: 'Millions' },
  { icon: Wind,        label: 'Strong Aroma',      sub: 'Great Taste' },
  { icon: ShieldCheck, label: 'Quality You Can',   sub: 'Trust Every Time' },
];

export default function BrandStory() {
  const [config, setConfig] = useState(null);
  const [aboutContent, setAboutContent] = useState(null);

  useEffect(() => {
    setConfig(getBlocks().brandStory || { enabled: true, heading: 'Rooted in Tradition. Committed to Purity.', subtitle: 'About Prabhukul' });
    setAboutContent(getAboutContent());
  }, []);

  if (!config || !config.enabled) return null;

  return (
    <section className="w-full bg-[#F5EDE0] py-16" id="brand-story">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left Text Block */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-[#C8922A] text-sm">✦</span>
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#C8922A] font-semibold">{config.subtitle || 'About Prabhukul'}</p>
              <span className="text-[#C8922A] text-sm">✦</span>
            </div>

            <h2
              className="font-serif text-4xl sm:text-5xl font-bold leading-[1.1] text-[#163728]"
              style={{ fontFamily: "'Playfair Display','Cormorant Garamond',serif" }}
            >
              {config.heading || 'Rooted in Tradition. Committed to Purity.'}
            </h2>
            <div className="flex items-center gap-2">
              <div className="w-8 h-[1px] bg-[#D4A64A]" />
              <span className="text-[#D4A64A]">❖</span>
              <div className="w-8 h-[1px] bg-[#D4A64A]" />
            </div>

            <p className="font-sans text-[13px] text-[#5C534E] leading-relaxed max-w-md">
              {aboutContent?.storyBody ? (
                aboutContent.storyBody.split('\n\n')[0]
              ) : (
                <>
                  <strong>खाने का असली स्वाद, प्रभुकुल हींग के साथ।</strong> शुद्धता की पहचान और स्वाद का मिठास, प्रभुकुल हींग हर रसोई की जान है। Since 1985, we have been delivering uncompromised quality, unmatched aroma, and natural goodness in every single pack.
                </>
              )}
            </p>

            {/* Trust pillars strip (20-30% preview helper) */}
            <div className="grid grid-cols-4 gap-3 bg-white border border-[#E5DFD5] px-4 py-4 rounded-sm shadow-sm">
              {trustPillars.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col items-center text-center gap-1.5">
                  <div className="w-8 h-8 rounded-full bg-[#163728]/8 border border-[#163728]/15 flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5 text-[#163728]" strokeWidth={1.6} />
                  </div>
                  <p className="text-[10px] font-bold text-[#2D0B0C] leading-tight">{label}</p>
                  <p className="text-[9px] text-[#5C534E] leading-tight">{sub}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Link
                to="/about-us"
                className="inline-flex items-center gap-2 border border-[#3E0F12] text-[#3E0F12] text-[11px] font-semibold tracking-widest uppercase px-6 py-3 hover:bg-[#3E0F12] hover:text-white transition-all"
              >
                Read More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right image */}
          <div className="relative flex justify-center lg:justify-end border border-[#D4A64A]/30 p-2 bg-white/90 shadow-md">
            <img
              src={aboutContent?.storyImage || productImg}
              alt="Prabhukul Hing Products"
              className="w-full max-w-lg max-h-[420px] object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
