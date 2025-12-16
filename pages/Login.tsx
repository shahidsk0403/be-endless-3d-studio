import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import PageTitle from '../components/PageTitle';
import ScrollAnimation from '../components/ScrollAnimation';

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useStore();
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock login logic
        if (email && password) {
            login(email);
            navigate('/account');
        }
    };

    return (
        <div className="pt-0 pb-20 min-h-screen bg-[#DCDCDC]">
            <PageTitle title="Login" />
            <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                <ScrollAnimation animation="fade-in-up">
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-1">Password</label>
                                <input
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                                />
                            </div>
                            <button className="w-full bg-teal-600 text-white font-bold py-3 rounded-lg hover:bg-teal-700 transition-colors">
                                Sign In
                            </button>
                        </form>
                        <div className="mt-6 text-center text-sm text-gray-600">
                            Don't have an account? <Link to="/register" className="text-teal-600 font-bold hover:underline">Register here</Link>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </div>
    );
};

export default Login;
