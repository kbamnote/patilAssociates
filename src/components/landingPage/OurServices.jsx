import React from "react";
import { Award, Users, Trophy, Fuel, Building, FlaskConical, Factory, Wrench, Zap } from 'lucide-react';
import serviceBanner from '../../assets/services-bg.jpg';

const OurServices = () => {
  const stats = [
    {
      icon: Award,
      title: '25 Years of Experience',
      description: 'Lorem is the dummy text',
    },
    {
      icon: Users,
      title: 'Experienced Workers',
      description: 'Dorem is the dummy text',
    },
    {
      icon: Trophy,
      title: '100+ Awards',
      description: 'Dorem is the dummy text',
    },
  ];

  const services = [
    {
      icon: Fuel,
      title: 'Petroleum and Gas',
      description: 'Printer took a galley of type and scrambled it to make a type specimenbook. It has survived not only nine.',
    },
    {
      icon: Building,
      title: 'Industriual Construction',
      description: 'Printer took a galley of type and scrambled it to make a type specimenbook. It has survived not only nine.',
    },
    {
      icon: FlaskConical,
      title: 'Chemical Research',
      description: 'Printer took a galley of type and scrambled it to make a type specimenbook. It has survived not only nine.',
    },
    {
      icon: Factory,
      title: 'Mechanical Engineering',
      description: 'Printer took a galley of type and scrambled it to make a type specimenbook. It has survived not only nine.',
    },
    {
      icon: Wrench,
      title: 'Mechanical Works',
      description: 'Printer took a galley of type and scrambled it to make a type specimenbook. It has survived not only nine.',
    },
    {
      icon: Zap,
      title: 'Energy Manufacturing',
      description: 'Printer took a galley of type and scrambled it to make a type specimenbook. It has survived not only nine.',
    },
  ];

  return (
    <>
      {/* Stats Bar */}
      <div className="relative -mb-8 z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-orange-500 p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 flex items-start gap-4"
                >
                  <div className="flex-shrink-0">
                    <stat.icon className="w-10 h-10 text-orange-500" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">
                      {stat.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {stat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section 
        className="py-24 pt-32 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${serviceBanner})`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/90"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-gray-300 text-base max-w-2xl mx-auto">
              Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has
              been the industry's standard
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white p-8 text-center hover:shadow-xl transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <service.icon className="w-16 h-16 text-orange-500" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;