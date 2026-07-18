import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getFAQs, getBlocks } from '../../services/db';

export default function FAQPreview() {
  const [open, setOpen] = useState(null);
  const [visible, setVisible] = useState([]);
  const [config, setConfig] = useState(null);

  useEffect(() => {
    setVisible(getFAQs().slice(0, 3));
    setConfig(getBlocks().faqs || { enabled: true, heading: 'Frequently Asked Questions', subtitle: 'Got Questions?' });
  }, []);

  if (!config || !config.enabled) return null;

  return (
    <section className="w-full bg-[#F5EDE0] py-14 border-t border-[#D4A64A]/25" id="faq-preview">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C8922A] font-medium mb-2">{config.subtitle || 'Got Questions?'}</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0B0C]">{config.heading || 'Frequently Asked Questions'}</h2>
          <div className="mt-3 w-12 h-[2px]  mx-auto" />
        </div>

        <div className="space-y-2">
          {visible.map((item, i) => (
            <div key={i} className="border border-[#D4A64A]/25 overflow-hidden bg-white">
              <button
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover: transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
              >
                <span className="font-sans text-[13px] font-semibold text-[#2D0B0C]">{item.q}</span>
                {open === i
                  ? <Minus className="w-4 h-4 text-[#C8922A] shrink-0" />
                  : <Plus className="w-4 h-4 text-[#C8922A] shrink-0" />
                }
              </button>
              {open === i && (
                <div className="px-5 pb-4">
                  <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/faq"
            className="inline-block border border-[#2D0B0C] text-[#2D0B0C] text-[11px] font-semibold tracking-widest uppercase px-8 py-3 hover: hover:text-white transition-all"
          >
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}

