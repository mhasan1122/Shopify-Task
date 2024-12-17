import React from 'react';
import Logo from '../assets/img/expert.png';

export default function Navbar() {
  return (
    <div className='max-w-7xl mx-auto'>
      <nav className="bg-gray-50 bg-opacity-15 border-gray-200 backdrop-blur-md rounded-2xl">
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          {/* Logo */}
          <img src={Logo} className="h-16" alt="expert Logo" />

          {/* Login Button */}
          <button
            type="button"
            className="w-32 px-4 py-2 text-lg font-medium text-[#0872ba] bg-white rounded-2xl"
          >
            Log in
          </button>
        </div>
      </nav>
    </div>
  );
}
