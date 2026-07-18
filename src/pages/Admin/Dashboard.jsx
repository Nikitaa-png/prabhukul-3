import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  FolderHeart, 
  BookOpen, 
  Image, 
  MessageSquare, 
  Settings, 
  PlusCircle, 
  Eye, 
  Activity 
} from 'lucide-react';
import { 
  getProducts, 
  getCategories, 
  getBlogs, 
  getMedia, 
  getTestimonials,
  getBlocks 
} from '../../services/db';

export default function Dashboard() {
  const [stats, setStats] = useState({
    products: 0,
    categories: 0,
    blogs: 0,
    media: 0,
    testimonials: 0,
    activeSections: 0
  });

  useEffect(() => {
    const products = getProducts();
    const categories = getCategories();
    const blogs = getBlogs();
    const media = getMedia();
    const testimonials = getTestimonials();
    const blocks = getBlocks();
    
    const activeBlocksCount = Object.values(blocks).filter(b => b.enabled).length;

    setStats({
      products: products.length,
      categories: categories.length,
      blogs: blogs.length,
      media: media.length,
      testimonials: testimonials.length,
      activeSections: activeBlocksCount
    });
  }, []);

  const statCards = [
    { name: 'Products', value: stats.products, icon: ShoppingBag, color: 'text-blue-600 bg-blue-50 border-blue-100', link: '/admin/products' },
    { name: 'Categories', value: stats.categories, icon: FolderHeart, color: 'text-amber-600 bg-amber-50 border-amber-100', link: '/admin/categories' },
    { name: 'Blog Articles', value: stats.blogs, icon: BookOpen, color: 'text-green-600 bg-green-50 border-green-100', link: '/admin/blogs' },
    { name: 'Media Files', value: stats.media, icon: Image, color: 'text-purple-600 bg-purple-50 border-purple-100', link: '/admin/media' },
    { name: 'Testimonials', value: stats.testimonials, icon: MessageSquare, color: 'text-pink-600 bg-pink-50 border-pink-100', link: '/admin/testimonials' },
    { name: 'Active Blocks', value: stats.activeSections, icon: Activity, color: 'text-emerald-600 bg-emerald-50 border-emerald-100', link: '/admin/homepage' },
  ];

  return (
    <div className="space-y-8">
      
      {/* Welcome banner */}
      <div className="bg-white border border-[#E8DDD0] p-6 shadow-sm rounded-sm text-left">
        <h2 className="font-serif text-2xl font-bold text-[#2D0B0C]">Welcome back, Administrator</h2>
        <p className="font-sans text-[13px] text-[#5C534E] mt-1.5 leading-relaxed">
          Manage all sections of the Prabhukul heritage site. Use the sidebar to update products, blogs, categories, or toggle and edit blocks on the Homepage.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {statCards.map((c) => {
          const Icon = c.icon;
          return (
            <Link
              key={c.name}
              to={c.link}
              className={`flex flex-col items-center text-center p-5 border rounded-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 bg-white border-[#E8DDD0]`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 border ${c.color.split(' ').slice(1).join(' ')}`}>
                <Icon className={`w-5 h-5 ${c.color.split(' ')[0]}`} strokeWidth={1.7} />
              </div>
              <span className="text-2xl font-extrabold text-[#2D0B0C] leading-none mb-1">{c.value}</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">{c.name}</span>
            </Link>
          );
        })}
      </div>

      {/* Two column detail layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
        
        {/* Quick Actions Panel */}
        <div className="bg-white border border-[#E8DDD0] p-6 shadow-sm rounded-sm space-y-4">
          <h3 className="font-serif text-lg font-bold text-[#2D0B0C] border-b border-[#FAF6F0] pb-2.5">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              to="/admin/products?action=add"
              className="flex items-center gap-3 p-3.5 bg-[#FAF6F0] border border-[#E8DDD0] hover:bg-[#FAF6F0]/60 transition-colors text-[#2D0B0C]"
            >
              <PlusCircle className="w-5 h-5 text-[#C8922A] shrink-0" />
              <div>
                <p className="text-[12px] font-bold uppercase tracking-wider">Add New Product</p>
                <p className="text-[10px] text-[#9E9087] mt-0.5">Publish a catalog item</p>
              </div>
            </Link>

            <Link
              to="/admin/blogs?action=add"
              className="flex items-center gap-3 p-3.5 bg-[#FAF6F0] border border-[#E8DDD0] hover:bg-[#FAF6F0]/60 transition-colors text-[#2D0B0C]"
            >
              <BookOpen className="w-5 h-5 text-[#163728] shrink-0" />
              <div>
                <p className="text-[12px] font-bold uppercase tracking-wider">Write Blog Post</p>
                <p className="text-[10px] text-[#9E9087] mt-0.5">Create articles & news</p>
              </div>
            </Link>

            <Link
              to="/admin/homepage"
              className="flex items-center gap-3 p-3.5 bg-[#FAF6F0] border border-[#E8DDD0] hover:bg-[#FAF6F0]/60 transition-colors text-[#2D0B0C]"
            >
              <Eye className="w-5 h-5 text-[#3E0F12] shrink-0" />
              <div>
                <p className="text-[12px] font-bold uppercase tracking-wider">Block Manager</p>
                <p className="text-[10px] text-[#9E9087] mt-0.5">Toggle homepage sections</p>
              </div>
            </Link>

            <Link
              to="/admin/media"
              className="flex items-center gap-3 p-3.5 bg-[#FAF6F0] border border-[#E8DDD0] hover:bg-[#FAF6F0]/60 transition-colors text-[#2D0B0C]"
            >
              <Image className="w-5 h-5 text-purple-600 shrink-0" />
              <div>
                <p className="text-[12px] font-bold uppercase tracking-wider">Media Library</p>
                <p className="text-[10px] text-[#9E9087] mt-0.5">Upload images & videos</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Recent sandbox updates */}
        <div className="bg-white border border-[#E8DDD0] p-6 shadow-sm rounded-sm space-y-4">
          <h3 className="font-serif text-lg font-bold text-[#2D0B0C] border-b border-[#FAF6F0] pb-2.5">System Activities</h3>
          
          <div className="space-y-4">
            <div className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-green-500 shrink-0"></span>
              <div>
                <p className="text-[12px] font-semibold text-[#2D0B0C]">Local Storage DB Initialized</p>
                <p className="text-[10px] text-[#9E9087] mt-0.5">Static default values loaded successfully.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0"></span>
              <div>
                <p className="text-[12px] font-semibold text-[#2D0B0C]">Session Guard Active</p>
                <p className="text-[10px] text-[#9E9087] mt-0.5">Route guards verifying authorization.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-amber-500 shrink-0"></span>
              <div>
                <p className="text-[12px] font-semibold text-[#2D0B0C]">Website Synced</p>
                <p className="text-[10px] text-[#9E9087] mt-0.5">Public site is fetching data dynamically from localStorage.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
