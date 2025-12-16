import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import PageTitle from '../components/PageTitle';
import ScrollAnimation from '../components/ScrollAnimation';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogPost: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const post = BLOG_POSTS.find(p => p.id === Number(id));

    if (!post) {
        return <Navigate to="/blogs" replace />;
    }

    return (
        <div className="pt-0 pb-20 min-h-screen bg-[#DCDCDC]">
            <PageTitle title={post.title} breadcrumbs={[{ label: 'Blogs', path: '/blogs' }]} />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation animation="fade-in-up">
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                        {/* Hero Image */}
                        <div className="h-[400px] w-full relative">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-8 text-white">
                                <div className="inline-block bg-teal-600 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-sm mb-4">
                                    {post.category}
                                </div>
                                <h1 className="text-3xl md:text-4xl font-serif-heading font-bold mb-4 leading-tight">
                                    {post.title}
                                </h1>
                                <div className="flex flex-wrap gap-6 text-sm font-medium text-white/90">
                                    <div className="flex items-center gap-2">
                                        <User size={16} />
                                        <span>{post.author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} />
                                        <span>{post.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock size={16} />
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12">
                            <div
                                className="prose prose-lg max-w-none prose-headings:font-serif-heading prose-headings:font-bold prose-a:text-teal-600 hover:prose-a:text-teal-700 prose-img:rounded-xl"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            <div className="mt-12 pt-8 border-t border-gray-100">
                                <Link
                                    to="/blogs"
                                    className="inline-flex items-center gap-2 text-charcoal-800 font-bold hover:text-teal-600 transition-colors"
                                >
                                    <ArrowLeft size={20} /> Back to All Articles
                                </Link>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default BlogPost;
