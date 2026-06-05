import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import WebsiteMockups from './WebsiteMockups';

const HeroCTA = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Scroll Parallax Text Transformations
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const x3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section id="home" ref={containerRef} className="relative w-full h-[300vh] bg-black z-0">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center overflow-hidden z-0">
      
        {/* Main Hero Block - Full Bleed */}
        <motion.div 
          className="relative w-full h-full max-w-[100rem] mx-auto text-white p-4 md:p-12 lg:p-16 flex flex-col justify-center"
        >
          
          {/* Inject the Continuous 3D Cards Wheel into the Hero */}
          <WebsiteMockups scrollProgress={scrollYProgress} />

          {/* Content Block - Left Aligned */}
          <div className="relative z-20 w-full flex flex-col justify-center h-full max-w-4xl pt-12 md:pt-0">
            
            {/* Top Headline */}
            <div className="mb-10 md:mb-16">
              <h1 className="text-[10vw] sm:text-[9vw] md:text-[6rem] lg:text-[8rem] leading-[0.85] md:leading-[0.9] font-heavy tracking-tight md:tracking-tighter uppercase whitespace-nowrap w-full" style={{ fontFamily: 'Pin Sans MacOS, sans-serif' }}>
                <motion.div style={{ x: x1, willChange: "transform" }}>
                  <span className="[text-shadow:0_2px_4px_rgba(0,0,0,0.8)] md:[text-shadow:none]">CRAFTING</span>
                </motion.div>
                <motion.div style={{ x: x2, willChange: "transform" }}>
                  <span className="text-white md:text-transparent [text-shadow:0_2px_4px_rgba(0,0,0,0.8)] md:[text-shadow:none]" style={{ WebkitTextStroke: '2px white' }}>WORLD-CLASS</span>
                </motion.div>
                <motion.div style={{ x: x3, willChange: "transform" }}>
                  <span className="[text-shadow:0_2px_4px_rgba(0,0,0,0.8)] md:[text-shadow:none]">SOFTWARE</span>
                </motion.div>
              </h1>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
              className="relative pointer-events-auto w-fit"
            >
          <button 
            aria-label="Start Your Project - Scroll to Contact Form"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative overflow-hidden px-6 py-3 md:px-8 md:py-4 bg-white text-[10px] md:text-[12px] font-bold tracking-[0.2em] uppercase rounded-sm border-[3px] border-white/20 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] md:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.15)] hover:scale-105 transition-transform duration-300 origin-left"
          >
            <motion.span 
              className="relative z-10 block font-black"
              animate={{ color: ["#000000", "#ffffff", "#ffffff", "#000000", "#000000"] }}
              transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.5, 0.7, 1], ease: "easeInOut" }}
            >
              Start Your Project
            </motion.span>
            <motion.div 
              className="absolute inset-0 h-full w-full bg-[#3B28CC]"
              animate={{ x: ["-101%", "0%", "0%", "-101%", "-101%"] }}
              transition={{ duration: 4, repeat: Infinity, times: [0, 0.2, 0.5, 0.7, 1], ease: "easeInOut" }}
            />
          </button>
          </motion.div>

        </div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroCTA;
