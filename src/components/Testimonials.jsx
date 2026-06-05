import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Testimonials = () => {
  const containerRef = useRef(null);

  // Highly optimized GPU-accelerated scroll tracking (Zero JS layout thrashing)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const mobileTrackRef = useRef(null);
  const [mobileWidth, setMobileWidth] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (mobileTrackRef.current) {
        setMobileWidth(mobileTrackRef.current.scrollWidth - window.innerWidth);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Pixel-perfect interpolation based on actual DOM width
  const mobileX = useTransform(scrollYProgress, [0, 0.6], [0, -mobileWidth]);
  
  // Desktop track is exactly 200vw wide, moving by exactly 100vw (50% of its width)
  // Framer motion can safely interpolate matching string units like "0vw" and "-100vw"
  const desktopX = useTransform(scrollYProgress, [0, 0.6], ["0vw", "-100vw"]);

  // Premium color system expanded to 7 colors
  const colors = [
    "bg-[#111111]", // Deep Charcoal
    "bg-[#1A1A3A]", // Dark Indigo
    "bg-[#0F2A22]", // Deep Emerald
    "bg-[#2A1018]", // Burgundy
    "bg-[#1A232E]", // Dark Slate
    "bg-[#2B1B17]", // Dark Espresso
    "bg-[#152238]"  // Navy Slate
  ];

  const allReviews = [
    { text: "BuildiT delivered an immaculate platform. Their attention to raw aesthetics and robust architecture is unparalleled.", name: "SARAH JENKINS", role: "CEO, NEURA LABS" },
    { text: "The massive typography and brutalist layout completely redefined our brand identity. An absolute game-changer.", name: "MARCUS CHEN", role: "FOUNDER, AESTHETICS.IO" },
    { text: "We needed a premium, high-contrast digital experience and BuildiT executed it flawlessly from day one.", name: "ELENA VOLKOV", role: "VP DESIGN, SYNTH" },
    { text: "They didn't just build a website, they engineered a digital flagship that converted 3x faster.", name: "ALEX TORM", role: "CMO, VENTURE" },
    { text: "Unbelievable attention to detail. Every pixel has a purpose.", name: "NINA KRAV", role: "DESIGN LEAD, AURA" },
    { text: "Stop looking for agencies. BuildiT is the one.", name: "ROBERT KING", role: "FOUNDER, KINGSLEY" },
    { text: "Their mastery of modern UI, typography, and motion is unmatched in the industry.", name: "SAMIRA ALI", role: "CD, BRANDCO" }
  ];

  const scenes = [
    allReviews.slice(0, 4),
    allReviews.slice(4, 7)
  ];

  const getCardStyle = (sceneIndex, idx) => {
    if (sceneIndex === 0) {
      return [
        { top: '20%', left: '5%', rotate: '-6deg', zIndex: 10 },
        { top: '45%', left: '25%', rotate: '4deg', zIndex: 20 },
        { top: '25%', right: '25%', left: 'auto', rotate: '-2deg', zIndex: 30 },
        { top: '50%', right: '5%', left: 'auto', rotate: '8deg', zIndex: 40 }
      ][idx];
    } else {
      return [
        { top: '30%', left: '10%', rotate: '-4deg', zIndex: 10 },
        { top: '50%', left: '35%', rotate: '5deg', zIndex: 20 },
        { top: '20%', right: '10%', left: 'auto', rotate: '-6deg', zIndex: 30 }
      ][idx];
    }
  };

  return (
    <section id="reviews" ref={containerRef} className="relative w-full h-[300vh] mb-[-100vh] z-50 pointer-events-none">
      
      {/* Embedded Styles for Animations */}
      <style>{`
        @keyframes floatAmbient {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float-ambient {
          animation: floatAmbient 6s ease-in-out infinite;
        }
      `}</style>

      {/* Sticky Viewport Visual Card */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center bg-[#F5F5F5] text-black rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] pointer-events-auto">
        
        {/* Title layer fixed in the background */}
        <div className="absolute top-20 md:top-20 left-1/2 -translate-x-1/2 w-full px-6 md:px-16 text-center z-0 pointer-events-none mt-4 md:mt-0">
           <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/60 mb-4 md:mb-6">
            [ CLIENT FEEDBACK ]
          </p>
          <h2 className="text-4xl md:text-6xl font-heavy uppercase tracking-tighter" style={{ fontFamily: 'Pin Sans MacOS, sans-serif' }}>
            What They Say
          </h2>
        </div>

        {/* ========================================= */}
        {/* MOBILE & TABLET TRACK: Clean Systemic Scroll */}
        {/* ========================================= */}
        <motion.div ref={mobileTrackRef} style={{ x: mobileX, willChange: 'transform' }} className="lg:hidden flex h-full z-10 pt-40 px-8 gap-6 items-center w-max">
          {allReviews.map((review, idx) => (
            <div 
              key={idx} 
              className={`w-[280px] md:w-[320px] shrink-0 p-6 flex flex-col justify-between ${colors[idx]} text-white rounded-2xl shadow-lg border border-white/10`}
            >
              <p className="text-base font-medium leading-relaxed mb-8 tracking-tight text-white/90">
                "{review.text}"
              </p>
              <div className="flex flex-col gap-1 font-mono text-[9px] uppercase tracking-widest text-white/50">
                <span className="font-bold text-white">{review.name}</span>
                <span>{review.role}</span>
              </div>
            </div>
          ))}
          {/* Empty spacer at the end so the last card doesn't hug the right edge */}
          <div className="w-[10vw] md:w-[5vw] shrink-0"></div>
        </motion.div>

        {/* ========================================= */}
        {/* DESKTOP TRACK: Chaotic Overlapping Scenes */}
        {/* ========================================= */}
        <motion.div style={{ x: desktopX, willChange: 'transform' }} className="hidden lg:flex h-full w-[200vw] z-10 pt-32">
          {scenes.map((scene, sceneIndex) => (
            <div key={sceneIndex} className="relative w-screen h-full shrink-0">
              {scene.map((review, idx) => {
                const position = getCardStyle(sceneIndex, idx);
                const colorIndex = sceneIndex === 0 ? idx : idx + 4;
                
                return (
                  <div 
                    key={idx}
                    className="absolute animate-float-ambient transition-all duration-300"
                    style={{
                      top: position.top,
                      left: position.left,
                      zIndex: position.zIndex,
                      animationDelay: `${(sceneIndex * 4 + idx) * 0.7}s` 
                    }}
                  >
                    <div 
                      className={`w-[380px] p-10 ${colors[colorIndex]} text-white border border-white/10 rounded-2xl shadow-xl backdrop-blur-md transition-all duration-500 ease-out group cursor-pointer origin-center`}
                      style={{ transform: `rotate(${position.rotate})` }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'rotate(0deg) scale(1.05) translateY(-10px)';
                        e.currentTarget.style.boxShadow = '0 30px 60px rgba(0,0,0,0.5)';
                        e.currentTarget.parentElement.style.zIndex = 100;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = `rotate(${position.rotate})`;
                        e.currentTarget.style.boxShadow = '';
                        e.currentTarget.parentElement.style.zIndex = position.zIndex;
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
                      
                      <p className="text-xl font-medium leading-relaxed mb-12 tracking-tight text-white/90 relative z-10">
                        "{review.text}"
                      </p>
                      <div className="flex flex-col gap-1 font-mono text-[10px] uppercase tracking-widest text-white/50 relative z-10">
                        <span className="font-bold text-white">{review.name}</span>
                        <span>{review.role}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
