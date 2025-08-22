
import React, { useEffect, useState } from "react";
import Header from "./component/layout/Header";
import SideText from "./component/layout/SideText";
import HoverLens from "./component/layout/HoverLens";
import Hero from "./component/section/Hero";
import Work from "./component/section/Work";
import Contact from "./component/section/Contact";
import MoreContent from "./component/section/MoreContent";
import ScrollContent from "./component/section/ScrollContent";

const HomePage = () => {
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
      <Header />
      <SideText />
      <HoverLens pos={pos} />

      <main className="pt-20 sm:pt-28">
        <section className="relative bg-gradient-to-br from-black via-blue-900 to-black flex flex-col justify-center items-center overflow-hidden w-11/12 sm:w-10/12 mx-auto py-16 sm:py-24 gap-10 sm:gap-16">
          <Hero />

          {/* Info Section */}
          <ul className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-10/12 text-sm sm:text-lg font-['Epilogue',sans-serif] leading-relaxed px-2 sm:px-6 gap-8 sm:gap-0">
            <li className="space-y-2 sm:space-y-3">
              <p className="text-red-500 font-semibold mb-2 sm:mb-4">Currently</p>
              <p className="text-gray-400 tracking-wider">Independent Design Director</p>
              <p className="text-gray-400 tracking-wider">Awwwards Judge 2021–2024.</p>
              <p className="text-gray-400 tracking-wider">Prev</p>
              <p className="text-gray-400 tracking-wider">Design Director</p>
              <p className="text-gray-400 tracking-wider">@Yugalabs, @ByHook @Google</p>
            </li>

            <li className="space-y-2 sm:space-y-3 text-gray-400 tracking-wider">
              <p>Colombian Interactive Designer @Miami.</p>
              <p>Love the craft.</p>
              <p>Love no-code tools.</p>
              <p>Addicted to sugar and sarcasm.</p>
            </li>
          </ul>

          <div className="w-full h-[1px] sm:h-[2px] bg-gray-700/50 mb-6 sm:mb-[6vw]"></div>

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

          <div className="w-full h-[1px] sm:h-[2px] bg-gray-700/50 mt-6 sm:mt-12"></div>

          <Work />
          <Contact />
        </section>

        <MoreContent />
        <ScrollContent />
      </main>
    </div>
  );
};

export default HomePage;

