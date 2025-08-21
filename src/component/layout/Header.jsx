import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4 sm:py-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              JM
            </div>
            <span className="text-gray-300 text-sm sm:text-base tracking-wider">
              I design interfaces
            </span>
          </div>
          <span className="text-gray-400 text-xs sm:text-sm tracking-widest mr-4 sm:mr-12">
            Site under construction
          </span>
        </div>
        <div className="w-full h-[1px] sm:h-[2px] bg-gray-700/50"></div>
      </div>
    </header>
  );
};

export default Header;
