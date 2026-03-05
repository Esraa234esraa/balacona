import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect } from 'react';
export const CartContext = createContext(undefined);
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const stored = localStorage.getItem('bala-cart');
        return stored ? JSON.parse(stored) : [];
    });
    useEffect(() => {
        localStorage.setItem('bala-cart', JSON.stringify(cart));
    }, [cart]);
    const addToCart = (item) => {
        setCart(prev => {
            const existing = prev.find(c => c.id === item.id && c.size === item.size);
            if (existing) {
                return prev.map(c => c.id === item.id && c.size === item.size
                    ? { ...c, quantity: c.quantity + item.quantity }
                    : c);
            }
            return [...prev, item];
        });
    };
    const removeFromCart = (id) => {
        setCart(prev => prev.filter(c => c.id !== id));
    };
    const updateQuantity = (id, quantity) => {
        if (quantity <= 0) {
            removeFromCart(id);
        }
        else {
            setCart(prev => prev.map(c => (c.id === id ? { ...c, quantity } : c)));
        }
    };
    const clearCart = () => setCart([]);
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return (_jsx(CartContext.Provider, { value: { cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }, children: children }));
};
