import React from 'react';
import { UtensilsCrossed, Hotel, Building2 } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: UtensilsCrossed,
      title: 'Restro & Bar',
      description: 'Experience premium dining with a modern ambiance and exquisite cuisine. Implementing the highest standards of food quality and service for families and events.',
      bgColor: 'bg-slate-900',
      iconColor: 'text-orange-500',
      textColor: 'text-white',
    },
    {
      icon: Hotel,
      title: 'Hotels & Hospitality',
      description: 'Luxurious stays designed for comfort and relaxation. Whether for business or leisure, our hospitality services ensure a memorable experience with top-tier amenities.',
      bgColor: 'bg-orange-500',
      iconColor: 'text-white',
      textColor: 'text-white',
    },
    {
      icon: Building2,
      title: 'Properties',
      description: 'Premium residential and commercial real estate solutions. diverse portfolio offering quality construction, modern designs, and long-term value for investors and homeowners.',
      bgColor: 'bg-slate-900',
      iconColor: 'text-orange-500',
      textColor: 'text-white',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Business Verticals
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Patil Associates operates across three diverse sectors, each united by our commitment to excellence and customer satisfaction.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 max-w-6xl mx-auto shadow-2xl rounded-lg overflow-hidden">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${feature.bgColor} ${feature.textColor} p-12 flex flex-col items-center text-center transition-transform duration-300 hover:z-10 hover:scale-105`}
            >
              {/* Icon */}
              <div className="mb-6 bg-white/10 p-4 rounded-full backdrop-blur-sm">
                <feature.icon className={`w-12 h-12 ${feature.iconColor}`} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-4 tracking-wide">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed opacity-90 max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;