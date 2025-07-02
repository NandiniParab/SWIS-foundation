import React from 'react';


const Header: React.FC = () => {
  return (
    <div className="fixed top-0 w-full bg-white shadow-md py-2 px-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div>
            <h1 className="text-xl font-bold text-blue-800">SWIS</h1>
            <p className="text-sm text-gray-600">Social Welfare & Impact Solutions</p>
          </div>
        </div>
        <div className="flex space-x-6">
          <button className="text-gray-600 hover:text-black transition-colors">
            eB2B
          </button>
          <button className="text-gray-600 hover:text-black transition-colors">
            Fraud Alert
          </button>
          <button className="text-gray-600 hover:text-black transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;