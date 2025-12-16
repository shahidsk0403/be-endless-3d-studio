import React from 'react';
import { Link } from 'react-router-dom';
import { Plus } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const CustomizeSection: React.FC = () => {
    return (
        <section className="bg-[#DCDCDC] py-10">
            <div className="max-w-7xl mx-auto">
                <ScrollAnimation animation="fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-serif-heading font-bold text-center mb-12 text-charcoal-800">Customize your Product</h2>
                </ScrollAnimation>

                <div className="grid grid-cols-1 lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl">
                    {/* Left Column: Text Block */}
                    <div className="bg-[#B1E6F3] p-12 lg:p-20 flex flex-col justify-center">
                        <ScrollAnimation animation="fade-in-right">
                            <h3 className="text-3xl md:text-4xl font-serif-heading font-bold text-charcoal-800 mb-6">
                                From Digital Dreams to Physical Creations
                            </h3>
                            <p className="text-lg text-charcoal-700 mb-8 leading-relaxed">
                                Our advanced customization tools allow you to tweak every detail. Choose your material, color, and finish to create a piece that is truly yours.
                            </p>
                            <div>
                                <Link to="/customize" className="inline-block bg-charcoal-800 text-white px-8 py-4 font-bold rounded-lg hover:bg-charcoal-700 transition-colors shadow-lg">
                                    Start Customizing
                                </Link>
                            </div>
                        </ScrollAnimation>
                    </div>

                    {/* Right Column: Lookbook with Hotspots */}
                    <div className="relative bg-[#DCDCDC] min-h-[400px]">
                        <ScrollAnimation animation="fade-in-left" className="h-full">
                            <img
                                src="media/banner/customise-section-homepage.jpg"
                                alt="Custom Product"
                                className="w-full h-full object-cover"
                            />
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomizeSection;
