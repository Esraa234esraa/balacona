import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { X } from 'lucide-react';
const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen)
        return null;
    return (_jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [_jsx("div", { className: "absolute inset-0 bg-black/30", onClick: onClose }), _jsxs("div", { className: "relative bg-white dark:bg-bala-dark-surface rounded-bala p-8 max-w-lg w-full mx-4 shadow-bala-hover animate-fade-in", children: [_jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsx("h2", { className: "font-display text-2xl font-bold text-bala-forest dark:text-bala-cream", children: title }), _jsx("button", { onClick: onClose, className: "p-2 hover:bg-bala-forest/10 dark:hover:bg-bala-dark-green/20 rounded-bala transition-colors", children: _jsx(X, { size: 24, className: "text-bala-forest dark:text-bala-cream" }) })] }), children] })] }));
};
export default Modal;
