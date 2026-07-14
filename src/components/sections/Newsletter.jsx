import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { newsletterContent } from '../../data/homeData';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="w-full  border-t border-[#D4A64A]/25 py-12" id="newsletter">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-[11px] uppercase tracking-[0.2em] text-[#C8922A] font-medium mb-2">Stay in the Loop</p>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#2D0B0C] mb-2">
          {newsletterContent.heading}
        </h2>
        <p className="font-sans text-[13px] text-[#5C534E] mb-6">{newsletterContent.subtext}</p>

        {submitted ? (
          <p className="font-sans text-[13px] text-[#163728] font-medium">
            Thank you for subscribing! We'll be in touch soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 border border-[#D4A64A]/40  px-4 py-3 text-[13px] text-[#2D0B0C] placeholder-[#9E9087] focus:outline-none focus:border-[#D4A64A] transition-colors"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2  text-white text-[11px] font-semibold tracking-widest uppercase px-6 py-3 hover: transition-colors shrink-0"
            >
              <Send className="w-3.5 h-3.5" />
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

