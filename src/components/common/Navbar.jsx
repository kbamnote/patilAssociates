import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Menu, X, Building2, ExternalLink } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { getAllBusinesses, externalLinkProps } from '../../config/businessConfig';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileVenturesOpen, setIsMobileVenturesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);
  const businesses = getAllBusinesses();

  const navItems = [
    { name: 'HOME', path: '/', hasDropdown: false },
    { name: 'ABOUT US', path: '/about', hasDropdown: false },
    { name: 'OUR VENTURES', path: '/ventures', hasDropdown: true },
    { name: 'LATEST NEWS', path: '/news', hasDropdown: false },
  ];

  const isActive = (path) => location.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileVenturesOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white shadow-sm relative sticky top-0 z-50">
      {/* Orange diagonal background */}
      <div
        className="absolute top-0 right-0 h-full bg-orange-500 hidden lg:block"
        style={{
          width: '75%',
          clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
        }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <div className="bg-orange-500 p-2 rounded-lg mr-2">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold tracking-tight">
              <span className="text-orange-500">Patil</span>
              <span className="text-slate-800">Associates</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center flex-1 justify-center">
            <div className="flex gap-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative" ref={item.hasDropdown ? dropdownRef : null}>
                  {item.hasDropdown ? (
                    // Dropdown for Our Ventures
                    <div>
                      <button
                        onClick={() => setOpenDropdown(openDropdown === item.name ? null : item.name)}
                        className={`text-sm font-medium tracking-wide transition-colors flex items-center gap-1 ${
                          isActive(item.path) || openDropdown === item.name
                            ? 'text-orange-600 lg:text-white'
                            : 'text-slate-800 lg:text-white hover:text-orange-600 lg:hover:text-gray-100'
                        }`}
                      >
                        {item.name}
                        <ChevronDown 
                          size={16} 
                          className={`transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`}
                        />
                      </button>
                      
                      {/* Dropdown Menu */}
                      {openDropdown === item.name && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50 animate-fade-in">
                          <div className="px-4 py-2 border-b border-gray-100">
                            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Our Businesses</p>
                          </div>
                          {businesses.map((business) => {
                            const BusinessIcon = business.icon;
                            return (
                              <a
                                key={business.id}
                                href={business.url}
                                {...externalLinkProps}
                                className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
                              >
                                <div className={`${business.bgColor} p-2 rounded-lg group-hover:scale-110 transition-transform`}>
                                  <BusinessIcon className="w-4 h-4 text-white" />
                                </div>
                                <div className="flex-1">
                                  <p className={`font-semibold text-sm ${business.color}`}>
                                    {business.name}
                                  </p>
                                  <p className="text-xs text-gray-500">{business.tagline}</p>
                                </div>
                                <ExternalLink size={14} className="text-gray-400" />
                              </a>
                            );
                          })}
                          <div className="border-t border-gray-100 mt-2 pt-2 px-4">
                            <Link
                              to="/ventures"
                              onClick={() => setOpenDropdown(null)}
                              className="text-sm text-gray-600 hover:text-orange-500 transition-colors flex items-center gap-2"
                            >
                              View All Ventures →
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    // Regular link
                    <Link
                      to={item.path}
                      className={`text-sm font-medium tracking-wide transition-colors ${
                        isActive(item.path)
                          ? 'text-orange-600 lg:text-white border-b-2 border-orange-600 lg:border-white'
                          : 'text-slate-800 lg:text-white hover:text-orange-600 lg:hover:text-gray-100'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link to="/contact">
              <button className="bg-white text-orange-500 px-7 py-2.5 rounded-full font-bold text-sm hover:bg-gray-50 transition transform hover:scale-105">
                CONTACT US
              </button>
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-slate-800 z-50"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed left-0 right-0 top-16 bg-white shadow-lg z-40 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.hasDropdown ? (
                // Our Ventures expandable section
                <div>
                  <button
                    onClick={() => setIsMobileVenturesOpen(!isMobileVenturesOpen)}
                    className={`w-full flex items-center justify-between py-3 px-4 rounded-lg font-medium text-sm transition ${
                      isActive(item.path)
                        ? 'bg-orange-500 text-white'
                        : 'text-slate-700 hover:bg-orange-50 hover:text-orange-600'
                    }`}
                  >
                    {item.name}
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${isMobileVenturesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  
                  {/* Business Links */}
                  {isMobileVenturesOpen && (
                    <div className="mt-2 ml-4 space-y-2 animate-fade-in">
                      {businesses.map((business) => {
                        const BusinessIcon = business.icon;
                        return (
                          <a
                            key={business.id}
                            href={business.url}
                            {...externalLinkProps}
                            onClick={closeMobileMenu}
                            className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-50 transition group"
                          >
                            <div className={`${business.bgColor} p-2 rounded-lg`}>
                              <BusinessIcon className="w-4 h-4 text-white" />
                            </div>
                            <div className="flex-1">
                              <p className={`font-semibold text-sm ${business.color}`}>
                                {business.name}
                              </p>
                              <p className="text-xs text-gray-500">{business.tagline}</p>
                            </div>
                            <ExternalLink size={14} className="text-gray-400" />
                          </a>
                        );
                      })}
                      
                      {/* View All Link */}
                      <Link
                        to="/ventures"
                        onClick={closeMobileMenu}
                        className="block py-2 px-4 text-sm text-orange-500 hover:text-orange-600 font-medium"
                      >
                        View All Ventures →
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                // Regular link
                <Link
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={`block py-3 px-4 rounded-lg font-medium text-sm transition ${
                    isActive(item.path)
                      ? 'bg-orange-500 text-white'
                      : 'text-slate-700 hover:bg-orange-50 hover:text-orange-600'
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          <Link to="/contact" onClick={closeMobileMenu}>
            <button className="w-full bg-orange-500 text-white py-3 rounded-full font-bold text-sm hover:bg-orange-600 transition">
              CONTACT US
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
