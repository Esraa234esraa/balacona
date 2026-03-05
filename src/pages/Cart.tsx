import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useCart } from '../hooks/useCart';
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react';

const Cart: React.FC = () => {
  const { language } = useLanguage();
  const { cart, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const isRTL = language === 'ar';

  const discount = appliedPromo ? Math.floor(totalPrice * 0.1) : 0;
  const finalTotal = totalPrice - discount;

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === 'BALA10') {
      setAppliedPromo(promoCode);
      setPromoCode('');
    }
  };

  if (cart.length === 0) {
    return (
      <div className={`${isRTL ? 'rtl' : 'ltr'} min-h-screen bg-bala-cream dark:bg-bala-dark-bg flex items-center justify-center`}>
        <div className="text-center px-4">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-bala-forest dark:text-bala-cream mb-4">
            {language === 'ar' ? 'السلة فارغة' : 'Your Cart is Empty'}
          </h1>
          <p className="font-body text-lg text-bala-brown dark:text-bala-cream/70 mb-8">
            {language === 'ar' ? 'ابدأ بإضافة مشروباتك المفضلة!' : 'Start adding your favorite drinks!'}
          </p>
          <Link
            to="/menu"
            className="inline-block px-8 py-4 bg-bala-forest dark:bg-bala-dark-green text-white rounded-bala font-body font-bold hover:shadow-bala-hover transition-all"
          >
            {language === 'ar' ? 'استكشف المنيو' : 'Explore Menu'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`${isRTL ? 'rtl' : 'ltr'} min-h-screen bg-bala-cream dark:bg-bala-dark-bg py-12 sm:py-20 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-bala mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-bala-forest dark:text-bala-cream mb-12 text-center">
          {language === 'ar' ? 'السلة' : 'Cart'}
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map(item => (
              <div
                key={item.id}
                className={`bg-white dark:bg-bala-dark-surface rounded-bala p-6 flex gap-4 items-start shadow-bala-light dark:shadow-bala-dark hover:shadow-bala-hover transition-all ${isRTL ? 'flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-bala flex-shrink-0"
                />

                {/* Details */}
                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-bala-forest dark:text-bala-cream mb-2">
                    {item.name}
                  </h3>
                  <p className="font-body text-sm text-bala-brown dark:text-bala-cream/70 mb-3">
                    {language === 'ar' ? 'الحجم' : 'Size'}: {item.size}
                  </p>
                  <p className="font-display text-lg font-bold text-bala-gold">
                    {item.price} {language === 'ar' ? 'ج' : 'SAR'}
                  </p>
                </div>

                {/* Actions */}
                <div className={`flex items-center gap-2 bg-bala-cream dark:bg-bala-dark-bg rounded-bala p-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-1 hover:bg-bala-forest/10 dark:hover:bg-bala-dark-green/20 rounded transition-colors"
                  >
                    <Minus size={16} className="text-bala-forest dark:text-bala-cream" />
                  </button>
                  <span className="w-8 text-center font-body font-bold text-bala-forest dark:text-bala-cream">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-1 hover:bg-bala-forest/10 dark:hover:bg-bala-dark-green/20 rounded transition-colors"
                  >
                    <Plus size={16} className="text-bala-forest dark:text-bala-cream" />
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="p-2 hover:bg-red-500/10 text-red-500 rounded-bala transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-bala-dark-surface rounded-bala p-8 shadow-bala-light dark:shadow-bala-dark sticky top-24">
              <h2 className="font-display text-2xl font-bold text-bala-forest dark:text-bala-cream mb-6">
                {language === 'ar' ? 'الملخص' : 'Summary'}
              </h2>

              {/* Promo Code */}
              <div className="mb-8">
                <input
                  type="text"
                  placeholder={language === 'ar' ? 'كود الخصم' : 'Promo code'}
                  value={promoCode}
                  onChange={e => setPromoCode(e.target.value)}
                  className={`w-full px-4 py-3 rounded-bala font-body border-2 border-bala-brown/10 dark:border-bala-dark-green/20 focus:outline-none focus:border-bala-gold mb-3 ${isRTL ? 'text-right' : ''}`}
                />
                <button
                  onClick={handleApplyPromo}
                  className="w-full px-4 py-2 bg-bala-forest dark:bg-bala-dark-green text-white rounded-bala font-body font-bold hover:shadow-bala-hover transition-all text-sm"
                >
                  {language === 'ar' ? 'تطبيق' : 'Apply'}
                </button>
                <p className="text-xs text-bala-brown dark:text-bala-cream/50 mt-2 text-center">
                  {language === 'ar' ? 'جرب: BALA10' : 'Try: BALA10'}
                </p>
              </div>

              {/* Totals */}
              <div className="space-y-3 border-t border-bala-brown/10 dark:border-bala-dark-green/20 pt-6 mb-8">
                <div className={`flex justify-between font-body text-bala-brown dark:text-bala-cream/70 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>{language === 'ar' ? 'المجموع الجزئي' : 'Subtotal'}</span>
                  <span>{totalPrice} {language === 'ar' ? 'ج' : 'SAR'}</span>
                </div>
                {discount > 0 && (
                  <div className={`flex justify-between font-body text-green-600 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <span>{language === 'ar' ? 'الخصم' : 'Discount'}</span>
                    <span>-{discount} {language === 'ar' ? 'ج' : 'SAR'}</span>
                  </div>
                )}
                <div className={`flex justify-between font-display text-xl font-bold text-bala-forest dark:text-bala-cream pt-4 border-t border-bala-brown/10 dark:border-bala-dark-green/20 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <span>{language === 'ar' ? 'الإجمالي' : 'Total'}</span>
                  <span className="text-bala-gold">{finalTotal} {language === 'ar' ? 'ج' : 'SAR'}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Link
                to="/checkout"
                className="flex items-center justify-center gap-2 w-full py-4 bg-bala-forest dark:bg-bala-dark-green text-white rounded-bala font-body font-bold hover:shadow-bala-hover transition-all"
              >
                {language === 'ar' ? 'الدفع' : 'Checkout'}
                <ArrowRight size={20} className={isRTL ? 'rotate-180' : ''} />
              </Link>

              <button
                onClick={clearCart}
                className="w-full py-3 mt-4 text-bala-brown dark:text-bala-cream/70 rounded-bala font-body font-bold hover:bg-bala-forest/5 dark:hover:bg-bala-dark-green/10 transition-colors"
              >
                {language === 'ar' ? 'مسح السلة' : 'Clear Cart'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;