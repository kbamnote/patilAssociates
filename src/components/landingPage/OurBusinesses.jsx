import React from 'react';
import { ArrowRight } from 'lucide-react';
import { getAllBusinesses, externalLinkProps } from '../../config/businessConfig';

const OurBusinesses = () => {
  const businesses = getAllBusinesses();

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-2">
            Our Business Verticals
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Diversified Excellence
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Patil Associates operates across three core sectors, each delivering exceptional 
            value through quality, innovation, and customer-centric service.
          </p>
        </div>

        {/* Business Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((business) => {
            const BusinessIcon = business.icon;
            
            return (
              <div
                key={business.id}
                className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-transparent hover:-translate-y-2"
              >
                {/* Card Header with Icon */}
                <div className={`h-2 bg-gradient-to-r ${business.gradientFrom} ${business.gradientTo}`}></div>
                
                <div className="p-8">
                  {/* Icon */}
                  <div className={`${business.bgColor} w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <BusinessIcon className="w-8 h-8 text-white" />
                  </div>

                  {/* Business Name */}
                  <h3 className={`text-2xl font-bold mb-2 ${business.color}`}>
                    {business.name}
                  </h3>

                  {/* Tagline */}
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
                    {business.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 min-h-[80px]">
                    {business.shortDescription}
                  </p>

                  {/* CTA Button */}
                  <a
                    href={business.url}
                    {...externalLinkProps}
                    className={`inline-flex items-center gap-2 font-bold ${business.color} ${business.hoverColor} text-sm transition-all group-hover:gap-3 hover:text-white px-6 py-3 rounded-lg border-2 ${business.borderColor} hover:bg-current`}
                  >
                    <span className="group-hover:text-white">{business.ctaText}</span>
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>

                {/* Bottom accent */}
                <div className={`h-1 bg-gradient-to-r ${business.gradientFrom} ${business.gradientTo} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <a
            href="/ventures"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-500 font-semibold transition-colors"
          >
            View Detailed Information About All Ventures
            <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurBusinesses;
