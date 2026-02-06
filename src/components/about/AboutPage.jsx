import React, { useEffect } from 'react';
import { Target, Award, Users, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us | Patil Associates Group";
  }, []);

  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="relative py-24 bg-slate-900">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Corporate skyscraper" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Kumbh_Sans']">About Patil Associates</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Building a legacy of excellence across Hospitality, Dining, and Real Estate.</p>
        </div>
      </div>

      {/* Corporate Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Patil Associates is a diversified conglomerate with a steadfast commitment to quality and innovation. 
              Founded with a vision to transform lifestyles, we have successfully established ourselves as a trusted name 
              in <strong>Hotels & Hospitality</strong>, <strong>Restaurant & Bar</strong>, and <strong>Properties & Real Estate</strong>.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our journey is defined by our passion for creating exceptional experiences and value for our stakeholders. 
              Whether it's a luxurious stay, a fine dining experience, or a dream home, Patil Associates ensures perfection in every detail.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vision */}
            <div className="bg-white p-10 rounded-lg shadow-lg border-t-4 border-orange-500 hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be a globally recognized leader across our business verticals, setting new benchmarks for quality, 
                customer satisfaction, and sustainable growth, while positively impacting the communities we serve.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-10 rounded-lg shadow-lg border-t-4 border-slate-900 hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To deliver world-class products and services through innovation, operational excellence, and a customer-centric approach. 
                We aim to build long-term relationships based on trust, integrity, and transparency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Trust */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <Users className="w-10 h-10 text-slate-900 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Trust & Integrity</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe in conducting business with the highest ethical standards, fostering trust with our partners and customers.
              </p>
            </div>

            {/* Quality */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <Award className="w-10 h-10 text-slate-900 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Excellence & Quality</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are committed to delivering nothing but the best, ensuring superior quality in every project and service we undertake.
              </p>
            </div>

            {/* Customer Focus */}
            <div className="text-center group">
              <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <Users className="w-10 h-10 text-slate-900 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Customer Centricity</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our customers are at the heart of everything we do. We strive to exceed their expectations at every touchpoint.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
