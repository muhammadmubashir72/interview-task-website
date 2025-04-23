"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ProductBoxes = () => {
  const products = [
    {
      image: "/pro/airbuds.webp", // Replace with your image path
      //   title: 'Airbuds',
      title: "high-quality wireless earphones.",
    },
    {
      image: "/pro/headphone.webp", // Replace with your image path
      //   title: 'Headphones',
      title: "Noise-canceling headphones for .",
    },
    {
      image: "/pro/airbuds.webp", // Replace with your image path
      //   title: 'Airbuds 2',
      title: "airbuds enhanced sound quality.",
    },
    {
      image: "/pro/headphone.webp", // Replace with your image path
      //   title: 'Headphones Pro',
      title: "headphones for audiophiles.",
    },
  ];

  return (
    <div className="px-10 py-8">
      <Swiper
        spaceBetween={20} // Adjust the space between items
        slidesPerView={3} // Show 3 items at once
        loop={true} // Enable looping
        centeredSlides={true}
        className="w-full"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="flex w-[400px] h-[170px] bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Left side: Image */}
              <div className="w-1/2 h-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-100 h-100 object-cover"
                />
              </div>

              {/* Right side: Text */}
              <div className="w-1/2 p-4 flex flex-col justify-between bg-white">
                <h3 className="text-lg font-bold">{product.title}</h3>
                <button className="text-md font-bold text-black border-b-2 border-transparent hover:border-black transition-all duration-300">
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
