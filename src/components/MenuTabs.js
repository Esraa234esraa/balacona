import { jsx as _jsx } from "react/jsx-runtime";
import { useLanguage } from '../hooks/useLanguage';
const MenuTabs = ({ categories, activeCategory, onCategoryChange }) => {
    const { language } = useLanguage();
    const isRTL = language === 'ar';
    return (_jsx("div", { className: `flex gap-2 overflow-x-auto pb-2 ${isRTL ? 'flex-row-reverse' : ''}`, children: categories.map(cat => (_jsx("button", { onClick: () => onCategoryChange(cat.id), className: `px-6 py-3 rounded-bala font-body font-bold transition-all whitespace-nowrap ${activeCategory === cat.id
                ? 'bg-bala-forest dark:bg-bala-dark-green text-white'
                : 'bg-white dark:bg-bala-dark-surface text-bala-forest dark:text-bala-cream hover:bg-bala-forest/5'}`, children: language === 'ar' ? cat.arLabel : cat.enLabel }, cat.id))) }));
};
export default MenuTabs;
