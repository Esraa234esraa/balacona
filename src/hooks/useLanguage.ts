import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { translations } from '../data/translations';

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[context.language];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return typeof value === 'string' ? value : key;
  };

  return { ...context, t };
};