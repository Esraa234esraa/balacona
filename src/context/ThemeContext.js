import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState, useEffect } from 'react';
export const ThemeContext = createContext(undefined);
export const ThemeProvider = ({ children }) => {
    const [theme, setThemeState] = useState(() => {
        const stored = localStorage.getItem('bala-theme');
        if (stored)
            return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });
    useEffect(() => {
        localStorage.setItem('bala-theme', theme);
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        }
        else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);
    const setTheme = (t) => setThemeState(t);
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
    return (_jsx(ThemeContext.Provider, { value: { theme, setTheme, toggleTheme }, children: children }));
};
