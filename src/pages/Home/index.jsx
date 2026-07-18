import React, { useState, useEffect } from 'react';
import SEO from '../../components/common/SEO';
import Hero from '../../components/sections/Hero';
import TrustStatsStrip from '../../components/sections/TrustStatsStrip';
import ShopByCategory from '../../components/sections/ShopByCategory';
import PopularHings from '../../components/sections/PopularHings';
import BestSellers from '../../components/sections/BestSellers';
import BrandStory from '../../components/sections/BrandStory';
import WhyChoose from '../../components/sections/WhyChoose';
import ProductReviews from '../../components/sections/ProductReviews';
import HingBenefits from '../../components/sections/HingBenefits';
import IngredientsQuality from '../../components/sections/IngredientsQuality';
import ManufacturingProcess from '../../components/sections/ManufacturingProcess';
import Testimonials from '../../components/sections/Testimonials';
import Certifications from '../../components/sections/Certifications';
import FAQPreview from '../../components/sections/FAQPreview';
import BlogSection from '../../components/sections/BlogSection';
import FinalCTA from '../../components/sections/FinalCTA';
import ContactPreview from '../../components/sections/ContactPreview';
import Newsletter from '../../components/sections/Newsletter';
import { getBlocks, getAdminSettings } from '../../services/db';

export default function Home() {
  const [blocks, setBlocks] = useState(null);
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    setBlocks(getBlocks());
    setSettings(getAdminSettings());
  }, []);

  if (!blocks) return null;

  return (
    <>
      <SEO
        title={settings?.siteTitle || "Pure Taste, Timeless Tradition"}
        description="Experience premium and authentic asafoetida and spices from Prabhukul — rooted in Hathras, trusted across India."
      />

      {/* 1. Hero — APPROVED, DO NOT MODIFY */}
      {blocks.hero?.enabled && <Hero />}

      {/* 2. Trust Statistics Strip */}
      {blocks.trustStatsStrip?.enabled && <TrustStatsStrip />}

      {/* 3. Shop by Category */}
      {blocks.shopByCategory?.enabled && <ShopByCategory />}

      {/* Popular Hings */}
      <PopularHings />

      {/* 4. Best Sellers */}
      {blocks.bestSellers?.enabled && <BestSellers />}

      {/* 6. Brand Story */}
      {blocks.brandStory?.enabled && <BrandStory />}

      {/* 7. Why Choose Prabhukul */}
      {blocks.whyChoose?.enabled && <WhyChoose />}

      {/* Product Reviews */}
      <ProductReviews />

      {/* 8. Benefits of Hing */}
      {blocks.hingBenefits?.enabled && <HingBenefits />}

      {/* 9. Ingredients & Quality */}
      {blocks.ingredientsQuality?.enabled && <IngredientsQuality />}

      {/* 10. Manufacturing Process */}
      {blocks.manufacturingProcess?.enabled && <ManufacturingProcess />}

      {/* 11. Recipe Inspiration — removed */}

      {/* 12. Customer Testimonials */}
      {blocks.testimonials?.enabled && <Testimonials />}

      {/* 13. Certifications & Trust */}
      {blocks.certifications?.enabled && <Certifications />}

      {/* 14. FAQ Preview */}
      {blocks.faqs?.enabled && <FAQPreview />}

      {/* 15. Blog / Knowledge */}
      {blocks.blogs?.enabled && <BlogSection />}

      {/* 16. Final CTA */}
      <FinalCTA />

      {/* 17. Contact Preview */}
      {blocks.contactPreview?.enabled && <ContactPreview />}

      {/* 18. Newsletter */}
      {blocks.newsletter?.enabled && <Newsletter />}
    </>
  );
}
