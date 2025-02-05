import React from "react";
import { Construction, Mail, Rocket, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ComingSoonPage = () => {
    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1)
    }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="relative bg-gray-800 rounded-2xl shadow-2xl p-8 md:p-12 text-center max-w-2xl">
        <button onClick={()=>{handleBackButton()}} className="absolute top-4 left-4 text-gray-300 hover:text-white transition-colors">
          <ArrowLeft size={32} />
        </button>

        <Construction className="mx-auto text-blue-500 mb-6" size={72} />

        <h1 className="text-4xl font-bold text-white mb-4">Coming Soon</h1>

        <p className="text-gray-400 mb-6 text-lg">
          Our web development company is working hard to launch an incredible
          digital experience. Stay tuned!
        </p>

        <div className="flex justify-center space-x-4 mb-6">
          <Rocket className="text-blue-500" size={32} />
          <Mail className="text-blue-500" size={32} />
        </div>

        <div className="flex space-x-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
