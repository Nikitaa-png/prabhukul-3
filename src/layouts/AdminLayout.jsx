import React, { useState, useEffect } from 'react';
import { Link, Outlet, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Home, 
  ShoppingBag, 
  FolderHeart, 
  Image, 
  BookOpen, 
  MessageSquare, 
  HelpCircle, 
  Phone, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  FileImage,
  Award
} from 'lucide-react';
import { checkAuth, logout } from '../services/db';

const menuItems = [
  { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Homepage Sections', path: '/admin/homepage', icon: Home },
  { name: 'Products', path: '/admin/products', icon: ShoppingBag },
  { name: 'Categories', path: '/admin/categories', icon: FolderHeart },
  { name: 'Banners', path: '/admin/banners', icon: FileImage },
  { name: 'Blogs', path: '/admin/blogs', icon: BookOpen },
  { name: 'Testimonials', path: '/admin/testimonials', icon: MessageSquare },
  { name: 'FAQs', path: '/admin/faqs', icon: HelpCircle },
  { name: 'Media Library', path: '/admin/media', icon: Image },
  { name: 'Contact Details', path: '/admin/contact', icon: Phone },
  { name: 'Footer Settings', path: '/admin/footer', icon: Award },
  { name: 'Website Settings', path: '/admin/settings', icon: Settings },
];

export default function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthenticated = checkAuth();

  // Redirect if not logged in
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen flex bg-[#FAF6F0]">
      
      {/* 1. Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-[#E8DDD0] shrink-0">
        {/* Brand header */}
        <div className="h-16 flex items-center px-6 border-b border-[#E8DDD0] gap-3">
          <div className="w-8 h-8 rounded bg-[#3E0F12] flex items-center justify-center text-[#E6B747] font-serif font-bold text-lg">P</div>
          <div>
            <h1 className="font-serif text-sm font-bold text-[#2D0B0C] tracking-wide uppercase leading-none">Prabhukul</h1>
            <span className="text-[9px] uppercase tracking-widest text-[#C8922A] font-semibold">Admin Panel</span>
          </div>
        </div>

        {/* Sidebar Nav */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2.5 text-[12px] font-semibold uppercase tracking-wider rounded-sm transition-all ${
                  isActive
                    ? 'bg-[#3E0F12] text-white'
                    : 'text-[#5C534E] hover:bg-[#FAF6F0] hover:text-[#3E0F12]'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Logout at bottom */}
        <div className="p-4 border-t border-[#E8DDD0]">
          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest bg-red-50 text-red-700 border border-red-100 hover:bg-red-100 transition-colors rounded-sm"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>

      {/* 2. Mobile navigation drawer overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Overlay backdrop */}
          <div className="fixed inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />

          {/* Drawer container */}
          <aside className="relative flex flex-col w-64 max-w-xs bg-white h-full border-r border-[#E8DDD0]">
            <div className="h-16 flex items-center justify-between px-6 border-b border-[#E8DDD0]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#3E0F12] flex items-center justify-center text-[#E6B747] font-serif font-bold text-lg">P</div>
                <div>
                  <h2 className="font-serif text-sm font-bold text-[#2D0B0C] tracking-wide uppercase leading-none">Prabhukul</h2>
                  <span className="text-[9px] uppercase tracking-widest text-[#C8922A] font-semibold">Admin Panel</span>
                </div>
              </div>
              <button onClick={() => setMobileOpen(false)} className="p-1 text-[#5C534E] hover:text-[#3E0F12]">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu */}
            <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-2.5 text-[12px] font-semibold uppercase tracking-wider rounded-sm transition-all ${
                      isActive
                        ? 'bg-[#3E0F12] text-white'
                        : 'text-[#5C534E] hover:bg-[#FAF6F0] hover:text-[#3E0F12]'
                    }`}
                  >
                    <Icon className="w-4 h-4 shrink-0" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Logout */}
            <div className="p-4 border-t border-[#E8DDD0]">
              <button
                onClick={handleLogout}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-[11px] font-bold uppercase tracking-widest bg-red-50 text-red-700 border border-red-100 hover:bg-red-100 transition-colors rounded-sm"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* 3. Main content frame */}
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        
        {/* Header toolbar */}
        <header className="h-16 bg-white border-b border-[#E8DDD0] flex items-center justify-between px-4 sm:px-6 shrink-0">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-1.5 rounded-sm border border-[#E8DDD0] text-[#5C534E] hover:text-[#3E0F12]"
            >
              <Menu className="w-5 h-5" />
            </button>
            <span className="font-serif text-lg font-bold text-[#2D0B0C] capitalize">
              {location.pathname.split('/').pop().replace('-', ' ')}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-bold uppercase tracking-widest border border-[#3E0F12] text-[#3E0F12] px-4 py-2 hover:bg-[#3E0F12] hover:text-white transition-all rounded-sm"
            >
              Visit Website
            </a>
            <div className="hidden sm:flex items-center gap-2 border-l border-[#E8DDD0] pl-4">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-wider text-gray-500 font-semibold">Demo Sandbox Mode</span>
            </div>
          </div>
        </header>

        {/* Dynamic page contents wrapper */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>

    </div>
  );
}
