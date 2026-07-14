import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { contactInfo } from '../../data/homeData';

export default function ContactPreview() {
  return (
    <section className="w-full bg-[#F5EDE0] py-14 border-t border-[#D4A64A]/25" id="contact-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C8922A] font-medium mb-2">Reach Out</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0B0C]">Contact Us</h2>
          <div className="mt-3 w-12 h-[2px]  mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-4xl mx-auto">
          {/* Contact details */}
          <div className="space-y-5">
            <div className="flex gap-3 items-start">
              <div className="w-9 h-9 rounded-full  border border-[#D4A64A]/30 flex items-center justify-center shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-[#3E0F12]" strokeWidth={1.7} />
              </div>
              <div>
                <p className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#9E9087] mb-0.5">Address</p>
                <p className="font-sans text-[13px] text-[#2D0B0C] leading-relaxed">{contactInfo.address}</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-9 h-9 rounded-full  border border-[#D4A64A]/30 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-[#3E0F12]" strokeWidth={1.7} />
              </div>
              <div>
                <p className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#9E9087] mb-0.5">Phone</p>
                <a href={`tel:${contactInfo.phone}`} className="font-sans text-[13px] text-[#2D0B0C] hover:text-[#C8922A] transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <div className="w-9 h-9 rounded-full  border border-[#D4A64A]/30 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-[#3E0F12]" strokeWidth={1.7} />
              </div>
              <div>
                <p className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#9E9087] mb-0.5">Email</p>
                <a href={`mailto:${contactInfo.email}`} className="font-sans text-[13px] text-[#2D0B0C] hover:text-[#C8922A] transition-colors">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="pt-2 text-left">
              <Link
                to="/contact"
                className="inline-block bg-[#3E0F12] text-white text-[11px] font-semibold tracking-widest uppercase px-7 py-3 hover:bg-[#2D0B0C] transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Map preview */}
          <div className="border border-[#D4A64A]/30 overflow-hidden bg-white">
            <div className="aspect-video  flex flex-col items-center justify-center gap-3 p-8 text-center">
              <MapPin className="w-8 h-8 text-[#3E0F12]" strokeWidth={1.4} />
              <p className="font-serif text-[15px] font-bold text-[#2D0B0C]">Hathras, Uttar Pradesh</p>
              <p className="text-[11px] text-[#5C534E]">India's premier hing-producing region</p>
              <a
                href={contactInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#C8922A] border-b border-[#C8922A]/40 pb-0.5 hover:border-[#C8922A] transition-colors"
              >
                View on Google Maps <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

