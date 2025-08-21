import React from "react";

const Work = () => {
  return (
    <div className="w-full sm:w-10/12 text-left new_section select-none leading-[0.9]">
      <h3 className="text-red-400 text-base sm:text-lg mb-4 font-semibold">
        My work?
      </h3>
      <p className="text-gray-400 mb-6 sm:mb-12">
        sure, you are very welcome to see it on
      </p>

      <div className="flex flex-col gap-4 sm:gap-6 text-[10vw] sm:text-[7vw] font-bold leading-tight">
        {["Behance", "dribbble", "instagram"].map((link, i) => (
          <React.Fragment key={i}>
            <a
              href="#"
              className="text-gray-200 hover:text-blue-500 transition-all duration-300 transform hover:scale-110"
            >
              {link}
            </a>
            <div className="w-full h-[1px] sm:h-[2px] bg-gray-700/50"></div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Work;
