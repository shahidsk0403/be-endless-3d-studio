import React from 'react';
import Header from './Header';
import Footer from './Footer';
import CartSidebar from './CartSidebar';
import LoginModal from './modals/LoginModal';
import WishlistModal from './modals/WishlistModal';

import QuickViewModal from './modals/QuickViewModal';
import { useStore } from '../context/StoreContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // const { } = useStore(); // No longer needed here


    return (
        <div className="relative pb-16 lg:pb-0">
            <Header />
            <main>{children}</main>
            <Footer />

            {/* Modals */}
            <CartSidebar />
            <LoginModal />
            <WishlistModal />

            <QuickViewModal />
        </div>
    );
};

export default Layout;