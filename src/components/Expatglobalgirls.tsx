import React from "react";
import logo from "../assets/img/expert.png";

const Expatglobalgirls = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center bg-transparnt  rounded-lg  max-w-6xl mx-auto mt-500 gap-2">
      {/* Left Section: Image */}
      <div className="flex-1 flex items-center justify-center bg-white rounded-2xl">
        <img
          src={logo} // Replace with actual image path
          alt="logo"
          className="w-40 md:w-64"
        />
      </div>

      {/* Right Section: Text Content */}
      <div className="flex-1 flex flex-col justify-center text-center md:text-left p-6 bg-transparnt rounded-lg">
        <div className="w-12 h-1 bg-[#0872ba] mb-4 mx-auto md:mx-0"></div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-snug mb-4">
          Your Community for Women Ready to Go Abroad
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-6">
          We’re thrilled you found us! At Expat Global Girls, we empower women to
          pursue their dreams abroad. Our platform connects women seeking
          housemates for international moves and trips, offering a safe,
          supportive community and a searchable directory to help you find the
          perfect living companion. Join us to make your move abroad affordable,
          achievable, and filled with support!
        </p>
        {/* Button */}
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition duration-300">
          Become a Member &rarr;
        </button>
      </div>
    </div>
  );
};

export default Expatglobalgirls;
