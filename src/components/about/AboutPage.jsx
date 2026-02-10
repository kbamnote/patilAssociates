import React, { useEffect } from 'react';
import { Target, Award, Users, TrendingUp, Building2, Heart, Shield, Lightbulb } from 'lucide-react';
import ThreeBackground from '../common/ThreeBackground';
import ThreeDivider from '../common/ThreeDivider';

const AboutPage = () => {
  useEffect(() => {
    document.title = "About Us | Patil Associates Group";
  }, []);

  return (
    <div className="bg-white">
      {/* Page Header with 3D Background */}
      <div className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
            alt="Corporate skyscraper" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <ThreeBackground />
        <div className="relative container mx-auto px-4 text-center" style={{ zIndex: 10 }}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-['Kumbh_Sans']">About Patil Associates</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Building a legacy of excellence across Hospitality, Dining, and Real Estate.</p>
        </div>
      </div>

      {/* Corporate Overview - Expanded */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Patil Associates is a <strong>multi-venture business group</strong> with a steadfast commitment to quality, innovation, and operational excellence. 
              Founded with a vision to transform lifestyles and create lasting value, we have successfully established ourselves as a trusted name 
              in <strong>Hotels & Hospitality</strong>, <strong>Restaurant & Bar</strong>, and <strong>Properties & Real Estate</strong>.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our journey is defined by our passion for creating exceptional experiences and value for our stakeholders. 
              Whether it's a luxurious stay, a fine dining experience, or a dream home, Patil Associates ensures perfection in every detail. 
              We understand that success lies not just in delivering services, but in building relationships that stand the test of time.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              As a diversified conglomerate, we leverage synergies across our business verticals to deliver integrated solutions that exceed expectations. 
              Our commitment to sustainability, community development, and customer satisfaction remains at the core of our operations.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              With a foundation built on <strong>trust, transparency, and integrity</strong>, Patil Associates continues to grow while staying true to our core values. 
              We believe in controlled expansion that prioritizes quality over quantity, ensuring that every project, every property, and every guest experience 
              reflects our dedication to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Leadership & Founder</h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left - Image Placeholder */}
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg transform rotate-3"></div>
                  <div className="relative bg-slate-800 rounded-lg overflow-hidden shadow-2xl">
                    <div className="aspect-[4/5] relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center">
                        <div className="text-center text-white">
                          <Building2 className="w-24 h-24 mx-auto mb-4 opacity-50" />
                          <p className="text-lg font-semibold opacity-75">Balu Patil</p>
                          <p className="text-sm opacity-50">Founder & Chairman</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="order-1 lg:order-2">
                <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-orange-500">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Balu Patil</h3>
                  <p className="text-orange-600 font-semibold mb-6 text-lg">Founder & Chairman</p>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    <strong>Balu Patil</strong> is the visionary founder and driving force behind Patil Associates Group. 
                    With a deep commitment to excellence and an unwavering focus on quality, he has built the organization 
                    from the ground up into a respected name across multiple industries.
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Under his leadership, Patil Associates has expanded into <strong>Hotels & Hospitality</strong>, 
                    <strong> Restaurant & Bar</strong>, and <strong>Properties & Real Estate</strong>, maintaining 
                    the highest standards in each vertical. His philosophy of controlled growth and customer-first approach 
                    has been instrumental in establishing the group's reputation for reliability and premium service.
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed">
                    Balu Patil believes that true success is measured not just by business achievements, but by the lasting 
                    relationships built with customers, employees, and communities. His values of <strong>integrity, transparency, 
                    and sustainable growth</strong> continue to guide every decision and shape the future of Patil Associates Group.
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500 italic">
                      "Quality over quantity, relationships over transactions, and legacy over short-term gains."
                    </p>
                    <p className="text-sm text-gray-700 font-semibold mt-2">— Balu Patil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Divider */}
      <ThreeDivider type="rings" />

      {/* Vision & Mission - Enhanced */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vision */}
            <div className="bg-white p-10 rounded-lg shadow-lg border-t-4 border-orange-500 hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                To be a <strong>globally recognized leader</strong> across our business verticals, setting new benchmarks for quality, 
                customer satisfaction, and sustainable growth, while positively impacting the communities we serve.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We envision a future where Patil Associates is synonymous with excellence in hospitality, culinary experiences, and premium real estate development. 
                Our goal is to create spaces and experiences that enrich lives and build lasting legacies.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-10 rounded-lg shadow-lg border-t-4 border-slate-900 hover:-translate-y-2 transition-transform duration-300">
              <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                To deliver <strong>world-class products and services</strong> through innovation, operational excellence, and a customer-centric approach. 
                We aim to build long-term relationships based on trust, integrity, and transparency.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to consistently exceed expectations by investing in our people, embracing cutting-edge practices, and maintaining 
                the highest standards of quality across all our ventures. We measure success not just in revenue, but in the satisfaction and loyalty of our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Divider */}
      <ThreeDivider type="helix" />

      {/* Leadership & Values - NEW SECTION */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Leadership & Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our values guide every decision we make and define how we conduct business across all verticals. 
              They are the foundation of our reputation and the promise we make to every stakeholder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {/* Trust & Transparency */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-orange-500">
              <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Shield className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">Trust & Transparency</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                We believe in honest communication and ethical business practices. Every partnership, contract, and customer interaction 
                is built on a foundation of complete transparency and mutual respect.
              </p>
            </div>

            {/* Quality & Consistency */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">Quality & Consistency</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Excellence is not an act but a habit. We maintain rigorous quality standards across all our ventures, 
                ensuring that every product, service, and experience meets the highest benchmarks without compromise.
              </p>
            </div>

            {/* Customer-Centric Approach */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-emerald-500">
              <div className="bg-emerald-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">Customer-Centric Approach</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Our customers are at the heart of everything we do. We listen, adapt, and innovate based on their needs, 
                striving not just to meet but to exceed expectations at every touchpoint and interaction.
              </p>
            </div>

            {/* Long-Term Relationships */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-purple-500">
              <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 text-center">Long-Term Relationships</h3>
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                We view every interaction as the beginning of a lasting partnership. Our focus is on building enduring relationships 
                with customers, employees, and partners that create mutual value over years, not just transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3D Divider */}
      <ThreeDivider type="sphere" />

      {/* Growth Philosophy - NEW SECTION */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-orange-100 p-4 rounded-full mb-6">
                <Lightbulb className="w-12 h-12 text-orange-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Growth Philosophy</h2>
              <div className="w-20 h-1 bg-orange-500 mx-auto rounded-full mb-8"></div>
            </div>

            <div className="bg-white p-10 rounded-lg shadow-lg">
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Patil Associates, we believe in <strong>controlled, strategic expansion</strong> that prioritizes quality over rapid scaling. 
                Unlike businesses that chase volume, we focus on building premium experiences that reflect our brand values and deliver 
                exceptional value to our customers and investors.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Our growth strategy is rooted in <strong>operational excellence and sustainable practices</strong>. We carefully evaluate every new venture, 
                ensuring it aligns with our core competencies and has the potential to maintain our high standards. This disciplined approach 
                has enabled us to build a reputation for reliability and quality that sets us apart in competitive markets.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We measure success not by the number of properties or establishments, but by the <strong>satisfaction of our customers, 
                the loyalty of our stakeholders, and the positive impact we create in the communities we serve</strong>. This philosophy guides 
                our decisions, from site selection and design to service delivery and long-term asset management. 
                Reputation over volume—this is the Patil Associates way.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
