"use client";

import { useState } from 'react';

const TopHeader = () => {
  const textItems = [
    'ADVANCED TECHNOLOGY',
    'PREMIUM QUALITY PRODUCTS',
    'INNOVATIVE DESIGN',
    'FREE SHIPPING FOR ALL ORDER ABOVE $99',
  ];

  const [bgColor, setBgColor] = useState('bg-gray-800');

  const handleMouseEnter = () => {
    const colors = ['bg-blue-600', 'bg-green-600', 'bg-red-600'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  const handleMouseLeave = () => {
    setBgColor('bg-gray-800');
  };

  return (
    <div className={`${bgColor} text-white overflow-hidden py-2 sm:py-3 lg:py-4`}>
      <div
        className="flex animate-marquee whitespace-nowrap gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {Array(3)
          .fill(textItems)
          .flat()
          .map((item, index) => (
            <span
              key={index}
              className="text-xs sm:text-sm md:text-base lg:text-lg"
            >
              {item}
            </span>
          ))}
      </div>
    </div>
  );
};

export default TopHeader;
