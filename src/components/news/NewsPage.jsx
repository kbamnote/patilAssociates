import React, { useEffect } from 'react';
import { Calendar, ChevronRight, User } from 'lucide-react';

const NewsPage = () => {
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
            description: "We are excited to announce our upcoming luxury hotel project featuring 150+ suites and a rooftop lounge. This expansion marks a new milestone in our hospitality journey."
        },
        {
            id: 2,
            title: "Award for Excellence in Fine Dining",
            category: "Restaurant & Bar",
            date: "January 15, 2026",
            author: "Media Team",
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800",
            description: "Our diverse culinary team has been recognized for maintaining exceptional food quality and service standards at our signature extensive dining chain."
        },
        {
            id: 3,
            title: "Commercial Complex Phase I Completed",
            category: "Real Estate",
            date: "December 10, 2025",
            author: "Project Management",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
            description: "We have successfully handed over Phase I of our latest commercial hub, on time and with 100% adherence to quality safety standards."
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

                                <button className="flex items-center gap-1 text-orange-500 font-bold text-sm hover:gap-2 transition-all">
                                    Read Full Story <ChevronRight size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsPage;
