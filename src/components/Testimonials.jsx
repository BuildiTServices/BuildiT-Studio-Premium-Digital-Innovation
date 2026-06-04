import React, { useEffect, useRef } from 'react';

const Testimonials = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

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

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      
      // Calculate scroll progress over exactly 200vh
      const scrollDistance = 2 * window.innerHeight;
      const scrollProgress = -containerRect.top / scrollDistance;
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
      
      // The track is 200vw wide, move it by max 100vw
      const maxTranslate = trackRef.current.scrollWidth - window.innerWidth;
      trackRef.current.style.transform = `translate3d(${-clampedProgress * maxTranslate}px, 0, 0)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scenes = [
    allReviews.slice(0, 4),
    allReviews.slice(4, 7)
  ];

  const getCardStyle = (sceneIndex, idx) => {
    if (sceneIndex === 0) {
      const styles = [
        { top: '20%', left: '5%', rotate: '-6deg', zIndex: 10 },
        { top: '45%', left: '30%', rotate: '4deg', zIndex: 20 },
        { top: '25%', left: '55%', rotate: '-2deg', zIndex: 30 },
        { top: '50%', left: '80%', rotate: '8deg', zIndex: 40 }
      ];
      return styles[idx];
    } else {
      const styles = [
        { top: '30%', left: '10%', rotate: '-4deg', zIndex: 10 },
        { top: '50%', left: '40%', rotate: '5deg', zIndex: 20 },
        { top: '20%', left: '70%', rotate: '-6deg', zIndex: 30 }
      ];
      return styles[idx];
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
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center bg-[#F5F5F5] text-black rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.15)] pointer-events-auto">
        
        {/* Title layer fixed in the background */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full px-6 md:px-16 text-center z-0 pointer-events-none">
           <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-black/60 mb-6">
            [ CLIENT FEEDBACK ]
          </p>
          <h2 className="text-4xl md:text-6xl font-heavy uppercase tracking-tighter" style={{ fontFamily: 'Pin Sans MacOS, sans-serif' }}>
            What They Say
          </h2>
        </div>

        {/* Horizontal Moving Track */}
        <div ref={trackRef} className="flex h-full w-[200vw] will-change-transform z-10 pt-32">
          
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
                      className={`w-[300px] md:w-[380px] p-8 md:p-10 ${colors[colorIndex]} text-white border border-white/10 rounded-2xl shadow-xl backdrop-blur-md transition-all duration-500 ease-out group cursor-pointer origin-center`}
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
                      {/* Subtle Glass Reflection */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
                      
                      <p className="text-lg md:text-xl font-medium leading-relaxed mb-12 tracking-tight text-white/90 relative z-10">
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

        </div>

      </div>
    </section>
  );
};

export default Testimonials;
