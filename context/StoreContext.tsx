import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Order, Address } from '../types';

interface User {
    name: string;
    email: string;
    addresses: Address[];
}

interface StoreContextType {
    cart: CartItem[];
    addToCart: (product: Product & { selectedColor?: string }, quantity?: number) => void;
    removeFromCart: (productId: number) => void;
    updateQuantity: (productId: number, quantity: number) => void;
    clearCart: () => void;
    cartTotal: number;
    isCartOpen: boolean;
    setIsCartOpen: (isOpen: boolean) => void;

    // Orders
    orders: Order[];
    addOrder: (order: Order) => void;

    // Wishlist
    wishlist: Product[];
    addToWishlist: (product: Product) => void;
    removeFromWishlist: (productId: number) => void;
    isInWishlist: (productId: number) => boolean;
    isWishlistOpen: boolean;
    setIsWishlistOpen: (isOpen: boolean) => void;

    // Auth
    user: User | null;
    login: (email: string) => void;
    logout: () => void;
    isLoginOpen: boolean;
    setIsLoginOpen: (isOpen: boolean) => void;

    // Addresses
    addresses: Address[];
    addAddress: (address: Omit<Address, 'id'>) => void;
    updateAddress: (id: string, address: Partial<Address>) => void;
    removeAddress: (id: string) => void;

    isQuickViewOpen: boolean;
    setIsQuickViewOpen: (isOpen: boolean) => void;
    quickViewProduct: Product | null;
    setQuickViewProduct: (product: Product | null) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Cart State
    const [cart, setCart] = useState<CartItem[]>(() => {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    });
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Orders State
    const [orders, setOrders] = useState<Order[]>(() => {
        const saved = localStorage.getItem('orders');
        return saved ? JSON.parse(saved) : [];
    });

    // Wishlist State
    const [wishlist, setWishlist] = useState<Product[]>(() => {
        const saved = localStorage.getItem('wishlist');
        return saved ? JSON.parse(saved) : [];
    });
    const [isWishlistOpen, setIsWishlistOpen] = useState(false);

    // Auth State
    const [user, setUser] = useState<User | null>(() => {
        const saved = localStorage.getItem('user');
        return saved ? JSON.parse(saved) : null;
    });
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    // Addresses State
    const [addresses, setAddresses] = useState<Address[]>(() => {
        const saved = localStorage.getItem('addresses');
        return saved ? JSON.parse(saved) : [];
    });

    // Quick View State
    const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
    const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

    // Persistence
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders));
    }, [orders]);

    useEffect(() => {
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }, [wishlist]);

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    // Cart Logic
    const addToCart = (product: Product & { selectedColor?: string }, quantity = 1) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
            return [...prev, { ...product, quantity }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (productId: number) => {
        setCart(prev => prev.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId: number, quantity: number) => {
        if (quantity < 1) return;
        setCart(prev => prev.map(item => item.id === productId ? { ...item, quantity } : item));
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartTotal = cart.reduce((acc, item) => {
        const price = item.salePrice || item.price;
        return acc + (price * item.quantity);
    }, 0);

    // Order Logic
    const addOrder = (order: Order) => {
        setOrders(prev => [order, ...prev]);
    };

    // Wishlist Logic
    const addToWishlist = (product: Product) => {
        setWishlist(prev => {
            if (prev.some(item => item.id === product.id)) return prev;
            return [...prev, product];
        });
        setIsWishlistOpen(true);
    };

    const removeFromWishlist = (productId: number) => {
        setWishlist(prev => prev.filter(item => item.id !== productId));
    };

    const isInWishlist = (productId: number) => {
        return wishlist.some(item => item.id === productId);
    };

    // Auth Logic
    const login = (email: string) => {
        // Mock login
        setUser({ name: 'Demo User', email });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <StoreContext.Provider value={{
            cart, addToCart, removeFromCart, updateQuantity, clearCart, cartTotal, isCartOpen, setIsCartOpen,
            orders, addOrder,
            wishlist, addToWishlist, removeFromWishlist, isInWishlist, isWishlistOpen, setIsWishlistOpen,
            user, login, logout, isLoginOpen, setIsLoginOpen,
            isQuickViewOpen, setIsQuickViewOpen,
            quickViewProduct, setQuickViewProduct
        }}>
            {children}
        </StoreContext.Provider>
    );
};

export const useStore = () => {
    const context = useContext(StoreContext);
    if (!context) throw new Error("useStore must be used within StoreProvider");
    return context;
};