import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, Heart, Search, Leaf, Sparkles } from 'lucide-react';
import logoImg from '../../assets/images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const primaryNavigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Shop', href: '/shop' },
    { name: 'Best Sellers', href: '/best-sellers' },
    { name: 'Blogs', href: '/blog' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const secondaryNavigation = [
    { name: 'Our Story', href: '/our-story' },
    { name: 'Ingredients & Quality', href: '/ingredients-quality' },
    { name: 'Why Choose Us', href: '/why-choose-us' },
    { name: 'Bulk Enquiry', href: '/bulk-enquiry' },
  ];

  const allNavigation = [...primaryNavigation, ...secondaryNavigation];

  return (
    <div className="w-full flex flex-col z-50 bg-white">
      {/* 1. Top Mini Bar (Secondary Nav + Trust Indicators) */}
      <div className="w-full bg-[#3E0F12] text-[#FAF6F0] py-2 text-[10px] tracking-widest font-semibold border-b border-[#D4A64A]/25">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="flex items-center space-x-2">
              <Leaf className="w-3.5 h-3.5 text-[#E6B747] shrink-0" />
              <span className="uppercase text-gray-200">Authentic Hathras Hing Since 1985</span>
            </div>
            
            {/* Secondary navigation on desktop */}
            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {secondaryNavigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `text-[10px] tracking-widest uppercase hover:text-[#E6B747] transition-colors ${
                      isActive ? 'text-[#E6B747] border-b border-[#E6B747]' : 'text-gray-300'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Mobile secondary indicator */}
            <div className="flex lg:hidden items-center space-x-2">
              <Sparkles className="w-3 h-3 text-[#E6B747]" />
              <span className="text-gray-300 text-[9px] uppercase">Premium Quality Guaranteed</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Header (Navbar) */}
      <header className="w-full bg-white border-b border-[#D4A64A]/30 sticky top-0 z-40">
        <div className="w-full max-w-[1440px] mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center h-20">
            
            {/* Prabhukul Logo Block */}
            <Link to="/" className="flex items-center space-x-3 focus:outline-none shrink-0" id="prabhukul-logo-container">
              <img src={logoImg} alt="Prabhukul Logo" className="h-10 w-10 object-contain select-none" />
              <div className="flex flex-col text-left">
                <div className="flex items-start">
                  <span className="font-serif text-2xl font-extrabold tracking-wider text-[#8D1B1C] leading-none">
                    PRABHUKUL
                  </span>
                  <span className="text-[#8D1B1C] text-[8px] font-bold leading-none ml-0.5">®</span>
                </div>
                <span className="font-sans text-[8px] font-extrabold tracking-[0.25em] text-[#8D1B1C] mt-1.5 leading-none">
                  HATHRAS (U.P.) INDIA
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-2 xl:gap-4">
              {primaryNavigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `text-[11px] xl:text-[12px] tracking-widest uppercase font-semibold transition-colors duration-200 py-2 border-b-2 hover:text-[#8D1B1C] ${
                      isActive
                        ? 'border-[#8D1B1C] text-[#8D1B1C]'
                        : 'border-transparent text-gray-700 hover:border-[#8D1B1C]/45'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </nav>

            {/* Search Input and Icons */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-50 border border-gray-200 text-[11px] rounded-full px-3 py-1.5 pr-8 w-24 xl:w-40 focus:outline-none focus:ring-1 focus:ring-[#8D1B1C] focus:bg-white transition-all"
                />
                <Search className="absolute right-2.5 top-2 w-3.5 h-3.5 text-gray-400" />
              </div>

              <button aria-label="Profile" className="text-gray-700 hover:text-[#8D1B1C] transition-colors p-1">
                <User className="w-4.5 h-4.5" strokeWidth={1.75} />
              </button>
              <button aria-label="Wishlist" className="text-gray-700 hover:text-[#8D1B1C] transition-colors p-1">
                <Heart className="w-4.5 h-4.5" strokeWidth={1.75} />
              </button>
              <button aria-label="Cart" className="text-gray-700 hover:text-[#8D1B1C] transition-colors p-1 relative">
                <ShoppingBag className="w-4.5 h-4.5" strokeWidth={1.75} />
                <span className="absolute -top-1.5 -right-1.5 bg-[#8D1B1C] text-white font-sans text-[8px] rounded-full w-3.5 h-3.5 flex items-center justify-center font-bold">
                  0
                </span>
              </button>
            </div>

            {/* Mobile Hamburger and Cart Menu */}
            <div className="flex lg:hidden items-center space-x-3">
              <button aria-label="Cart" className="text-gray-700 hover:text-[#8D1B1C] p-1.5 relative">
                <ShoppingBag className="w-5 h-5" />
                <span className="absolute top-0 right-0 bg-[#8D1B1C] text-white font-sans text-[8px] rounded-full w-3.5 h-3.5 flex items-center justify-center font-bold">
                  0
                </span>
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-[#8D1B1C] p-1.5 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 z-30 py-4 transition-all duration-300">
            <div className="px-4 space-y-1 max-h-[80vh] overflow-y-auto">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="bg-gray-50 border border-gray-200 text-xs rounded-full px-4 py-2.5 pr-10 w-full focus:outline-none"
                />
                <Search className="absolute right-3.5 top-3 w-4 h-4 text-gray-400" />
              </div>

              {allNavigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded-lg text-xs font-semibold tracking-widest uppercase transition-all ${
                      isActive
                        ? 'bg-[#8D1B1C]/5 text-[#8D1B1C]'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[#8D1B1C]'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <div className="pt-4 border-t border-gray-100 flex justify-around text-gray-600">
                <button className="flex items-center space-x-2 py-2 text-xs font-semibold uppercase hover:text-[#8D1B1C]">
                  <User className="w-4 h-4" />
                  <span>Account</span>
                </button>
                <button className="flex items-center space-x-2 py-2 text-xs font-semibold uppercase hover:text-[#8D1B1C]">
                  <Heart className="w-4 h-4" />
                  <span>Wishlist</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
