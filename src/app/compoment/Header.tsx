"use client";

import { useState } from 'react';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

const Header = () => {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  const categories = [
    'Accessories', 'Auto turntables', 'Best sellers', 'Bone conduction', 'Bookshelf speakers',
    'Charging pads', 'Earphones', 'Featured', 'Hand turntable', 'Hard drives', 'Headphones',
    'Headsets', 'Limited edition', 'New arrivals', 'Noise-cancelling', 'Portable speakers',
    'Power banks', 'Sale', 'Speakers', 'Stands', 'Top new', 'Turntables', 'Wired earphones',
    'Wireless earphones',
  ];

  return (
    <div className="py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between flex-wrap">
        {/* Logo */}
        <div className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 italic pr-4 sm:pr-6 mb-4 sm:mb-0">
          elixira
        </div>

        {/* Categories and Search Box */}
        <div className="flex items-center bg-gray-200 rounded-full px-3 sm:px-4 py-2 sm:py-3 relative w-full sm:w-3/4 lg:w-1/2 mb-4 sm:mb-0">
          <div
            className="flex items-center cursor-pointer text-gray-700"
            onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
          >
            <span className="text-xs sm:text-sm lg:text-base">All Categories</span>
            <IoIosArrowDown className="ml-1 text-gray-500 text-base sm:text-lg" />
          </div>
          <span className="mx-1 sm:mx-2 text-gray-400">|</span>
          <div className="flex items-center flex-grow">
            <input
              type="text"
              placeholder="What are you looking for"
              className="outline-none text-xs sm:text-sm lg:text-base w-full bg-transparent"
            />
            <FaSearch className="text-gray-600 ml-1 sm:ml-2 text-lg sm:text-xl" />
          </div>

          {/* Categories Dropdown */}
          {isCategoriesOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-full sm:w-80 max-h-80 overflow-y-auto z-10">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-xs sm:text-sm lg:text-base"
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* User and Cart Icons */}
        <div className="flex items-center space-x-4 sm:space-x-6 lg:space-x-8 text-gray-800 mb-4 sm:mb-0">
          <div className="flex items-center cursor-pointer group relative">
            <FaUser className="text-lg sm:text-xl lg:text-2xl pr-1 sm:pr-2" />
            <span className="text-xs sm:text-sm lg:text-base">Sign In / Register</span>
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-800 group-hover:w-full group-active:w-full transition-all duration-500"></span>
          </div>
          <FaShoppingCart className="cursor-pointer text-lg sm:text-xl lg:text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Header;
