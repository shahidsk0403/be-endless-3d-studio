import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

const LoginModal: React.FC = () => {
    const { isLoginOpen, setIsLoginOpen } = useStore();
    const [isRegister, setIsRegister] = useState(false);

    if (!isLoginOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden relative animate-fade-in-up">
                <button
                    onClick={() => setIsLoginOpen(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-charcoal-800 transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="p-8">
                    <h2 className="text-2xl font-serif-heading font-bold text-center mb-6 text-charcoal-800">
                        {isRegister ? 'Create Account' : 'Welcome Back'}
                    </h2>

                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        {isRegister && (
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
                                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" placeholder="John Doe" />
                            </div>
                        )}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                            <input type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" placeholder="you@example.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
                            <input type="password" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" placeholder="••••••••" />
                        </div>

                        {!isRegister && (
                            <div className="flex justify-between items-center text-sm">
                                <label className="flex items-center text-gray-600">
                                    <input type="checkbox" className="mr-2 rounded text-teal-600 focus:ring-teal-500" />
                                    Remember me
                                </label>
                                <a href="#" className="text-teal-600 hover:underline">Forgot Password?</a>
                            </div>
                        )}

                        <button className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition-colors shadow-lg">
                            {isRegister ? 'Register' : 'Sign In'}
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-gray-600">
                        {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
                        <button
                            onClick={() => setIsRegister(!isRegister)}
                            className="text-teal-600 font-bold hover:underline"
                        >
                            {isRegister ? 'Sign In' : 'Register'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
