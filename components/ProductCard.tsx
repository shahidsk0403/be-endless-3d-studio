import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Heart, Eye, RefreshCw } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addToCart, setIsQuickViewOpen, setQuickViewProduct, addToWishlist, removeFromWishlist, isInWishlist } = useStore();
    const navigate = useNavigate();
    const discountPercentage = product.salePrice ? Math.round(((product.price - product.salePrice) / product.price) * 100) : 0;
    const isWishlisted = isInWishlist(product.id);

    const handleQuickView = (e: React.MouseEvent) => {
        e.preventDefault();
        setQuickViewProduct(product);
        setIsQuickViewOpen(true);
    };

    return (
        <div className="group relative bg-white rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 preserve-3d">
            {/* Back Face (Environment Image - Visible when rotated 180deg) */}
            <div className="absolute inset-0 w-full h-full rotate-y-180 backface-hidden z-0">
                <img
                    src={product.images.find(img => img.toLowerCase().includes('env')) || product.images[product.images.length - 1] || product.images[0]}
                    alt={`${product.name} Environment`}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Front Face (Main Content - Visible when at 0deg) */}
            <div className="relative w-full h-full bg-white backface-hidden z-10">
                {/* Badges */}
                <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                    {product.tags.includes('Hot') && <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">HOT</span>}
                    {product.tags.includes('New') && <span className="bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">NEW</span>}
                    {discountPercentage > 0 && <span className="bg-green-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">-{discountPercentage}%</span>}
                </div>

                {/* Image Area */}
                <Link to={`/product/${product.slug}`} className="block relative aspect-square overflow-hidden bg-gray-100">
                    {/* Main Image */}
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 group-hover:opacity-0"
                    />
                    {/* Hover Image (Environment image or last image) */}
                    <img
                        src={product.images.find(img => img.toLowerCase().includes('env')) || product.images[product.images.length - 1] || product.images[0]}
                        alt={product.name}
                        className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />

                    {/* Quick Actions Overlay */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                if (isWishlisted) {
                                    removeFromWishlist(product.id);
                                } else {
                                    addToWishlist(product);
                                }
                            }}
                            className={`p-2 rounded-full transition-colors shadow-lg ${isWishlisted ? 'bg-teal-600 text-white' : 'bg-white text-charcoal-800 hover:bg-teal-600 hover:text-white'}`}
                            title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                        >
                            <Heart size={18} fill={isWishlisted ? "currentColor" : "none"} />
                        </button>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                navigate('/customize', { state: { activeTab: 'prebuilt', product } });
                            }}
                            className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-teal-600 hover:text-white transition-colors"
                            title="Customise"
                        >
                            <RefreshCw size={18} />
                        </button>
                        <button
                            onClick={handleQuickView}
                            className="p-2 bg-white text-charcoal-800 rounded-full hover:bg-teal-600 hover:text-white transition-colors shadow-lg"
                            title="Quick View"
                        >
                            <Eye size={18} />
                        </button>
                    </div>
                </Link>

                {/* Info */}
                <div className="p-4">
                    <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                    <Link to={`/product/${product.slug}`}>
                        <h3 className="text-sm font-bold text-charcoal-800 mb-2 group-hover:text-teal-600 transition-colors line-clamp-1">{product.name}</h3>
                    </Link>
                    <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                            {product.salePrice ? (
                                <>
                                    <span className="text-base font-bold text-teal-600">₹{product.salePrice}</span>
                                    <span className="text-xs text-gray-400 line-through">₹{product.price}</span>
                                </>
                            ) : (
                                <span className="text-base font-bold text-charcoal-800">₹{product.price}</span>
                            )}
                        </div>
                        <button
                            onClick={(e) => { e.preventDefault(); addToCart(product); }}
                            className="p-2 bg-gray-100 text-charcoal-800 rounded-lg hover:bg-teal-600 hover:text-white transition-colors"
                            title="Add to Cart"
                        >
                            <ShoppingCart size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;