import React from 'react';
import Eight from "../assets/img/eight.png";
import Nine from "../assets/img/nine.png";
import Ten from "../assets/img/ten.png";
import Eleven from "../assets/img/elevent.png";
import logo from "../assets/img/expert.png";

const Expat = () => {
    return (
        <div className="min-h-screen bg-transparent flex flex-col items-center justify-center px-4 mx-auto max-w-6xl">
            {/* Header */}
            <div className="text-center mb-8">
                <div className="relative inline-block mb-2">
                    <span
                        className="bg-[#0872BA4D] text-black rounded px-3 py-1 text-sm font-semibold inline-block"
                        style={{ transform: 'rotate(330deg)' }}
                    >
                        Why choose us?
                    </span>
                </div>
                <h1 className="text-4xl font-bold text-gray-800 mt-8">
                    Why Choose Expat Global Girls
                </h1>
                <p className="text-gray-500 mt-2">
                    Empowering women to travel with confidence and ease worldwide
                </p>
            </div>

            {/* Content Section */}
            <div className="flex flex-col items-center space-y-6 max-w-5xl w-full">
                {/* Top Row Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
                    <div className="bg-white shadow-lg p-6 flex items-start rounded-lg ">
                        <div
                            className="absolute"
                            style={{
                              
                                top: 0,
                                left: 1194.29,
                                width: 55.65,
                                height: 238.92,
                                transform: 'rotate(180deg)',
                                clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)',
                                borderRadius: '23.32%',
                            }}
                        />
                        <img src={Eight} alt="eight" className="w-12 h-12" />
                        <div className="ml-6">
                            <h2 className="text-xl font-semibold text-gray-800">Affordable Housing</h2>
                            <p className="text-gray-500 mt-1">
                                Save money and travel smarter by sharing accommodations with fellow members.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white shadow-lg rounded-lg p-6 flex items-start">
                        <div
                            className="absolute"
                            style={{
                                borderColor: 'blue',
                                top: 0,
                                left: 1194.29,
                                width: 55.65,
                                height: 238.92,
                                transform: 'rotate(180deg)',
                                clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)',
                                borderRadius: '23.32%',
                            }}
                        />
                        <img src={Nine} alt="nine" className="w-12 h-12 mr-4" />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Flexible Options</h2>
                            <p className="text-gray-500 mt-1">
                                From memberships to travel & lifestyle preferences – you have the power to choose.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Center Logo */}
                <div className="flex justify-center">
                    <img src={logo} alt="logo" className="h-16" />
                </div>

                {/* Bottom Row Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
                    {/* Verified Profiles */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex items-start">
                        <img src={Ten} alt="ten" className="w-12 h-12 mr-4" />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Verified Profiles</h2>
                            <p className="text-gray-500 mt-1">
                                A reliable community with verified profiles for added safety and peace of mind.
                            </p>
                        </div>
                    </div>

                    {/* Women-Only Spaces */}
                    <div className="bg-white shadow-lg rounded-lg p-6 flex items-start">
                        <img src={Eleven} alt="eleven" className="w-12 h-12 mr-4" />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">Women-Only Spaces</h2>
                            <p className="text-gray-500 mt-1">
                                Safe, supportive spaces for women to connect and thrive period.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expat;
