import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroCarousel({ language = "en" }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [dragStartX, setDragStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const isRTL = language === "ar";

  // بيانات الـ Slides - مشروبات / مخبوزات / حلويات
  const slides = [
    {
      id: 1,
      image: "/hero-1.webp",
      titleAr: "مشروباتنا… مش بس قهوة",
      titleEn: "Our drinks… not just coffee.",
      descAr: "مشروبات متقنة وقهوة بنكهات مختلفة تناسب كل مزاج",
      descEn: "Crafted drinks and coffee for every mood.",
      cta: "explore",
      ctaTarget: "signature", // يقفز لسيكشن المشروبات
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
      ctaTarget: "bakery", // يقفز لسيكشن المخبوزات
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
      ctaTarget: "chocolate", // يقفز لسيكشن الحلويات
      scrollLabelAr: "شوف الحلويات",
      scrollLabelEn: "See desserts",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // تغيير الصورة كل 5 ثوان

    return () => clearInterval(interval);
  }, [autoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setAutoPlay(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
    setAutoPlay(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setAutoPlay(false);
  };

  // سحب بالماوس/التاتش للتنقل بين السلايدات
  const handlePointerDown = (clientX) => {
    setDragStartX(clientX);
    setIsDragging(true);
    setAutoPlay(false);
  };

  const handlePointerUp = (clientX) => {
    if (!isDragging || dragStartX === null) return;

    const deltaX = clientX - dragStartX;

    if (deltaX > 50) {
      // سحب لليمين → سلايد قبلي
      prevSlide();
    } else if (deltaX < -50) {
      // سحب لليسار → سلايد بعده
      nextSlide();
    }

    setDragStartX(null);
    setIsDragging(false);
    setAutoPlay(true);
  };

  const handleMouseDown = (e) => {
    handlePointerDown(e.clientX);
  };

  const handleMouseUp = (e) => {
    handlePointerUp(e.clientX);
  };

  const handleMouseLeave = () => {
    if (!isDragging) return;
    setDragStartX(null);
    setIsDragging(false);
    setAutoPlay(true);
  };

  const handleTouchStart = (e) => {
    if (e.touches && e.touches[0]) {
      handlePointerDown(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = (e) => {
    if (e.changedTouches && e.changedTouches[0]) {
      handlePointerUp(e.changedTouches[0].clientX);
    }
  };

  const currentSlideData = slides[currentSlide];
  const title = language === "ar" ? currentSlideData.titleAr : currentSlideData.titleEn;
  const description = language === "ar" ? currentSlideData.descAr : currentSlideData.descEn;

  return (
    <section
      className="relative w-full h-screen overflow-hidden cursor-grab active:cursor-grabbing"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-center bg-cover bg-no-repeat scale-105"
              style={{ backgroundImage: `url("${slide.image}")` }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 dark:bg-black/65 backdrop-brightness-75" />

            {/* Golden Gradient Light */}
            <div className="absolute inset-0 bg-gradient-to-b from-bala-gold/20 via-transparent to-black/60" />

            {/* Content */}
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

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
        className={`hidden md:flex absolute top-1/2 ${
          isRTL ? "right-6" : "left-6"
        } z-20 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm`}
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
        className={`hidden md:flex absolute top-1/2 ${
          isRTL ? "left-6" : "right-6"
        } z-20 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm`}
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dot Navigation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
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
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-8 right-8 z-20 text-white text-sm font-semibold bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  );
}