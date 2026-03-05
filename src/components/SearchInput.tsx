import React from 'react';
import { Search } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, placeholder }) => {
  const { language } = useLanguage();
  const isRTL = language === 'ar';

  return (
    <div className="relative">
      <Search className={`absolute top-1/2 -translate-y-1/2 text-bala-brown dark:text-bala-cream/50 ${isRTL ? 'right-4' : 'left-4'}`} size={20} />
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder || (language === 'ar' ? 'ابحث...' : 'Search...')}
        className={`w-full py-3 px-12 bg-white dark:bg-bala-dark-surface rounded-bala font-body border-2 border-bala-brown/10 dark:border-bala-dark-green/20 focus:outline-none focus:border-bala-gold focus:ring-2 focus:ring-bala-gold/20 ${isRTL ? 'text-right' : ''}`}
      />
    </div>
  );
};

export default SearchInput;