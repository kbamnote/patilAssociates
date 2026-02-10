import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Header() {
  return (
    <header className="hidden md:block bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          {/* Welcome Text */}
          <div className="text-sm md:text-base font-medium tracking-wide">
            Welcome to Patil Associates Group
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm">
            {/* Phone */}
            <a 
              href="tel:+917709244142" 
              className="flex items-center gap-2 hover:text-orange-400 transition-colors"
            >
              <div className="bg-white/10 p-1.5 rounded-full">
                <Phone size={14} className="text-orange-400" />
              </div>
              <span>+91 77092 44142</span>
            </a>
            
            {/* Email */}
            <a 
              href="mailto:info@patilassociates.in" 
              className="flex items-center gap-2 hover:text-orange-400 transition-colors"
            >
              <div className="bg-white/10 p-1.5 rounded-full">
                <Mail size={14} className="text-orange-400" />
              </div>
              <span>info@patilassociates.in</span>
            </a>
            
            {/* Address */}
            <div className="hidden lg:flex items-center gap-2">
              <div className="bg-white/10 p-1.5 rounded-full">
                <MapPin size={14} className="text-orange-400" />
              </div>
              <span>Nagpur, India</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}