import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getBlogs, getBlocks } from '../../services/db';

export default function BlogSection() {
  const [blogs, setBlogs] = useState([]);
  const [config, setConfig] = useState(null);

  useEffect(() => {
    // Only show the first 3 blogs (since 3 columns fit desktop row)
    setBlogs(getBlogs().filter(b => b.published !== false).slice(0, 3));
    setConfig(getBlocks().blogs || { enabled: true });
  }, []);

  if (!config || !config.enabled) return null;

  return (
    <section className="w-full bg-[#FAF6F0] py-10 md:py-14 lg:py-20 border-t border-[#E5DFD5]/40" id="blog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 md:mb-10 gap-4">
          <div className="text-left">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[#C8922A] text-sm">✦</span>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#C8922A] font-semibold">Knowledge Hub</p>
              <span className="text-[#C8922A] text-sm">✦</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0B0C] uppercase tracking-wide">
              Our Hing Legacy
            </h2>
          </div>
          
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#2D0B0C] border-b-2 border-[#D4A64A]/60 hover:text-[#C8922A] hover:border-[#C8922A] transition-colors pb-0.5 self-start sm:self-auto shrink-0 group"
          >
            See All 
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Article Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogs.map((blog) => (
            <div 
              key={blog.id} 
              className="group flex flex-col justify-between bg-white border border-[#E5DFD5] hover:border-[#163728] hover:-translate-y-1 hover:shadow-md transition-all duration-[250ms] ease-in-out rounded-sm overflow-hidden h-full text-left"
            >
              <div className="flex flex-col">
                {/* Article Image */}
                <div className="w-full aspect-[16/10] overflow-hidden bg-[#FAF6F0] relative">
                  <Link to="/blog">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transition-transform duration-[300ms] ease-in-out group-hover:scale-[1.02]" 
                      loading="lazy"
                    />
                  </Link>
                </div>

                {/* Article Content */}
                <div className="p-5 flex flex-col gap-2">
                  {/* Metadata */}
                  <p className="font-sans text-[10px] uppercase tracking-widest text-[#9E9087] font-semibold">
                    Hing / {blog.date}
                  </p>
                  
                  {/* Title */}
                  <Link to="/blog">
                    <h3 className="font-serif text-[17px] font-bold text-[#2D0B0C] group-hover:text-[#163728] transition-colors duration-[250ms] ease-in-out leading-snug line-clamp-2 min-h-[48px]">
                      {blog.title}
                    </h3>
                  </Link>

                  {/* Excerpt */}
                  <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-5 pb-5 pt-2">
                <Link 
                  to="/blog" 
                  className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#163728] border-b border-[#163728]/30 pb-0.5 hover:text-[#C8922A] hover:border-[#C8922A] transition-colors group/btn"
                >
                  Read More 
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
