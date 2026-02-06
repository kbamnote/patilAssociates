import React from 'react';
import { Target, Eye } from 'lucide-react';

const DiscoverSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left - Images */}
          <div className="space-y-4">
            <div className="relative group">
              <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
                  alt="Patil Associates Vision"
                  className="w-full h-98 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-bold text-lg">Building the Future</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2 leading-tight">
              Our Vision <span className="text-orange-500">& Mission</span>
            </h2>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-400 mb-8">
              Guiding Principles of Our Growth
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base mb-10 leading-relaxed">
              At Patil Associates, we are driven by a singular purpose: to deliver excellence across every sector we operate in. 
              Our journey is defined by our commitment to quality, integrity, and sustainable growth.
            </p>

            {/* Our Mission */}
            <div className="mb-8 flex gap-4 group">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                  <Target className="w-6 h-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <div>
                <h3 className="text-slate-900 font-bold text-xl mb-2 group-hover:text-orange-600 transition-colors">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  To create lasting value for our stakeholders by delivering superior products and services in Hospitality, Dining, and Real Estate, while upholding the highest ethical standards.
                </p>
              </div>
            </div>

            {/* Our Vision */}
            <div className="mb-10 flex gap-4 group">
              <div className="flex-shrink-0 mt-1">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-800 transition-colors duration-300">
                  <Eye className="w-6 h-6 text-slate-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              <div>
                <h3 className="text-slate-900 font-bold text-xl mb-2 group-hover:text-slate-800 transition-colors">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  To be a globally recognized conglomerate known for our innovation, customer-centricity, and contribution to the community and environment.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;