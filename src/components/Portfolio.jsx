import React, { useRef, useEffect } from 'react';

const Portfolio = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  const projects = [
    { title: "NovaOps Command Center", type: "SaaS", desc: "An executive operations cockpit for a logistics startup, built around predictive routing and live metrics.", image: "/portfolio/1.png" },
    { title: "Auraluxe Brand System", type: "Branding", desc: "A luxury audio brand launch with immersive product pages and motion-led storytelling.", image: "/portfolio/2.png" },
    { title: "PulseAI Growth Engine", type: "AI", desc: "An AI sales assistant that turns inbound leads into qualified opportunities.", image: "/portfolio/3.png" },
    { title: "Finory Mobile Vault", type: "Mobile", desc: "A refined finance app experience with encrypted onboarding.", image: "/portfolio/4.png" }
  ];

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current || !trackRef.current) return;
          const containerRect = containerRef.current.getBoundingClientRect();
          
          // Calculate scroll progress over exactly 300vh, leaving the final 100vh for the next card to slide over
          const scrollDistance = 3 * window.innerHeight;
          const scrollProgress = -containerRect.top / scrollDistance;
          const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
          
          const trackWidth = trackRef.current.scrollWidth;
          const maxTranslate = trackWidth - window.innerWidth + 128; // Padding offset
          
          trackRef.current.style.transform = `translateX(-${clampedProgress * maxTranslate}px)`;
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="work" ref={containerRef} className="relative w-full h-[400vh] mb-[-100vh] z-30 pointer-events-none">
      
      {/* The sticky visual card */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center bg-[#F5F5F5] text-black rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.15)] pointer-events-auto">
        
        <div 
          ref={trackRef}
          className="flex items-center gap-16 md:gap-32 px-8 md:px-24 w-max will-change-transform"
        >
          {/* Huge Title Section sitting inline with the projects */}
          <div className="w-[85vw] md:w-[60vw] lg:w-[45vw] shrink-0 pr-16 flex flex-col justify-center h-full">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-6 text-black/40">[ SELECTED WORKS ]</p>
            <h2 className="text-6xl md:text-8xl lg:text-[6rem] font-heavy leading-[0.95] uppercase tracking-tighter text-black" style={{ fontFamily: 'Pin Sans MacOS, sans-serif' }}>
              We build digital <br/>products that define categories
            </h2>
            <button className="mt-12 w-max text-[10px] font-bold uppercase tracking-[0.2em] border-b border-black/30 hover:text-black/50 transition-colors pb-1 text-black/70">
              View Full Archive
            </button>
          </div>

          {projects.map((project, idx) => (
            <div key={idx} className="group cursor-pointer shrink-0 w-[85vw] md:w-[50vw] lg:w-[40vw]">
              <div className="w-full aspect-video bg-black/5 rounded-3xl overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500 border border-black/10 mb-6 md:mb-8">
                 <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover object-center opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none"></div>
                 <span className="absolute bottom-6 left-6 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-medium text-white tracking-wide z-20 border border-white/20">
                   {project.type}
                 </span>
              </div>
              
              <div>
                <h3 className="text-3xl md:text-4xl font-heavy mb-4 group-hover:text-black/70 transition-colors tracking-tight text-black">{project.title}</h3>
                <p className="text-sm text-black/60 leading-relaxed max-w-md">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
