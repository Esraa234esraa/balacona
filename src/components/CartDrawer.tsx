import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useCart } from '../hooks/useCart';
import { X, ShoppingCart as CartIcon } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();
  const { cart, totalPrice } = useCart();
  const isRTL = language === 'ar';

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30"
          onClick={onClose}
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 z-50 h-full w-full max-w-sm bg-white dark:bg-bala-dark-surface transform transition-transform duration-300 ${
          isOpen
            ? 'translate-x-0'
            : isRTL
            ? 'translate-x-full'
            : '-translate-x-full'
        } ${isRTL ? 'right-0' : 'left-0'}`}
      >
        <div className={`flex items-center justify-between p-6 border-b border-bala-brown/10 dark:border-bala-dark-green/20 ${isRTL ? 'flex-row-reverse' : ''}`}>
          <h2 className="font-display text-2xl font-bold text-bala-forest dark:text-bala-cream">
            {language === 'ar' ? 'السلة' : 'Cart'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-bala-forest/10 dark:hover:bg-bala-dark-green/20 rounded-bala transition-colors"
          >
            <X size={24} className="text-bala-forest dark:text-bala-cream" />
          </button>
        </div>

        {cart.length > 0 ? (
          <>
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-bala"
                  />
                  <div className="flex-1">
                    <p className="font-display font-bold text-bala-forest dark:text-bala-cream text-sm">
                      {item.name}
                    </p>
                    <p className="font-body text-xs text-bala-brown dark:text-bala-cream/70">
                      ×{item.quantity}
                    </p>
                    <p className="font-display font-bold text-bala-gold text-sm">
                      {item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-bala-brown/10 dark:border-bala-dark-green/20 p-6 space-y-4">
              <div className={`flex justify-between font-display font-bold text-bala-forest dark:text-bala-cream ${isRTL ? 'flex-row-reverse' : ''}`}>
                <span>{language === 'ar' ? 'الإجمالي' : 'Total'}</span>
                <span className="text-bala-gold">{totalPrice}</span>
              </div>
              <Link
                to="/cart"
                onClick={onClose}
                className="block w-full py-3 bg-bala-forest dark:bg-bala-dark-green text-white rounded-bala font-body font-bold text-center hover:shadow-bala-hover transition-all"
              >
                {language === 'ar' ? 'مراجعة السلة' : 'View Cart'}
              </Link>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <CartIcon size={48} className="text-bala-brown/30 dark:text-bala-cream/30 mb-4" />
            <p className="font-body text-bala-brown dark:text-bala-cream/70 text-center">
              {language === 'ar' ? 'السلة فارغة' : 'Your cart is empty'}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;