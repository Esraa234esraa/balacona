import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useCart } from '../hooks/useCart';
import { menuItems } from '../data/menuData';
import ProductCard from '../components/ProductCard';
import { ChevronLeft, Plus, Minus } from 'lucide-react';
const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { language } = useLanguage();
    const { addToCart } = useCart();
    const isRTL = language === 'ar';
    const product = menuItems.find(item => item.id === id);
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState('M');
    const [addedToCart, setAddedToCart] = useState(false);
    if (!product) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center bg-bala-cream dark:bg-bala-dark-bg", children: _jsxs("div", { className: "text-center", children: [_jsx("p", { className: "font-body text-lg text-bala-brown dark:text-bala-cream/70 mb-6", children: language === 'ar' ? 'المنتج غير موجود' : 'Product not found' }), _jsx("button", { onClick: () => navigate('/menu'), className: "px-6 py-3 bg-bala-forest dark:bg-bala-dark-green text-white rounded-bala font-body font-bold", children: language === 'ar' ? 'العودة للمنيو' : 'Back to Menu' })] }) }));
    }
    const relatedItems = menuItems
        .filter(item => item.category === product.category && item.id !== product.id)
        .slice(0, 4);
    const handleAddToCart = () => {
        const name = language === 'ar' ? product.nameAr : product.nameEn;
        addToCart({
            id: `${product.id}-${size}`,
            name,
            price: product.price,
            quantity,
            size,
            image: product.image,
        });
        setAddedToCart(true);
        setTimeout(() => setAddedToCart(false), 2000);
    };
    const name = language === 'ar' ? product.nameAr : product.nameEn;
    const description = language === 'ar' ? product.descriptionAr : product.descriptionEn;
    const ingredients = language === 'ar' ? product.ingredientsAr : product.ingredientsEn;
    return (_jsxs("div", { className: `${isRTL ? 'rtl' : 'ltr'} min-h-screen bg-bala-cream dark:bg-bala-dark-bg`, children: [_jsx("div", { className: "pt-6 px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "max-w-bala mx-auto", children: _jsxs("button", { onClick: () => navigate(-1), className: `flex items-center gap-2 text-bala-forest dark:text-bala-cream hover:text-bala-gold transition-colors font-body font-bold ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx(ChevronLeft, { size: 20, className: isRTL ? 'rotate-180' : '' }), language === 'ar' ? 'العودة' : 'Back'] }) }) }), _jsx("section", { className: "py-12 sm:py-24 px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "max-w-bala mx-auto", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-12", children: [_jsx("div", { className: "flex items-center justify-center", children: _jsx("div", { className: "w-full max-w-sm rounded-bala overflow-hidden shadow-bala-hover", children: _jsx("img", { src: product.image, alt: name, className: "w-full h-full object-cover" }) }) }), _jsxs("div", { children: [_jsx("h1", { className: "font-display text-4xl sm:text-5xl font-bold text-bala-forest dark:text-bala-cream mb-4", children: name }), _jsx("p", { className: "font-body text-lg text-bala-brown dark:text-bala-cream/70 mb-8", children: description }), _jsxs("div", { className: "mb-8", children: [_jsx("p", { className: "text-bala-brown dark:text-bala-cream/70 font-body text-sm uppercase tracking-widest mb-2", children: language === 'ar' ? 'السعر' : 'Price' }), _jsxs("p", { className: "text-4xl font-display font-bold text-bala-gold", children: [product.price, " ", language === 'ar' ? 'ج' : 'SAR'] })] }), _jsxs("div", { className: "mb-8", children: [_jsx("p", { className: "text-bala-brown dark:text-bala-cream/70 font-body text-sm uppercase tracking-widest mb-4", children: language === 'ar' ? 'الحجم' : 'Size' }), _jsx("div", { className: `flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`, children: ['S', 'M', 'L'].map(s => (_jsx("button", { onClick: () => setSize(s), className: `px-6 py-3 rounded-bala font-body font-bold transition-all ${size === s
                                                        ? 'bg-bala-forest dark:bg-bala-dark-green text-white'
                                                        : 'bg-white dark:bg-bala-dark-surface text-bala-forest dark:text-bala-cream border-2 border-bala-brown/10 dark:border-bala-dark-green/20'}`, children: language === 'ar' ? (s === 'S' ? 'صغير' : s === 'M' ? 'متوسط' : 'كبير') : s }, s))) })] }), _jsxs("div", { className: "mb-8", children: [_jsx("p", { className: "text-bala-brown dark:text-bala-cream/70 font-body text-sm uppercase tracking-widest mb-4", children: language === 'ar' ? 'الكمية' : 'Quantity' }), _jsxs("div", { className: `flex items-center gap-4 bg-white dark:bg-bala-dark-surface rounded-bala p-2 w-fit ${isRTL ? 'flex-row-reverse' : ''}`, children: [_jsx("button", { onClick: () => setQuantity(Math.max(1, quantity - 1)), className: "p-2 hover:bg-bala-forest/10 dark:hover:bg-bala-dark-green/20 rounded transition-colors", children: _jsx(Minus, { size: 20, className: "text-bala-forest dark:text-bala-cream" }) }), _jsx("span", { className: "font-display text-2xl font-bold text-bala-forest dark:text-bala-cream w-12 text-center", children: quantity }), _jsx("button", { onClick: () => setQuantity(quantity + 1), className: "p-2 hover:bg-bala-forest/10 dark:hover:bg-bala-dark-green/20 rounded transition-colors", children: _jsx(Plus, { size: 20, className: "text-bala-forest dark:text-bala-cream" }) })] })] }), ingredients && (_jsxs("div", { className: "mb-8", children: [_jsx("p", { className: "text-bala-brown dark:text-bala-cream/70 font-body text-sm uppercase tracking-widest mb-4", children: language === 'ar' ? 'المكونات' : 'Ingredients' }), _jsx("ul", { className: `space-y-2 font-body text-bala-brown dark:text-bala-cream/70 ${isRTL ? 'text-right' : ''}`, children: ingredients.map((ing, idx) => (_jsxs("li", { className: "flex items-center gap-2", children: [_jsx("span", { className: "w-2 h-2 bg-bala-gold rounded-full" }), ing] }, idx))) })] })), _jsx("button", { onClick: handleAddToCart, className: `w-full py-4 rounded-bala font-body font-bold transition-all duration-300 text-lg ${addedToCart
                                            ? 'bg-bala-forest dark:bg-bala-dark-green text-white'
                                            : 'bg-bala-gold text-bala-forest hover:bg-bala-gold/90'}`, children: addedToCart
                                            ? (language === 'ar' ? '✓ تم الإضافة' : '✓ Added')
                                            : (language === 'ar' ? 'أضف للسلة' : 'Add to Cart') })] })] }) }) }), relatedItems.length > 0 && (_jsx("section", { className: "py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-bala-brown/10 dark:border-bala-dark-green/20", children: _jsxs("div", { className: "max-w-bala mx-auto", children: [_jsx("h2", { className: "font-display text-3xl sm:text-4xl font-bold text-bala-forest dark:text-bala-cream mb-12 text-center", children: language === 'ar' ? 'منتجات ذات صلة' : 'Related Items' }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8", children: relatedItems.map(item => (_jsx(ProductCard, { item: item }, item.id))) })] }) }))] }));
};
export default ProductDetails;
