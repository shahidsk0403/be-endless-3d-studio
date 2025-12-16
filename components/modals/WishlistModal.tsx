import React from 'react';
import { X, Trash2, ShoppingCart } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

const WishlistModal: React.FC = () => {
    const { isWishlistOpen, setIsWishlistOpen, addToCart, wishlist, removeFromWishlist } = useStore();

    if (!isWishlistOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden relative animate-fade-in-up flex flex-col max-h-[90vh]">
                <div className="p-6 border-b flex justify-between items-center bg-gray-50">
                    <h2 className="text-xl font-bold font-serif-heading">Your Wishlist ({wishlist.length})</h2>
                    <button onClick={() => setIsWishlistOpen(false)} className="text-gray-400 hover:text-charcoal-800"><X size={24} /></button>
                </div>

                <div className="overflow-y-auto p-6">
                    {wishlist.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500 mb-4">Your wishlist is empty.</p>
                            <button onClick={() => setIsWishlistOpen(false)} className="text-teal-600 font-bold hover:underline">
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b text-sm text-gray-500">
                                    <th className="py-3 font-medium">Product</th>
                                    <th className="py-3 font-medium">Price</th>
                                    <th className="py-3 font-medium">Stock Status</th>
                                    <th className="py-3 font-medium"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {wishlist.map(item => (
                                    <tr key={item.id} className="border-b last:border-0 group">
                                        <td className="py-4">
                                            <div className="flex items-center gap-4">
                                                <button
                                                    onClick={() => removeFromWishlist(item.id)}
                                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                                <img src={item.images[0]} alt={item.name} className="w-16 h-16 object-cover rounded-lg bg-gray-100" />
                                                <span className="font-bold text-charcoal-800">{item.name}</span>
                                            </div>
                                        </td>
                                        <td className="py-4 font-bold text-teal-600">₹{item.salePrice || item.price}</td>
                                        <td className="py-4 text-sm text-green-600 font-medium">{item.stock}</td>
                                        <td className="py-4 text-right">
                                            <button
                                                onClick={() => { addToCart(item); removeFromWishlist(item.id); }}
                                                className="bg-charcoal-800 text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-teal-600 transition-colors flex items-center gap-2 ml-auto"
                                            >
                                                <ShoppingCart size={16} /> Add to Cart
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>

                <div className="p-6 border-t bg-gray-50 flex justify-end gap-4">
                    <button onClick={() => setIsWishlistOpen(false)} className="px-6 py-2 border border-gray-300 rounded-lg font-bold text-gray-600 hover:bg-gray-100 transition-colors">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WishlistModal;
