import React from 'react';

const Header = () => {
  return (
    <div className="bg-[#023080] text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
        <div className="flex space-x-8">
          <div className="flex items-center space-x-2">
            <span className="text-[#d2d5e0]">IND Ranks 132 - Education</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-[#d2d5e0]">IND Ranks 111 - Hunger</span>
          </div>
        </div>
        
        <div className="flex space-x-6">
          <button className="text-[#d2d5e0] hover:text-white transition-colors">
            eB2B
          </button>
          <button className="text-[#d2d5e0] hover:text-white transition-colors">
            Fraud Alert
          </button>
          <button className="text-[#d2d5e0] hover:text-white transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;