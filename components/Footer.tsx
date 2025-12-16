import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Column 1: Logo */}
                    <div>
                        <h2 className="text-2xl text-white font-serif-heading font-bold mb-4">BE ENDLESS</h2>
                        <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                            Bringing imagination to reality, one layer at a time. Premium 3D printed decor and utility tailored to your lifestyle.
                        </p>
                    </div>

                    {/* Column 2: Contact Us */}
                    <div>
                        <h4 className="text-lg text-white font-bold mb-6">Contact Us</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-center"><Phone size={16} className="mr-3 text-teal-600" /> +91 97679 </li>
                            <li className="flex items-center"><Mail size={16} className="mr-3 text-teal-600" />endless3dprinting44@gmail.com</li>
                            <li className="flex items-start"><MapPin size={16} className="mr-3 text-teal-600 mt-1" /> Shop No.61, Jyotirmay Complex, Sector P-1, Cidco Town Centre, Seven Hills, Jalna Road Chh.Sambhajinagar (Aurangabad) Maharashtra-431003.<br />Tech Park, Bangalore</li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div>
                        <h4 className="text-lg text-white font-bold mb-6">Services</h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/shop" className="hover:text-teal-600 transition-colors">Shop All</Link></li>
                            <li><Link to="/customize" className="hover:text-teal-600 transition-colors">Custom Orders</Link></li>
                            <li><Link to="/about" className="hover:text-teal-600 transition-colors">Materials Guide</Link></li>
                            <li><Link to="/faq" className="hover:text-teal-600 transition-colors">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h4 className="text-lg text-white font-bold mb-6">Newsletter</h4>
                        <p className="text-sm text-gray-400 mb-4">Subscribe for exclusive offers and 3D printing insights.</p>
                        <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="px-4 py-2 bg-white border border-gray-300 focus:outline-none focus:border-teal-500"
                            />
                            <button type="submit" className="px-4 py-2 bg-teal-600 text-white font-semibold hover:bg-teal-700 transition-colors uppercase tracking-wider text-sm">
                                Subscribe
                            </button>
                        </form>
                        <div className="mt-4">
                            <img src="media/payments.png" alt="Payment Methods" className="opacity-60 grayscale" />
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {new Date().getFullYear()} BE Endless. All Rights Reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-teal-600"><Twitter size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-teal-600"><Instagram size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-teal-600"><Facebook size={20} /></a> {/* Using Facebook icon as placeholder for Dribbble/Behance if not available */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;