import React from "react";

const Contact = () => {
  return (
    <div className="w-full sm:w-10/12 text-left new_section select-none leading-[0.9] mt-10">
      <h3 className="text-red-400 text-base sm:text-lg mb-4 font-semibold">
        Sure, let's talk
      </h3>
      <p className="text-gray-400 mb-6 sm:mb-12">
        This is my e-mail if you want to reach out
      </p>

      <div className="flex flex-col gap-2 text-[7vw] sm:text-[5vw] font-bold leading-tight">
        <a
          href="mailto:hellojuanmora@gmail.com"
          className="text-gray-200 hover:text-blue-400 transition-all duration-300 transform hover:scale-110 break-all"
        >
          hellojuanmora@gmail.com
        </a>
        <div className="w-full h-[1px] sm:h-[2px] bg-gray-700/50 mt-4 sm:mt-8"></div>
      </div>
    </div>
  );
};

export default Contact;
