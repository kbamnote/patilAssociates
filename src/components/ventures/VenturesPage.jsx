import React, { useEffect } from 'react';
import { ExternalLink, UtensilsCrossed, Hotel, Building2, CheckCircle2 } from 'lucide-react';

const VenturesPage = () => {
  useEffect(() => {
    document.title = "Our Ventures | Patil Associates Group";
  }, []);

  const ventures = [
    {
      id: "hospitality",
      title: "Hotels & Hospitality",
      subtitle: "Experience Luxury & Comfort",
      description: "Patil Associates takes pride in offering world-class hospitality services. Our hotels are designed to provide the perfect blend of luxury, comfort, and functionality for both business and leisure travelers. From state-of-the-art amenities to personalized service, we ensure every guest leaves with unforgettable memories.",
      features: ["Luxury Suites", "Banquet Halls", "Business Centers", "24/7 Concierge"],
      image: "https://images.unsplash.com/photo-1571896349842-6e5423076040?auto=format&fit=crop&q=80&w=1000",
      icon: Hotel,
      color: "text-blue-600",
      bgFrom: "from-blue-50",
      bgTo: "to-white"
    },
    {
      id: "dining",
      title: "Restaurant & Bar",
      subtitle: "A Culinary Journey",
      description: "Our restaurant and bar vertical focuses on creating premium dining experiences. We combine modern ambiance with exquisite cuisine crafted by expert chefs. Whether it's a family dinner, a corporate lunch, or a lively evening with friends, our establishments set the gold standard for food quality and beverage service.",
      features: ["Multi-cuisine Menu", "Premium Bar Selection", "Live Music & Events", "Private Dining"],
      image: "https://images.unsplash.com/photo-1514362545857-3bc16549766b?auto=format&fit=crop&q=80&w=1000",
      icon: UtensilsCrossed,
      color: "text-orange-500",
      bgFrom: "from-white",
      bgTo: "to-orange-50"
    },
    {
      id: "real-estate",
      title: "Properties & Real Estate",
      subtitle: "Building the Future",
      description: "In the real estate sector, Patil Associates stands for trust and quality construction. We develop residential and commercial projects that offer modern living spaces and strategic business locations. Our focus is on sustainable development, timely delivery, and ensuring long-term value for our investors and homeowners.",
      features: ["Premium Apartments", "Commercial Spaces", "Quality Construction", "Prime Locations"],
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1000",
      icon: Building2,
      color: "text-emerald-600",
      bgFrom: "from-emerald-50",
      bgTo: "to-white"
    }
  ];

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-900 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">Our Ventures</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4 animate-fade-in-up animation-delay-200">
          Delivering excellence across three diverse sectors.
        </p>
      </div>

      {/* Ventures List */}
      <div>
        {ventures.map((venture, index) => (
          <section 
            key={venture.id} 
            className={`py-24 bg-gradient-to-b ${venture.bgFrom} ${venture.bgTo}`}
          >
            <div className="container mx-auto px-4">
              <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 rounded-lg z-10"></div>
                    <img 
                      src={venture.image} 
                      alt={venture.title} 
                      className="rounded-lg shadow-2xl w-full h-[400px] object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    {/* Floating Icon */}
                    <div className="absolute -bottom-6 -right-6 lg:-right-10 bg-white p-6 rounded-lg shadow-xl z-20">
                      <venture.icon className={`w-12 h-12 ${venture.color}`} />
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className="flex items-center gap-2 mb-4">
                     <span className={`px-4 py-1 rounded-full bg-white border shadow-sm text-sm font-bold uppercase tracking-wider ${venture.color}`}>
                       {venture.subtitle}
                     </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-['Kumbh_Sans']">
                    {venture.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {venture.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {venture.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className={`w-5 h-5 ${venture.color}`} />
                        <span className="font-medium text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`flex items-center gap-2 font-bold transition-colors hover:gap-3 ${venture.color}`}>
                    Learn More <ExternalLink size={18} />
                  </button>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default VenturesPage;
