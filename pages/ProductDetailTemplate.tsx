import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Minus, Plus, ShoppingBag, Truck, ShieldCheck, Share2, Heart, RefreshCw, Facebook, Twitter, Instagram } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { PRODUCTS } from '../constants';
import { useStore } from '../context/StoreContext';
import ProductCard from '../components/ProductCard';
import PageTitle from '../components/PageTitle';
import ScrollAnimation from '../components/ScrollAnimation';

const ProductDetailTemplate: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const product = PRODUCTS.find(p => p.slug === slug);
    const { addToCart, setIsCartOpen, addToWishlist, removeFromWishlist, isInWishlist } = useStore();
    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1);
    const [selectedColor, setSelectedColor] = useState(product?.availableColors[0]);
    const [activeTab, setActiveTab] = useState('description');
    const isWishlisted = product ? isInWishlist(product.id) : false;

    // Slider Refs
    const slider1 = useRef<Slider>(null);
    const slider2 = useRef<Slider>(null);
    const [nav1, setNav1] = useState<Slider | null>(null);
    const [nav2, setNav2] = useState<Slider | null>(null);

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, []);

    useEffect(() => {
        if (product) {
            window.scrollTo(0, 0);
            setSelectedColor(product.availableColors[0]);
            setQuantity(1);
        }
    }, [product]);

    if (!product) return <div className="pt-32 text-center">Product not found</div>;

    const handleAddToCart = () => {
        addToCart({ ...product, selectedColor }, quantity);
    };

    const handleBuyItNow = () => {
        addToCart({ ...product, selectedColor }, quantity);
        setIsCartOpen(true);
    };

    const handleWishlistToggle = () => {
        if (isWishlisted) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

    const productImages = (product.colorImages && product.colorImages[selectedColor.toUpperCase()]) || product.images;

    // Slider Settings
    const mainSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: nav2 || undefined
    };

    const thumbSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        swipeToSlide: true,
        focusOnSelect: true,
        asNavFor: nav1 || undefined,
        vertical: true,
        verticalSwiping: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                    slidesToShow: 4
                }
            }
        ]
    };

    const relatedSliderSettings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 3 }
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    return (
        <div className="pt-0 pb-20 bg-[#DCDCDC] min-h-screen">
            <PageTitle title={product.name} breadcrumbs={[{ label: 'Shop', path: '/shop' }]} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <ScrollAnimation animation="fade-in-up">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
                        {/* Left Column: Image Gallery */}
                        <div className="flex flex-col-reverse md:flex-row gap-4">
                            {/* Thumbnails (Vertical on Desktop, Horizontal on Mobile) */}
                            <div className="w-full md:w-24 lg:w-28 shrink-0">
                                <Slider {...thumbSliderSettings} ref={slider2} className="product-thumb-slider h-full" key={`thumb-${selectedColor}`}>
                                    {productImages.map((img, idx) => (
                                        <div key={idx} className="px-1 py-1 cursor-pointer outline-none">
                                            <div className="aspect-square rounded-lg overflow-hidden border border-gray-200 hover:border-teal-500 transition-colors">
                                                <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-cover" />
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>

                            {/* Main Image */}
                            <div className="flex-1 min-w-0">
                                <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 relative group">
                                    <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                                        {product.salePrice && (
                                            <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-sm">
                                                -{product.discount}%
                                            </span>
                                        )}
                                        {product.stock === 'In Stock' && (
                                            <span className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-sm">
                                                In Stock
                                            </span>
                                        )}
                                    </div>
                                    <Slider {...mainSliderSettings} ref={slider1} className="product-main-slider h-full" key={`main-${selectedColor}`}>
                                        {productImages.map((img, idx) => (
                                            <div key={idx} className="h-full outline-none">
                                                <img src={img} alt={product.name} className="w-full h-full object-cover" />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Product Info */}
                        <div>
                            <h1 className="text-4xl font-serif-heading font-bold text-charcoal-800 mb-4">{product.name}</h1>

                            {/* Rating */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />)}
                                </div>
                                <span className="text-sm text-gray-500 font-medium">({product.reviewCount} customer reviews)</span>
                            </div>

                            {/* Price */}
                            <div className="mb-6 border-b border-gray-100 pb-6">
                                {product.salePrice ? (
                                    <div className="flex items-end gap-3">
                                        <span className="text-3xl font-bold text-teal-600">₹{product.salePrice}</span>
                                        <span className="text-xl text-gray-400 line-through">₹{product.price}</span>
                                    </div>
                                ) : (
                                    <span className="text-3xl font-bold text-charcoal-800">₹{product.price}</span>
                                )}
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

                            {/* Options */}
                            <div className="space-y-6 mb-8">
                                {/* Size (Mock) */}
                                {product.availableSize && (
                                    <div className="flex items-center">
                                        <span className="w-24 font-bold text-gray-800">Size:</span>
                                        <span className="text-gray-600">{product.availableSize}</span>
                                    </div>
                                )}

                                {/* Color */}
                                <div className="flex items-center">
                                    <span className="w-24 font-bold text-gray-800">Color:</span>
                                    <div className="flex gap-2">
                                        {product.availableColors.map(color => (
                                            <button
                                                key={color}
                                                onClick={() => setSelectedColor(color)}
                                                className={`w-8 h-8 rounded-full border-2 transition-all ${selectedColor === color ? 'border-teal-600 scale-110' : 'border-gray-200 hover:border-gray-300'}`}
                                                style={{ backgroundColor: color.toLowerCase() }}
                                                title={color}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col sm:flex-row gap-4 mb-8">
                                <div className="flex items-center border border-gray-300 rounded-lg h-12">
                                    <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-4 h-full hover:bg-gray-50 text-gray-600"><Minus size={16} /></button>
                                    <span className="px-4 font-bold min-w-[3rem] text-center text-charcoal-800">{quantity}</span>
                                    <button onClick={() => setQuantity(q => q + 1)} className="px-4 h-full hover:bg-gray-50 text-gray-600"><Plus size={16} /></button>
                                </div>
                                <button
                                    onClick={handleAddToCart}
                                    className="flex-1 bg-charcoal-800 text-white h-12 rounded-lg font-bold hover:bg-charcoal-700 transition-colors flex items-center justify-center gap-2 uppercase tracking-wide text-sm"
                                >
                                    <ShoppingBag size={18} /> Add to Cart
                                </button>
                            </div>

                            <div className="flex gap-4 mb-8 border-b border-gray-100 pb-8">
                                <button
                                    onClick={handleBuyItNow}
                                    className="flex items-center gap-2 text-sm font-bold text-charcoal-800 hover:text-teal-600 transition-colors uppercase tracking-wider"
                                >
                                    <ShoppingBag size={16} /> Buy It Now
                                </button>
                                <button
                                    onClick={handleWishlistToggle}
                                    className={`flex items-center gap-2 text-sm font-bold transition-colors uppercase tracking-wider ${isWishlisted ? 'text-teal-600' : 'text-charcoal-800 hover:text-teal-600'}`}
                                >
                                    <Heart size={16} fill={isWishlisted ? "currentColor" : "none"} /> {isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}
                                </button>
                                <button
                                    onClick={() => navigate('/customize', { state: { activeTab: 'prebuilt', product } })}
                                    className="flex items-center gap-2 text-sm font-bold text-charcoal-800 hover:text-teal-600 transition-colors uppercase tracking-wider"
                                >
                                    <RefreshCw size={16} /> Customise
                                </button>
                            </div>

                            {/* Metadata */}
                            <div className="space-y-2 text-sm text-gray-500">
                                <div className="flex">
                                    <span className="w-24 font-bold text-charcoal-800">SKU:</span>
                                    <span>{`${product.sku}-${(() => {
                                        const colorMap: Record<string, string> = {
                                            'WHITE': 'W',
                                            'BLACK': 'BK',
                                            'GREEN': 'GN',
                                            'GREY': 'GY',
                                            'WOODEN': 'WD',
                                            'BROWN': 'BR',
                                            'RED': 'R',
                                            'BLUE': 'BL'
                                        };
                                        return colorMap[selectedColor.toUpperCase()] || selectedColor.substring(0, 2).toUpperCase();
                                    })()}`}</span>
                                </div>
                                <div className="flex">
                                    <span className="w-24 font-bold text-charcoal-800">Category:</span>
                                    <span className="text-teal-600">{product.category}</span>
                                </div>
                                <div className="flex">
                                    <span className="w-24 font-bold text-charcoal-800">Tags:</span>
                                    <span>{product.tags.join(', ') || 'None'}</span>
                                </div>
                            </div>

                            {/* Social Share */}
                            <div className="flex items-center gap-4 mt-8">
                                <span className="font-bold text-charcoal-800 text-sm">Share:</span>
                                <div className="flex gap-3">
                                    <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-teal-500 hover:text-white transition-colors"><Facebook size={14} /></a>
                                    <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-teal-500 hover:text-white transition-colors"><Twitter size={14} /></a>
                                    <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-teal-500 hover:text-white transition-colors"><Instagram size={14} /></a>
                                    <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-teal-500 hover:text-white transition-colors"><Share2 size={14} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                {/* Tabs Section */}
                <ScrollAnimation animation="fade-in-up" delay={200}>
                    <div className="mb-20">
                        <div className="flex justify-center border-b border-gray-200 mb-8">
                            <button
                                onClick={() => setActiveTab('description')}
                                className={`px-8 py-4 text-sm font-bold uppercase tracking-wider border-b-2 transition-colors ${activeTab === 'description' ? 'border-teal-600 text-charcoal-800' : 'border-transparent text-gray-500 hover:text-charcoal-800'}`}
                            >
                                Description
                            </button>
                            <button
                                onClick={() => setActiveTab('additional')}
                                className={`px-8 py-4 text-sm font-bold uppercase tracking-wider border-b-2 transition-colors ${activeTab === 'additional' ? 'border-teal-600 text-charcoal-800' : 'border-transparent text-gray-500 hover:text-charcoal-800'}`}
                            >
                                Additional Information
                            </button>
                            <button
                                onClick={() => setActiveTab('reviews')}
                                className={`px-8 py-4 text-sm font-bold uppercase tracking-wider border-b-2 transition-colors ${activeTab === 'reviews' ? 'border-teal-600 text-charcoal-800' : 'border-transparent text-gray-500 hover:text-charcoal-800'}`}
                            >
                                Reviews ({product.reviewCount})
                            </button>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            {activeTab === 'description' && (
                                <div className="prose max-w-none text-gray-600 text-center">
                                    <p>{product.description}</p>
                                    <p className="mt-4">{product.sellingPoint}</p>
                                </div>
                            )}

                            {activeTab === 'additional' && (
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm text-left">
                                        <tbody>
                                            <tr className="border-b">
                                                <th className="py-3 px-4 font-bold text-charcoal-800 w-1/3">Material</th>
                                                <td className="py-3 px-4 text-gray-600">{product.materials.join(', ')}</td>
                                            </tr>
                                            <tr className="border-b">
                                                <th className="py-3 px-4 font-bold text-charcoal-800">Dimensions</th>
                                                <td className="py-3 px-4 text-gray-600">{product.specifications.height} H x {product.specifications.width} W</td>
                                            </tr>
                                            <tr className="border-b">
                                                <th className="py-3 px-4 font-bold text-charcoal-800">Available Colors</th>
                                                <td className="py-3 px-4 text-gray-600">{product.availableColors.join(', ')}</td>
                                            </tr>
                                            {product.availableSize && (
                                                <tr className="border-b">
                                                    <th className="py-3 px-4 font-bold text-charcoal-800">Size</th>
                                                    <td className="py-3 px-4 text-gray-600">{product.availableSize}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            )}

                            {activeTab === 'reviews' && (
                                <div className="space-y-8">
                                    <div className="space-y-6">
                                        {product.reviewCount === 0 ? (
                                            <div className="text-center py-8 text-gray-500 italic">
                                                There are no reviews yet. Be the first to review this product.
                                            </div>
                                        ) : (
                                            <div className="flex gap-4">
                                                <div className="w-12 h-12 bg-gray-200 rounded-full shrink-0"></div>
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="font-bold text-charcoal-800">Peter Capidal</span>
                                                        <span className="text-xs text-gray-400">Oct 12, 2023</span>
                                                    </div>
                                                    <div className="flex text-yellow-400 mb-2">
                                                        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                                                    </div>
                                                    <p className="text-gray-600 text-sm">Good product, really like the finish!</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className="bg-gray-50 p-6 rounded-xl">
                                        <h3 className="font-bold text-lg mb-4">Add a Review</h3>
                                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                            <div>
                                                <label className="block text-sm font-bold mb-1">Your Rating</label>
                                                <div className="flex text-gray-300 gap-1">
                                                    {[...Array(5)].map((_, i) => <Star key={i} size={20} className="hover:text-yellow-400 cursor-pointer" />)}
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold mb-1">Your Review</label>
                                                <textarea className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 outline-none" rows={4}></textarea>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm font-bold mb-1">Name</label>
                                                    <input type="text" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 outline-none" />
                                                </div>
                                                <div>
                                                    <label className="block text-sm font-bold mb-1">Email</label>
                                                    <input type="email" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-teal-500 outline-none" />
                                                </div>
                                            </div>
                                            <button className="bg-charcoal-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-charcoal-700 transition-colors">Submit Review</button>
                                        </form>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </ScrollAnimation>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                    <ScrollAnimation animation="fade-in" delay={400}>
                        <div className="border-t border-gray-200 pt-16">
                            <ScrollAnimation animation="fade-in" delay={200}>
                                <div className="text-center mb-12">
                                    <h2 className="text-3xl font-serif-heading font-bold text-charcoal-800 mb-2">Related Products</h2>
                                    <div className="w-16 h-1 bg-teal-500 mx-auto"></div>
                                </div>
                            </ScrollAnimation>
                            <div className="px-4">
                                <Slider {...relatedSliderSettings}>
                                    {relatedProducts.map(relatedProduct => (
                                        <div key={relatedProduct.id} className="px-3 pb-8">
                                            <ProductCard product={relatedProduct} />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </ScrollAnimation>
                )}
            </div>
        </div>
    );
};

export default ProductDetailTemplate;