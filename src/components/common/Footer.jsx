import React from "react";
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Heart, Instagram, ChevronUp, Building2 } from 'lucide-react';
import footerBg from '../../assets/footer-bg.jpg';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Heart, href: '#', label: 'Heart' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  const footerLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Ventures', href: '/ventures' },
    { name: 'Latest News', href: '/news' },
    { name: 'Contact', href: '/contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Main Footer */}
      <footer 
        className="relative bg-cover bg-center bg-no-repeat py-20"
        style={{
          backgroundImage: `url(${footerBg})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/95"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo */}
            <div className="flex items-center justify-center mb-6">
              <div className="bg-orange-500 p-2.5 rounded-lg mr-2">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <span className="ml-2 text-3xl font-bold tracking-tight">
                <span className="text-orange-500">Patil</span>
                <span className="text-white">Associates</span>
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-3xl mx-auto">
              Patil Associates is a premier conglomerate committed to excellence in Hospitality, Premium Dining, and Real Estate. 
              We build legacies through trust, quality, and sustainable innovation.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-white/5 backdrop-blur-sm rounded flex items-center justify-center hover:bg-orange-500 hover:text-white text-gray-400 transition-colors duration-300 group ring-1 ring-white/10 hover:ring-0"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-black border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              Copyright © 2025 <span className="text-white">Patil Associates</span> | All Rights Reserved
            </p>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="text-gray-400 text-sm hover:text-orange-500 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 z-50"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>
    </>
  );
};

export default Footer;