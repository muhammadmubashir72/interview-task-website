'use client';

import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react';
import 'swiper/css';

const Slider = () => {
  const slides = [
    {
      image: '/banner/banner1.webp',
      title: 'Explore the Best Headphones',
      description: 'Find your perfect sound with our top-rated headphones collection.',
    },
    {
      image: '/banner/banner2.webp',
      title: 'Experience Pure Sound',
      description: 'Get the best noise-canceling headphones today!',
    },
    {
      image: '/banner/banner3.webp',
      title: 'Unmatched Comfort & Quality',
      description: 'Comfortable, high-quality headphones for every need.',
    },
  ];

  const swiperRef = useRef<SwiperRef | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideToLoop(activeIndex);
    }
  }, [activeIndex]);

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      const slideChangeInterval = setInterval(() => {
        swiperInstance.slideNext();
      }, 4000);

      return () => clearInterval(slideChangeInterval);
    }
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        className="w-full"
        breakpoints={{
          640: { spaceBetween: 30 },
          1024: { spaceBetween: 40 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative flex items-center justify-center w-full h-[50vh] sm:h-[60vh] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Text Content */}
              <div className="absolute left-0 p-4 sm:p-8 text-black w-full sm:w-1/2">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-2 sm:mb-4">{slide.title}</h2>
                <p className="text-sm sm:text-lg lg:text-xl mb-4 sm:mb-6">{slide.description}</p>
                <div className="flex flex-col sm:flex-row justify-start space-y-3 sm:space-y-0 sm:space-x-4 lg:space-x-6">
                  <button className="px-4 sm:px-6 lg:px-8 py-1 sm:py-2 bg-black text-white rounded-full transition-all duration-300 hover:bg-transparent hover:text-black text-sm sm:text-base">
                    Shop Now
                  </button>
                  <button className="px-4 sm:px-6 lg:px-8 py-1 sm:py-2 border-2 border-black text-black rounded-full transition-all duration-300 hover:bg-black hover:text-white text-sm sm:text-base">
                    View Collections
                  </button>
                </div>
              </div>

              {/* Dots */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 sm:px-6 py-1 sm:py-2 rounded-full flex items-center space-x-2 sm:space-x-4 shadow-md">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`relative ${activeIndex === index ? 'w-6 sm:w-10' : 'w-2 sm:w-3'} h-2 sm:h-3 rounded-full bg-gray-300 overflow-hidden`}
                  >
                    {activeIndex === index && (
                      <div className="absolute top-0 left-0 h-full bg-black animate-progress-bar"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        @keyframes progressBar {
          from { width: 0%; }
          to { width: 100%; }
        }

        .animate-progress-bar {
          animation: progressBar 4s linear forwards;
        }
      `}</style>
    </div>
  );
};

export default Slider;
