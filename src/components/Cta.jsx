import React from "react";
import { Leaf } from "lucide-react";

const WebDocnnolynts = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left section with image */}
        <div className="relative flex-1">
          {/* Circle background */}
          <div className="absolute inset-0  rounded-3xl"></div>

          {/* Main image container */}
          <div className="relative">
            <img
              src="./smiley_woman.webp"
              alt="Person working on laptop"
              className="relative  rounded-full"
            />

            {/* Decorative elements */}
            <Leaf
              className="absolute top-0 right-6 text-green-900 transform rotate-45"
              size={60}
            />
            <Leaf
              className="absolute bottom-12 left-0 text-green-900 transform -rotate-45"
              size={50}
            />
            <Leaf
              className="absolute top-8 left-2 text-green-800"
              size={24}
            />

            {/* Yellow accent */}
            <div className="absolute bottom-2 right-12 w-16 h-16 bg-yellow-300 rounded-full transform rotate-45"></div>

            {/* Blue accent */}
            <div className="absolute -bottom-8 right-24 w-36 h-4 bg-blue-200 rounded-full"></div>
          </div>
        </div>

        {/* Right section with content */}
        <div className="flex-1 space-y-6">
          <div className="space-y-2">
            <p className="text-pink-500 font-medium">Explore Our Work</p>
            <h1 className="text-4xl font-bold">
              Empowering Businesses with Cutting-Edge Digital Solutions
            
            </h1>
          </div>

          <p className="text-gray-600 leading-relaxed">
            At Tech Amica, we specialize in designing and developing modern,
            scalable, and user-friendly websites and web applications. With
            expertise in technologies like React, Node.js, Tailwind CSS, and
            MongoDB, we craft custom solutions tailored to your business needs.
            Whether you&apos;re a startup, small business, or enterprise, we
            bring your vision to life with creativity, precision, and a
            results-driven approach.
          </p>

          <button className="bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600 transition-colors">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebDocnnolynts;
