import React from 'react';

const AboutSection = () => {
  const features = [
    {
      number: '01',
      title: 'Legacy of Trust',
      description: 'Over two decades of excellence in delivering quality services and building long-lasting relationships.',
    },
    {
      number: '02',
      title: 'Diverse Expertise',
      description: 'Successfully operating across three core sectors: Hospitality, Premium Dining, and Real Estate.',
    },
    {
      number: '03',
      title: 'Customer Centric',
      description: 'Our focus is always on creating value and exceptional experiences for our customers.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left - Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000"
                alt="Patil Associates Office"
                className="w-full h-48 md:h-56 lg:h-120 object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
              Building Dreams
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-orange-500 mb-6">
              Improving Lifestyles
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-base mb-10 leading-relaxed">
              Patil Associates is a diversified conglomerate with a strong presence in Hospitality, Food & Beverage, and Real Estate. 
              Since our inception, we have been committed to delivering world-class experiences and premium living solutions. 
              We believe in quality, innovation, and integrity in everything we do.
            </p>

            {/* Features List */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4 group">
                  {/* Number Circle with Line */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border-2 border-orange-500 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500 transition-colors duration-300">
                      <span className="text-orange-500 font-semibold text-sm group-hover:text-white transition-colors duration-300">
                        {feature.number}
                      </span>
                    </div>
                    {index < features.length - 1 && (
                      <div className="w-0.5 h-16 bg-orange-100 group-hover:bg-orange-300 transition-colors duration-300 my-2"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <h3 className="text-slate-900 font-bold text-lg mb-2 group-hover:text-orange-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;