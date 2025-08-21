import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Animation = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveHandler = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  return (
    <div className="w-full min-h-screen bg-black relative overflow-hidden">
      {/* FIXED HEADER */}
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

      {/* FIXED SIDE TEXT */}
      <div className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 -rotate-90 origin-left z-40">
        <span className="text-gray-400 text-[10px] sm:text-sm tracking-[0.3em]">
          Hello 2025
        </span>
      </div>

      {/* 🔥 Global Hover Lens Effect */}
      <motion.div
        className="fixed w-24 sm:w-40 h-24 sm:h-40 rounded-full pointer-events-none z-40"
        style={{
          backdropFilter: "blur(8px) contrast(120%) brightness(110%)",
          WebkitBackdropFilter: "blur(8px) contrast(120%) brightness(110%)",
          boxShadow: "0 0 60px 30px rgba(0, 180, 255, 0.25)",
          border: "2px solid rgba(0, 200, 255, 0.5)",
          background:
            "radial-gradient(circle, rgba(0,200,255,0.15) 70%, transparent 100%)",
        }}
        animate={{ x: pos.x - 80, y: pos.y - 80 }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      />

      {/* MAIN CONTENT */}
      <main className="pt-20 sm:pt-28">
        {/* SECTION 1 */}
        <section
          className="relative 
            bg-gradient-to-br from-black via-blue-900 to-black 
            flex flex-col justify-center items-center 
            overflow-hidden w-11/12 sm:w-10/12 mx-auto 
            py-16 sm:py-24 gap-10 sm:gap-16"
        >
          {/* Intro Text */}
          <div className="leading-[0.8] select-none text-center">
            <h5 className="relative z-[15] mb-6 sm:mb-[6vw] font-['Epilogue',sans-serif] text-[#090d11] text-base sm:text-[3vw] leading-tight font-medium">
              Yo yo my dear stranger, I'm
            </h5>
            <h1 className="text-[20vw] sm:text-[28vw] font-extrabold text-black/90 tracking-tight">
              Juan
            </h1>
            <h1 className="text-[20vw] sm:text-[28vw] font-extrabold text-black/90 tracking-tight -mt-[5vw] mb-6 sm:mb-[6vw]">
              mora
            </h1>
          </div>

          {/* Info Section */}
          <ul className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-10/12 text-sm sm:text-lg font-['Epilogue',sans-serif] leading-relaxed px-2 sm:px-6 gap-8 sm:gap-0">
            {/* LEFT SIDE */}
            <li className="space-y-2 sm:space-y-3">
              <p className="text-red-500 font-semibold mb-2 sm:mb-4">Currently</p>
              <p className="text-gray-400 tracking-wider">Independent Design Director</p>
              <p className="text-gray-400 tracking-wider">Awwwards Judge 2021–2024.</p>
              <p className="text-gray-400 tracking-wider">Prev</p>
              <p className="text-gray-400 tracking-wider">Design Director</p>
              <p className="text-gray-400 tracking-wider">@Yugalabs, @ByHook @Google</p>
            </li>

            {/* RIGHT SIDE */}
            <li className="space-y-2 sm:space-y-3 text-gray-400 tracking-wider">
              <p>Colombian Interactive Designer @Miami.</p>
              <p>Love the craft.</p>
              <p>Love no-code tools.</p>
              <p>Addicted to sugar and sarcasm.</p>
            </li>
          </ul>

          <div className="w-full h-[1px] sm:h-[2px] bg-gray-700/50 mb-8 sm:mb-[6vw]"></div>

          {/* Construction Heading */}
          <div className="leading-[0.9] select-none w-10/12">
            <h1 className="text-[14vw] sm:text-[12vw]  font-bold text-black/90 tracking-tight mb-2">
              This site
            </h1>
            <h1 className="text-[14vw] sm:text-[12vw] font-bold text-black/90 tracking-tight -mt-[2vw]">
              is under
            </h1>
            <h1 className="text-[14vw] sm:text-[12vw] font-bold text-black/90 tracking-tight -mt-[2vw]">
              construction
            </h1>
          </div>

          <div className="w-full h-[1px] sm:h-[2px] bg-gray-700/50 mt-8 sm:mt-12"></div>

          {/* Work Section */}
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

          {/* Contact Section */}
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
        </section>

        {/* MORE CONTENT */}
        <section className="h-screen flex items-center justify-center bg-black text-white text-2xl sm:text-4xl font-bold">
          More Content Here ↓
        </section>

        <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-black text-white text-2xl sm:text-4xl font-bold">
          Keep Scrolling...
        </section>
      </main>
    </div>
  );
};

export default Animation;
