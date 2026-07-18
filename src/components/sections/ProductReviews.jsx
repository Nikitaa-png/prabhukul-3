import React, { useState, useRef } from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';

// NOTE: Fictional placeholder reviews for demonstration purposes.
// These must be replaced with genuine, verified customer reviews before production launch.
const reviewsData = [
  {
    productName: "Prabhukul Hing Compound",
    comment: "The aroma feels genuinely strong and fresh. I only need a small pinch in dal and sabzi, and the flavour comes through beautifully without overpowering the dish.",
    name: "Neha Sharma",
    location: "Delhi",
    portrait: "/images/reviews/customer-1.jpg"
  },
  {
    productName: "Prabhukul Hing Dana",
    comment: "The quality feels consistent, and the fragrance is much richer than the regular Hing I had been using. The packaging also keeps the product secure and easy to store.",
    name: "Ritika Verma",
    location: "Lucknow",
    portrait: "/images/reviews/customer-2.jpg"
  },
  {
    productName: "Prabhukul Hing",
    comment: "It gives homemade food a traditional taste and works especially well in tadka. The aroma is strong, so a little quantity is enough for the whole family.",
    name: "Anjali Gupta",
    location: "Jaipur",
    portrait: "/images/reviews/customer-3.jpg"
  }
];

// Animation variants matching the brand spacing system
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
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1]
    }
  }
};

export default function ProductReviews() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.children[0]?.clientWidth || 300;
      const index = Math.round(scrollLeft / (width + 16));
      setActiveIndex(index);
    }
  };

  const scrollTo = (index) => {
    if (scrollRef.current) {
      const width = scrollRef.current.children[0]?.clientWidth || 300;
      scrollRef.current.scrollTo({
        left: index * (width + 16),
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  return (
    <motion.section 
      className="w-full bg-[#FFFFFF] py-10 md:py-[60px] lg:py-20 relative overflow-hidden border-b border-[#E5DFD5]/30"
      id="product-reviews"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <motion.span 
            className="text-[10px] font-sans uppercase tracking-[0.3em] text-[#C8922A] font-bold block mb-1.5"
            variants={fadeUpVariants}
          >
            CUSTOMER STORIES
          </motion.span>
          <motion.h2 
            className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0B0C] tracking-wide uppercase"
            variants={fadeUpVariants}
          >
            Loved for Its Authentic Taste
          </motion.h2>
          <motion.div 
            className="w-12 h-[2px] bg-[#D4A64A] mx-auto mt-3 mb-3"
            variants={fadeUpVariants}
          />
          <motion.p 
            className="font-sans text-xs sm:text-sm text-[#5C534E] max-w-xl mx-auto leading-relaxed mt-2"
            variants={fadeUpVariants}
          >
            Read what customers have to say about Prabhukul products, their aroma, flavour, quality, and everyday use.
          </motion.p>
        </div>

        {/* Desktop / Tablet Grid Layout */}
        <motion.div 
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
        >
          {reviewsData.map((review, i) => (
            <div 
              key={i} 
              className={`col-span-1 ${
                i === 2 ? 'md:col-span-2 md:max-w-md md:mx-auto md:w-full lg:col-span-1' : ''
              }`}
            >
              <ReviewCard review={review} />
            </div>
          ))}
        </motion.div>

        {/* Mobile Touch Carousel Layout */}
        <div className="md:hidden space-y-4">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2 -mx-4 px-4"
          >
            {reviewsData.map((review, i) => (
              <div 
                key={i} 
                className="w-[85%] shrink-0 snap-center"
              >
                <ReviewCard review={review} />
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-2 pt-2">
            {reviewsData.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i ? 'bg-[#163728] w-4' : 'bg-[#E5DFD5]'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
}

function ReviewCard({ review }) {
  return (
    <div 
      className="group flex flex-col justify-between bg-white border border-[#E5DFD5] hover:border-[#163728] rounded-[14px] p-6 h-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ease-in-out text-left"
    >
      <div>
        {/* Customer Header Info */}
        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-14 h-14 rounded-full overflow-hidden border border-[#E5DFD5] shrink-0">
            <img 
              src={review.portrait} 
              alt={`Portrait of ${review.name}`} 
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="font-serif text-[15px] font-bold text-[#2D0B0C] leading-snug">
              {review.name}
            </h3>
            <span className="font-sans text-[10px] text-[#9E9087] uppercase tracking-wider block mt-0.5">
              {review.location}
            </span>
          </div>
        </div>

        {/* 5 Stars rating */}
        <div 
          className="flex gap-0.5 text-[#E6B747] mb-3.5" 
          aria-label="5 out of 5 stars rating"
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-current" />
          ))}
        </div>

        {/* Review body */}
        <p className="font-sans text-[13px] text-[#5C534E] leading-relaxed italic mb-5">
          "{review.comment}"
        </p>
      </div>

      {/* Footer reviewed product */}
      <div className="border-t border-[#E5DFD5]/50 pt-3 mt-auto">
        <span className="font-sans text-[10px] font-bold text-[#163728] uppercase tracking-wider block">
          Product: {review.productName}
        </span>
      </div>
    </div>
  );
}
