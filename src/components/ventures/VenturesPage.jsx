import React, { useEffect } from 'react';
import { ExternalLink, UtensilsCrossed, Hotel, Building2, CheckCircle2, Wine, Coffee, MapPin, Bed, Users as UsersIcon, Briefcase, Home, TrendingUp, Shield } from 'lucide-react';
import ThreeBackground from '../common/ThreeBackground';
import ThreeDivider from '../common/ThreeDivider';

const VenturesPage = () => {
  useEffect(() => {
    document.title = "Our Ventures | Patil Associates Group";
  }, []);

  const ventures = [
    {
      id: "hospitality",
      title: "Hotels & Hospitality",
      subtitle: "Experience Luxury & Comfort",
      description: {
        intro: "Patil Associates takes pride in offering world-class hospitality services that set new standards for luxury and comfort. Our hotels are meticulously designed to provide the perfect blend of modern amenities, aesthetic charm, and functional excellence for both business and leisure travelers.",
        comfortDesign: "Every property reflects our commitment to comfort-driven design, featuring spacious rooms with premium furnishings, state-of-the-art technology, and thoughtfully curated interiors. From plush bedding to intelligent climate control, every detail is crafted to ensure guests enjoy a truly restorative experience.",
        serviceExcellence: "Our hospitality extends beyond infrastructure. We invest heavily in staff training to deliver personalized, anticipatory service. With 24/7 concierge support, fine dining options, wellness facilities, and business centers, we cater to the diverse needs of corporate executives and vacation travelers alike.",
        standards: "We maintain the highest hospitality standards through regular quality audits, hygiene certifications, and guest feedback integration. Whether you're hosting a corporate event in our banquet halls or seeking a peaceful weekend retreat, Patil Associates hotels deliver consistent excellence and unforgettable memories."
      },
      features: [
        { icon: Bed, text: "Luxury Suites & Premium Rooms" },
        { icon: UsersIcon, text: "Banquet Halls & Conference Facilities" },
        { icon: Briefcase, text: "Fully-Equipped Business Centers" },
        { icon: Coffee, text: "24/7 Concierge & Room Service" }
      ],
      image: "https://www.mmoser.com/wp-content/uploads/2022/10/Brand-Experience-article-hospitality-counter-seats.jpg",
      icon: Hotel,
      color: "text-blue-600",
      bgColor: "bg-blue-600",
      bgFrom: "from-blue-50",
      bgTo: "to-white"
    },
    {
      id: "dining",
      title: "Restaurant & Bar",
      subtitle: "A Culinary Journey",
      description: {
        intro: "Our restaurant and bar vertical is dedicated to creating premium dining experiences that celebrate culinary artistry and exceptional hospitality. We combine modern, sophisticated ambiance with exquisite cuisine crafted by expert chefs who source the finest ingredients.",
        conceptAmbience: "Each establishment is designed to offer a unique atmosphere—whether it's an intimate family dinner, a vibrant nightlife experience, or a sophisticated corporate lunch. Our interiors blend contemporary design with warm lighting and comfortable seating, creating spaces where guests feel both relaxed and inspired.",
        qualityPhilosophy: "Quality is our cornerstone. Our chefs curate multi-cuisine menus that balance innovation with authenticity, ensuring every dish is a masterpiece. We maintain rigorous standards for ingredient sourcing, food safety, and preparation techniques. Our premium bar selection features handpicked wines, craft cocktails, and international spirits.",
        customerExperience: "From the moment guests walk in, they experience personalized attention and thoughtful service. We host live music events, private dining experiences, and themed evenings to keep our offerings fresh and exciting. Whether you're celebrating a special occasion, enjoying a casual evening with friends, or hosting a corporate gathering, our restaurants deliver memorable moments."
      },
      features: [
        { icon: UtensilsCrossed, text: "Multi-Cuisine Gourmet Menu" },
        { icon: Wine, text: "Premium Bar & Craft Cocktails" },
        { icon: UsersIcon, text: "Live Music & Special Events" },
        { icon: MapPin, text: "Private Dining & Party Spaces" }
      ],
      image: "https://media.architecturaldigest.com/photos/5be4874f54719d268fefcabb/4:3/w_2664",
      icon: UtensilsCrossed,
      color: "text-orange-500",
      bgColor: "bg-orange-500",
      bgFrom: "from-white",
      bgTo: "to-orange-50"
    },
    {
      id: "real-estate",
      title: "Properties & Real Estate",
      subtitle: "Building the Future",
      description: {
        intro: "In the real estate sector, Patil Associates stands for trust, quality construction, and long-term value creation. We develop residential and commercial projects that offer modern living spaces, strategic business locations, and sustainable infrastructure designed for the future.",
        residentialCommercial: "Our portfolio includes premium apartments, gated communities, and commercial complexes tailored to meet the evolving needs of families and businesses. Each project is conceived with a deep understanding of market demand, lifestyle trends, and urban development patterns, ensuring relevance and appeal for years to come.",
        constructionQuality: "We never compromise on construction quality. Our projects use premium materials, employ skilled craftsmanship, and adhere to international building codes. From structural integrity to finishing touches, every aspect undergoes rigorous quality checks. Our commitment to excellence translates into properties that stand the test of time.",
        locationValue: "Location planning is central to our strategy. We carefully select sites based on accessibility, infrastructure, proximity to schools, hospitals, and commercial hubs, ensuring convenience for residents and high footfall for businesses. Our focus on long-term asset value means every property is an investment that appreciates over time, offering rental yields and capital gains for investors and homeowners alike."
      },
      features: [
        { icon: Home, text: "Premium Apartments & Villas" },
        { icon: Building2, text: "Commercial Complexes & Offices" },
        { icon: Shield, text: "Superior Construction Quality" },
        { icon: TrendingUp, text: "Prime Locations & Asset Value" }
      ],
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1000",
      icon: Building2,
      color: "text-emerald-600",
      bgColor: "bg-emerald-600",
      bgFrom: "from-emerald-50",
      bgTo: "to-white"
    }
  ];

  return (
    <div className="bg-white">
      {/* Header with 3D Background */}
      <div className="relative bg-slate-900 py-20 text-center overflow-hidden">
        <ThreeBackground />
        <div className="relative" style={{ zIndex: 10 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">Our Ventures</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4 animate-fade-in-up animation-delay-200">
            Delivering excellence across three diverse sectors.
          </p>
        </div>
      </div>

      {/* Ventures List */}
      <div>
        {ventures.map((venture, index) => (
          <React.Fragment key={venture.id}>
            <section 
              className={`py-24 bg-gradient-to-b ${venture.bgFrom} ${venture.bgTo}`}
            >
              <div className="container mx-auto px-4">
                <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Image Side with 3D Hover Effect */}
                  <div className="w-full lg:w-1/2">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300 rounded-lg z-10"></div>
                      <img 
                        src={venture.image} 
                        alt={venture.title} 
                        className="rounded-lg shadow-2xl w-full h-[400px] object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                      />
                      {/* Floating Icon */}
                      <div className={`absolute -bottom-6 right-2 lg:right-4 bg-white p-6 rounded-lg shadow-xl z-20 group-hover:-translate-y-2 transition-transform duration-300`}>
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

                    {/* Expanded Descriptions */}
                    <div className="space-y-4 mb-8">
                      <p className="text-gray-600 text-base leading-relaxed">
                        {venture.description.intro}
                      </p>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {venture.id === "hospitality" && venture.description.comfortDesign}
                        {venture.id === "dining" && venture.description.conceptAmbience}
                        {venture.id === "real-estate" && venture.description.residentialCommercial}
                      </p>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {venture.id === "hospitality" && venture.description.serviceExcellence}
                        {venture.id === "dining" && venture.description.qualityPhilosophy}
                        {venture.id === "real-estate" && venture.description.constructionQuality}
                      </p>
                      <p className="text-gray-600 text-base leading-relaxed">
                        {venture.id === "hospitality" && venture.description.standards}
                        {venture.id === "dining" && venture.description.customerExperience}
                        {venture.id === "real-estate" && venture.description.locationValue}
                      </p>
                    </div>
                    
                    {/* Features List with Icons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {venture.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className={`${venture.bgColor} p-2 rounded-lg`}>
                            <feature.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-medium text-slate-700 text-sm">{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    <button className={`flex items-center gap-2 font-bold transition-all hover:gap-3 ${venture.color} text-lg`}>
                      Learn More <ExternalLink size={20} />
                    </button>
                  </div>

                </div>
              </div>
            </section>
            
            {/* 3D Divider between ventures (except after last one) */}
            {index === 0 && <ThreeDivider type="helix" />}
            {index === 1 && <ThreeDivider type="rings" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default VenturesPage;
