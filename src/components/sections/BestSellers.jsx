import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { getBlocks } from '../../services/db';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 1, 0.5, 1]
    }
  }
};

const imageCompositionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const singleImageVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 1, 0.5, 1]
    }
  }
};

export default function BestSellers() {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    setConfig(getBlocks().bestSellers || { enabled: true, heading: 'Best Sellers', subtitle: 'Our Bestsellers' });
  }, []);

  if (!config || !config.enabled) return null;

  return (
    <motion.section 
      className="w-full bg-[#F8F3EA] py-10 md:py-[60px] lg:py-20 relative overflow-hidden border-b border-[#E5DFD5]/30"
      id="best-sellers"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Content (45% on desktop -> col-span-5) */}
          <motion.div 
            className="lg:col-span-5 space-y-6 text-left"
            variants={containerVariants}
          >
            <motion.span 
              className="text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#C8922A] font-bold block"
              variants={fadeUpVariants}
            >
              AUTHENTIC HATHRAS HING • SINCE 1970
            </motion.span>
            
            <motion.h2 
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D0B0C] leading-[1.15] uppercase tracking-wide"
              variants={fadeUpVariants}
            >
              A Legacy of Pure Hing
            </motion.h2>

            <motion.div 
              className="w-16 h-[2px] bg-[#D4A64A]"
              variants={fadeUpVariants}
            />

            <motion.p 
              className="font-sans text-xs sm:text-sm text-[#5C534E] leading-relaxed"
              variants={fadeUpVariants}
            >
              For generations, Prabhukul has been trusted for delivering authentic Hathras Hing, crafted with uncompromising quality and traditional expertise. Every product reflects our commitment to purity, rich aroma, and timeless flavour.
            </motion.p>

            <motion.div 
              className="pt-2"
              variants={fadeUpVariants}
            >
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 border border-[#3E0F12] text-[#3E0F12] text-[11px] font-semibold tracking-widest uppercase px-6 py-3 hover:bg-[#3E0F12] hover:text-white transition-all duration-[250ms] rounded-sm shadow-sm"
              >
                Explore Products <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Image Composition (55% on desktop -> col-span-7) */}
          <motion.div 
            className="lg:col-span-7 flex justify-center items-center w-full"
            variants={imageCompositionVariants}
          >
            {/* Aspect container to maintain responsive proportions */}
            <div className="relative w-full aspect-[1.45] max-w-[500px] sm:max-w-[580px] lg:max-w-[620px] min-h-[260px] sm:min-h-[340px]">
              
              {/* 1. Background/Lifestyle image (bottom-left, z-0) */}
              <motion.div 
                className="absolute left-0 bottom-0 w-[42%] h-[54%] rounded-[12px] overflow-hidden border border-[#E5DFD5] shadow-sm z-0 group"
                variants={singleImageVariants}
                whileHover={{ y: -3, scale: 1.02, transition: { duration: 0.25 } }}
              >
                <img 
                  src="/images/prabhukuldana,powder/prabh/IMG-20260718-WA0028.jpg" 
                  alt="Traditional Sourcing Scent"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </motion.div>

              {/* 2. Tall Featured Product Box (center-left, z-20) */}
              <motion.div 
                className="absolute left-[18%] top-[4%] w-[44%] h-[68%] bg-white border border-[#E5DFD5] rounded-[14px] p-4 sm:p-5 shadow-md z-20 group flex items-center justify-center cursor-pointer"
                variants={singleImageVariants}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.25 } }}
              >
                <Link to="/product/14" className="w-full h-full flex items-center justify-center">
                  <img 
                    src="/images/prabhukuldana,powder/file_00000000148c8206810de4683fa18557.png" 
                    alt="Prabhukul Prime Compound Hing"
                    className="max-w-full max-h-full w-auto h-auto object-contain p-2 transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </Link>
              </motion.div>

              {/* 3. Supporting Product Box slightly behind (top-right, z-10) */}
              <motion.div 
                className="absolute right-[15%] top-0 w-[32%] h-[42%] bg-white border border-[#E5DFD5] rounded-[14px] p-3 shadow-sm z-10 group flex items-center justify-center cursor-pointer"
                variants={singleImageVariants}
                whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.25 } }}
              >
                <Link to="/product/8" className="w-full h-full flex items-center justify-center">
                  <img 
                    src="/images/prabhukuldana,powder/file_0000000066a082098e62ae6fa1caad6f.png" 
                    alt="Prabhukul Choice Compound Hing"
                    className="max-w-full max-h-full w-auto h-auto object-contain p-2 transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </Link>
              </motion.div>

              {/* 4. Medium Overlapping Product Box (bottom-right, z-30) */}
              <motion.div 
                className="absolute right-0 bottom-[4%] w-[38%] h-[50%] bg-white border border-[#E5DFD5] rounded-[14px] p-3 sm:p-4 shadow-lg z-30 group flex items-center justify-center cursor-pointer"
                variants={singleImageVariants}
                whileHover={{ y: -5, scale: 1.02, transition: { duration: 0.25 } }}
              >
                <Link to="/product/1" className="w-full h-full flex items-center justify-center">
                  <img 
                    src="/images/prabhukuldana,powder/file_0000000002fc81fbb4d5cebe0b7e1ddf.png" 
                    alt="Pure Hing Matki"
                    className="max-w-full max-h-full w-auto h-auto object-contain p-2 transition-transform duration-300 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </Link>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
