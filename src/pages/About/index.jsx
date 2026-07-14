import React from 'react';
import SEO from '../../components/common/SEO';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { certifications } from '../../data/homeData';

// Background and Assets
import bgImg from '../../assets/images/WhatsApp Image 2026-07-14 at 03.25.12.jpeg';
import brandStoryImg from '../../assets/images/about-hing-2.jpg';
import ingredientsImg from '../../assets/images/uploaded-ingredients-composite.png';

// Signature Collections Assets
import digestivesImg from '../../assets/images/uploaded-digestives.jpg';
import teaDiamondImg from '../../assets/images/uploaded-tea-diamond.jpg';
import teaPremiumImg from '../../assets/images/uploaded-tea-premium.jpg';

const timelineMilestones = [
  { year: '1985', title: 'The Genesis', desc: 'Prabhukul was established in Hathras, Uttar Pradesh—the historic capital of asafoetida. We began with a micro-facility committed to absolute spice purity.' },
  { year: '1998', title: 'Perfecting Blends', desc: 'Introduced traditional compounding methods to align with age-old recipes, locking in the essential volatile oils that define raw hing.' },
  { year: '2012', title: 'Standard Expansion', desc: 'Extended our distribution network across Northern India and established certified quality controls for sourcing raw organic resins.' },
  { year: '2022', title: 'National Legacy', desc: 'Serving millions of culinary tables and professional kitchens nationwide as a multi-generational household staple.' },
];

const brandValues = [
  { title: 'Pure Integrity', desc: 'We do not add artificial colors, chemical preservatives, or synthetic compounding agents to any batch.' },
  { title: 'Time-Honored Craft', desc: 'We preserve original Hathras compounding methods, curing raw spice materials slowly to maximize flavor.' },
  { title: 'Uncompromising Quality', desc: 'As an ISO certified company, every batch undergoes lab testing before leaving our packaging plant.' },
  { title: 'Legacy of Trust', desc: 'Building relationships with traders and consumers since 1985 through consistency and sourcing clarity.' },
];

const processSteps = [
  { step: '01', title: 'Crystal Selection', desc: 'We hand-select premium organic Ferula asafoetida resin crystals imported from cold arid mountain valleys.' },
  { step: '02', title: 'Slow Compounding', desc: 'The crystals are carefully crushed and compounded with precise natural binding agents according to proprietary family recipes.' },
  { step: '03', title: 'Volatile Sealing', desc: 'The finished compound is instantly sealed into food-grade, multi-layered packages to lock in the strong aroma and fresh taste.' },
];

const qualityChecks = [
  '100% Organic raw resin sourcing',
  'No chemical dyes, chalk, or synthetic binders',
  'Batch-tested in independent laboratories',
  'Traditional slow-cured compounding process',
  'Rich in volatile essential oils for strong aroma',
  'Compliant with FSSAI and ISO quality standards',
];

export default function About() {
  return (
    <>
      <SEO 
        title="About Us – Rooted in Tradition, Committed to Purity" 
        description="Read the story of Prabhukul, established in Hathras since 1985. Discover our organic raw materials, traditional compounding, and certifications." 
      />

      <div 
        className="w-full min-h-screen text-[#2D0B0C] font-sans pb-20 overflow-x-hidden antialiased"
        style={{ 
          backgroundImage: `url(${bgImg})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          backgroundAttachment: 'fixed' 
        }}
      >
        
        {/* 1. Premium About Hero */}
        <section className="max-w-5xl mx-auto pt-24 pb-16 px-4 text-center space-y-6">
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-[1px] bg-[#D4A64A]" />
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C8922A] font-bold">Est. 1985</span>
            <div className="w-12 h-[1px] bg-[#D4A64A]" />
          </div>
          <h1 
            className="font-serif text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-wide text-[#3E0F12] uppercase"
            style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
          >
            About Prabhukul
          </h1>
          <p className="font-serif text-lg sm:text-xl text-[#163728] italic max-w-2xl mx-auto">
            "Rooted in Hathras, Uttar Pradesh — Dedicated to Culinary Purity & Legacy."
          </p>
          <div className="flex justify-center mt-4">
            <span className="text-[#D4A64A] text-xl">✦ ❖ ✦</span>
          </div>
        </section>

        {/* Outer Content Centered Container */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-28 md:space-y-36">

          {/* 2. Our Story */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-left pt-6">
            {/* Left Story Image */}
            <div className="border border-[#D4A64A]/30 p-2.5 bg-white shadow-md max-w-lg mx-auto md:mx-0">
              <img 
                src={brandStoryImg} 
                alt="Prabhukul Spice Crafting" 
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Right Story Text */}
            <div className="space-y-6">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8922A] font-bold">Heritage</p>
              <h2 
                className="font-serif text-3xl sm:text-4xl font-bold text-[#163728] uppercase leading-tight"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
              >
                खाने का असली स्वाद,<br />प्रभुकुल हींग के साथ।
              </h2>
              <div className="w-16 h-[1px] bg-[#D4A64A]" />
              <p className="font-sans text-[13px] sm:text-[14px] text-[#5C534E] leading-relaxed">
                For nearly four decades, Prabhukul has been a trusted name in authentic asafoetida. Born in Hathras, the compounding capital of India, we preserve the traditional processing techniques that give our hing its highly aromatic profile and strong flavor.
              </p>
              <p className="font-sans text-[13px] sm:text-[14px] text-[#5C534E] leading-relaxed">
                We believe that pure food leads to robust wellness. From selection of raw resin crystals to gentle blending and vacuum-sealed packaging, we guarantee standard consistency and authentic taste in every kitchen.
              </p>
            </div>
          </section>


          {/* 3. Heritage & Legacy Milestones */}
          <section className="text-left space-y-12">
            <div className="space-y-3 text-center md:text-left">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8922A] font-bold">Timeline</p>
              <h2 
                className="font-serif text-3xl font-bold text-[#3E0F12] uppercase tracking-wider"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
              >
                Heritage & Legacy
              </h2>
              <div className="w-16 h-[1px] bg-[#D4A64A] mx-auto md:mx-0" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {timelineMilestones.map((m) => (
                <div key={m.year} className="p-6 bg-white/80 border border-[#D4A64A]/25 rounded-sm hover:shadow-md transition-shadow relative pt-8">
                  <div className="absolute top-4 left-6 bg-[#3E0F12] text-white font-serif text-[11px] font-bold uppercase tracking-widest px-2.5 py-0.5">
                    {m.year}
                  </div>
                  <h3 className="font-serif text-[15px] font-bold text-[#163728] uppercase tracking-wider mt-4">{m.title}</h3>
                  <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed mt-2">{m.desc}</p>
                </div>
              ))}
            </div>
          </section>


          {/* 4. Mission & Vision */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            <div className="p-8 bg-[#163728]/5 border border-[#163728]/15 space-y-4">
              <h3 
                className="font-serif text-2xl font-bold text-[#163728] uppercase tracking-wider"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
              >
                Our Mission
              </h3>
              <p className="font-sans text-[13px] text-[#5C534E] leading-relaxed">
                To simplify healthy home cooking by providing 100% natural, unadulterated compounded hing and organic spices. We aim to protect traditional Indian blending crafts while adhering to ISO standard testing and safety levels.
              </p>
            </div>

            <div className="p-8 bg-[#3E0F12]/5 border border-[#3E0F12]/15 space-y-4">
              <h3 
                className="font-serif text-2xl font-bold text-[#3E0F12] uppercase tracking-wider"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
              >
                Our Vision
              </h3>
              <p className="font-sans text-[13px] text-[#5C534E] leading-relaxed">
                To establish Prabhukul as India's premier brand for authentic Hathras asafoetida and high-altitude Assam teas, ensuring that quality, tradition, and customer trust remain at the center of our global distribution.
              </p>
            </div>

          </section>


          {/* 5. Our Values */}
          <section className="text-left space-y-12">
            <div className="space-y-3 text-center md:text-left">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8922A] font-bold">Standard Pillars</p>
              <h2 
                className="font-serif text-3xl font-bold text-[#3E0F12] uppercase tracking-wider"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
              >
                Our Values
              </h2>
              <div className="w-16 h-[1px] bg-[#D4A64A] mx-auto md:mx-0" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {brandValues.map((v) => (
                <div key={v.title} className="p-6 bg-white/70 border border-[#D4A64A]/25 rounded-sm flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-serif text-[15px] font-bold text-[#163728] uppercase tracking-wider">{v.title}</h3>
                    <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>


          {/* 6. Why Choose Prabhukul */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center text-left">
            
            <div className="md:col-span-5 space-y-4">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8922A] font-bold">Our Guarantee</p>
              <h2 
                className="font-serif text-3xl font-bold text-[#3E0F12] uppercase tracking-wider"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
              >
                Why Choose Prabhukul
              </h2>
              <p className="font-sans text-[13px] text-[#5C534E] leading-relaxed">
                We stand behind our family reputation and Hathras heritage. If you choose Prabhukul, you choose uncompromised purity, batch-tested hygiene, and direct sourcing integrity.
              </p>
            </div>

            <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Hathras Sourcing', desc: 'Direct access to standard processing chambers and high-quality raw crystals.' },
                { title: 'Immense Aroma', desc: 'Preserves essential spice oils for intense, long-lasting aroma in cooking.' },
                { title: 'Strict Quality', desc: 'Tested at accredited laboratories to certify absence of harmful materials.' },
                { title: 'Customer Support', desc: 'Guaranteed satisfaction and quick replacements for any shipping damage.' },
              ].map((item) => (
                <div key={item.title} className="p-5 bg-white border border-[#D4A64A]/20">
                  <h4 className="font-serif text-[13px] font-bold text-[#163728] uppercase tracking-wider mb-1">{item.title}</h4>
                  <p className="font-sans text-[11px] text-[#5C534E] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

          </section>


          {/* NEW SECTION: Signature Collections */}
          <section className="text-left space-y-12">
            <div className="space-y-3 text-center md:text-left">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8922A] font-bold">Product Portfolios</p>
              <h2 
                className="font-serif text-3xl font-bold text-[#3E0F12] uppercase tracking-wider"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
              >
                Signature Collections
              </h2>
              <div className="w-16 h-[1px] bg-[#D4A64A] mx-auto md:mx-0" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Prabhukul Digestives',
                  subtitle: 'शुद्धता और स्वाद की परंपरा',
                  desc: 'Handcrafted digestive aids like Padhar Hajam Churan, sweet Amla Candy, and tangy Anardana, supporting natural wellness and digestion.',
                  image: digestivesImg,
                },
                {
                  title: 'Prabhukul Premium Tea',
                  subtitle: 'Direct from Finest Gardens',
                  desc: 'Authentic organic tea leaves sourced directly from Assam, delivering a rich, malty cup with unmatched flavor and high antioxidants.',
                  image: teaPremiumImg,
                },
                {
                  title: 'Diamond Tea Blend',
                  subtitle: 'Epitome of Taste & Purity',
                  desc: 'A premium-tier black tea formulated for connoisseurs, awakening your senses with robust aroma and bold traditional flavor.',
                  image: teaDiamondImg,
                },
              ].map((c) => (
                <div key={c.title} className="bg-white/90 border border-[#D4A64A]/25 rounded-sm overflow-hidden flex flex-col justify-between hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <div className="border-b border-[#D4A64A]/15 overflow-hidden">
                    <img 
                      src={c.image} 
                      alt={c.title} 
                      className="w-full h-48 object-cover hover:scale-102 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2">
                      <h3 className="font-serif text-lg font-bold text-[#163728] uppercase tracking-wider">{c.title}</h3>
                      <p className="font-serif text-[11px] text-[#C8922A] italic font-semibold tracking-wide leading-none">{c.subtitle}</p>
                      <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed pt-1">{c.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>


          {/* 7. Manufacturing Excellence */}
          <section className="text-left space-y-12">
            <div className="space-y-3 text-center md:text-left">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8922A] font-bold">Our Plant</p>
              <h2 
                className="font-serif text-3xl font-bold text-[#163728] uppercase tracking-wider"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
              >
                Manufacturing Excellence
              </h2>
              <div className="w-16 h-[1px] bg-[#D4A64A] mx-auto md:mx-0" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {processSteps.map((p) => (
                <div key={p.step} className="p-6 bg-white/70 border border-[#D4A64A]/25 relative">
                  <span className="font-serif text-4xl font-extrabold text-[#C8922A]/25 absolute top-4 right-6">{p.step}</span>
                  <h3 className="font-serif text-[15px] font-bold text-[#2D0B0C] uppercase tracking-wider mt-4">{p.title}</h3>
                  <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed mt-2">{p.desc}</p>
                </div>
              ))}
            </div>
          </section>


          {/* 8. Ingredients & Quality */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center text-left">
            {/* Left Image: MUST USE THE SPECIFIC PNG */}
            <div className="border border-[#D4A64A]/30 p-2.5 bg-white shadow-md max-w-lg mx-auto md:mx-0">
              <img 
                src={ingredientsImg} 
                alt="Prabhukul Quality Sourcing Banner" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Right Content */}
            <div className="space-y-6">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8922A] font-bold">Our Standard</p>
              <h2 
                className="font-serif text-3xl font-bold text-[#3E0F12] uppercase tracking-wider"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
              >
                Ingredients & Quality
              </h2>
              <p className="font-sans text-[13px] text-[#5C534E] leading-relaxed">
                Prabhukul compounded hing is formulated strictly with organic binding agents to deliver raw potency and digestives. We test every single batch for heavy metals and synthetic dyes.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {qualityChecks.map((check) => (
                  <li key={check} className="flex gap-2 items-start">
                    <Check className="w-3.5 h-3.5 text-[#163728] shrink-0 mt-0.5" strokeWidth={3} />
                    <span className="font-sans text-[12px] text-[#2D0B0C] leading-snug">{check}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>


          {/* 9 & 10. Certifications & Trust + CTA Section Side-by-Side */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center text-left py-10 border-t border-[#2D0B0C]/10 pt-16" id="certs-cta-split">
            
            {/* Left Column: Certifications & Trust */}
            <div className="space-y-8">
              <div className="space-y-3">
                <p className="text-[10px] tracking-[0.3em] uppercase text-[#C8922A] font-bold">Compliance</p>
                <h2 
                  className="font-serif text-3xl font-bold text-[#3E0F12] uppercase tracking-wider"
                  style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
                >
                  Certifications & Trust
                </h2>
                <div className="w-16 h-[1px] bg-[#D4A64A]" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {certifications.map((cert) => (
                  <div 
                    key={cert.id}
                    className="flex flex-col items-center gap-3 p-6 border border-[#D4A64A]/25 bg-white text-center shadow-sm hover:shadow-md hover:border-[#C8922A]/60 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#163728]/8 flex items-center justify-center">
                      <ShieldCheck className="w-4.5 h-4.5 text-[#163728]" strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="font-serif text-[12px] font-bold text-[#2D0B0C] uppercase tracking-wider">{cert.title}</h3>
                      <p className="font-sans text-[10px] text-[#5C534E] mt-1 leading-relaxed">{cert.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: CTA Section */}
            <div className="space-y-6 bg-white/40 border border-[#D4A64A]/20 p-8 sm:p-10 shadow-sm text-center md:text-left">
              <h2 
                className="font-serif text-3xl sm:text-4xl font-bold text-[#3E0F12] uppercase tracking-wider leading-tight"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
              >
                Experience the Authentic Taste of Hathras.
              </h2>
              <div className="w-16 h-[1px] bg-[#D4A64A] mx-auto md:mx-0" />
              <p className="font-sans text-[13px] text-[#5C534E] leading-relaxed">
                Unlock restaurant-quality rich flavor and aroma in your home cooking. Visit our store catalog to purchase our traditional compounded spices today.
              </p>
              <div className="pt-2">
                <Link 
                  to="/shop"
                  className="inline-flex items-center gap-2 border border-[#3E0F12] bg-[#3E0F12] text-white text-[11px] font-semibold tracking-widest uppercase px-8 py-3.5 hover:bg-[#2D0B0C] hover:border-[#2D0B0C] transition-all duration-300"
                >
                  Shop Now <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </section>

        </div>

      </div>
    </>
  );
}
