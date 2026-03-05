import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { translations } from '../data/translations';
export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    const t = (key) => {
        const keys = key.split('.');
        let value = translations[context.language];
        for (const k of keys) {
            value = value?.[k];
        }
        return typeof value === 'string' ? value : key;
    };
    return { ...context, t };
};
