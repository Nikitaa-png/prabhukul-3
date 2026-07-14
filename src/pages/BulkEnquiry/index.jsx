import React, { useState } from 'react';
import SEO from '../../components/common/SEO';
import bgImg from '../../assets/images/WhatsApp Image 2026-07-14 at 03.25.12.jpeg';
import { Mail, Phone, Building, CheckCircle } from 'lucide-react';

export default function BulkEnquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    quantity: '',
    city: '',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API submission
    setSubmitted(true);
  };

  return (
    <>
      <SEO 
        title="Bulk & Corporate Enquiry – Wholesale Spices Supply" 
        description="Place a wholesale or bulk enquiry for premium Hathras compounded hing and spices. Ideal for restaurants, traders, and exporters." 
      />
      <div 
        className="w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0]"
        style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="max-w-4xl mx-auto bg-white/95 border border-[#D4A64A]/30 p-8 sm:p-12 shadow-xl rounded-sm">
          
          {/* Header */}
          <div className="text-center space-y-4 mb-8">
            <div className="flex justify-center text-[#3E0F12]">
              <Building className="w-8 h-8" />
            </div>
            <h1 
              className="font-serif text-4xl sm:text-5xl font-bold text-[#3E0F12] uppercase tracking-wide"
              style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
            >
              Bulk & Trade Enquiry
            </h1>
            <p className="font-sans text-[13px] text-[#5C534E] max-w-xl mx-auto leading-relaxed">
              We offer special commercial pricing, wholesale packaging, and custom compounding orders for restaurants, traders, hotels, and exporters.
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
              <h2 className="font-serif text-2xl font-bold text-[#2D0B0C]">Thank You for Reaching Out!</h2>
              <p className="font-sans text-[13px] text-[#5C534E] leading-relaxed">
                Your bulk trade enquiry has been logged successfully. A wholesale manager from the Prabhukul sales team will contact you within 24-48 hours.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 bg-[#3E0F12] text-white text-[11px] font-bold tracking-widest uppercase hover:bg-[#2D0B0C] transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-left">
              
              {/* Form Details Info */}
              <div className="md:col-span-2 space-y-6">
                <h2 className="font-serif text-xl font-bold text-[#163728]">Why Partner with Us?</h2>
                <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed">
                  Prabhukul has been processing hing in Hathras since 1985. We can manufacture custom compound grades customized to your specific aroma and flavor strength requirements.
                </p>

                <div className="space-y-3 pt-4 border-t border-[#D4A64A]/20">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#3E0F12]" />
                    <span className="text-[12px] font-semibold text-[#2D0B0C]">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#3E0F12]" />
                    <span className="text-[12px] font-semibold text-[#2D0B0C]">trade@prabhukul.com</span>
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
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-[#5C534E] mb-1">Business Email</label>
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
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-[#5C534E] mb-1">Phone / Mobile</label>
                    <input 
                      type="tel" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-gray-50 border border-[#D4A64A]/30 p-2.5 text-xs text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] transition-colors" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-[#5C534E] mb-1">Company / Firm Name</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-gray-50 border border-[#D4A64A]/30 p-2.5 text-xs text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] transition-colors" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-[#5C534E] mb-1">Required Quantity (Kg)</label>
                    <input 
                      type="number" 
                      placeholder="e.g. 50" 
                      required 
                      value={formData.quantity}
                      onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                      className="w-full bg-gray-50 border border-[#D4A64A]/30 p-2.5 text-xs text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] transition-colors" 
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider font-bold text-[#5C534E] mb-1">City & State</label>
                    <input 
                      type="text" 
                      required 
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="w-full bg-gray-50 border border-[#D4A64A]/30 p-2.5 text-xs text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] transition-colors" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-wider font-bold text-[#5C534E] mb-1">Requirements & Details</label>
                  <textarea 
                    rows="4" 
                    placeholder="Specify compound type, packaging needs, or specific questions..."
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    className="w-full bg-gray-50 border border-[#D4A64A]/30 p-2.5 text-xs text-[#2D0B0C] focus:outline-none focus:border-[#3E0F12] transition-colors"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full py-3 bg-[#163728] text-white text-[11px] font-bold tracking-widest uppercase hover:bg-[#0C1C12] transition-colors"
                >
                  Send Wholesale Enquiry
                </button>
              </form>

            </div>
          )}

        </div>
      </div>
    </>
  );
}
