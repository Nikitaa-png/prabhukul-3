import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { blogs } from '../../data/homeData';
import bgImg from '../../assets/images/WhatsApp Image 2026-07-14 at 03.25.12.jpeg';

export default function BlogSection() {
  const featured = blogs.find((b) => b.featured);
  const supporting = blogs.filter((b) => !b.featured);

  return (
    <section className="w-full py-14" id="blog-section" style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#C8922A] font-medium mb-2">Knowledge Hub</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2D0B0C]">From Our Blog</h2>
          <div className="mt-3 w-12 h-[2px]  mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Featured article */}
          {featured && (
            <div className="group border border-[#D4A64A]/25  overflow-hidden hover:shadow-md transition-shadow lg:row-span-1">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#C8922A] bg-[#C8922A]/10 px-2 py-0.5">Featured</span>
                <h3 className="font-serif text-xl font-bold text-[#2D0B0C] mt-3 mb-2 leading-tight">{featured.title}</h3>
                <p className="font-sans text-[12px] text-[#5C534E] leading-relaxed mb-4">{featured.excerpt}</p>
                <div className="flex items-center gap-3 text-[10px] text-[#9E9087] mb-4">
                  <span>{featured.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
                </div>
                <Link to={featured.link} className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-[#2D0B0C] border-b border-[#D4A64A] pb-0.5 hover:text-[#C8922A] hover:border-[#C8922A] transition-colors">
                  Read Article <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          )}

          {/* Supporting articles */}
          <div className="flex flex-col gap-4">
            {supporting.map((blog) => (
              <div key={blog.id} className="group flex gap-4  border border-[#D4A64A]/25 p-3 hover:shadow-sm transition-shadow">
                <div className="w-24 h-24 shrink-0 overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="flex flex-col justify-between py-1">
                  <div>
                    <h3 className="font-serif text-[13px] font-bold text-[#2D0B0C] leading-tight mb-1">{blog.title}</h3>
                    <p className="font-sans text-[11px] text-[#5C534E] leading-relaxed line-clamp-2">{blog.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-3 mt-2">
                    <span className="text-[10px] text-[#9E9087]">{blog.readTime}</span>
                    <Link to={blog.link} className="text-[10px] font-semibold uppercase tracking-wider text-[#C8922A] hover:text-[#2D0B0C] transition-colors">
                      Read →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 border border-[#2D0B0C] text-[#2D0B0C] text-[11px] font-semibold tracking-widest uppercase px-8 py-3 hover: hover:text-white transition-all"
          >
            View All Articles <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

