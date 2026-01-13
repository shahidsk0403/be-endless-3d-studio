import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingBag, User, Heart, Menu, X, Grid } from "lucide-react";
import { useStore } from "../context/StoreContext";
import AnimatedLogo from './AnimatedLogo';


const Header: React.FC = () => {
  const { cart, setIsCartOpen, setIsWishlistOpen, user } = useStore();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-[#DCDCDC]/80 backdrop-blur-md shadow-sm"
            : "bg-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-charcoal-800 p-2"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Animated Logo */}
            <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:flex-1 absolute md:relative left-0 right-0 pointer-events-none md:pointer-events-auto">
              <Link to="/" className="pointer-events-auto">
                <AnimatedLogo className="h-10 w-auto" />
              </Link>
            </div>



            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:flex-1 justify-center space-x-8">
              <Link
                to="/"
                className="text-sm font-medium text-charcoal-800 hover:text-teal-600 transition-colors uppercase tracking-wide"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="text-sm font-medium text-charcoal-800 hover:text-teal-600 transition-colors uppercase tracking-wide"
              >
                Shop
              </Link>
              <Link
                to="/customize"
                className="text-sm font-medium text-charcoal-800 hover:text-teal-600 transition-colors uppercase tracking-wide"
              >
                Customize
              </Link>
              <Link
                to="/about"
                className="text-sm font-medium text-charcoal-800 hover:text-teal-600 transition-colors uppercase tracking-wide"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="text-sm font-medium text-charcoal-800 hover:text-teal-600 transition-colors uppercase tracking-wide"
              >
                Contact
              </Link>
            </nav>

            {/* Desktop Tools */}
            <div className="hidden md:flex md:flex-1 justify-end items-center space-x-6">
              <Link
                to={user ? "/account" : "/login"}
                className="text-charcoal-800 hover:text-teal-600 transition-colors"
              >
                <User size={20} />
              </Link>
              <button
                onClick={() => setIsWishlistOpen(true)}
                className="text-charcoal-800 hover:text-teal-600 transition-colors"
              >
                <Heart size={20} />
              </button>
              <button
                onClick={() => setIsCartOpen(true)}
                className="text-charcoal-800 hover:text-teal-600 transition-colors relative"
              >
                <ShoppingBag size={20} />
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>

            {/* Mobile Cart Icon (Right) */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsCartOpen(true)}
                className="text-charcoal-800 p-2 relative"
              >
                <ShoppingBag size={24} />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 bg-teal-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg animate-fade-in-down">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-charcoal-800 hover:bg-gray-50 rounded-md"
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="block px-3 py-2 text-base font-medium text-charcoal-800 hover:bg-gray-50 rounded-md"
              >
                Shop
              </Link>
              <Link
                to="/customize"
                className="block px-3 py-2 text-base font-medium text-charcoal-800 hover:bg-gray-50 rounded-md"
              >
                Customize
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-charcoal-800 hover:bg-gray-50 rounded-md"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-charcoal-800 hover:bg-gray-50 rounded-md"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-40 flex justify-around items-center h-16 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
        <Link
          to="/shop"
          className="flex flex-col items-center text-gray-500 hover:text-teal-600"
        >
          <Grid size={20} />
          <span className="text-[10px] mt-1 font-medium">Shop</span>
        </Link>
        <Link
          to={user ? "/account" : "/login"}
          className="flex flex-col items-center text-gray-500 hover:text-teal-600"
        >
          <User size={20} />
          <span className="text-[10px] mt-1 font-medium">Account</span>
        </Link>
        <button className="flex flex-col items-center text-gray-500 hover:text-teal-600">
          <Search size={20} />
          <span className="text-[10px] mt-1 font-medium">Search</span>
        </button>
        <button
          onClick={() => setIsWishlistOpen(true)}
          className="flex flex-col items-center text-gray-500 hover:text-teal-600"
        >
          <Heart size={20} />
          <span className="text-[10px] mt-1 font-medium">Wishlist</span>
        </button>
      </div>
    </>
  );
};

export default Header;
