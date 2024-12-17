import React from 'react';
import five from '../assets/img/five.png'; // Replace with the correct path
import six from '../assets/img/six.jpg';   // Replace with the correct path
import seven from '../assets/img/seven.jpg'; // Replace with the correct path

const Features = ({ className = '' }) => {
  return (
    <div
      className={`bg-white p-8 max-w-6xl mx-auto rounded-2xl shadow-lg ${className} `}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={five}
            alt="150+ Countries"
            className="w-16 h-16 mb-4 object-contain"
          />
          <h3 className="text-lg font-bold mb-2">150+ Countries</h3>
          <p className="text-gray-600">
            Empowering women to explore destinations globally.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={six}
            alt="Connect & Travel"
            className="w-16 h-16 mb-4 object-contain"
          />
          <h3 className="text-lg font-bold mb-2">Connect & Travel</h3>
          <p className="text-gray-600">
            A trusted community of verified members.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center">
          <img
            src={seven}
            alt="Find Your Tribe"
            className="w-16 h-16 mb-4 object-contain"
          />
          <h3 className="text-lg font-bold mb-2">Find Your Tribe</h3>
          <p className="text-gray-600">
            Find like-minded housemates faster and easier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
