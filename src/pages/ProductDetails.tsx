import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { useCart } from '../hooks/useCart';
import { menuItems } from '../data/menuData';
import ProductCard from '../components/ProductCard';
import { ChevronLeft, Plus, Minus } from 'lucide-react';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const { addToCart } = useCart();
  const isRTL = language === 'ar';

  const product = menuItems.find(item => item.id === id);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState<'S' | 'M' | 'L'>('M');
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bala-cream dark:bg-bala-dark-bg">
        <div className="text-center">
          <p className="font-body text-lg text-bala-brown dark:text-bala-cream/70 mb-6">
            {language === 'ar' ? 'المنتج غير موجود' : 'Product not found'}
          </p>
          <button
            onClick={() => navigate('/menu')}
            className="px-6 py-3 bg-bala-forest dark:bg-bala-dark-green text-white rounded-bala font-body font-bold"
          >
            {language === 'ar' ? 'العودة للمنيو' : 'Back to Menu'}
          </button>
        </div>
      </div>
    );
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

  return (
    <div className={`${isRTL ? 'rtl' : 'ltr'} min-h-screen bg-bala-cream dark:bg-bala-dark-bg`}>
      {/* Back Button */}
      <div className="pt-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-bala mx-auto">
          <button
            onClick={() => navigate(-1)}
            className={`flex items-center gap-2 text-bala-forest dark:text-bala-cream hover:text-bala-gold transition-colors font-body font-bold ${isRTL ? 'flex-row-reverse' : ''}`}
          >
            <ChevronLeft size={20} className={isRTL ? 'rotate-180' : ''} />
            {language === 'ar' ? 'العودة' : 'Back'}
          </button>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-bala mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Image */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm rounded-bala overflow-hidden shadow-bala-hover">
                <img
                  src={product.image}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Details */}
            <div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-bala-forest dark:text-bala-cream mb-4">
                {name}
              </h1>
              <p className="font-body text-lg text-bala-brown dark:text-bala-cream/70 mb-8">
                {description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <p className="text-bala-brown dark:text-bala-cream/70 font-body text-sm uppercase tracking-widest mb-2">
                  {language === 'ar' ? 'السعر' : 'Price'}
                </p>
                <p className="text-4xl font-display font-bold text-bala-gold">
                  {product.price} {language === 'ar' ? 'ج' : 'SAR'}
                </p>
              </div>

              {/* Size Selector */}
              <div className="mb-8">
                <p className="text-bala-brown dark:text-bala-cream/70 font-body text-sm uppercase tracking-widest mb-4">
                  {language === 'ar' ? 'الحجم' : 'Size'}
                </p>
                <div className={`flex gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {(['S', 'M', 'L'] as const).map(s => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`px-6 py-3 rounded-bala font-body font-bold transition-all ${
                        size === s
                          ? 'bg-bala-forest dark:bg-bala-dark-green text-white'
                          : 'bg-white dark:bg-bala-dark-surface text-bala-forest dark:text-bala-cream border-2 border-bala-brown/10 dark:border-bala-dark-green/20'
                      }`}
                    >
                      {language === 'ar' ? (s === 'S' ? 'صغير' : s === 'M' ? 'متوسط' : 'كبير') : s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <p className="text-bala-brown dark:text-bala-cream/70 font-body text-sm uppercase tracking-widest mb-4">
                  {language === 'ar' ? 'الكمية' : 'Quantity'}
                </p>
                <div className={`flex items-center gap-4 bg-white dark:bg-bala-dark-surface rounded-bala p-2 w-fit ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-bala-forest/10 dark:hover:bg-bala-dark-green/20 rounded transition-colors"
                  >
                    <Minus size={20} className="text-bala-forest dark:text-bala-cream" />
                  </button>
                  <span className="font-display text-2xl font-bold text-bala-forest dark:text-bala-cream w-12 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-bala-forest/10 dark:hover:bg-bala-dark-green/20 rounded transition-colors"
                  >
                    <Plus size={20} className="text-bala-forest dark:text-bala-cream" />
                  </button>
                </div>
              </div>

              {/* Ingredients */}
              {ingredients && (
                <div className="mb-8">
                  <p className="text-bala-brown dark:text-bala-cream/70 font-body text-sm uppercase tracking-widest mb-4">
                    {language === 'ar' ? 'المكونات' : 'Ingredients'}
                  </p>
                  <ul className={`space-y-2 font-body text-bala-brown dark:text-bala-cream/70 ${isRTL ? 'text-right' : ''}`}>
                    {ingredients.map((ing, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-bala-gold rounded-full"></span>
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className={`w-full py-4 rounded-bala font-body font-bold transition-all duration-300 text-lg ${
                  addedToCart
                    ? 'bg-bala-forest dark:bg-bala-dark-green text-white'
                    : 'bg-bala-gold text-bala-forest hover:bg-bala-gold/90'
                }`}
              >
                {addedToCart
                  ? (language === 'ar' ? '✓ تم الإضافة' : '✓ Added')
                  : (language === 'ar' ? 'أضف للسلة' : 'Add to Cart')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Items */}
      {relatedItems.length > 0 && (
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-bala-brown/10 dark:border-bala-dark-green/20">
          <div className="max-w-bala mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-bala-forest dark:text-bala-cream mb-12 text-center">
              {language === 'ar' ? 'منتجات ذات صلة' : 'Related Items'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {relatedItems.map(item => (
                <ProductCard key={item.id} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetails;