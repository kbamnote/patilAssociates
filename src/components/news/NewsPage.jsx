import React, { useEffect, useState } from 'react';
import { Calendar, ChevronRight, User, X } from 'lucide-react';

const NewsPage = () => {
    const [selectedNews, setSelectedNews] = useState(null);
    
    useEffect(() => {
        document.title = "Latest News | Patil Associates Group";
    }, []);

    const newsItems = [
        {
            id: 1,
            title: "New Premium Hotel Layout Announced in Pune",
            category: "Hospitality",
            date: "February 2, 2026",
            author: "Patil Associates Press",
            image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800",
            description: "We are excited to announce our upcoming luxury hotel project featuring 150+ suites and a rooftop lounge. This expansion marks a new milestone in our hospitality journey.",
            fullContent: "Patil Associates is proud to announce the development of a new premium hotel in the heart of Pune, Maharashtra. This state-of-the-art hospitality project represents our continued commitment to delivering world-class accommodation and service excellence.\n\nThe new property will feature over 150 luxury suites, each meticulously designed with modern amenities, premium furnishings, and intelligent climate control systems. Guests will enjoy spacious rooms with contemporary interiors, high-speed Wi-Fi, and stunning city views.\n\nKey highlights include a rooftop lounge and bar offering panoramic views, a fully-equipped business center, conference facilities for corporate events, a wellness spa and fitness center, and multiple dining options featuring multi-cuisine menus.\n\nConstruction is scheduled to commence in Q2 2026, with the grand opening planned for early 2027. This project reinforces our position as a leading hospitality provider in Western India and demonstrates our vision for creating memorable guest experiences that blend luxury, comfort, and exceptional service."
        },
        {
            id: 2,
            title: "Award for Excellence in Fine Dining",
            category: "Restaurant & Bar",
            date: "January 15, 2026",
            author: "Media Team",
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
            description: "Our diverse culinary team has been recognized for maintaining exceptional food quality and service standards at our signature extensive dining chain.",
            fullContent: "Patil Bars has been honored with the prestigious 'Excellence in Fine Dining' award at the Maharashtra Hospitality Awards 2026. This recognition celebrates our unwavering commitment to culinary excellence, innovation, and exceptional customer service.\n\nThe award acknowledges our dedication to sourcing premium ingredients, maintaining rigorous food safety standards, and delivering consistently outstanding dining experiences. Our expert chefs have created multi-cuisine menus that balance traditional authenticity with contemporary innovation.\n\nOur restaurants are known for their sophisticated ambiance, combining modern design with warm lighting and comfortable seating. Guests enjoy personalized service, live music events, and themed dining experiences that make every visit memorable.\n\nThis achievement reflects the hard work and passion of our entire team – from our chefs and kitchen staff to our servers and management. We remain committed to pushing culinary boundaries while maintaining the highest standards of quality and service that our guests have come to expect from Patil Bars."
        },
        {
            id: 3,
            title: "Commercial Complex Phase I Completed",
            category: "Real Estate",
            date: "December 10, 2025",
            author: "Project Management",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
            description: "We have successfully handed over Phase I of our latest commercial hub, on time and with 100% adherence to quality safety standards.",
            fullContent: "Patil Properties is delighted to announce the successful completion and handover of Phase I of our landmark commercial complex in Nagpur. This milestone achievement demonstrates our commitment to quality construction, timely delivery, and adherence to international building standards.\n\nThe commercial hub spans 2.5 lakh square feet and features modern office spaces, retail outlets, and premium amenities designed for businesses and entrepreneurs. Every aspect of the construction has been executed with meticulous attention to detail, using premium materials and employing skilled craftsmanship.\n\nKey features include Grade A office spaces with flexible layouts, 24/7 security and surveillance systems, ample parking facilities, power backup and water supply, high-speed elevator systems, and modern fire safety measures.\n\nThe complex has achieved 100% pre-leasing, with leading corporate tenants already moving in. Phase II is currently under construction and is expected to be completed by Q3 2026. This project reinforces our reputation as a trusted real estate developer committed to creating value for investors and occupants alike through strategic location selection and superior construction quality."
        }
    ];

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header */}
            <div className="bg-slate-900 py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Latest News & Updates</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
                    Stay updated with the latest announcements, project launches, and achievements from Patil Associates.
                </p>
            </div>

            {/* News Grid */}
            <div className="container mx-auto px-4 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {newsItems.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group flex flex-col">
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                    {item.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={12} />
                                        <span>{item.date}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <User size={12} />
                                        <span>{item.author}</span>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-orange-500 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                                    {item.description}
                                </p>

                                <button 
                                    onClick={() => setSelectedNews(item)}
                                    className="flex items-center gap-1 text-orange-500 font-bold text-sm hover:gap-2 transition-all"
                                >
                                    Read Full Story <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Full Story Modal */}
            {selectedNews && (
                <div 
                    className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setSelectedNews(null)}
                >
                    <div 
                        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header Image */}
                        <div className="relative h-64 md:h-80 overflow-hidden">
                            <img
                                src={selectedNews.image}
                                alt={selectedNews.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedNews(null)}
                                className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-2 rounded-full transition-colors"
                                aria-label="Close"
                            >
                                <X size={24} />
                            </button>

                            {/* Category Badge */}
                            <div className="absolute bottom-4 left-6 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                {selectedNews.category}
                            </div>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6 md:p-8">
                            {/* Meta Info */}
                            <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                <div className="flex items-center gap-2">
                                    <Calendar size={16} />
                                    <span>{selectedNews.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User size={16} />
                                    <span>{selectedNews.author}</span>
                                </div>
                            </div>

                            {/* Title */}
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                                {selectedNews.title}
                            </h2>

                            {/* Full Content */}
                            <div className="prose max-w-none">
                                {selectedNews.fullContent.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="text-gray-700 text-base leading-relaxed mb-4">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>

                            {/* Close Button at Bottom */}
                            <div className="mt-8 pt-6 border-t border-gray-200">
                                <button
                                    onClick={() => setSelectedNews(null)}
                                    className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold transition-colors"
                                >
                                    Close Article
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewsPage;
