import React, { useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const navItems = [
    { name: 'HOME', path: '/', hasDropdown: false },
    { name: 'ABOUT US', path: '/about', hasDropdown: false },
    { name: 'VENTURES', path: '/ventures', hasDropdown: false },
    { name: 'LATEST NEWS', path: '/news', hasDropdown: false },

  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-sm relative overflow-hidden">
      {/* Orange diagonal background */}
      <div 
        className="absolute top-0 right-0 h-full bg-orange-500"
        style={{
          width: '75%',
          clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
        }}
      />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            {/* <svg className="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z"/>
            </svg> */}
            <span className="ml-1 text-2xl font-bold tracking-tight">
              <span className="text-orange-500">Patil</span>
              <span className="text-slate-800">Associates</span>
            </span>
          </Link>
          
          {/* Centered Navigation Links */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center gap-7">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.name)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link 
                    to={item.path}
                    className={`flex items-center gap-1 transition-colors font-medium text-sm tracking-wide ${isActive(item.path) ? 'text-slate-900 border-b-2 border-white lg:text-white lg:border-white' : 'text-white hover:text-gray-100'}`}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <ChevronDown size={14} className="mt-0.5" />
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Get A Quote Button */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <button className="bg-white text-orange-500 px-7 py-2.5 rounded-full font-bold text-sm hover:bg-gray-50 transition-colors tracking-wide shadow-sm transform hover:scale-105 active:scale-95 duration-200">
                CONTACT US
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-gray-700">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
}