// ─────────────────────────────────────────────────────────────
// Prabhukul Home Page – CMS-ready data objects
// Every section's content lives here for easy CMS migration.
// ─────────────────────────────────────────────────────────────

import blogImg1 from '../assets/images/about-hing-1.jpg';
import blogImg2 from '../assets/images/about-hing-2.jpg';
import blogImg3 from '../assets/images/about-digestives.jpg';
import blogImg4 from '../assets/images/about-tea.jpg';

// 2. Shop by Category
export const categories = [
  { id: 1, name: 'Hing',       slug: '/shop?category=Hing',       image: 'https://prabhukul.com/wp-content/uploads/2022/10/Hing24-600x744.jpg' },
  { id: 2, name: 'Digestive',  slug: '/shop?category=Digestive',  image: 'https://prabhukul.com/wp-content/uploads/2025/01/WhatsApp-Image-2025-04-07-at-3.09.58-PM-600x744.jpeg' },
  { id: 3, name: 'Tea',        slug: '/shop?category=Tea',        image: 'https://prabhukul.com/wp-content/uploads/2024/07/DiamondTea4-600x744.jpg' },
  { id: 4, name: 'Hing Dana',  slug: '/shop?category=Hing+Dana',  image: 'https://prabhukul.com/wp-content/uploads/2022/10/Hing31-600x744.jpg' },
  { id: 5, name: 'All Products', slug: '/shop',                   image: 'https://prabhukul.com/wp-content/uploads/2023/05/compound4-600x744.jpg' },
];

// 3. Best Sellers – ids from catalog
export const bestSellerIds = [14, 1, 8, 11, 19, 9];

// 4. Promotional Banners
export const promoBanners = [
  {
    id: 1,
    title: 'Authentic Hathras Hing',
    subtitle: 'Pure. Potent. Traditional.',
    cta: 'Shop Hing',
    ctaLink: '/shop?category=Hing',
    bg: '#3E0F12',
    image: 'https://prabhukul.com/wp-content/uploads/2023/05/Hing13-600x744.jpg',
  },
  {
    id: 2,
    title: 'Premium Prabhukul Tea',
    subtitle: 'Bold flavour. Pure leaves.',
    cta: 'Shop Tea',
    ctaLink: '/shop?category=Tea',
    bg: '#163728',
    image: 'https://prabhukul.com/wp-content/uploads/2024/07/PremiumTea4-600x744.jpg',
    wide: true,
  },
  {
    id: 3,
    title: 'Complete Product Range',
    subtitle: 'From kitchen to wellness.',
    cta: 'View All',
    ctaLink: '/shop',
    bg: '#5C3A1E',
    image: 'https://prabhukul.com/wp-content/uploads/2023/05/compound4-600x744.jpg',
  },
];

// 5. Brand Story
export const brandStory = {
  heading: 'Rooted in Hathras. Trusted Across India.',
  body: [
    'Prabhukul was born in the heart of Hathras, Uttar Pradesh — India\'s most celebrated hing-producing region. For over 40 years, our family has sourced the finest raw asafoetida resin and processed it using time-honoured methods passed down through generations.',
    'Every product that leaves our facility carries the integrity of authentic Indian craftsmanship, no shortcuts, no artificial enhancers — just pure, potent hing the way your grandmother trusted it.',
  ],
  ctaLabel: 'Read Our Story',
  ctaLink: '/about',
  image: 'https://prabhukul.com/wp-content/uploads/2022/10/Hing24-600x744.jpg',
};

// 6. Why Choose Us
export const whyChoose = [
  { icon: 'MapPin',      title: 'Authentic Hathras Heritage', desc: 'Sourced directly from India\'s hing capital — Hathras, UP.' },
  { icon: 'BadgeCheck',  title: 'Premium Quality',            desc: 'ISO 9001:2015 certified processes, every single batch.' },
  { icon: 'Wind',        title: 'Strong Aroma',               desc: 'High-potency hing compounds for bold, authentic flavour.' },
  { icon: 'Heart',       title: 'Trusted by Families',        desc: 'Over 5,000 happy households across India trust Prabhukul.' },
  { icon: 'Truck',       title: 'Pan India Delivery',         desc: 'Fast, reliable shipping to every corner of the country.' },
  { icon: 'Headphones',  title: 'Customer Support',           desc: 'Dedicated support for all your queries and bulk orders.' },
];

// 7. Benefits of Hing
export const hingBenefits = [
  { title: 'Aids Digestion',        desc: 'Traditionally used to relieve bloating, gas, and indigestion after meals.' },
  { title: 'Culinary Enhancer',     desc: 'Adds a deep, savoury umami note to dals, curries, and pickles.' },
  { title: 'Anti-inflammatory',     desc: 'Contains compounds believed to help reduce inflammation — consult a physician for medical use.' },
  { title: 'Gluten-Free Option',    desc: 'Prabhukul\'s pure hing variants are free from wheat flour fillers.' },
  { title: 'Rich in Antioxidants',  desc: 'Asafoetida resin contains naturally occurring antioxidant compounds.' },
  { title: 'Respiratory Support',   desc: 'Used in folk remedies for respiratory comfort. Not a substitute for medical treatment.' },
];

// 8. Ingredients & Quality
export const qualityPoints = [
  { title: 'Raw Resin Sourced Directly', desc: 'We source raw Ferula asafoetida resin directly from trusted growers.' },
  { title: 'No Artificial Additives',    desc: 'Zero artificial colours, flavours, or preservatives in any product.' },
  { title: 'Hygienic Processing',        desc: 'Processed in a clean, controlled environment with modern machinery.' },
  { title: 'ISO 9001:2015 Certified',    desc: 'Our quality management system meets international standards.' },
];

// 9. Manufacturing Process
export const processSteps = [
  { step: 1, title: 'Raw Material Selection', desc: 'Premium Ferula resin is carefully hand-selected at source in Hathras for maximum potency and aroma.' },
  { step: 2, title: 'Traditional Processing',  desc: 'Resin is blended and processed using time-tested methods that preserve the natural compounds.' },
  { step: 3, title: 'Quality Testing',         desc: 'Every batch is tested for purity, aroma strength, and consistency before packaging.' },
  { step: 4, title: 'Premium Packaging',       desc: 'Sealed in airtight containers to lock in freshness from our facility to your kitchen.' },
];

// 10. Recipe Inspiration
export const recipes = [
  {
    id: 1,
    title: 'Tadka Dal with Prabhukul Hing',
    desc: 'A classic yellow lentil dal elevated with a generous pinch of Prabhukul hing in the tempering.',
    time: '30 mins',
    serves: '4',
    image: 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=800&q=80',
    featured: true,
  },
  {
    id: 2,
    title: 'Hing-Spiced Aloo Sabzi',
    desc: 'Simple potato stir-fry with cumin and a dash of pure hing for an aromatic finish.',
    time: '20 mins',
    serves: '2',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&q=80',
  },
  {
    id: 3,
    title: 'Rajma with Compound Hing',
    desc: 'Slow-cooked kidney beans in tomato gravy — Prabhukul compound hing is the secret ingredient.',
    time: '45 mins',
    serves: '4',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80',
  },
  {
    id: 4,
    title: 'Masala Chai with Prabhukul Tea',
    desc: 'Brewed with Prabhukul Diamond Tea, cardamom, ginger, and milk for the perfect cup.',
    time: '10 mins',
    serves: '2',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80',
  },
];

// 11. Testimonials
export const testimonials = [
  {
    id: 1,
    name: 'Sunita Sharma',
    location: 'Delhi',
    rating: 5,
    quote: 'The hing from Prabhukul is unlike anything you get in a supermarket. The aroma fills the whole kitchen with just a tiny pinch. My family has been using it for years.',
  },
  {
    id: 2,
    name: 'Rajesh Patel',
    location: 'Ahmedabad',
    rating: 5,
    quote: 'I ordered the Prime Compound Hing and it is absolutely worth the price. Restaurant-quality flavour at home. Packaging was safe and delivery was quick.',
  },
  {
    id: 3,
    name: 'Meena Iyer',
    location: 'Chennai',
    rating: 4,
    quote: 'The Premium Hingwati works wonderfully for digestion. I keep a pack in my kitchen and use it daily. Happy to have found a trusted brand.',
  },
];

// 12. Certifications – no local images, using placeholder descriptions
export const certifications = [
  { id: 1, title: 'ISO 9001:2015',       desc: 'Quality Management System Certification', placeholder: true },
  { id: 2, title: 'FSSAI Registered',    desc: 'Food Safety & Standards Authority of India', placeholder: true },
  { id: 3, title: 'Made in India',        desc: 'Proudly manufactured in Hathras, UP', placeholder: true },
];

// 13. FAQs
export const faqs = [
  { q: 'What is hing (asafoetida)?',            a: 'Hing is a dried resin extracted from the Ferula plant root, used as a spice in Indian cooking for its strong, savoury aroma and digestive properties.' },
  { q: 'What is the difference between pure hing and compound hing?', a: 'Pure hing (hing dana) is 100% raw resin. Compound hing is a blend of hing resin with edible starch (wheat or rice flour) to make it easier to use in everyday cooking.' },
  { q: 'Is Prabhukul hing gluten-free?',        a: 'Our pure hing dana variants are gluten-free. Compound hing products may contain wheat flour — please check individual product labels.' },
  { q: 'How should I store hing?',              a: 'Store in an airtight container, away from heat, moisture, and direct sunlight. Properly stored hing retains potency for 12–18 months.' },
  { q: 'Do you offer bulk or wholesale orders?', a: 'Yes, we offer bulk pricing for traders, restaurants, and wholesalers. Please visit our Bulk Enquiry page or contact us directly.' },
  { q: 'What is your delivery policy?',         a: 'We deliver Pan India. Standard delivery takes 4–7 business days. Expedited options may be available at checkout.' },
];

// 14. Blog / Knowledge
export const blogs = [
  {
    id: 1,
    title: 'The History of Hing in Indian Cooking',
    excerpt: 'From ancient Ayurvedic texts to your modern kitchen — how asafoetida became India\'s most indispensable spice.',
    date: 'June 2026',
    readTime: '5 min read',
    image: blogImg1,
    link: '/blog',
    featured: true,
  },
  {
    id: 2,
    title: 'Why Hathras Produces the Best Hing',
    excerpt: 'The soil, climate, and artisan knowledge of Hathras make it the undisputed capital of hing production in India.',
    date: 'May 2026',
    readTime: '4 min read',
    image: blogImg2,
    link: '/blog',
  },
  {
    id: 3,
    title: '6 Health Benefits of Hing You Should Know',
    excerpt: 'Traditionally prized for digestion, hing has a range of culinary and wellness benefits that stand the test of time.',
    date: 'April 2026',
    readTime: '3 min read',
    image: blogImg3,
    link: '/blog',
  },
  {
    id: 4,
    title: 'How to Choose the Right Hing for Your Kitchen',
    excerpt: 'Pure, compound, chura, dana — here\'s a simple guide to picking the right Prabhukul hing for every dish.',
    date: 'March 2026',
    readTime: '3 min read',
    image: blogImg4,
    link: '/blog',
  },
];

// 15. Final CTA
export const finalCTA = {
  heading: 'Ready to Experience Authentic Hing?',
  subtext: 'From everyday cooking to bulk orders — Prabhukul delivers purity to your doorstep.',
  primary:   { label: 'Shop Products',  link: '/shop' },
  secondary: { label: 'Bulk Enquiry',   link: '/bulk-enquiry' },
};

// 16. Contact Preview
export const contactInfo = {
  address: 'Prabhukul Hing, Hathras, Uttar Pradesh – 204101, India',
  phone: '+91 98765 43210',
  email: 'info@prabhukul.com',
  mapUrl: 'https://maps.google.com/?q=Hathras,Uttar+Pradesh,India',
};

// 17. Newsletter
export const newsletterContent = {
  heading: 'Stay Connected with Prabhukul',
  subtext: 'Get recipes, new arrivals, and exclusive offers — straight to your inbox.',
};

// 18. Footer
export const footerData = {
  description: 'Premium asafoetida and spices from the heart of Hathras, crafted with tradition and trusted across India.',
  quickLinks: [
    { label: 'Home',         href: '/' },
    { label: 'Shop',         href: '/shop' },
    { label: 'Our Story',    href: '/about' },
    { label: 'Blog',         href: '/blog' },
    { label: 'Contact Us',   href: '/contact' },
    { label: 'Bulk Enquiry', href: '/bulk-enquiry' },
  ],
  categories: [
    { label: 'Hing',        href: '/shop?category=Hing' },
    { label: 'Digestive',   href: '/shop?category=Digestive' },
    { label: 'Tea',         href: '/shop?category=Tea' },
    { label: 'Hing Dana',   href: '/shop?category=Hing+Dana' },
  ],
  support: [
    { label: 'FAQs',                href: '/faq' },
    { label: 'Privacy Policy',      href: '/privacy' },
    { label: 'Terms & Conditions',  href: '/terms' },
  ],
  social: [
    { name: 'Facebook',   href: '#', icon: 'Facebook' },
    { name: 'Instagram',  href: '#', icon: 'Instagram' },
    { name: 'YouTube',    href: '#', icon: 'Youtube' },
    { name: 'WhatsApp',   href: '#', icon: 'MessageCircle' },
  ],
  poweredBy: { label: 'Kalvix Nexus', href: 'https://kalvixnexus.com' },
};
