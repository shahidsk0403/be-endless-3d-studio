import React, { useState } from 'react';
import { X, Minus, Plus, ShoppingCart, Star } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

const QuickViewModal: React.FC = () => {
    const { isQuickViewOpen, setIsQuickViewOpen, quickViewProduct, addToCart } = useStore();
    const [quantity, setQuantity] = useState(1);

    if (!isQuickViewOpen || !quickViewProduct) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden relative animate-fade-in-up flex flex-col md:flex-row max-h-[90vh] overflow-y-auto">
                <button
                    onClick={() => setIsQuickViewOpen(false)}
                    className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md text-gray-400 hover:text-charcoal-800 transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Left: Image */}
                <div className="w-full md:w-1/2 bg-gray-100">
                    <img
                        src={quickViewProduct.images[0]}
                        alt={quickViewProduct.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Right: Info */}
                <div className="w-full md:w-1/2 p-8 flex flex-col">
                    <h2 className="text-2xl font-bold font-serif-heading text-charcoal-800 mb-2">{quickViewProduct.name}</h2>

                    <div className="flex items-center gap-2 mb-4">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={16} fill={i < Math.floor(quickViewProduct.rating) ? "currentColor" : "none"} />
                            ))}
                        </div>
                        <span className="text-sm text-gray-500">({quickViewProduct.reviewCount} reviews)</span>
                    </div>

                    <div className="text-2xl font-bold text-teal-600 mb-6">
                        ₹{quickViewProduct.salePrice || quickViewProduct.price}
                    </div>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                        {quickViewProduct.description}
                    </p>

                    <div className="mt-auto space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="flex items-center border border-gray-300 rounded-lg">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                                >
                                    <Minus size={16} />
                                </button>
                                <span className="px-4 font-bold">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-4 py-2 hover:bg-gray-100 transition-colors"
                                >
                                    <Plus size={16} />
                                </button>
                            </div>
                            <button
                                onClick={() => { addToCart(quickViewProduct, quantity); setIsQuickViewOpen(false); }}
                                className="flex-1 bg-charcoal-800 text-white py-3 rounded-lg font-bold hover:bg-teal-600 transition-colors flex items-center justify-center gap-2 shadow-lg"
                            >
                                <ShoppingCart size={20} /> Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickViewModal;
