import React from 'react';
import { Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import bannerImg from '../../assets/banner-bg-1.jpg';

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-fade-in"
        style={{
          // Premium Luxury/Hotel/Building Image
          backgroundImage: `url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 max-w-5xl tracking-tight animate-fade-in-up">
          Patil Associates <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 font-normal text-orange-400">A Legacy of Excellence across Verticals</span>
        </h1>
        
        <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Leading the way in <span className="font-semibold text-white">Restaurant & Bar</span>, <span className="font-semibold text-white">Hotels</span>, and <span className="font-semibold text-white">Properties</span>.
        </p>

        <div className="flex flex-col md:flex-row gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Link to="/ventures">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-full text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1">
              Explore Our Ventures
            </button>
          </Link>
          <Link to="/contact">
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold px-10 py-4 rounded-full text-sm uppercase tracking-wider transition-all duration-300 shadow-lg transform hover:-translate-y-1">
              Get in Touch
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom Icon - Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-3 shadow-lg">
          <Lightbulb className="w-6 h-6 text-orange-400" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;