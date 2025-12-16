import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import ScrollAnimation from './ScrollAnimation'; // 1. Import the component

const AboutSection: React.FC = () => {
    return (
        <section className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

                {/* Title */}
                <div className="col-span-full text-center py-8">
                    <ScrollAnimation animation="fade-in-up"> {/* Replaced animate-in */}
                        <h2 className="text-4xl text-black md:text-5xl font-serif-heading font-bold mb-4">
                            About Us
                        </h2>
                    </ScrollAnimation>
                </div>

                {/* Left Column: Banner */}
                {/* Original animation was slide-in-from-left */}
                <ScrollAnimation animation="fade-in-right" className="min-h-[400px] lg:min-h-auto" delay={0.2}>
                    <div className="relative flex flex-col justify-center p-12 lg:p-20 overflow-hidden h-full">
                        <div className="relative z-10 max-w-xl">
                            <h3 className="text-4xl md:text-5xl font-serif-heading font-bold text-white mb-6 leading-tight">
                                3D PRINTING INSIGHTS
                            </h3>
                            <p className="text-lg text-white/90 mb-8 leading-relaxed max-w-md">
                                Explore the world of additive manufacturing — discover innovations, key benefits, and real-world applications of 3D printing technology.
                            </p>
                        </div>
                        <img
                            src="media/banner/about-us-section-homepage-3D-prinitng-insights.jpg"
                            alt="Background"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Dark overlay for better text readability */}
                        <div className="absolute inset-0 bg-black/30 mix-blend-multiply"></div>
                    </div>
                </ScrollAnimation>


                {/* Right Column: Blog Grid */}
                {/* Original animation was slide-in-from-right with delay-200 */}
                <ScrollAnimation animation="fade-in-left" className="h-full" delay={0.4}>
                    <div className="bg-[#B1E6F3] p-12 lg:p-20 flex flex-col justify-center h-full">
                        <div className="flex flex-col gap-8 max-w-xl mx-auto lg:mx-0">

                            {/* Note: The individual blog posts are not wrapped in ScrollAnimation here */}
                            {BLOG_POSTS.slice(0, 3).map(post => (
                                <div key={post.id} className="flex gap-6 items-start group cursor-pointer">
                                    <div className="w-32 h-24 shrink-0 overflow-hidden bg-gray-200">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">{post.category}</span>
                                        <h4 className="text-xl font-bold text-charcoal-900 leading-tight mb-2 font-serif-heading group-hover:text-teal-700 transition-colors">
                                            {post.title}
                                        </h4>
                                        <p className="text-sm text-charcoal-600 line-clamp-2 mb-3 leading-relaxed">
                                            {post.excerpt}
                                        </p>
                                        <Link
                                            to="/blogs"
                                            className="text-xs font-bold text-charcoal-900 border-b border-charcoal-900 self-start pb-0.5 hover:text-teal-700 hover:border-teal-700 transition-colors uppercase tracking-wide"
                                        >
                                            Read more
                                        </Link>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default AboutSection;