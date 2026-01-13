import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import PageTitle from '../components/PageTitle';
import ScrollAnimation from '../components/ScrollAnimation';
import { Package, User, LogOut, MapPin, CreditCard } from 'lucide-react';

type ActiveSection = 'orders' | 'addresses' | 'payments';

const Account: React.FC = () => {
    const { user, logout, orders } = useStore();
    const navigate = useNavigate();
    const [activeSection, setActiveSection] = useState<ActiveSection>('orders');

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

    // Mock addresses data - replace with actual data from context when available
    const addresses = [
        {
            id: 1,
            type: 'Home',
            name: user.name,
            addressLine1: '123 Main Street',
            addressLine2: 'Apartment 4B',
            city: 'Mumbai',
            state: 'Maharashtra',
            pincode: '400001',
            phone: '+91 9876543210',
            isDefault: true
        },
        {
            id: 2,
            type: 'Office',
            name: user.name,
            addressLine1: '456 Business Park',
            addressLine2: 'Tower A, Floor 12',
            city: 'Mumbai',
            state: 'Maharashtra',
            pincode: '400051',
            phone: '+91 9876543210',
            isDefault: false
        }
    ];

    const renderMainContent = () => {
        switch (activeSection) {
            case 'orders':
                return (
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
                );

            case 'addresses':
                return (
                    <div className="bg-white rounded-xl shadow-sm p-8">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">My Addresses</h2>
                            <button className="px-4 py-2 bg-teal-600 text-white rounded-lg font-bold hover:bg-teal-700 transition-colors">
                                + Add New Address
                            </button>
                        </div>

                        {addresses.length === 0 ? (
                            <div className="text-center py-12">
                                <MapPin size={48} className="mx-auto text-gray-300 mb-4" />
                                <p className="text-gray-500">No addresses saved.</p>
                                <button className="mt-4 text-teal-600 font-bold hover:underline">
                                    Add Your First Address
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {addresses.map((address) => (
                                    <div key={address.id} className="border rounded-xl p-6 relative hover:shadow-md transition-shadow">
                                        {address.isDefault && (
                                            <span className="absolute top-4 right-4 px-3 py-1 bg-teal-100 text-teal-700 text-xs font-bold rounded-full">
                                                Default
                                            </span>
                                        )}
                                        <div className="mb-3">
                                            <h3 className="font-bold text-lg">{address.type}</h3>
                                            <p className="text-gray-600 font-medium">{address.name}</p>
                                        </div>
                                        <div className="text-gray-600 space-y-1 mb-4">
                                            <p>{address.addressLine1}</p>
                                            {address.addressLine2 && <p>{address.addressLine2}</p>}
                                            <p>{address.city}, {address.state} - {address.pincode}</p>
                                            <p className="font-medium">Phone: {address.phone}</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <button className="text-teal-600 font-bold hover:underline text-sm">
                                                Edit
                                            </button>
                                            <button className="text-red-500 font-bold hover:underline text-sm">
                                                Delete
                                            </button>
                                            {!address.isDefault && (
                                                <button className="text-gray-600 font-bold hover:underline text-sm ml-auto">
                                                    Set as Default
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                );

            case 'payments':
                return (
                    <div className="bg-white rounded-xl shadow-sm p-8">
                        <h2 className="text-2xl font-bold mb-6">Payment Methods</h2>

                        <div className="max-w-md">
                            <div className="border rounded-xl p-6 relative hover:shadow-md transition-shadow bg-gradient-to-br from-teal-50 to-white">
                                <span className="absolute top-4 right-4 px-3 py-1 bg-teal-100 text-teal-700 text-xs font-bold rounded-full">
                                    Default
                                </span>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center shrink-0">
                                        <Package size={24} className="text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-lg mb-1">Cash on Delivery</h3>
                                        <p className="text-gray-600 text-sm mb-3">Pay with cash when your order is delivered to your doorstep.</p>
                                        <div className="flex items-center gap-2 text-xs text-teal-700 bg-teal-50 px-3 py-1.5 rounded-full inline-flex">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="font-bold">Available for all orders</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-500 text-sm mt-4 text-center">
                                COD is currently the only payment method available.
                            </p>
                        </div>
                    </div>
                );

            default:
                return null;
        }
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
                                    <button
                                        onClick={() => setActiveSection('orders')}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-bold transition-colors ${activeSection === 'orders'
                                            ? 'bg-teal-50 text-teal-700'
                                            : 'text-gray-600 hover:bg-gray-50 font-medium'
                                            }`}
                                    >
                                        <Package size={20} /> Orders
                                    </button>
                                    {/* <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
                                        <User size={20} /> Profile Details
                                    </button> */}
                                    <button
                                        onClick={() => setActiveSection('addresses')}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-bold transition-colors ${activeSection === 'addresses'
                                            ? 'bg-teal-50 text-teal-700'
                                            : 'text-gray-600 hover:bg-gray-50 font-medium'
                                            }`}
                                    >
                                        <MapPin size={20} /> Addresses
                                    </button>
                                    <button
                                        onClick={() => setActiveSection('payments')}
                                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-bold transition-colors ${activeSection === 'payments'
                                            ? 'bg-teal-50 text-teal-700'
                                            : 'text-gray-600 hover:bg-gray-50 font-medium'
                                            }`}
                                    >
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
                            {renderMainContent()}
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default Account;
