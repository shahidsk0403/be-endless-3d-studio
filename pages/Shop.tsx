import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../constants';
import PageTitle from '../components/PageTitle';

const Shop: React.FC = () => {
    const [searchParams] = useSearchParams();
    const initialCat = searchParams.get('cat') || 'All';
    const [activeCategory, setActiveCategory] = useState(initialCat);

    const categories = ['All', 'Lighting', 'Office Utility', 'Home Decor'];

    const filteredProducts = activeCategory === 'All'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeCategory);

    return (
        <div className="pt-0 pb-20 min-h-screen bg-[#DCDCDC]">
            <PageTitle title="Shop Collection" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <p className="text-gray-500 max-w-2xl mx-auto">Discover our curated range of 3D printed masterpieces, designed to elevate your living and working spaces.</p>
                </div>

                {/* Filters */}
                <div className="flex justify-center mb-10 overflow-x-auto">
                    <div className="flex space-x-2 bg-white p-1 rounded-full shadow-sm border border-gray-100">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat
                                    ? 'bg-charcoal-800 text-white shadow-md'
                                    : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500">No products found in this category.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Shop;