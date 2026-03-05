import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect } from 'react';
export const LanguageContext = createContext(undefined);
export const LanguageProvider = ({ children }) => {
    const [language, setLanguageState] = useState(() => {
        return localStorage.getItem('bala-language') || 'ar';
    });
    useEffect(() => {
        localStorage.setItem('bala-language', language);
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = language;
    }, [language]);
    const setLanguage = (lang) => setLanguageState(lang);
    const t = (key) => {
        // Placeholder - will use translations from data
        return key;
    };
    return (_jsx(LanguageContext.Provider, { value: { language, setLanguage, t }, children: children }));
};
