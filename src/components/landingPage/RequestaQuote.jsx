import React, { useState } from "react";
import { Check, Phone, Mail, MapPin } from 'lucide-react';

const RequestaQuote = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    subscribe: false
  });

  const features = [
    {
      title: 'Premium Quality',
      description: 'We adhere to the highest standards of quality in all our ventures.',
    },
    {
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our priority, ensuring memorable experiences.',
    },
    {
      title: 'Integrity & Trust',
      description: 'Transparent dealings and ethical practices you can rely on.',
    },
  ];

  const rightFeatures = [
    {
      title: 'Innovation',
      description: 'Bringing modern solutions and designs to life.',
    },
    {
      title: 'Sustainability',
      description: 'Eco-friendly practices in our construction and operations.',
    },
    {
      title: 'Community Focus',
      description: 'Contributing positively to the communities we serve.',
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <>
      {/* Why Choose Us Section */}
      <section 
        className="py-20 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1423666639041-f14d70afa3c5?auto=format&fit=crop&q=80&w=1920')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-900/90"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Patil Associates?
            </h2>
            <p className="text-gray-300 text-base max-w-2xl mx-auto">
              We bring decades of experience and excellence to every project and service.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 max-w-5xl mx-auto">
            {/* Left Column */}
            <div className="space-y-8">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded-sm bg-orange-500 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {rightFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded-sm bg-orange-500 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative -mt-14 pb-20 z-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 shadow-2xl">
              {/* Left - Form (2/3 width) */}
              <div className="lg:col-span-2 bg-white p-10">
                <h3 className="text-3xl font-bold text-slate-900 mb-2">
                  Get In Touch
                </h3>
                <p className="text-gray-600 text-sm mb-8">
                  Have a query? Fill out the form below and we'll get back to you.
                </p>

                <form onSubmit={handleSubmit}>
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="px-4 py-3 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="px-4 py-3 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      className="px-4 py-3 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="px-4 py-3 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded text-sm focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Bottom Row */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        name="subscribe"
                        checked={formData.subscribe}
                        onChange={handleChange}
                        className="w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                      />
                      <span className="text-gray-700 text-sm">Subscribe to newsletter</span>
                    </label>

                    <button
                      type="submit"
                      className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-3 rounded-full text-sm uppercase tracking-wide transition-colors duration-300"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </div>

              {/* Right - Contact Details (1/3 width) */}
              <div className="bg-orange-500 p-10 text-white">
                <h3 className="text-3xl font-bold mb-2">
                  Contact Info
                </h3>
                <p className="text-sm mb-10 opacity-90">
                  Reach out to us directly through any of these channels.
                </p>

                {/* Phone */}
                <div className="mb-8">
                  <div className="flex items-start gap-3 mb-3">
                    <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Phone:</p>
                      <p className="text-sm">+91 77092 44142</p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="mb-8">
                  <div className="flex items-start gap-3 mb-3">
                    <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Email:</p>
                      <p className="text-sm">info@patilassociates.in</p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Head Office:</p>
                      <p className="text-sm">Patil Associates Tower,</p>
                      <p className="text-sm">Nagpur, Maharashtra - 440001</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RequestaQuote;