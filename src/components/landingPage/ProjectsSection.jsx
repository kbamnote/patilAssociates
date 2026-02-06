import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
      category: 'DINING',
      title: 'The Royal Palate - Fine Dining Experience',
    },
    {
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
      category: 'HOSPITALITY',
      title: 'Grand Horizon Hotel & Suites',
    },
    {
      image: 'https://images.unsplash.com/photo-1600596542815-e328d4de4bf7?w=800&q=80',
      category: 'REAL ESTATE',
      title: 'Sunrise Heights - Premium Residences',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Ventures
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
             Explore our signature properties and establishments that define luxury and quality.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden cursor-pointer rounded-xl shadow-lg"
            >
              {/* Image */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-orange-400 text-xs font-bold mb-3 uppercase tracking-widest">
                    {project.category}
                  </p>
                  <h3 className="text-white font-bold text-xl mb-4 leading-snug">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                    <span>View Detail</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;