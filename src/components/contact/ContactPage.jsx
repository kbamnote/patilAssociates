import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactPage = () => {
    useEffect(() => {
        document.title = "Contact Us | Patil Associates Group";
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for your message. We will get back to you shortly.");
    };

    return (
        <div className="bg-white">
             {/* Header */}
             <div className="bg-slate-900 py-20 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto px-4">
                    Have a question or want to discuss a project? We'd love to hear from you.
                </p>
            </div>

            <div className="container mx-auto px-4 py-20">
                <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                    
                    {/* Contact Info & Map */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Contact Information</h2>
                            <p className="text-gray-600 mb-8">
                                Reach out to us for enquiries regarding our properties, hotels, or dining experiences.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-orange-100 p-3 rounded-full">
                                        <MapPin className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Our Offce</h4>
                                        <p className="text-gray-600">Off. No. 101, Business Bay, <br /> Pune, Maharashtra 411045, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-orange-100 p-3 rounded-full">
                                        <Phone className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Phone Number</h4>
                                        <p className="text-gray-600">+91 98765 43210</p>
                                        <p className="text-gray-600">+91 20 1234 5678</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-orange-100 p-3 rounded-full">
                                        <Mail className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">Email Address</h4>
                                        <p className="text-gray-600">info@patilassociates.com</p>
                                        <p className="text-gray-600">sales@patilassociates.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Google Map Placeholder */}
                        <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
                            <iframe 
                                title="Google Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4795797371986!2d73.8189851750239!3d18.5073095825838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf9d41db0001%3A0xc39f8f47ff3a89e!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1707204987411!5m2!1sen!2sin" 
                                width="100%" 
                                height="100%" 
                                style={{border:0}} 
                                allowFullScreen="" 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-xl p-8 border border-gray-100">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" placeholder="John" required />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" placeholder="Doe" required />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" placeholder="john@example.com" required />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Interest</label>
                                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all">
                                    <option>Select an option</option>
                                    <option>Hotel Booking</option>
                                    <option>Real Estate Enquiry</option>
                                    <option>Restaurant Reservation</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all" placeholder="Tell us more about your enquiry..." required></textarea>
                            </div>

                            <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;
