import React from 'react';
import { Link } from 'react-router-dom';

interface PageTitleProps {
    title: string;
    breadcrumbs?: { label: string; path?: string }[];
    backgroundImage?: string;
    className?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({
    title,
    breadcrumbs = [],
    backgroundImage = 'media/banner/about-us-page-first.jpg',
    className = 'mb-8'
}) => {
    return (
        <div className={`relative bg-gray-100 py-10 md:py-14 overflow-hidden ${className}`}>
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={backgroundImage}
                    alt={title}
                    className="w-full h-full object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/80 mix-blend-overlay"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="mb-3">
                    <h1 className="text-3xl md:text-4xl font-serif-heading font-medium text-charcoal-800">
                        {title}
                    </h1>
                </div>
                <div className="flex justify-center items-center text-sm text-gray-500 font-medium uppercase tracking-wider">
                    <Link to="/" className="hover:text-teal-600 transition-colors">Home</Link>
                    <span className="mx-3 text-gray-400">/</span>
                    {breadcrumbs.map((crumb, index) => (
                        <React.Fragment key={index}>
                            {crumb.path ? (
                                <Link to={crumb.path} className="hover:text-teal-600 transition-colors">
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className="text-charcoal-800">{crumb.label}</span>
                            )}
                            {index < breadcrumbs.length - 1 && (
                                <span className="mx-3 text-gray-400">/</span>
                            )}
                        </React.Fragment>
                    ))}
                    {breadcrumbs.length === 0 && <span className="text-charcoal-800">{title}</span>}
                </div>
            </div>
        </div>
    );
};

export default PageTitle;
