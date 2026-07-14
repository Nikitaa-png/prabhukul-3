import React, { useState } from 'react';
import SEO from '../../components/common/SEO';
import bgImg from '../../assets/images/WhatsApp Image 2026-07-14 at 03.25.12.jpeg';
import { contactInfo } from '../../data/homeData';
import { MapPin, Phone, Mail, CheckCircle, Clock } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEO 
        title="Contact Us – Prabhukul Customer Care & Hathras Office" 
        description="Get in touch with the Prabhukul team. Settle order support queries, request trade details, or ask questions." 
      />
      <div 
        className="w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0]"
        style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="max-w-4xl mx-auto bg-white/95 border border-[#D4A64A]/30 p-8 sm:p-12 shadow-xl rounded-sm">
          
          {/* Header */}
          <div className="text-center space-y-4 mb-10">
            <div className="flex justify-center text-[#3E0F12]">
              <Mail className="w-8 h-8" />
            </div>
            <h1 
              className="font-serif text-4xl sm:text-5xl font-bold text-[#3E0F12] uppercase tracking-wide"
              style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
            >
              Contact Us
            </h1>
            <p className="font-sans text-[13px] text-[#5C534E] max-w-xl mx-auto leading-relaxed">
              Have questions about your order, shipping, or want to know more about our products? Send us a message below.
            </p>
            <div className="flex justify-center mt-2">
              <span className="text-[#D4A64A] text-lg">✦ ❖ ✦</span>
            </div>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-4 max-w-md mx-auto">
              <div className="flex justify-center text-emerald-600">
                <CheckCircle className="w-16 h-16" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#2D0B0C]">Message Sent Successfully!</h2>
              <p className="font-sans text-[13px] text-[#5C534E] leading-relaxed">
                Thank you for contacting Prabhukul. Our support desk will review your message and reply via email within 24 hours.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 bg-[#3E0F12] text-white text-[11px] font-bold tracking-widest uppercase hover:bg-[#2D0B0C] transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-left">
              
              {/* Contact Information */}
              <div className="md:col-span-2 space-y-6">
                <h2 className="font-serif text-xl font-bold text-[#163728]">Get in Touch</h2>
                
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <MapPin className="w-5 h-5 text-[#3E0F12] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-[#9E9087]">Hathras Office</p>
                      <p className="text-[12px] text-[#2D0B0C] leading-relaxed mt-0.5">{contactInfo.address}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Phone className="w-5 h-5 text-[#3E0F12] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-[#9E9087]">Phone Support</p>
                      <a href={`tel:${contactInfo.phone}`} className="text-[12px] text-[#2D0B0C] hover:text-[#C8922A] transition-colors font-semibold">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Mail className="w-5 h-5 text-[#3E0F12] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-[#9E9087]">Customer Care</p>
                      <a href={`mailto:${contactInfo.email}`} className="text-[12px] text-[#2D0B0C] hover:text-[#C8922A] transition-colors font-semibold">
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex gap-3 items-start">
                    <Clock className="w-5 h-5 text-[#3E0F12] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[10px] uppercase font-bold tracking-wider text-[#9E9087]">Business Hours</p>
                      <p className="text-[12px] text-[#2D0B0C] leading-relaxed mt-0.5">Mon – Sat: 10:00 AM – 7:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="md:col-span-3 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-[#5C534E] mb-1">Your Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-gray-50 border border-[#D4A64A]/30 p-2.5 text-xs text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] transition-colors" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-[#5C534E] mb-1">Email Address</label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-gray-50 border border-[#D4A64A]/30 p-2.5 text-xs text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] transition-colors" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-[#5C534E] mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-gray-50 border border-[#D4A64A]/30 p-2.5 text-xs text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] transition-colors" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-[#5C534E] mb-1">Subject</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full bg-gray-50 border border-[#D4A64A]/30 p-2.5 text-xs text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] transition-colors" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-bold text-[#5C534E] mb-1">Message</label>
                  <textarea 
                    rows="4" 
                    required
                    placeholder="Enter your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-gray-50 border border-[#D4A64A]/30 p-2.5 text-xs text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] transition-colors"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 bg-[#163728] text-white text-[11px] font-bold tracking-widest uppercase hover:bg-[#0C1C12] transition-colors"
                >
                  Send Message
                </button>
              </form>

            </div>
          )}

        </div>
      </div>
    </>
  );
}
