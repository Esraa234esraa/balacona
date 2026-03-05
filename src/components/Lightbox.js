import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
const Lightbox = ({ images, isOpen, currentIndex, onClose, onNext, onPrev, }) => {
    if (!isOpen)
        return null;
    return (_jsxs("div", { className: "fixed inset-0 z-50 flex items-center justify-center", children: [_jsx("div", { className: "absolute inset-0 bg-black/80", onClick: onClose }), _jsxs("div", { className: "relative max-w-4xl w-full mx-4 animate-fade-in", children: [_jsx("img", { src: images[currentIndex], alt: "Gallery", className: "w-full h-auto rounded-bala" }), _jsx("button", { onClick: onClose, className: "absolute top-4 right-4 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors", children: _jsx(X, { size: 24, className: "text-white" }) }), images.length > 1 && (_jsxs(_Fragment, { children: [_jsx("button", { onClick: onPrev, className: "absolute top-1/2 left-4 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors", children: _jsx(ChevronLeft, { size: 24, className: "text-white" }) }), _jsx("button", { onClick: onNext, className: "absolute top-1/2 right-4 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors", children: _jsx(ChevronRight, { size: 24, className: "text-white" }) }), _jsxs("div", { className: "absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 text-white rounded-full font-body text-sm font-bold", children: [currentIndex + 1, " / ", images.length] })] }))] })] }));
};
export default Lightbox;
