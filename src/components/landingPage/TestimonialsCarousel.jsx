import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Farhan Islam',
      position: 'CEO, Doridhub',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      rating: 5,
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.',
    },
    {
      name: 'Sarah Johnson',
      position: 'Director, BuildCo',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
      rating: 5,
      text: 'Working with this team has been an absolute pleasure. Their professionalism and attention to detail exceeded our expectations. Highly recommended for any construction project.',
    },
    {
      name: 'Michael Chen',
      position: 'Manager, TechFactory',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      rating: 5,
      text: 'Outstanding service and quality workmanship. They delivered our factory project on time and within budget. Their expertise in industrial construction is unmatched.',
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  // Get images to display (previous, current, next)
  const getPrevIndex = () => {
    return currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
  };

  const getNextIndex = () => {
    return currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
  };

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Clients Feedback
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has
            been the industry's standard
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-8">
            {/* Left Image - Previous */}
            <div className="hidden lg:block w-64 h-80 flex-shrink-0 opacity-60 grayscale">
              <img
                src={testimonials[getPrevIndex()].image}
                alt="Previous testimonial"
                className="w-full h-full object-cover shadow-xl"
              />
            </div>

            {/* Center Content Card */}
            <div className="bg-white rounded-lg shadow-2xl p-10 max-w-2xl relative">
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-gray-200">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Name */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {testimonials[currentIndex].name}
                </h3>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-orange-500 fill-orange-500" 
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {testimonials[currentIndex].text}
                </p>

                {/* Divider */}
                <div className="w-16 h-1 bg-orange-500 mb-4"></div>

                {/* Position */}
                <p className="text-orange-500 font-semibold text-sm">
                  {testimonials[currentIndex].position}
                </p>
              </div>
            </div>

            {/* Right Image - Next */}
            <div className="hidden lg:block w-64 h-80 flex-shrink-0 opacity-60 grayscale">
              <img
                src={testimonials[getNextIndex()].image}
                alt="Next testimonial"
                className="w-full h-full object-cover shadow-xl"
              />
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-orange-500' 
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;