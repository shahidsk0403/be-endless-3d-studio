import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import PageTitle from '../components/PageTitle';
import ScrollAnimation from '../components/ScrollAnimation';
import { CreditCard, Truck, ShieldCheck } from 'lucide-react';

const Checkout: React.FC = () => {
    const { cart, cartTotal, clearCart, user, addOrder } = useStore();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: user?.email || '',
        address: '',
        city: '',
        zip: '',
        country: 'India',
        phone: ''
    });

    useEffect(() => {
        if (cart.length === 0) {
            navigate('/shop');
        }
    }, [cart, navigate]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const shippingCost = cartTotal > 2000 ? 0 : 150;
    const finalTotal = cartTotal + shippingCost;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newOrder = {
            id: `ORD-${Date.now()}`,
            date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            items: [...cart],
            total: finalTotal,
            status: 'Processing' as const
        };

        addOrder(newOrder);
        alert('Order Placed Successfully!');
        clearCart();
        navigate('/account');
    };



    return (
        <div className="pt-0 pb-20 min-h-screen bg-[#DCDCDC]">
            <PageTitle title="Checkout" breadcrumbs={[{ label: 'Cart', path: '/shop' }]} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Left Column: Shipping & Payment */}
                        <div className="flex-1 space-y-8">
                            <ScrollAnimation animation="fade-in-up">
                                <div className="bg-white p-8 rounded-xl shadow-sm">
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <Truck className="text-teal-600" /> Shipping Information
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1">First Name</label>
                                            <input
                                                type="text"
                                                name="firstName"
                                                required
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1">Last Name</label>
                                            <input
                                                type="text"
                                                name="lastName"
                                                required
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                                            />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-sm font-bold text-gray-700 mb-1">Address</label>
                                            <input
                                                type="text"
                                                name="address"
                                                required
                                                value={formData.address}
                                                onChange={handleInputChange}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1">City</label>
                                            <input
                                                type="text"
                                                name="city"
                                                required
                                                value={formData.city}
                                                onChange={handleInputChange}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1">ZIP Code</label>
                                            <input
                                                type="text"
                                                name="zip"
                                                required
                                                value={formData.zip}
                                                onChange={handleInputChange}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1">Country</label>
                                            <select
                                                name="country"
                                                value={formData.country}
                                                onChange={handleInputChange}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                                            >
                                                <option value="India">India</option>
                                                <option value="USA">USA</option>
                                                <option value="UK">UK</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-gray-700 mb-1">Phone</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation animation="fade-in-up" delay={200}>
                                <div className="bg-white p-8 rounded-xl shadow-sm">
                                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                        <CreditCard className="text-teal-600" /> Payment Method
                                    </h2>
                                    <div className="space-y-4">
                                        <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                                            <input type="radio" name="payment" defaultChecked className="w-5 h-5 text-teal-600 focus:ring-teal-500" />
                                            <span className="ml-3 font-bold text-gray-800">Credit / Debit Card</span>
                                            <div className="ml-auto flex gap-2">
                                                <div className="w-8 h-5 bg-gray-200 rounded"></div>
                                                <div className="w-8 h-5 bg-gray-200 rounded"></div>
                                            </div>
                                        </label>
                                        <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                                            <input type="radio" name="payment" className="w-5 h-5 text-teal-600 focus:ring-teal-500" />
                                            <span className="ml-3 font-bold text-gray-800">UPI / Net Banking</span>
                                        </label>
                                        <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                                            <input type="radio" name="payment" className="w-5 h-5 text-teal-600 focus:ring-teal-500" />
                                            <span className="ml-3 font-bold text-gray-800">Cash on Delivery</span>
                                        </label>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                        {/* Right Column: Order Summary */}
                        <div className="w-full lg:w-1/3">
                            <ScrollAnimation animation="fade-in-left">
                                <div className="bg-white p-8 rounded-xl shadow-sm sticky top-24">
                                    <h2 className="text-xl font-bold mb-6 font-serif-heading">Order Summary</h2>
                                    <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2">
                                        {cart.map(item => (
                                            <div key={item.id} className="flex gap-4">
                                                <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden shrink-0">
                                                    <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-sm text-charcoal-800 line-clamp-1">{item.name}</h4>
                                                    <p className="text-xs text-gray-500">Color: {item.selectedColor}</p>
                                                    <div className="flex justify-between mt-1">
                                                        <span className="text-xs text-gray-500">Qty: {item.quantity}</span>
                                                        <span className="text-sm font-bold text-teal-600">₹{(item.salePrice || item.price) * item.quantity}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="border-t border-gray-100 pt-4 space-y-2">
                                        <div className="flex justify-between text-gray-600">
                                            <span>Subtotal</span>
                                            <span>₹{cartTotal}</span>
                                        </div>
                                        <div className="flex justify-between text-gray-600">
                                            <span>Shipping</span>
                                            <span>{shippingCost === 0 ? 'Free' : `₹${shippingCost}`}</span>
                                        </div>
                                        <div className="flex justify-between text-xl font-bold text-charcoal-800 pt-2 border-t border-gray-100 mt-2">
                                            <span>Total</span>
                                            <span>₹{finalTotal}</span>
                                        </div>
                                    </div>

                                    <button type="submit" className="w-full bg-teal-600 text-white py-4 rounded-lg font-bold hover:bg-teal-700 transition-colors mt-8 shadow-lg flex items-center justify-center gap-2">
                                        <ShieldCheck size={20} /> Place Order
                                    </button>

                                    <p className="text-xs text-center text-gray-500 mt-4 flex items-center justify-center gap-1">
                                        <ShieldCheck size={12} /> Secure Checkout
                                    </p>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
