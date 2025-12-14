"use client";

import { useState, useEffect, useCallback } from "react";
import { images } from "@/lib/images";

interface ImageSliderProps {
  autoPlayInterval?: number;
}

const slideContent = [
  { title: "Championship Golf", subtitle: "Experience 18 holes of pure excellence" },
  { title: "Scenic Beauty", subtitle: "Nestled among towering Wisconsin pines" },
  { title: "Challenge Awaits", subtitle: "Test your skills on our signature holes" },
  { title: "Perfect Greens", subtitle: "Meticulously maintained for optimal play" },
  { title: "Memorable Sunsets", subtitle: "End your round with breathtaking views" },
  { title: "Year-Round Play", subtitle: "Indoor simulator available all winter" },
];

export default function ImageSlider({
  autoPlayInterval = 6000,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const sliderImages = images.slider;

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % sliderImages.length);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning, sliderImages.length]);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning, sliderImages.length]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [isTransitioning, currentIndex]
  );

  // Auto-play functionality
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [goToNext, autoPlayInterval, isPaused]);

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Images with Ken Burns Effect */}
      {sliderImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[8000ms] ease-linear ${
              index === currentIndex ? "scale-110" : "scale-100"
            }`}
            style={{ backgroundImage: `url('${src}')` }}
          />
        </div>
      ))}

      {/* Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 z-30 bg-black/20">
        <div
          className="h-full bg-[var(--accent)] transition-all ease-linear"
          style={{
            width: `${((currentIndex + 1) / sliderImages.length) * 100}%`,
            transition: isPaused ? "none" : "width 0.3s ease-out",
          }}
        />
      </div>

      {/* Slide Counter */}
      <div className="absolute top-20 sm:top-24 right-4 sm:right-8 z-20 hidden sm:flex items-center gap-2 text-white/60 text-sm font-medium">
        <span className="text-white text-lg">{String(currentIndex + 1).padStart(2, "0")}</span>
        <span>/</span>
        <span>{String(sliderImages.length).padStart(2, "0")}</span>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrev}
        className="hidden sm:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 border border-white/20"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="hidden sm:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 border border-white/20"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators with Labels */}
      <div className="absolute bottom-24 sm:bottom-28 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`group relative transition-all duration-300 ${
              index === currentIndex ? "w-8 sm:w-10" : "w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span
              className={`block h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[var(--accent)] w-full"
                  : "bg-white/40 hover:bg-white/60 w-3"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Slide Content Overlay */}
      <div className="absolute bottom-32 sm:bottom-40 left-4 sm:left-8 z-20 max-w-md hidden md:block">
        {slideContent.map((content, index) => (
          <div
            key={index}
            className={`transition-all duration-700 ${
              index === currentIndex
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4 absolute"
            }`}
          >
            <p className="text-[var(--accent)] text-sm font-semibold tracking-wider uppercase mb-2">
              {content.subtitle}
            </p>
            <h3 className="text-white text-2xl lg:text-3xl font-bold text-shadow-lg">
              {content.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}
