import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import ScrollAnimation from '../components/ScrollAnimation';

const ContactUs: React.FC = () => {
    return (
        <div className="pt-0 pb-20 bg-[#DCDCDC] min-h-screen">
            <PageTitle title="Get In Touch" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation animation="fade-in-up">
                    <div className="text-center mb-16">
                        <p className="text-gray-500">Have a question about an order or a custom project? We're here to help.</p>
                    </div>
                </ScrollAnimation>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <ScrollAnimation animation="fade-in-right">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">Name</label>
                                        <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                                        <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Subject</label>
                                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                                    <textarea rows={4} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"></textarea>
                                </div>
                                <button className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition-colors">Send Message</button>
                            </form>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade-in-left">
                        <div className="space-y-8">
                            <div className="bg-charcoal-800 text-white p-8 rounded-xl shadow-lg">
                                <h3 className="text-xl text-white font-bold mb-4">Studio Location</h3>
                                <p className="mb-2">Shop No.61, Jyotirmay Complex, Sector P-1, Cidco Town Centre</p>
                                <p className="mb-6">Seven Hills, Jalna Road , Chh.Sambhajinagar (Aurangabad) Maharashtra-431003.</p>
                                <p className="font-bold">Hours:</p>
                                <p>Mon-Fri: 9am - 7pm</p>
                                <p>Sat: 10am - 4pm</p>
                            </div>
                            <div className="bg-teal-100 p-8 rounded-xl">
                                <h3 className="text-xl font-bold text-teal-800 mb-2">Need a Quick Answer?</h3>
                                <p className="text-teal-700 mb-4">Check out our FAQ section for shipping, returns, and material questions.</p>
                                <Link to="/faq" className="text-teal-800 font-bold underline hover:text-teal-900">Visit FAQ &rarr;</Link>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;