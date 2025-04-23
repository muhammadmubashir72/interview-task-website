'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ProductBoxes = () => {
  const products = [
    {
      image: '/pro/airbuds.webp',
      title: 'high-quality wireless earphones.',
    },
    {
      image: '/pro/headphone.webp',
      title: 'Noise-canceling headphones.',
    },
    {
      image: '/pro/airbuds.webp',
      title: 'airbuds enhanced sound quality.',
    },
    {
      image: '/pro/headphone.webp',
      title: 'headphones for audiophiles.',
    },
  ];

  return (
    <div className="px-4 md:px-10 py-8">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        centeredSlides={true}
        className="w-full"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="flex w-full max-w-[400px] h-[170px] bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
              {/* Left side: Image */}
              <div className="w-1/2 relative h-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right side: Text */}
              <div className="w-1/2 p-4 flex flex-col justify-between bg-white">
                <h3 className="text-sm font-semibold">{product.title}</h3>
                <button className="text-sm font-bold text-black border-b-2 border-transparent hover:border-black transition-all duration-300">
                  View Collection
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductBoxes;
