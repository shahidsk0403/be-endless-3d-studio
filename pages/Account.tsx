import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import PageTitle from '../components/PageTitle';
import ScrollAnimation from '../components/ScrollAnimation';
import { Package, User, LogOut, MapPin, CreditCard } from 'lucide-react';

const Account: React.FC = () => {
    const { user, logout, orders } = useStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    if (!user) return null;

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="pt-0 pb-20 min-h-screen bg-[#DCDCDC]">
            <PageTitle title="My Account" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <ScrollAnimation animation="fade-in-up">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Sidebar */}
                        <div className="w-full md:w-1/4">
                            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                                <div className="p-6 bg-charcoal-800 text-white text-center">
                                    <div className="w-20 h-20 bg-teal-500 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">
                                        {user.name.charAt(0).toUpperCase()}
                                    </div>
                                    <h3 className="font-bold text-lg">{user.name}</h3>
                                    <p className="text-gray-300 text-sm">{user.email}</p>
                                </div>
                                <nav className="p-4 space-y-2">
                                    <button className="w-full flex items-center gap-3 px-4 py-3 bg-teal-50 text-teal-700 rounded-lg font-bold">
                                        <Package size={20} /> Orders
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                                        <User size={20} /> Profile Details
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                                        <MapPin size={20} /> Addresses
                                    </button>
                                    <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                                        <CreditCard size={20} /> Payment Methods
                                    </button>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-lg font-medium transition-colors mt-4"
                                    >
                                        <LogOut size={20} /> Logout
                                    </button>
                                </nav>
                            </div>
                        </div>

                        {/* Main Content */}
                        <div className="w-full md:w-3/4">
                            <div className="bg-white rounded-xl shadow-sm p-8">
                                <h2 className="text-2xl font-bold mb-6">Order History</h2>

                                {orders.length === 0 ? (
                                    <div className="text-center py-12">
                                        <Package size={48} className="mx-auto text-gray-300 mb-4" />
                                        <p className="text-gray-500">No orders found.</p>
                                        <button onClick={() => navigate('/shop')} className="mt-4 text-teal-600 font-bold hover:underline">
                                            Start Shopping
                                        </button>
                                    </div>
                                ) : (
                                    <div className="space-y-6">
                                        {orders.map((order) => (
                                            <div key={order.id} className="border rounded-xl overflow-hidden">
                                                <div className="bg-gray-50 p-4 flex flex-wrap justify-between items-center gap-4 text-sm">
                                                    <div>
                                                        <p className="text-gray-500">Order Placed</p>
                                                        <p className="font-bold">{order.date}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-500">Total</p>
                                                        <p className="font-bold">₹{order.total}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-500">Order #</p>
                                                        <p className="font-bold">{order.id}</p>
                                                    </div>
                                                    <div className="ml-auto">
                                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                                                            order.status === 'Shipped' ? 'bg-blue-100 text-blue-700' :
                                                                'bg-yellow-100 text-yellow-700'
                                                            }`}>
                                                            {order.status}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="p-4 space-y-4">
                                                    {order.items.map((item, index) => (
                                                        <div key={index} className="flex gap-4 items-center">
                                                            <div className="w-20 h-20 bg-gray-200 rounded-lg overflow-hidden shrink-0">
                                                                <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" />
                                                            </div>
                                                            <div>
                                                                <h4 className="font-bold text-lg">{item.name}</h4>
                                                                <p className="text-gray-500 text-sm">Color: {item.selectedColor || 'Default'}</p>
                                                                <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="p-4 bg-gray-50 border-t flex justify-end">
                                                    <button className="text-teal-600 font-bold hover:underline">
                                                        View Invoice
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default Account;
