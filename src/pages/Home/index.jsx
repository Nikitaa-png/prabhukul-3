import SEO from '../../components/common/SEO';
import Hero from '../../components/sections/Hero';
import TrustStatsStrip from '../../components/sections/TrustStatsStrip';
import ShopByCategory from '../../components/sections/ShopByCategory';
import BestSellers from '../../components/sections/BestSellers';
import PromoBannerGrid from '../../components/sections/PromoBannerGrid';
import BrandStory from '../../components/sections/BrandStory';
import WhyChoose from '../../components/sections/WhyChoose';
import HingBenefits from '../../components/sections/HingBenefits';
import IngredientsQuality from '../../components/sections/IngredientsQuality';
import ManufacturingProcess from '../../components/sections/ManufacturingProcess';
import RecipeInspiration from '../../components/sections/RecipeInspiration';
import Testimonials from '../../components/sections/Testimonials';
import Certifications from '../../components/sections/Certifications';
import FAQPreview from '../../components/sections/FAQPreview';
import BlogSection from '../../components/sections/BlogSection';
import FinalCTA from '../../components/sections/FinalCTA';
import ContactPreview from '../../components/sections/ContactPreview';
import Newsletter from '../../components/sections/Newsletter';

export default function Home() {
  return (
    <>
      <SEO
        title="Pure Taste, Timeless Tradition"
        description="Experience premium and authentic asafoetida and spices from Prabhukul — rooted in Hathras, trusted across India."
      />

      {/* 1. Hero — APPROVED, DO NOT MODIFY */}
      <Hero />

      {/* 2. Trust Statistics Strip */}
      <TrustStatsStrip />

      {/* 3. Shop by Category */}
      <ShopByCategory />

      {/* 4. Best Sellers */}
      <BestSellers />

      {/* 5. Promotional Banner Grid */}
      <PromoBannerGrid />

      {/* 6. Brand Story */}
      <BrandStory />

      {/* 7. Why Choose Prabhukul */}
      <WhyChoose />

      {/* 8. Benefits of Hing */}
      <HingBenefits />

      {/* 9. Ingredients & Quality */}
      <IngredientsQuality />

      {/* 10. Manufacturing Process */}
      <ManufacturingProcess />

      {/* 11. Recipe Inspiration — removed */}

      {/* 12. Customer Testimonials */}
      <Testimonials />

      {/* 13. Certifications & Trust */}
      <Certifications />

      {/* 14. FAQ Preview */}
      <FAQPreview />

      {/* 15. Blog / Knowledge */}
      <BlogSection />

      {/* 16. Final CTA */}
      <FinalCTA />

      {/* 17. Contact Preview */}
      <ContactPreview />

      {/* 18. Newsletter */}
      <Newsletter />
    </>
  );
}
