import React, { useState, useEffect } from 'react';
import SEO from '../../components/common/SEO';
import { getBlogs } from '../../services/db';
import bgImg from '../../assets/images/WhatsApp Image 2026-07-14 at 03.25.12.jpeg';
import { Clock, BookOpen } from 'lucide-react';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(getBlogs().filter(b => b.published !== false));
  }, []);
  return (
    <>
      <SEO 
        title="Blogs & Journal – Swaad Ka Mastaan, Shuddhta Ki Pehchaan" 
        description="Learn the culinary uses, digestive benefits, and historical journey of organic asafoetida (hing) from Hathras at Prabhukul." 
      />
      <div 
        className="w-full min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF6F0]"
        style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="max-w-6xl mx-auto space-y-10">
          
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center text-[#3E0F12]">
              <BookOpen className="w-8 h-8" />
            </div>
            <h1 
              className="font-serif text-4xl sm:text-5xl font-bold text-[#3E0F12] uppercase tracking-wide"
              style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', serif" }}
            >
              Blogs & Journal
            </h1>
            <p className="font-sans text-[13px] text-[#5C534E] max-w-xl mx-auto leading-relaxed">
              Explore culinary guides, historical facts about Hathras, health advantages of asafoetida, and recipe suggestions.
            </p>
            <div className="flex justify-center mt-2">
              <span className="text-[#D4A64A] text-lg">✦ ❖ ✦</span>
            </div>
          </div>

          {/* Blog Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {blogs.map((blog) => (
              <div key={blog.id} className="group flex flex-col bg-white border border-[#D4A64A]/25 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-[16/10] overflow-hidden bg-[#FAF6F0]">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6 flex flex-col flex-1 gap-3 justify-between">
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-[10px] text-[#9E9087]">
                      <span>{blog.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{blog.readTime}</span>
                    </div>
                    <h2 className="font-serif text-xl font-bold text-[#2D0B0C] leading-snug group-hover:text-[#3E0F12] transition-colors">
                      {blog.title}
                    </h2>
                    <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#D4A64A]/10">
                    <button className="text-[11px] font-bold uppercase tracking-wider text-[#C8922A] hover:text-[#3E0F12] transition-colors">
                      Read Full Article →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
