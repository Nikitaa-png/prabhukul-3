import { products as initialProducts } from '../data/catalog';
import * as initialHomeData from '../data/homeData';

const STORAGE_KEYS = {
  PRODUCTS: 'pk_products',
  HOMEPAGE: 'pk_homepage',
  MEDIA: 'pk_media',
  AUTH: 'pk_auth_session'
};

// Initialize localStorage with initial data if not already set
export function initDB() {
  const currentProducts = localStorage.getItem(STORAGE_KEYS.PRODUCTS);
  let needsReset = false;
  if (currentProducts) {
    try {
      const parsed = JSON.parse(currentProducts);
      const p1 = parsed.find(p => p.id === 1);
      if (p1 && p1.image.startsWith('http')) {
        needsReset = true;
      }
    } catch (e) {
      needsReset = true;
    }
  }
  if (!currentProducts || needsReset) {
    localStorage.setItem(STORAGE_KEYS.PRODUCTS, JSON.stringify(initialProducts));
  }
  
  if (!localStorage.getItem(STORAGE_KEYS.HOMEPAGE)) {
    const homeDataObj = {
      categories: initialHomeData.categories || [],
      bestSellerIds: initialHomeData.bestSellerIds || [],
      promoBanners: initialHomeData.promoBanners || [],
      brandStory: initialHomeData.brandStory || {},
      whyChoose: initialHomeData.whyChoose || [],
      hingBenefits: initialHomeData.hingBenefits || [],
      qualityPoints: initialHomeData.qualityPoints || [],
      processSteps: initialHomeData.processSteps || [],
      testimonials: initialHomeData.testimonials || [],
      certifications: initialHomeData.certifications || [],
      faqs: initialHomeData.faqs || [],
      blogs: initialHomeData.blogs || [],
      contactInfo: initialHomeData.contactInfo || {},
      newsletterContent: initialHomeData.newsletterContent || {},
      finalCTA: initialHomeData.finalCTA || {},
      footerData: initialHomeData.footerData || {},
      aboutContent: {
        heroTitle: "About Prabhukul",
        heroSubtitle: "Rooted in Hathras, Uttar Pradesh — Dedicated to Culinary Purity & Legacy.",
        storyTitle: "Our Story",
        storySubtitle: "A Legacy of Purity Since 1985",
        storyBody: "For over four decades, Prabhukul has stood as a beacon of uncompromising spice craftsmanship in Hathras. Our traditional compounded asafoetida resin is processed using methods passed down through generations, combining raw botanical selection with scientific cleanliness.\n\nFrom a small local milling house in Hathras to one of India's most respected names in gourmet hing, we have stayed true to our roots: delivering raw, aromatic, and health-boosting ingredients to every family hearth.",
        storyImage: "/src/assets/images/about-hing-2.jpg",
        milestones: [
          { year: "1985", title: "The Humble Beginning", desc: "Established our first processing unit in Hathras with traditional stone grinders." },
          { year: "1998", title: "Pan-India Expansion", desc: "Began distribution to major retail stores across Northern and Central India." },
          { year: "2010", title: "Modernization", desc: "Upgraded our sealing and packaging facilities to preserve aroma for up to 2 years." },
          { year: "2020", title: "Direct-to-Consumer", desc: "Launched online delivery directly from Hathras to households nationwide." }
        ],
        mission: "To restore natural purity and rich ancestral aroma to every modern kitchen while uplifting smallholder spice farming communities.",
        vision: "To become the global gold standard for premium organic asafoetida and traditional wellness-supporting digestive blends."
      },
      blocks: {
        announcementBar: { enabled: true, text: "Free Pan-India Delivery on orders above ₹499" },
        hero: { enabled: true, heading: "Pure Taste, Timeless Tradition", subtitle: "Experience premium and authentic asafoetida and spices from Prabhukul — rooted in Hathras, trusted across India." },
        trustStatsStrip: { enabled: true },
        shopByCategory: { enabled: true, heading: "Shop by Category" },
        bestSellers: { enabled: true, heading: "Best Sellers", subtitle: "Handpicked favorites loved by our customers" },
        promoBanners: { enabled: true },
        brandStory: { enabled: true, heading: "Rooted in Tradition. Committed to Purity.", subtitle: "About Prabhukul" },
        whyChoose: { enabled: true, heading: "Why Choose Prabhukul", subtitle: "Our Guarantee" },
        hingBenefits: { enabled: true, heading: "Benefits of Hing", subtitle: "The Spice Science" },
        ingredientsQuality: { enabled: true, heading: "Ingredients & Quality", subtitle: "Purity First" },
        manufacturingProcess: { enabled: true, heading: "Our Manufacturing Process", subtitle: "From Resin to Table" },
        testimonials: { enabled: true, heading: "Customer Reviews", subtitle: "Testimonials" },
        certifications: { enabled: true, heading: "Certifications & Trust", subtitle: "Compliance" },
        faqs: { enabled: true, heading: "Frequently Asked Questions", subtitle: "Common Queries" },
        blogs: { enabled: true, heading: "From Our Blog", subtitle: "Read Our Story" },
        contactPreview: { enabled: true, heading: "Contact Us", subtitle: "Reach Out" },
        newsletter: { enabled: true, heading: "Stay Connected with Prabhukul", subtitle: "Stay in the Loop" },
        footer: { enabled: true }
      }
    };
    localStorage.setItem(STORAGE_KEYS.HOMEPAGE, JSON.stringify(homeDataObj));
  }

  if (!localStorage.getItem(STORAGE_KEYS.MEDIA)) {
    const defaultMedia = [
      { id: 'logo', name: 'logo.png', url: '/src/assets/images/logo.png', type: 'image/png', size: '86.77 KB', alt: 'Prabhukul Logo' },
      { id: 'super-compound-hing', name: 'super-compound-hing.png', url: '/src/assets/images/super-compound-hing.png', type: 'image/png', size: '172.22 KB', alt: 'Super Compound Hing' },
      { id: 'uploaded-tea-diamond', name: 'uploaded-tea-diamond.jpg', url: '/src/assets/images/uploaded-tea-diamond.jpg', type: 'image/jpeg', size: '108.26 KB', alt: 'Tea Diamond' },
      { id: 'ingredients-composite', name: 'ingredients-composite.png', url: '/src/assets/images/ingredients-composite.png', type: 'image/png', size: '978.02 KB', alt: 'Ingredients Composite' },
      { id: 'about-hing-1', name: 'about-hing-1.jpg', url: '/src/assets/images/about-hing-1.jpg', type: 'image/jpeg', size: '255.09 KB', alt: 'About Hing 1' },
      { id: 'about-hing-2', name: 'about-hing-2.jpg', url: '/src/assets/images/about-hing-2.jpg', type: 'image/jpeg', size: '230.14 KB', alt: 'About Hing 2' },
      { id: 'about-digestives', name: 'about-digestives.jpg', url: '/src/assets/images/about-digestives.jpg', type: 'image/jpeg', size: '161.86 KB', alt: 'About Digestives' },
      { id: 'about-tea', name: 'about-tea.jpg', url: '/src/assets/images/about-tea.jpg', type: 'image/jpeg', size: '139.45 KB', alt: 'About Tea' },
      { id: 'uploaded-hing-compound-benefits', name: 'uploaded-hing-compound-benefits.jpg', url: '/src/assets/images/uploaded-hing-compound-benefits.jpg', type: 'image/jpeg', size: '428.53 KB', alt: 'Hing Compound Benefits' }
    ];
    localStorage.setItem(STORAGE_KEYS.MEDIA, JSON.stringify(defaultMedia));
  }
}

// Helper getter & setter for generic keys
function getFromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function saveToStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// ─────────────────────────────────────────────────────────────
// PRODUCTS API
// ─────────────────────────────────────────────────────────────
export function getProducts() {
  initDB();
  return getFromStorage(STORAGE_KEYS.PRODUCTS) || [];
}

export function saveProduct(product) {
  const items = getProducts();
  if (product.id) {
    // Edit existing
    const idx = items.findIndex((p) => p.id === Number(product.id));
    if (idx !== -1) {
      items[idx] = { ...items[idx], ...product, id: Number(product.id), price: Number(product.price) };
    }
  } else {
    // Add new
    const newId = items.length > 0 ? Math.max(...items.map(p => p.id)) + 1 : 1;
    items.push({ ...product, id: newId, price: Number(product.price) });
  }
  saveToStorage(STORAGE_KEYS.PRODUCTS, items);
  return items;
}

export function deleteProduct(id) {
  const items = getProducts();
  const updated = items.filter((p) => p.id !== Number(id));
  saveToStorage(STORAGE_KEYS.PRODUCTS, updated);
  return updated;
}

// ─────────────────────────────────────────────────────────────
// HOMEPAGE BLOCK & CONTENT DATA API
// ─────────────────────────────────────────────────────────────
export function getHomeData() {
  initDB();
  return getFromStorage(STORAGE_KEYS.HOMEPAGE) || {};
}

export function saveHomeData(data) {
  saveToStorage(STORAGE_KEYS.HOMEPAGE, data);
}

// Sub-getters & setters for blocks
export function getBlocks() {
  return getHomeData().blocks || {};
}

export function saveBlocks(blocks) {
  const data = getHomeData();
  data.blocks = blocks;
  saveHomeData(data);
}

// Sub-getters & setters for categories
export function getCategories() {
  return getHomeData().categories || [];
}

export function saveCategories(categories) {
  const data = getHomeData();
  data.categories = categories;
  saveHomeData(data);
}

// Sub-getters & setters for best seller IDs
export function getBestSellerIds() {
  return getHomeData().bestSellerIds || [];
}

export function saveBestSellerIds(ids) {
  const data = getHomeData();
  data.bestSellerIds = ids;
  saveHomeData(data);
}

// Sub-getters & setters for blogs
export function getBlogs() {
  return getHomeData().blogs || [];
}

export function saveBlogs(blogs) {
  const data = getHomeData();
  data.blogs = blogs;
  saveHomeData(data);
}

// Sub-getters & setters for FAQs
export function getFAQs() {
  return getHomeData().faqs || [];
}

export function saveFAQs(faqs) {
  const data = getHomeData();
  data.faqs = faqs;
  saveHomeData(data);
}

// Sub-getters & setters for Testimonials
export function getTestimonials() {
  return getHomeData().testimonials || [];
}

export function saveTestimonials(testimonials) {
  const data = getHomeData();
  data.testimonials = testimonials;
  saveHomeData(data);
}

// Sub-getters & setters for Contact Info
export function getContactInfo() {
  return getHomeData().contactInfo || {};
}

export function saveContactInfo(info) {
  const data = getHomeData();
  data.contactInfo = info;
  saveHomeData(data);
}

// Sub-getters & setters for Footer Settings
export function getFooterSettings() {
  return getHomeData().footerData || {};
}

export function saveFooterSettings(footerData) {
  const data = getHomeData();
  data.footerData = footerData;
  saveHomeData(data);
}

// Sub-getters & setters for About Content
export function getAboutContent() {
  return getHomeData().aboutContent || {};
}

export function saveAboutContent(content) {
  const data = getHomeData();
  data.aboutContent = content;
  saveHomeData(data);
}

// ─────────────────────────────────────────────────────────────
// MEDIA LIBRARY API
// ─────────────────────────────────────────────────────────────
export function getMedia() {
  initDB();
  return getFromStorage(STORAGE_KEYS.MEDIA) || [];
}

export function uploadMedia(file) {
  const items = getMedia();
  const newMedia = {
    id: 'media_' + Date.now(),
    name: file.name,
    url: file.url, // Base64 encoded or direct object url
    type: file.type,
    size: file.size,
    alt: file.alt || file.name
  };
  items.push(newMedia);
  saveToStorage(STORAGE_KEYS.MEDIA, items);
  return items;
}

export function renameMedia(id, newName, newAlt) {
  const items = getMedia();
  const idx = items.findIndex((m) => m.id === id);
  if (idx !== -1) {
    items[idx].name = newName;
    items[idx].alt = newAlt || items[idx].alt;
    saveToStorage(STORAGE_KEYS.MEDIA, items);
  }
  return items;
}

export function deleteMedia(id) {
  const items = getMedia();
  const updated = items.filter((m) => m.id !== id);
  saveToStorage(STORAGE_KEYS.MEDIA, updated);
  return updated;
}

// ─────────────────────────────────────────────────────────────
// AUTHENTICATION & SESSION MANAGEMENT API
// ─────────────────────────────────────────────────────────────
export function checkAuth() {
  return !!localStorage.getItem(STORAGE_KEYS.AUTH);
}

export function login(username, password) {
  // Demo password stored in settings or fallback
  const config = getHomeData().settings || { adminUsername: 'admin', adminPassword: 'prabhukul1985' };
  if (username === config.adminUsername && password === config.adminPassword) {
    localStorage.setItem(STORAGE_KEYS.AUTH, 'true');
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem(STORAGE_KEYS.AUTH);
}

export function getAdminSettings() {
  const data = getHomeData();
  return data.settings || { adminUsername: 'admin', adminPassword: 'prabhukul1985', siteTitle: 'Prabhukul – Indian Heritage Food Brand' };
}

export function saveAdminSettings(settings) {
  const data = getHomeData();
  data.settings = settings;
  saveHomeData(data);
}
