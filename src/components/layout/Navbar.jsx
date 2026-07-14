import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ShoppingBag, User, Heart, Search, ChevronDown, Award, Truck, Leaf, Sparkles, Star } from 'lucide-react';
import logoImg from '../../assets/images/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop', hasDropdown: true },
    { name: 'Our Story', href: '/about' },
    { name: 'Recipes', href: '#' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="w-full flex flex-col z-50 bg-white">
      {/* 1. Announcement Bar */}
      <div className="w-full bg-[#0C1C13] text-white py-2 text-[10px] tracking-[0.08em] font-medium border-b border-[#D4A64A]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="hidden md:flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Leaf className="w-3.5 h-3.5 text-[#E6B747] shrink-0" />
                <span className="uppercase text-gray-200">Authentic Hing Since 1985</span>
              </div>
              <div className="h-3 w-[1px] bg-gray-700" />
              <div className="flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 text-[#E6B747] shrink-0" />
                <span className="uppercase text-gray-200">Proudly Made in India</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-3.5 h-3.5 text-[#E6B747] shrink-0" />
              <span className="uppercase text-gray-200">ISO 9001:2015 Certified</span>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Leaf className="w-3.5 h-3.5 text-[#E6B747] shrink-0" />
                <span className="uppercase text-gray-200">100% Pure & Natural</span>
              </div>
              <div className="h-3 w-[1px] bg-gray-700" />
              <div className="flex items-center space-x-2">
                <Truck className="w-3.5 h-3.5 text-[#E6B747] shrink-0" />
                <span className="uppercase text-gray-200">Pan India Delivery</span>
              </div>
              <div className="h-3 w-[1px] bg-gray-700" />
              <div className="flex items-center space-x-2">
                <Star className="w-3.5 h-3.5 text-[#E6B747] shrink-0" fill="#E6B747" />
                <span className="uppercase text-gray-200">Trusted by Millions</span>
              </div>
            </div>
          </div>

          <div className="flex md:hidden justify-center items-center overflow-x-auto whitespace-nowrap scrollbar-none py-0.5 space-x-4">
            <span className="flex items-center space-x-1 uppercase text-gray-200 text-[9px]">
              <Leaf className="w-3 h-3 text-[#E6B747]" />
              <span>Pure Hing Since 1985</span>
            </span>
            <span className="text-gray-600">|</span>
            <span className="flex items-center space-x-1 uppercase text-gray-200 text-[9px]">
              <Award className="w-3 h-3 text-[#E6B747]" />
              <span>ISO 9001:2015</span>
            </span>
            <span className="text-gray-600">|</span>
            <span className="flex items-center space-x-1 uppercase text-gray-200 text-[9px]">
              <Truck className="w-3 h-3 text-[#E6B747]" />
              <span>Pan India Delivery</span>
            </span>
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
            <nav className="hidden lg:flex items-center gap-3 xl:gap-6">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `text-[13px] tracking-widest uppercase font-medium transition-colors duration-200 flex items-center gap-1 py-2 border-b-2 hover:text-[#8D1B1C] ${
                      isActive && item.href !== '#'
                        ? 'border-[#8D1B1C] text-[#8D1B1C] font-semibold'
                        : 'border-transparent text-gray-700 hover:border-[#8D1B1C]/45'
                    }`
                  }
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-3 h-3 text-gray-400" />}
                </NavLink>
              ))}
            </nav>

            {/* Search Input and Icons */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-5">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="bg-gray-50 border border-gray-200 text-xs rounded-full px-4 py-2 pr-10 w-32 lg:w-40 xl:w-56 focus:outline-none focus:ring-1 focus:ring-[#8D1B1C] focus:bg-white transition-all"
                />
                <Search className="absolute right-3.5 top-2.5 w-3.5 h-3.5 text-gray-400" />
              </div>

              <button aria-label="Profile" className="text-gray-700 hover:text-[#8D1B1C] transition-colors p-1">
                <User className="w-5 h-5" strokeWidth={1.75} />
              </button>
              <button aria-label="Wishlist" className="text-gray-700 hover:text-[#8D1B1C] transition-colors p-1">
                <Heart className="w-5 h-5" strokeWidth={1.75} />
              </button>
              <button aria-label="Cart" className="text-gray-700 hover:text-[#8D1B1C] transition-colors p-1 relative">
                <ShoppingBag className="w-5 h-5" strokeWidth={1.75} />
                <span className="absolute -top-1.5 -right-1.5 bg-[#8D1B1C] text-white font-sans text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
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
            <div className="px-4 space-y-2">
              <div className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="bg-gray-50 border border-gray-200 text-xs rounded-full px-4 py-2.5 pr-10 w-full focus:outline-none"
                />
                <Search className="absolute right-3.5 top-3 w-4 h-4 text-gray-400" />
              </div>

              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-lg text-sm font-medium tracking-wider uppercase transition-all ${
                      isActive && item.href !== '#'
                        ? 'bg-[#8D1B1C]/5 text-[#8D1B1C] font-semibold'
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
