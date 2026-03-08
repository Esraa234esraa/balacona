import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Language = "ar" | "en";

type Slide = {
  id: number;
  image: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  cta: string;
  ctaTarget: string;
  scrollLabelAr: string;
  scrollLabelEn: string;
};

type HeroCarouselProps = {
  language?: Language;
};

export default function HeroCarousel({
  language = "en",
}: HeroCarouselProps): React.JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const isRTL = language === "ar";

  const slides: Slide[] = [
    {
      id: 1,
      image: "/hero-1.webp",
      titleAr: "مشروباتنا… مش بس قهوة",
      titleEn: "Our drinks… not just coffee.",
      descAr: "مشروبات متقنة وقهوة بنكهات مختلفة تناسب كل مزاج",
      descEn: "Crafted drinks and coffee for every mood.",
      cta: "explore",
      ctaTarget: "signature",
      scrollLabelAr: "شوف المشروبات",
      scrollLabelEn: "See drinks",
    },
    {
      id: 2,
      image: "/hero-2.webp",
      titleAr: "المخبوزات الطازة",
      titleEn: "Fresh baked goods.",
      descAr: "كرواسون، بان، ومخبوزات محشية تتاكل وهي لسه طالعة",
      descEn: "Croissants, buns, and fresh-baked goods served warm.",
      cta: "menu",
      ctaTarget: "bakery",
      scrollLabelAr: "شوف المخبوزات",
      scrollLabelEn: "See bakery",
    },
    {
      id: 3,
      image: "/hero-3.webp",
      titleAr: "حلويات وشوكولاتة",
      titleEn: "Desserts & chocolate.",
      descAr: "تشيزكيك، براونيز، وشوكولاتة تعلي مود اليوم كله",
      descEn: "Cheesecakes, brownies, and chocolate to sweeten your day.",
      cta: "menu",
      ctaTarget: "chocolate",
      scrollLabelAr: "شوف الحلويات",
      scrollLabelEn: "See desserts",
    },
  ];

  useEffect(() => {
    if (!autoPlay) return;

    const interval = window.setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [autoPlay, slides.length]);

  const nextSlide = (): void => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prevSlide = (): void => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setAutoPlay(false);
  };

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  const handlePointerDown = (clientX: number): void => {
    setDragStartX(clientX);
    setIsDragging(true);
    setAutoPlay(false);
  };

  const handlePointerUp = (clientX: number): void => {
    if (!isDragging || dragStartX === null) return;

    const deltaX = clientX - dragStartX;

    if (deltaX > 50) {
      prevSlide();
    } else if (deltaX < -50) {
      nextSlide();
    }

    setDragStartX(null);
    setIsDragging(false);
    setAutoPlay(true);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    handlePointerDown(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>): void => {
    handlePointerUp(e.clientX);
  };

  const handleMouseLeave = (): void => {
    if (!isDragging) return;
    setDragStartX(null);
    setIsDragging(false);
    setAutoPlay(true);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    if (e.touches[0]) {
      handlePointerDown(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>): void => {
    if (e.changedTouches[0]) {
      handlePointerUp(e.changedTouches[0].clientX);
    }
  };

  const currentSlideData = slides[currentSlide];
  const title =
    language === "ar" ? currentSlideData.titleAr : currentSlideData.titleEn;
  const description =
    language === "ar" ? currentSlideData.descAr : currentSlideData.descEn;

  return (
    <section
      className="relative w-full h-screen overflow-hidden cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-center bg-cover bg-no-repeat scale-105"
              style={{ backgroundImage: `url("${slide.image}")` }}
            />

            <div className="absolute inset-0 bg-black/40 dark:bg-black/65 backdrop-brightness-75" />

            <div className="absolute inset-0 bg-gradient-to-b from-bala-gold/20 via-transparent to-black/60" />

            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <div className="max-w-3xl px-6 text-center">
                <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg animate-fadeInUp">
                  {title}
                </h1>

                <p className="font-body text-lg sm:text-xl text-white/90 mb-10 leading-relaxed animate-fadeInUp delay-100">
                  {description}
                </p>

                <div
                  className={`flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp delay-200 ${
                    isRTL ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  <button
                    onClick={() => {
                      const targetId = currentSlideData.ctaTarget || "signature";
                      document
                        .getElementById(targetId)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-8 py-4 border-2 border-white backdrop-blur-sm bg-bala-gold/20 text-white rounded-bala font-bold hover:bg-white/10 transition-all duration-300"
                  >
                    {language === "ar"
                      ? currentSlideData.scrollLabelAr
                      : currentSlideData.scrollLabelEn}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
        className={`hidden md:flex absolute top-1/2 ${
          isRTL ? "right-6" : "left-6"
        } z-20 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm`}
        aria-label="Previous slide"
        type="button"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
        className={`hidden md:flex absolute top-1/2 ${
          isRTL ? "left-6" : "right-6"
        } z-20 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm`}
        aria-label="Next slide"
        type="button"
      >
        <ChevronRight size={28} />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "bg-bala-gold w-3 h-3"
                : "bg-white/50 hover:bg-white/75 w-2.5 h-2.5"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            type="button"
          />
        ))}
      </div>

      <div className="absolute top-8 right-8 z-20 text-white text-sm font-semibold bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  );
}