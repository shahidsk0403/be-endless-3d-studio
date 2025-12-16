import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../constants';
import ScrollAnimation from './ScrollAnimation';

const BestSellers: React.FC = () => {
    const bestSellers = PRODUCTS.filter(p => p.tags.includes('Hot')).slice(0, 4);

    return (
        <section className="bg-[#DCDCDC] py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation animation="fade-in-up">
                    <div className="flex justify-between items-end mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif-heading font-bold text-charcoal-800">Best Seller</h2>
                        <Link to="/shop" className="text-teal-600 hover:text-teal-700 font-semibold flex items-center gap-2">
                            View All <ArrowRight size={16} />
                        </Link>
                    </div>
                </ScrollAnimation>

                {/* Grid for four products */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {bestSellers.map((product, index) => (
                        <ScrollAnimation key={product.id} animation="zoom-in" delay={index * 100}>
                            <div>
                                <ProductCard product={product} />
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BestSellers;
