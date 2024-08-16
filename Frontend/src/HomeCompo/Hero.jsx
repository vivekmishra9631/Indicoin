import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 via-purple-800 to-indigo-800 text-white py-20 lg:py-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://cdn.prod.website-files.com/66327d2c71b7019a2a9a1b62/664e5aca96b63a182fe065e8_Hero_NEW.svg"
          alt="Crypto Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative container mx-auto px-6 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to <span className="text-indigo-400">INDICOIN</span>
          </h1>
          <p className="text-xl mb-6">
            Transforming INR Transactions: Stability and Innovation for the Digital Future
          </p>
          <div className="mb-8">
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded-full mr-4">
              Get Started
            </button>
            <Link to="/indicoin">
              <button className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-600 text-white font-bold py-2 px-4 rounded-full">
                Get an INDICOIN
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          {/* Add any additional content here */}
        </div>
      </div>

      {/* Additional Content */}
      <div className="relative container mx-auto mt-12 px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Key Features Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Stable and Secure</h2>
          <p>INDICOIN is pegged to the Indian Rupee, ensuring stability in a volatile market and deployed on Polygon Network</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Developer Friendly</h2>
          <p>Our platform offers ready-to-use SDKs, smart contract templates, and APIs to streamline DApp development for INR-based financial applications.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4">Cross-border Payments</h2>
          <p>Facilitating easier and more-cost effective international remittances by streamlining the process of sending money across borders while reducing associated fees thereby simplifying documentation, speeding up transfer times, and lowering transaction costs.</p>
        </div>
      </div>

      <div className="relative container mx-auto mt-12 px-6 text-center">
        <p className="text-lg mb-6">
          Join the future of INR-backed cryptocurrencies with INDICOIN. Participate in our thriving ecosystem today!
        </p>
        <Link to="/indicoin">
          <button className="bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-blue-600 hover:to-indigo-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">
            Get an INDICOIN
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroBanner;
