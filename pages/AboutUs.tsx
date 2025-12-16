import React from 'react';
import { Link } from 'react-router-dom';
import {
    PenTool,
    Truck,
    CreditCard,
    RotateCcw,
    Headphones,
    ShieldCheck,
    Settings,
} from 'lucide-react';

import PageTitle from '../components/PageTitle';
import ScrollAnimation from '../components/ScrollAnimation';

const AboutUs: React.FC = () => {
    return (
        <div className="relative">

            {/* ===============================
                SECTION 1 — Mission
                Sticky on md+, scroll on mobile
            =============================== */}
            <div
                className="
                    bg-[#DCDCDC]
                    overflow-hidden

                    h-auto
                    md:sticky md:top-0 md:h-screen

                    flex flex-col
                "
            >
                <PageTitle title="About Us" />

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex items-center py-10">
                    <div className="flex flex-col lg:flex-row items-center gap-10 w-full">

                        {/* Image */}
                        <div className="w-full lg:w-1/2 h-[380px] sm:h-[450px] lg:h-[580px] rounded-2xl overflow-hidden shadow-lg">
                            <ScrollAnimation animation="fade-in-right" className="h-full">
                                <img
                                    src="media/banner/about-us-page-first.jpg"
                                    alt="Modern Interior"
                                    className="w-full h-full object-cover"
                                />
                            </ScrollAnimation>
                        </div>

                        {/* Mission Card */}
                        <div className="w-full lg:w-1/2">
                            <ScrollAnimation animation="fade-in-left">
                                <div className="bg-[#B1E6F3] p-10 sm:p-12 lg:p-16 rounded-sm text-center flex flex-col items-center shadow-md">

                                    <PenTool size={48} strokeWidth={1.5} className="mb-4 text-charcoal-800" />

                                    <h2 className="text-3xl font-serif-heading font-bold text-charcoal-800 mb-2">
                                        Company Mission
                                    </h2>

                                    <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-widest mb-5">
                                        At BE Endless, we create affordable designs for the modern home
                                    </p>

                                    <div className="w-12 h-[2px] bg-gray-300 mb-5" />

                                    <h3 className="text-2xl font-serif-heading font-bold text-charcoal-800 mb-4">
                                        Designs You Desire
                                    </h3>

                                    <p className="text-gray-600 mb-8 leading-relaxed max-w-md">
                                        We love creating art pieces that inspire—pieces you will love for years.
                                        Influenced by mid-century modern & contemporary art.
                                    </p>

                                    <Link
                                        to="/shop"
                                        className="inline-block border border-charcoal-800 text-charcoal-800 px-8 py-3 text-sm tracking-wider font-bold hover:bg-charcoal-800 hover:text-white transition uppercase"
                                    >
                                        SHOP NOW
                                    </Link>
                                </div>
                            </ScrollAnimation>
                        </div>

                    </div>
                </section>
            </div>

            {/* ===============================
                SECTION 2 — Material
                Sticky on md+, scroll on mobile
            =============================== */}
            <div
                className="
                    bg-[#DCDCDC]
                    overflow-hidden

                    h-auto
                    md:sticky md:top-0 md:h-screen

                    flex items-center justify-center
                "
            >
                <section className="w-full h-full flex items-center py-10 md:py-0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 justify-center">

                            {/* Material Card */}
                            <div className="w-full lg:w-1/2 z-10 lg:mr-[-40px]">
                                <ScrollAnimation animation="fade-in-right">
                                    <div className="bg-[#B1E6F3] p-12 sm:p-14 lg:p-20 rounded-sm text-center shadow-xl flex flex-col items-center">

                                        <ShieldCheck size={48} strokeWidth={1.5} className="mb-6 text-charcoal-800" />

                                        <h3 className="text-3xl font-serif-heading font-bold mb-4">
                                            Material
                                        </h3>

                                        <p className="text-gray-700 mb-8 leading-relaxed max-w-md mx-auto">
                                            With carefully selected materials and precision craftsmanship,
                                            we ensure strength, durability, and style in every product.
                                        </p>

                                        <Link
                                            to="/faq?category=2"
                                            className="inline-block border border-charcoal-800 text-charcoal-800 px-8 py-3 text-sm font-bold tracking-wider hover:bg-charcoal-800 hover:text-white transition uppercase"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </ScrollAnimation>
                            </div>

                            {/* Image */}
                            <div className="w-full lg:w-1/2 h-[380px] sm:h-[450px] lg:h-[650px] rounded-lg overflow-hidden shadow-lg">
                                <ScrollAnimation animation="fade-in-left" className="h-full">
                                    <img
                                        src="media/banner/about-us-section-homepage-3D-prinitng-insights.jpg"
                                        alt="Quality Materials"
                                        className="w-full h-full object-cover"
                                    />
                                </ScrollAnimation>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

            {/* ===============================
                SECTION 3 — Features Grid
                Sticky on md+, scroll on mobile
            =============================== */}
            <div
                className="
                    bg-[#DCDCDC]
                    overflow-hidden

                    h-auto
                    md:sticky md:top-0 md:h-screen

                    flex items-center
                "
            >
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
                    <ScrollAnimation animation="fade-in-up">

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">

                            {[
                                { icon: Truck, title: "Free Shipping", desc: "Great low prices", link: "/faq?category=shipping" },
                                { icon: CreditCard, title: "Flexible Payment", desc: "Multiple payment options", link: "/faq?category=payment" },
                                { icon: RotateCcw, title: "14 Day Returns", desc: "Easy exchange process", link: "/faq?category=returns" },
                                { icon: Headphones, title: "Online Support", desc: "24/7 assistance", link: "/faq?category=support" },
                            ].map((item, i) => (
                                <Link
                                    key={i}
                                    to={item.link}
                                    className="flex flex-col items-center p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition"
                                >
                                    <item.icon size={56} strokeWidth={1.2} className="mb-5 text-charcoal-800" />
                                    <h4 className="text-xl font-bold text-charcoal-800 mb-2">{item.title}</h4>
                                    <p className="text-gray-600">{item.desc}</p>
                                </Link>
                            ))}

                        </div>

                    </ScrollAnimation>
                </section>
            </div>

            {/* ===============================
                SECTION 4 — Customisation
                Sticky on md+, scroll on mobile
            =============================== */}
            <div
                className="
                    bg-[#DCDCDC]
                    overflow-hidden

                    h-auto
                    md:sticky md:top-0 md:h-screen

                    flex items-center justify-center
                "
            >
                <section className="w-full h-full flex items-center py-10 md:py-0">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12 justify-center">

                            {/* Image */}
                            <div className="w-full lg:w-1/2 h-[380px] sm:h-[450px] lg:h-[650px] rounded-lg overflow-hidden shadow-lg">
                                <ScrollAnimation animation="fade-in-right" className="h-full">
                                    <img
                                        src="media/banner/customise-section-homepage.jpg"
                                        alt="Customisation"
                                        className="w-full h-full object-cover"
                                    />
                                </ScrollAnimation>
                            </div>

                            {/* Customisation Card */}
                            <div className="w-full lg:w-1/2 z-10 lg:ml-[-40px]">
                                <ScrollAnimation animation="fade-in-left">
                                    <div className="bg-[#B1E6F3] p-12 sm:p-14 lg:p-20 rounded-sm text-center shadow-xl text-charcoal-800 flex flex-col items-center">

                                        <Settings size={48} strokeWidth={1.5} className="mb-6" />

                                        <h3 className="text-3xl font-serif-heading font-bold mb-4">
                                            Customisation
                                        </h3>

                                        <p className="text-gray-700 mb-8 leading-relaxed max-w-md">
                                            Choose from premium materials, expert finishing, and custom options
                                            crafted uniquely for your style.
                                        </p>

                                        <Link
                                            to="/customize"
                                            className="inline-block border border-charcoal-800 text-charcoal-800 px-8 py-3 text-sm font-bold tracking-wider hover:bg-charcoal-800 hover:text-white transition uppercase"
                                        >
                                            Customise
                                        </Link>
                                    </div>
                                </ScrollAnimation>
                            </div>

                        </div>
                    </div>
                </section>
            </div>

        </div>
    );
};

export default AboutUs;
