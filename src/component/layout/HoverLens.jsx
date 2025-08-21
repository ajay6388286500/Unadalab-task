import React from "react";
import { motion } from "framer-motion";

const HoverLens = ({ pos }) => {
  return (
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
  );
};

export default HoverLens;
