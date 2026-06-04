import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  const content = (
    <div className="flex items-center space-x-8 md:space-x-12 px-4 md:px-6 shrink-0">
      <span className="text-lg md:text-2xl font-heavy uppercase tracking-tighter text-[#3B28CC]" style={{ fontFamily: 'Pin Sans MacOS, sans-serif' }}>INNOVATE FASTER</span>
      <span className="text-gray-300 text-xl md:text-2xl">•</span>
      <span className="text-[10px] md:text-xs font-bold text-[#3B28CC] tracking-wide max-w-[200px] leading-tight text-center uppercase">High-end design meets robust engineering</span>
      <span className="text-gray-300 text-xl md:text-2xl">—</span>
      <span className="text-lg md:text-2xl font-heavy uppercase tracking-tighter text-[#3B28CC]" style={{ fontFamily: 'Pin Sans MacOS, sans-serif' }}>SCALE SEAMLESSLY</span>
      <span className="text-gray-300 text-xl md:text-2xl">•</span>
    </div>
  );

  return (
    <div className="relative w-full bg-white py-2 md:py-3 overflow-hidden flex z-20 border-b border-black">
      <motion.div
        className="flex shrink-0 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
      >
        {/* Render multiple copies for a seamless infinite loop */}
        {content}
        {content}
        {content}
        {content}
      </motion.div>
    </div>
  );
};

export default Marquee;
