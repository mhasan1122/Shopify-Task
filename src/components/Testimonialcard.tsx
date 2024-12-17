import React from "react";
import Wo from "../assets/img/wo.png";

const Testimonialcard = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 ">
      <div className="max-w-6xl w-full bg-white p-8 rounded-lg shadow-lg relative">
        {/* Header with Gradient Background */}
        <div
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-300 text-white text-xs px-2 py-1 rounded shadow-md"
          style={{ backgroundImage: 'linear-gradient(330deg, #0872BA, #5A9ED2, #87BBEB)', transform: 'rotate(330deg)' }}
        >
          Testimonial
        </div>

        

        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
          What Our Members Say
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Hear from women who share your passion for exploring new cultures, experiencing life abroad, and making the most of every opportunity.
        </p>

        {/* Main Content Section */}
        <div className="flex flex-wrap justify-between bg-white pb-20 items-center space-y-8 lg:space-y-0">
          {/* Blue Card */}
          <div
            className="relative w-full lg:w-1/3 h-[250px] text-white p-6"
            style={{
              perspective: '550px',            
            }}
          >
            <div
              className="content"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                transition: 'transform 1s',
                transformStyle: 'preserve-3d',
                transform: 'rotateY(20deg)', // Initial rotation
              }}
            >
              {/* Card Front */}
              <div
                className="front"
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  textAlign: 'center',
                  color: '#ffffff',
                  backgroundColor: '#0872BA',
                  borderRadius: '10px',
                  backfaceVisibility: 'hidden',
                }}
              >
                {/* Profile Image */}
                <div className="flex justify-center mt-4">
                  <img
                    src={Wo}
                    alt="wo"
                    className="w-16 h-16 rounded-full border-4 border-white"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-4">Sarah Thompson</h3>
                <p className="text-sm mt-1">Teacher · Non-smoker · Married</p>
                <p className="text-sm mt-1">Silom, Bangkok</p>
                <p className="text-sm mt-1">Dec 3-8</p>
                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white text-blue-600 rounded-full p-2 shadow-md">
                  ⭐ 5.0
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Text */}
          <div className="lg:w-2/3 bg-white rounded-lg p-6">
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
  );
};

export default Testimonialcard;
