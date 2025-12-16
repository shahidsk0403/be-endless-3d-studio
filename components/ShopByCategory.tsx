import React from 'react';
import { Link } from 'react-router-dom';
import ScrollAnimation from './ScrollAnimation';

const ShopByCategory: React.FC = () => {
    return (
        <section className="section bg-[#DCDCDC] py-10">
            <div className="block-title text-center mb-12">
                <ScrollAnimation animation="fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-serif-heading font-bold text-charcoal-800">Shop by Category</h2>
                </ScrollAnimation>
            </div>
            <div className="section-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="block block-banners layout-1 banners-effect">
                    <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8">
                        {/* Left Column */}
                        <div className="section-column left sm-m-b">
                            <ScrollAnimation animation="fade-in-left" delay={500} className="h-full">
                                <div className="section-column-wrap h-full">
                                    <div className="block-widget-wrap h-full">
                                        <div className="block-widget-banner layout-1 h-full">
                                            <div className="bg-banner h-full">
                                                <div className="banner-wrapper banners relative group overflow-hidden h-full rounded-2xl">
                                                    <div className="banner-image h-full">
                                                        <Link to="/shop?cat=Lighting" className="block h-full">
                                                            <img
                                                                src="media/banner/shop-by-category-lantern-lighting.png"
                                                                alt="Lamps & Lighting"
                                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div className="banner-wrapper-infor absolute inset-0 flex items-center justify-center pointer-events-none">
                                                        <div className="info">
                                                            <div className="content pointer-events-auto">
                                                                <Link className="button button-white py-3 px-6 text-lg font-semibold rounded-lg backdrop-blur-sm bg-white/30 border border-white/50 shadow-md" to="/shop?cat=Lighting">
                                                                    Lamps & Lighting
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        {/* Right Column */}
                        <div className="section-column right flex flex-col gap-8">
                            {/* Top Row */}
                            <div className="block-widget-wrap p-0">
                                <div className="block-section m-b-15">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                        <div className="section-column column-50 sm-m-b">
                                            <ScrollAnimation animation="fade-in-up" delay={500}>
                                                <div className="block-widget-wrap">
                                                    <div className="block-widget-banner layout-1">
                                                        <div className="bg-banner">
                                                            <div className="banner-wrapper banners relative group overflow-hidden rounded-2xl aspect-[406/304]">
                                                                <div className="banner-image h-full">
                                                                    <Link to="/shop?cat=Office+Utility" className="block h-full">
                                                                        <img
                                                                            src="media/banner/shop-by-category-office-utility.jpeg"
                                                                            alt="Office & Utility"
                                                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="banner-wrapper-infor absolute inset-0 flex items-center justify-center pointer-events-none">
                                                                    <div className="info">
                                                                        <div className="content pointer-events-auto">
                                                                            <Link className="button button-white py-3 px-6 text-lg font-semibold rounded-lg backdrop-blur-sm bg-white/30 border border-white/50 shadow-md" to="/shop?cat=Office+Utility">
                                                                                Office & Utility
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ScrollAnimation>
                                        </div>
                                        <div className="section-column column-50">
                                            <ScrollAnimation animation="fade-in-right" delay={500}>
                                                <div className="block-widget-wrap">
                                                    <div className="block-widget-banner layout-1">
                                                        <div className="bg-banner">
                                                            <div className="banner-wrapper banners relative group overflow-hidden rounded-2xl aspect-[406/304]">
                                                                <div className="banner-image h-full">
                                                                    <Link to="/shop?cat=Home+Decor" className="block h-full">
                                                                        <img
                                                                            src="media/banner/shop-by-category-home-decor.png"
                                                                            alt="Home Decor"
                                                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="banner-wrapper-infor absolute inset-0 flex items-center justify-center pointer-events-none">
                                                                    <div className="info">
                                                                        <div className="content pointer-events-auto">
                                                                            <Link className="button button-white py-3 px-6 text-lg font-semibold rounded-lg backdrop-blur-sm bg-white/30 border border-white/50 shadow-md" to="/shop?cat=Home+Decor">
                                                                                Home Decor
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </ScrollAnimation>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Row */}
                            <div className="block-section">
                                <ScrollAnimation animation="fade-in-left" delay={500}>
                                    <div className="section-container">
                                        <div className="section-row">
                                            <div className="section-column">
                                                <div className="block-widget-wrap">
                                                    <div className="block-widget-banner layout-1">
                                                        <div className="bg-banner">
                                                            <div className="banner-wrapper banners relative group overflow-hidden rounded-2xl aspect-[842/304]">
                                                                <div className="banner-image h-full">
                                                                    <Link to="/customize" className="block h-full">
                                                                        <img
                                                                            src="media/banner/shop-by-category-customise.png"
                                                                            alt="Customise"
                                                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="banner-wrapper-infor absolute inset-0 flex items-center justify-center pointer-events-none">
                                                                    <div className="info">
                                                                        <div className="content pointer-events-auto">
                                                                            <Link className="button button-white py-3 px-6 text-lg font-semibold rounded-lg backdrop-blur-sm bg-white/30 border border-white/50 shadow-md" to="/customize">
                                                                                Customise
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopByCategory;
