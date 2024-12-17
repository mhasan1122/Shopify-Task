import React from 'react';
import Tra from "../assets/img/tr.png";

export default function Traveler() {
  return (
    <div className="max-w-6xl mx-auto bg-white mt-20 px-4 sm:px-8 lg:px-16 mb-20  rounded-xl">
      {/* Decorative Line */}
      <div className="flex justify-center">
        <div className="w-12 h-1 bg-[#0872ba] mt-4"></div>
      </div>

      {/* Title */}
      <h1 className="text-[#1d2939] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-center mt-4">
        Perfect for every type of traveler
      </h1>

      {/* Image */}
      <div className="mt-6">
        <img
          src={Tra}
          alt="Traveler"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
