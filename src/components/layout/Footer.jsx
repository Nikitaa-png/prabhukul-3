import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import { footerData, contactInfo } from '../../data/homeData';
import logoImg from '../../assets/images/logo.png';

// Simple inline SVG social icons (lucide-react doesn't include brand icons)
const SocialIcons = {
  Facebook: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  ),
  Instagram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  ),
  Youtube: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
      <polygon fill="#1A0608" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
    </svg>
  ),
  MessageCircle: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
    </svg>
  ),
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1A0608] text-gray-300 border-t-2 border-[#E6B747]/40" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-10">

          {/* Brand column */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2">
              <img src={logoImg} alt="Prabhukul" className="h-10 w-auto" />
            </Link>
            <p className="font-sans text-[12px] text-gray-400 leading-relaxed">
              {footerData.description}
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-1">
              {footerData.social.map((s) => {
                const Icon = SocialIcons[s.icon];
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-8 h-8 rounded-full border border-[#E6B747]/30 flex items-center justify-center text-gray-400 hover:text-[#E6B747] hover:border-[#E6B747]/60 transition-all"
                  >
                    {Icon && <Icon />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-[11px] font-bold tracking-widest uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerData.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-[12px] text-gray-400 hover:text-[#E6B747] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-white text-[11px] font-bold tracking-widest uppercase mb-4">Products</h4>
            <ul className="space-y-2">
              {footerData.categories.map((cat) => (
                <li key={cat.label}>
                  <Link to={cat.href} className="text-[12px] text-gray-400 hover:text-[#E6B747] transition-colors">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-white text-[11px] font-bold tracking-widest uppercase mt-6 mb-4">Support</h4>
            <ul className="space-y-2">
              {footerData.support.map((link) => (
                <li key={link.label}>
                  <Link to={link.href} className="text-[12px] text-gray-400 hover:text-[#E6B747] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-[11px] font-bold tracking-widest uppercase mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex gap-2 text-[12px] text-gray-400">
                <MapPin className="w-3.5 h-3.5 text-[#E6B747] shrink-0 mt-0.5" strokeWidth={1.7} />
                <span className="leading-relaxed">{contactInfo.address}</span>
              </li>
              <li className="flex gap-2 text-[12px] text-gray-400">
                <Phone className="w-3.5 h-3.5 text-[#E6B747] shrink-0 mt-0.5" strokeWidth={1.7} />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-[#E6B747] transition-colors">{contactInfo.phone}</a>
              </li>
              <li className="flex gap-2 text-[12px] text-gray-400">
                <Mail className="w-3.5 h-3.5 text-[#E6B747] shrink-0 mt-0.5" strokeWidth={1.7} />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-[#E6B747] transition-colors">{contactInfo.email}</a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#E6B747]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[11px] text-gray-500">
            © {year} Prabhukul. All rights reserved.
          </p>
          <p className="text-[11px] text-gray-500">
            Powered by{' '}
            <a
              href={footerData.poweredBy.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E6B747]/70 hover:text-[#E6B747] transition-colors font-medium"
            >
              {footerData.poweredBy.label}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
