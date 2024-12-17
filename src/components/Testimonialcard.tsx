import React from "react";
import Wo from "../assets/img/wo.png";

const Testimonialcard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-6">
      {/* Outer Wrapper */}
      <div className="max-w-5xl w-full rounded-lg shadow-lg overflow-hidden">
        {/* First Section - Gray Background */}
        <div className="bg-gray-100 pt-20 pb-6 px-8 relative top-4">
          {/* Testimonial Badge */}
          <div
 className="absolute top-1 left-1/2 transform -translate-x-1/2 -rotate-[30deg] bg-[#9bbbd1] text-black text-xs px-3 py-1 rounded shadow-md"
 style={{ transform: 'rotate(330deg)' }}
>
 Testimonial
</div>

          {/* Section Heading */}
          <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
            What Our Members Say
          </h2>
          <p className="text-center text-gray-600">
            Hear from women who share your passion for exploring new cultures,
            experiencing life abroad, and making the most of every opportunity.
          </p>
        </div>

        {/* Second Section - White Background */}
        <div className="bg-white p-8">
          {/* Main Content Section */}
          <div className="flex flex-wrap justify-between items-center space-y-8 lg:space-y-0">
            {/* Blue Card */}
            <div className="relative w-full lg:w-1/3 bg-blue-600 text-white p-6 rounded-2xl shadow-lg transform -skew-x-6 ">
              {/* Profile Image */}
              <div className="flex justify-center">
                <img
                  src={Wo}
                  alt="wo"
                  className="w-16 h-16 rounded-full border-4 border-white"
                />
              </div>
              <h3 className="text-lg font-semibold mt-4 text-center">
                Sarah Thompson
              </h3>
              <p className="text-sm text-center mt-1">
                Teacher · Non-smoker · Married
              </p>
              <p className="text-sm text-center mt-1">Silom, Bangkok</p>
              <p className="text-sm text-center mt-1">Dec 3-8</p>
              {/* Rating */}
              <div className="absolute top-4 right-4 bg-white text-blue-600 rounded-full p-2 shadow-md">
                ⭐ 5.0
              </div>
            </div>

            {/* Testimonial Text */}
            <div className="lg:w-2/3 bg-gray-50 rounded-lg p-6 shadow">
              <p className="text-gray-800 text-lg leading-relaxed">
                <span className="text-2xl font-bold text-gray-400">“</span> Our
                smart developers build innovative, efficient, and
                high-performance solutions. efficient, and high-performance
                solutions. efficient, and high-performance solutions.
                <span className="text-2xl font-bold text-gray-400">”</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonialcard;
