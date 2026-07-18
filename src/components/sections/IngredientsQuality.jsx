import React, { useState, useEffect } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getBlocks, getHomeData } from '../../services/db';
import qualityBannerImg from '../../assets/images/ingredients-composite.png';

export default function IngredientsQuality() {
  const [config, setConfig] = useState(null);
  const [teaserPoints, setTeaserPoints] = useState([]);

  useEffect(() => {
    const blocks = getBlocks();
    const data = getHomeData();
    setConfig(blocks.ingredientsQuality || { enabled: true, heading: 'Ingredients & Quality', subtitle: 'Purity First' });
    setTeaserPoints((data.qualityPoints || []).slice(0, 2));
  }, []);

  if (!config || !config.enabled) return null;

  return (
    <section className="w-full bg-[#F5EDE0] py-16" id="ingredients-quality">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-4">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <div className="w-6 h-[1px] bg-[#D4A64A]" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8922A] font-medium">{config.subtitle || 'Purity First'}</span>
              <div className="w-6 h-[1px] bg-[#D4A64A]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0B0C]">{config.heading || 'Ingredients & Quality'}</h2>
          </div>

          <Link
            to="/ingredients-quality"
            className="inline-flex items-center gap-2 border border-[#2D0B0C] text-[#2D0B0C] text-[11px] font-semibold tracking-widest uppercase px-6 py-3 hover:bg-[#2D0B0C] hover:text-white transition-all shrink-0"
          >
            Read More <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left: Quality Banner Image */}
          <div className="border border-[#D4A64A]/30 p-2 bg-white shadow-md">
            <img
              src={qualityBannerImg}
              alt="Prabhukul Hing Varieties and Quality"
              className="w-full h-auto object-cover rounded-sm hover:scale-101 transition-transform duration-300"
            />
          </div>

          {/* Right: quality points preview */}
          <div className="space-y-5 text-left">
            <p className="font-sans text-[13px] text-[#5C534E] leading-relaxed">
              Every Prabhukul product starts with raw <strong className="text-[#2D0B0C]">Ferula asafoetida resin</strong> sourced directly from Hathras — India's premier hing belt. We do not cut corners at any stage.
            </p>

            <div className="space-y-4">
              {teaserPoints.map((point) => (
                <div key={point.title} className="flex gap-3 p-4 bg-white border border-[#D4A64A]/20 rounded-sm">
                  <CheckCircle className="w-5 h-5 text-[#163728] shrink-0 mt-0.5" strokeWidth={1.8} />
                  <div>
                    <p className="font-sans text-[13px] font-semibold text-[#2D0B0C]">{point.title}</p>
                    <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed mt-1">{point.desc}</p>
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
