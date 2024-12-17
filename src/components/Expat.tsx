import React from 'react';
import Eight from "../assets/img/eight.png";
import Nine from "../assets/img/nine.png";
import Ten from "../assets/img/ten.png";
import Eleven from "../assets/img/elevent.png";
import logo from "../assets/img/expert.png";

const Expat = () => {
    return (
        <div className="min-h-screen bg-transprant flex flex-col items-center justify-center px-4 mx-auto max-w-6xl">
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
            <div className="flex flex-col items-center space-y-1 max-w-5xl w-full">
                {/* Top Row Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
                    {/* Affordable Housing */}

                    <div className="bg-[#0872BA33] [clip-path:polygon(0%_0%,100%_0%,100%_70%,90%_100%,0%_100%)] p-[3px] rounded-[23px]">

                        <div className="bg-[#F6F6F6] p-6 px-12 rounded-[20px] [clip-path:polygon(0%_0%,100%_0%,100%_70%,90%_100%,0%_100%)] ">

                            <img src={Eight} alt="Affordable Housing" className="w-12 h-10 mb-4" />

                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">Affordable Housing</h2>
                                <p className="text-gray-500 mt-1">
                                    Save money and travel smarter by sharing accommodations with fellow members.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#0872BA33] [clip-path:polygon(100%_0%,100%_100%,10%_100%,0%_70%,0%_0%)] p-[3px] rounded-[23px]">

                        <div className="bg-[#F6F6F6] p-6 px-12 rounded-[20px] [clip-path:polygon(100%_0%,100%_100%,10%_100%,0%_70%,0%_0%)] ">

                            <img src={Nine} alt="Affordable Housing" className="w-12 h-10 mb-4" />

                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">Affordable Housing</h2>
                                <p className="text-gray-500 mt-1">
                                    Save money and travel smarter by sharing accommodations with fellow members.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center Logo */}
                <div className="flex justify-center">
                    <img src={logo} alt="logo" className="h-14" />
                </div>

                {/* Bottom Row Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
                    {/* Verified Profiles */}
                    <div className="bg-[#0872BA33] [clip-path:polygon(100%_30%,100%_100%,0%_100%,0%_0%,90%_0%)] p-[3px] rounded-[23px]">

                        <div className="bg-[#F6F6F6] p-6 px-12 rounded-[20px] [clip-path:polygon(100%_30%,100%_100%,0%_100%,0%_0%,90%_0%)] ">

                            <img src={Ten} alt="Affordable Housing" className="w-12 h-10 mb-4" />

                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">Affordable Housing</h2>
                                <p className="text-gray-500 mt-1">
                                    Save money and travel smarter by sharing accommodations with fellow members.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Women-Only Spaces */}
                    <div className="bg-[#0872BA33] [clip-path:polygon(100%_0%,100%_100%,0%_100%,0%_30%,10%_0%)] p-[3px] rounded-[23px]">

                        <div className="bg-[#F6F6F6] p-6 px-12 rounded-[20px] [clip-path:polygon(100%_0%,100%_100%,0%_100%,0%_30%,10%_0%)] ">

                            <img src={Eleven} alt="Affordable Housing" className="w-12 h-10 mb-4" />

                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">Affordable Housing</h2>
                                <p className="text-gray-500 mt-1">
                                    Save money and travel smarter by sharing accommodations with fellow members.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Expat;
