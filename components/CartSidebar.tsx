import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useStore } from '../context/StoreContext';

const CartSidebar: React.FC = () => {
    const { isCartOpen, setIsCartOpen, cart, removeFromCart, updateQuantity, cartTotal } = useStore();
    const navigate = useNavigate();

    if (!isCartOpen) return null;

    const handleCheckout = () => {
        setIsCartOpen(false);
        navigate('/checkout');
    };

    return (
        <>
            <div
                className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm transition-opacity"
                onClick={() => setIsCartOpen(false)}
            ></div>
            <div className="fixed top-0 right-0 h-full w-full max-w-md bg-[#DCDCDC] z-[70] shadow-2xl transform transition-transform duration-300 flex flex-col animate-slide-in-right">
                <div className="p-6 border-b flex justify-between items-center bg-[#DCDCDC]">
                    <h2 className="text-xl font-bold font-serif-heading">Your Cart ({cart.length})</h2>
                    <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-charcoal-800"><X size={24} /></button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                    {cart.length === 0 ? (
                        <div className="text-center text-gray-500 mt-20">
                            <p>Your cart is empty.</p>
                            <button
                                onClick={() => setIsCartOpen(false)}
                                className="mt-4 text-teal-600 font-bold underline"
                            >
                                Continue Shopping
                            </button>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div key={item.id} className="flex gap-4">
                                <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between mb-1">
                                        <h3 className="font-bold text-charcoal-800">{item.name}</h3>
                                        <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500"><Trash2 size={16} /></button>
                                    </div>
                                    <p className="text-sm text-gray-500 mb-2">{item.selectedColor}</p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center border rounded">
                                            <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 hover:bg-gray-100"><Minus size={12} /></button>
                                            <span className="px-2 text-sm font-bold">{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 hover:bg-gray-100"><Plus size={12} /></button>
                                        </div>
                                        <span className="font-bold text-teal-600">₹{(item.salePrice || item.price) * item.quantity}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="p-6 border-t bg-[#DCDCDC]">
                        <div className="flex justify-between items-center mb-4 text-lg font-bold">
                            <span>Subtotal</span>
                            <span>₹{cartTotal}</span>
                        </div>
                        <button
                            onClick={handleCheckout}
                            className="w-full bg-teal-600 text-white py-4 rounded-lg font-bold hover:bg-teal-700 transition-colors mb-2 shadow-lg"
                        >
                            Checkout Now
                        </button>
                        <p className="text-xs text-center text-gray-500">Shipping & taxes calculated at checkout</p>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartSidebar;
