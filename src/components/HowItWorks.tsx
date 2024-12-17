import React from "react";

// Import images using relative paths
import One from "../assets/img/one.png";
import Four from "../assets/img/two.png";
import Three from "../assets/img/three.png";
import Two from "../assets/img/four.png";

const HowItWorks: React.FC = () => {
    const steps = [
        { stepNumber: 1 },
        { stepNumber: 2 },
        { stepNumber: 3 },
        { stepNumber: 4 },
    ];

    return (
        <section className="max-w-6xl mx-auto px-4 py-8 bg-white">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
                How It Works
            </h2>
            <p className="text-center text-gray-600 mb-4">
                Search and find other travelers heading to the same destination.
            </p>

            {/* Flexbox Container for Equal Heights */}
            <div className="flex flex-col md:flex-row md:items-stretch gap-6 mx-auto max-w-4xl">
                {/* Left Column */}
                <div className="flex-1">
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Plan Your Trip
                        </h3>
                        <p className="text-gray-600 mb-3 text-sm">
                            Start by setting your travel dates, destinations, and preferences. This helps you tailor your search for housemates who align with your journey.
                        </p>
                        <img src={One} alt="Plan Your Trip" className="w-full object-contain rounded-lg max-h-36" />
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Explore Matching Profiles
                        </h3>
                        <p className="text-gray-600 mb-3 text-sm">
                            Browse through profiles of like-minded individuals traveling to similar locations. You can filter results based on your travel dates, needs, and values.
                        </p>
                        <img src={Two} alt="Explore Matching Profiles" className="w-full object-contain rounded-lg max-h-36" />
                    </div>
                </div>

                {/* Steps with Equal Height */}
                <div className="flex-1 flex flex-col items-center justify-center relative ">
                    {steps.map((step, index) => (
                        <div
                            key={step.stepNumber}
                            className="text-center mb-6 relative flex flex-col items-center h-[16vh]"
                        >
                            {/* Step Number */}
                            <div className="w-12 h-12 bg-white text-black border border-[#0872BA66] flex items-center justify-center rounded-full text-base font-semibold">
                                {step.stepNumber}
                            </div>
                            {/* Vertical Line */}
                            {index < steps.length - 1 && (
                                <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-px h-28 border-l-2 border-dashed border-[#0872BA66]"></div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right Column */}
                <div className="flex-1">
                    <div className="mb-8">
                    <img src={Three} alt="Connect and Build Relationships" className="w-full object-contain rounded-lg max-h-36" />

                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Connect and Build Relationships
                        </h3>
                        <p className="text-gray-600 mb-3 text-sm">
                            Send messages, ask questions, and get to know potential housemates before committing. Building rapport ensures a comfortable and trusted connection.
                        </p>
                    </div>

                    <div>
                    <img src={Four} alt="Secure Your Plans & Enjoy the Journey" className="w-full object-contain rounded-lg max-h-36" />

                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            Secure Your Plans & Enjoy the Journey
                        </h3>
                        <p className="text-gray-600 mb-3 text-sm">
                            Once you've found the right housemate, finalize your arrangements with confidence. Travel with peace of mind and enjoy every moment.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
