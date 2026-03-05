import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  isOpen: boolean;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  images,
  isOpen,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" onClick={onClose}></div>

      {/* Image */}
      <div className="relative max-w-4xl w-full mx-4 animate-fade-in">
        <img
          src={images[currentIndex]}
          alt="Gallery"
          className="w-full h-auto rounded-bala"
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
        >
          <X size={24} className="text-white" />
        </button>

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={onPrev}
              className="absolute top-1/2 left-4 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button
              onClick={onNext}
              className="absolute top-1/2 right-4 -translate-y-1/2 p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
            >
              <ChevronRight size={24} className="text-white" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 text-white rounded-full font-body text-sm font-bold">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Lightbox;