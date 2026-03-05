import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface MenuTabsProps {
  categories: Array<{ id: string; arLabel: string; enLabel: string }>;
  activeCategory: string;
  onCategoryChange: (id: string) => void;
}

const MenuTabs: React.FC<MenuTabsProps> = ({ categories, activeCategory, onCategoryChange }) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className={`flex gap-2 overflow-x-auto pb-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
      {categories.map(cat => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={`px-6 py-3 rounded-bala font-body font-bold transition-all whitespace-nowrap ${
            activeCategory === cat.id
              ? 'bg-bala-forest dark:bg-bala-dark-green text-white'
              : 'bg-white dark:bg-bala-dark-surface text-bala-forest dark:text-bala-cream hover:bg-bala-forest/5'
          }`}
        >
          {language === 'ar' ? cat.arLabel : cat.enLabel}
        </button>
      ))}
    </div>
  );
};

export default MenuTabs;