import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroCTA = () => {
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 800], [1, 0.85]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0.4]);

  // Scroll Parallax Text Transformations
  const x1 = useTransform(scrollY, [0, 800], [0, -150]);
  const x2 = useTransform(scrollY, [0, 800], [0, 150]);
  const x3 = useTransform(scrollY, [0, 800], [0, -150]);

  return (
    <section id="home" className="sticky top-0 h-screen w-full bg-black px-4 md:px-12 flex flex-col justify-center items-center z-0 overflow-hidden pt-16">
      
      {/* Main Hero Block */}
      <motion.div 
        style={{ scale, opacity }}
        className="relative w-full max-w-[90rem] h-[75vh] md:h-[80vh] bg-[#0a0a0a] text-white border border-white/10 p-4 md:p-8 lg:p-12 flex flex-col shadow-2xl"
      >
        
        {/* Top Headline - Scroll Parallax */}
        <div className="mb-8 md:mb-12 mt-0 relative z-20 w-full overflow-hidden">
          <h1 className="text-4xl sm:text-5xl md:text-[5.5rem] lg:text-[7rem] font-heavy leading-[0.9] tracking-tighter uppercase relative z-20 whitespace-nowrap" style={{ fontFamily: 'Pin Sans MacOS, sans-serif' }}>
            <motion.div style={{ x: x1 }}>
              <span>CRAFTING</span>
            </motion.div>
            <motion.div style={{ x: x2 }}>
              <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>WORLD-CLASS</span>
            </motion.div>
            <motion.div style={{ x: x3 }}>
              <span>SOFTWARE</span>
            </motion.div>
          </h1>
        </div>

        <div className="mt-auto mb-20 md:mb-0">
          {/* Divider */}
          <motion.hr 
            initial={{ scaleX: 0, opacity: 0 }} 
            animate={{ scaleX: 1, opacity: 1 }} 
            transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }} 
            className="border-t border-white/30 mb-6 w-full origin-left" 
          />

          {/* Bottom Columns */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 w-full lg:w-3/4 ml-auto text-white/80 pb-4"
          >
            <div>
              <p className="text-[10px] md:text-xs tracking-widest font-bold uppercase">
                Premium Digital Innovation<br />Startup Studio
              </p>
            </div>
            <div>
              <p className="text-xs md:text-sm leading-relaxed">
                BuildiT handles complete end-to-end software development, blending high-end design aesthetics with robust engineering so you can innovate and scale faster.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Overlapping Action Block (Brutalist style) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
          whileHover={{ x: 4, y: -4, transition: { duration: 0.2 } }}
          className="absolute -bottom-10 left-2 right-2 md:right-auto md:-bottom-8 md:-left-8 lg:-left-10 bg-[#111] text-white p-5 md:p-8 w-auto md:w-[400px] border-[3px] border-white/20 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] md:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.15)] z-10 cursor-pointer"
        >
          <h3 className="text-xl md:text-3xl font-heavy leading-[1.05] mb-4 md:mb-6" style={{ fontFamily: 'Pin Sans MacOS, sans-serif' }}>
            Save Months of Development with BuildiT.
          </h3>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative overflow-hidden w-full md:w-auto px-6 py-3 bg-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase"
          >
            <motion.span 
              className="relative z-10 block"
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

      </motion.div>
    </section>
  );
};

export default HeroCTA;
