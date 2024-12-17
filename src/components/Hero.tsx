import React from 'react';
import Background from '../assets/img/bg.png';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa'; // Importing the right arrow icon
import Features from './Features';

export default function Hero() {
    return (
        <div className='min-h-[300vh] md:min-h-[150vh]'>
        <div
        className="flex flex-col w-full h-screen bg-cover bg-center min-h-[200vh] md:min-h-[110vh]"
        style={{
          backgroundImage: `url(${Background})`,
        }}
        >
            {/* Navbar */}
            <div className="mt-4">
                <Navbar />
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row justify-between items-center w-full h-full px-6 lg:px-32 ">
                {/* Left Section (Text Content) */}
                <div className="lg:w-1/2 text-white mb-60 ml-8 mt-10">
                    <h1 className="text-6xl font-bold mb-6 mt-10">
                        The Premier<br />
                        Co-living Travel<br />
                        Network for Women
                    </h1>
                    <div className="flex items-center mb-4">
                        <div className="w-12 h-1 bg-white mr-4"></div>
                        <p className="text-xl font-semibold">
                            Find your perfect housemate,
                        </p>
                    </div>
                    <p className="text-xl font-semibold">
                        move faster, stay longer, and travel with confidence.
                    </p>
                </div>

                {/* Right Section (Sign-Up Form) */}
                <div className="lg:w-1/2 bg-gray-700 text-white p-8 rounded-lg shadow-lg mb-30 lg:mt-0 backdrop-blur-sm bg-opacity-30">
                    <h2 className="text-3xl font-bold mb-6 text-center">
                        Sign up with email
                    </h2>
                    <form className="flex flex-col">
                        {/* First name and Last name in one line */}
                        <div className="flex space-x-4 mb-4 ">
                            <div className="w-full">
                                <label className="text-lg mb-2" htmlFor="firstName">First name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    className="w-full p-3 border rounded-lg bg-transparent placeholder-white placeholder-opacity-50"

                                    placeholder="Enter your First name"
                                />


                            </div>
                            <div className="w-full">
                                <label className="text-lg mb-2" htmlFor="lastName">Last name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    className="w-full p-3 border rounded-lg bg-transparent placeholder-white placeholder-opacity-50"
                                    placeholder="Enter your last name "
                                />
                            </div>
                        </div>

                        {/* Email Input */}
                        <label className="text-lg mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mb-4 p-3 border rounded-lg bg-transparent placeholder-white placeholder-opacity-50"
                            placeholder="Enter your email"
                        />

                        {/* Password Input */}
                        <label className="text-lg mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="mb-6 p-3 border rounded-lg bg-transparent placeholder-white placeholder-opacity-50"
                            placeholder="Enter your password"
                        />

                        {/* Already a member line in center */}
                        <p className="text-center mb-4 text-xl">
                            You are already a member?{' '}
                            <Link to="" className="text-white underline">
                                log in
                            </Link>
                        </p>

                        {/* Sign Up Button with arrow icon */}
                        <button
                            type="submit"
                            className="bg-[#0872ba] text-white py-3 rounded-lg hover:bg-blue-700 transition flex items-center justify-center space-x-2"
                        >
                            <span>Sign up</span>
                            <FaArrowRight className="text-sm w-8 h-4" /> {/* Arrow icon */}

                        </button>
                    </form>
                </div>
            </div>
            
            <Features/>


           
        </div>
        </div>
    );
}
