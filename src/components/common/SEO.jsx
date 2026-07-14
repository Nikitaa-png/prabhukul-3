import { useEffect } from 'react';

/**
 * SEO component updates the document title and meta description dynamically.
 * 
 * @param {Object} props
 * @param {string} props.title - Page title
 * @param {string} props.description - Meta description tag content
 */
export default function SEO({ title, description }) {
  useEffect(() => {
    // Dynamic page title
    document.title = title ? `${title} | Prabhukul` : 'Prabhukul | Pure, Premium Wellness';
    
    // Dynamic description tag
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description || 'Experience premium and authentic handcrafted organic wellness items from Prabhukul.';
  }, [title, description]);

  return null;
}
