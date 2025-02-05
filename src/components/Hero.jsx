import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[500px] lg:h-[600px]" id="home">
      <div className="absolute inset-0">
        <img
          src="./bridge.jpeg"
          alt="San Francisco Bridge"
          className="w-full h-full object-cover"
        />
      </div>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent"></div>

      <div className="relative h-full flex flex-col justify-center px-6 sm:px-8 lg:px-16">
        <p className="text-sm sm:text-base text-pink-600">Power & Research</p>
        <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-black mt-2 max-w-2xl">
          We specialize in React, Node.js, and cutting-edge technologies
        </h1>
        <p className="mt-3 sm:mt-4 text-gray-800 max-w-xl text-sm sm:text-base">
          We specialize in React, Node.js, and cutting-edge technologies to
          build fast, secure, and scalable applications.
        </p>
        <button className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-pink-600 text-white rounded-md w-fit text-sm sm:text-base hover:bg-pink-700 transition-colors">
          Schedule a Call
        </button>
      </div>
    </div>
  );
};

export default Hero;
