import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import ScrollAnimation from '../components/ScrollAnimation';
import { BLOG_POSTS } from '../constants';
import { Mail, ArrowRight } from 'lucide-react';

const Blogs: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`Subscribed with: ${email}`);
        setEmail('');
    };

    return (
        <div className="pt-0 pb-20 min-h-screen bg-[#DCDCDC]">
            <PageTitle title="Our Blog" breadcrumbs={[{ label: 'Home', path: '/' }]} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {BLOG_POSTS.map((post, index) => (
                        <ScrollAnimation key={post.id} animation="fade-in-up" delay={index * 100}>
                            <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col group">
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold uppercase tracking-wider text-charcoal-800 rounded-sm">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-1">
                                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                                        <span>{post.date}</span>
                                    </div>
                                    <h3 className="text-xl font-serif-heading font-bold text-charcoal-900 mb-3 group-hover:text-teal-600 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <Link
                                        to={`/blog/${post.id}`}
                                        className="inline-flex items-center gap-2 text-sm font-bold text-charcoal-800 hover:text-teal-600 transition-colors uppercase tracking-wide"
                                    >
                                        Read Article <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </article>
                        </ScrollAnimation>
                    ))}
                </div>

                {/* Newsletter Section */}
                <ScrollAnimation animation="fade-in-up">
                    <div className="bg-[#DCDCDC] rounded-2xl p-12 lg:p-20 text-center relative overflow-hidden">
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-teal-600 shadow-lg">
                                <Mail size={32} />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-serif-heading font-bold text-charcoal-900 mb-4">
                                Subscribe to Our Newsletter
                            </h2>
                            <p className="text-charcoal-700 mb-8 text-lg">
                                Stay updated with the latest trends in 3D printing, design insights, and exclusive offers.
                            </p>

                            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="flex-1 px-6 py-4 rounded-lg border-none focus:ring-2 focus:ring-teal-500 outline-none shadow-sm"
                                />
                                <button
                                    type="submit"
                                    className="bg-charcoal-900 text-white px-8 py-4 rounded-lg font-bold hover:bg-teal-700 transition-colors shadow-lg whitespace-nowrap"
                                >
                                    Subscribe
                                </button>
                            </form>
                            <p className="text-xs text-charcoal-600 mt-4">
                                By subscribing, you agree to our Privacy Policy and consent to receive updates.
                            </p>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-0 left-0 w-64 h-64 bg-white/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default Blogs;
