import React, { useState, useEffect } from 'react';
import { motion, useTransform } from 'framer-motion';

const BrowserWindow = ({ children, bg = "bg-[#111]", text = "text-white", className = "" }) => (
  <div className={`relative w-[280px] sm:w-[320px] md:w-[420px] h-[180px] sm:h-[220px] md:h-[280px] rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col ${bg} ${text} ${className}`}>
    <div className="h-6 sm:h-8 w-full flex items-center px-3 sm:px-4 border-b border-black/5 shrink-0">
      <div className="flex gap-1.5 sm:gap-2">
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ff5f56]"></div>
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#ffbd2e]"></div>
        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#27c93f]"></div>
      </div>
    </div>
    <div className="relative flex-1 overflow-hidden w-full h-full p-4 sm:p-5 md:p-6 text-[0.75rem]">
      {children}
    </div>
  </div>
);

// CardWrapper component resolves the "Rules of Hooks" violation by encapsulating
// the useTransform hooks within a valid React component lifecycle for each card.
const CardWrapper = ({ CardElement, i, offsetAngle, R }) => {
  const angleDeg = useTransform(offsetAngle, offset => {
    const rawAngle = i * 10 - offset;
    return 110 + (((rawAngle % 140) + 140) % 140);
  });

  const angleRad = useTransform(angleDeg, deg => deg * (Math.PI / 180));
  const x = useTransform(angleRad, rad => Math.cos(rad) * R);
  const y = useTransform(angleRad, rad => Math.sin(rad) * R);
  const rotateZ = useTransform(angleDeg, deg => deg - 180);
  const zIndex = useTransform(angleDeg, deg => Math.floor(deg));

  const rotateX = (i % 3 === 0) ? 6 : (i % 2 === 0) ? -4 : 2;
  const rotateY = (i % 3 === 0) ? -4 : (i % 2 === 0) ? 5 : -2;

  return (
    <motion.div 
      className="absolute will-change-transform flex items-center justify-center"
      style={{ 
        x, y, rotateZ, rotateX, rotateY,
        marginLeft: '-210px',
        marginTop: '-140px',
        zIndex 
      }}
    >
      <div className="scale-[0.7] md:scale-[0.85] lg:scale-[1.0] origin-center shadow-[0_40px_60px_rgba(0,0,0,0.8)] rounded-2xl">
        {CardElement}
      </div>
    </motion.div>
  );
};

const WebsiteMockups = ({ scrollProgress }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const R = isMobile ? 400 : 900;

  const originalCardsData = [
    <BrowserWindow key="1" bg="bg-[#18181A]" text="text-white">
      <div className="w-full h-full flex flex-col justify-center pl-4 md:pl-8">
        <p className="text-[8px] md:text-[10px] font-mono opacity-50 mb-3 md:mb-4 border-b border-white/10 pb-2 max-w-[150px]">2.4 PROCESS</p>
        <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter leading-[0.8] mb-1.5 opacity-40"><span className="mr-2 font-mono text-sm">1</span> DISCOVER</h3>
        <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter leading-[0.8] mb-1.5 opacity-70"><span className="mr-2 font-mono text-sm">2</span> DIRECTION</h3>
        <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tighter leading-[0.8] mb-1.5 text-white"><span className="mr-2 font-mono text-sm">3</span> DESIGN</h3>
      </div>
    </BrowserWindow>,

    <BrowserWindow key="2" bg="bg-[#ffffff]" text="text-black">
      <div className="w-full h-full flex gap-4">
        <div className="w-2/3 flex flex-col gap-4 md:gap-6 pt-2">
          <div className="flex justify-between items-end border-b border-black/10 pb-2">
            <h4 className="font-bold text-xs md:text-sm tracking-tight uppercase">OPPORTUNITY</h4>
            <div className="w-12 h-2 bg-black/10"></div>
          </div>
          <div className="flex justify-between items-end border-b border-black/10 pb-2">
            <h4 className="font-bold text-xs md:text-sm tracking-tight uppercase">GAP</h4>
            <div className="w-16 h-2 bg-black/10"></div>
          </div>
          <div className="flex justify-between items-end border-b border-black/10 pb-2">
            <h4 className="font-bold text-xs md:text-sm tracking-tight uppercase">SHIFT</h4>
            <div className="w-14 h-2 bg-black/10"></div>
          </div>
        </div>
        <div className="w-1/3 bg-[#111] flex items-center justify-center relative overflow-hidden">
           <div className="w-20 h-28 bg-white/90 shadow-2xl skew-y-6 flex flex-col items-center justify-between py-2 border border-white/20">
             <div className="w-2 h-2 bg-black/20 rounded-full"></div>
             <div className="w-2 h-2 bg-black/20 rounded-full"></div>
           </div>
        </div>
      </div>
    </BrowserWindow>,

    <BrowserWindow key="3" bg="bg-[#1c1c1e]" text="text-white">
      <div className="w-full h-full flex flex-col">
        <div className="flex justify-between border-b border-white/10 pb-3 mb-3 text-[8px] md:text-[10px] font-mono font-bold">
          <span>4.1 METRICS</span>
          <span className="flex gap-4 md:gap-8"><span>2.1M</span><span>55K</span><span>12</span></span>
        </div>
        <div className="flex gap-4 md:gap-6 flex-1">
          <div className="w-1/2 bg-[#dcdcdc] flex items-center justify-center relative overflow-hidden">
            <div className="absolute bottom-0 w-24 h-32 bg-[#111] rounded-t-full"></div>
            <div className="absolute top-1/2 w-full h-4 bg-[#ff3333] flex items-center justify-center">
              <div className="w-full h-[1px] bg-white/50"></div>
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-between py-2">
            <div>
              <h4 className="text-xl md:text-2xl font-bold mb-2">72K</h4>
              <div className="flex gap-1 md:gap-2">
                <div className="h-4 w-8 md:w-10 bg-[#ff3333]"></div>
                <div className="h-4 w-4 md:w-6 bg-[#ff3333]"></div>
                <div className="h-4 w-10 md:w-14 bg-white"></div>
              </div>
            </div>
            <div className="text-[7px] md:text-[9px] font-mono leading-relaxed opacity-60 flex flex-col border-t border-white/10 pt-2">
              <span className="flex justify-between"><span>NEW YORK</span><span>33%</span></span>
              <span className="flex justify-between"><span>LOS ANGELES</span><span>22%</span></span>
              <span className="flex justify-between"><span>MIAMI</span><span>11%</span></span>
              <span className="flex justify-between"><span>LONDON</span><span>7%</span></span>
            </div>
          </div>
        </div>
      </div>
    </BrowserWindow>,

    <BrowserWindow key="4" bg="bg-[#f43f2f]" text="text-white">
       <div className="w-full h-full relative overflow-hidden flex flex-col justify-between">
          <div className="flex justify-between items-start opacity-70">
            <div className="w-8 h-1 bg-white/50"></div>
            <div className="text-[6px] md:text-[8px] font-mono text-right flex flex-col gap-1 max-w-[80px]">
              <div className="h-1 w-full bg-white/30"></div>
              <div className="h-1 w-2/3 bg-white/30 ml-auto"></div>
              <div className="h-1 w-full bg-white/30"></div>
              <div className="h-1 w-1/2 bg-white/30 ml-auto"></div>
            </div>
          </div>
          <h1 className="text-[3.5rem] sm:text-[4.5rem] md:text-[6rem] font-heavy tracking-tighter leading-[0.7] opacity-90 -ml-2 sm:-ml-4 mt-auto" style={{ fontFamily: 'Pin Sans MacOS, sans-serif' }}>
            Noteform
          </h1>
       </div>
    </BrowserWindow>,

    <BrowserWindow key="5" bg="bg-white" text="text-black">
       <div className="w-full h-full flex flex-col">
          <div className="border-b border-black/10 pb-2 mb-2">
            <span className="text-[8px] md:text-[10px] font-mono font-bold opacity-50">4.2 METRICS</span>
          </div>
          <div className="flex gap-4 flex-1">
            <div className="w-1/2 bg-black/5 rounded-lg"></div>
            <div className="w-1/2 flex flex-col justify-end pb-2">
              <div className="h-1 w-full bg-black/10 mb-1"></div>
              <div className="h-1 w-2/3 bg-black/10"></div>
            </div>
          </div>
       </div>
    </BrowserWindow>,

    <BrowserWindow key="6" bg="bg-[#f0f0f5]" text="text-black">
       <div className="w-full h-full flex flex-col justify-center items-center text-center pt-2">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#222] rounded-full mb-4 flex items-center justify-center">
             <div className="w-6 h-6 md:w-8 md:h-8 border-2 border-white rounded-full"></div>
          </div>
          <h2 className="text-xl md:text-2xl font-heavy uppercase tracking-tighter">Sync Space</h2>
          <p className="text-[8px] md:text-[9px] font-mono mt-1 opacity-50">Enterprise Matrix</p>
       </div>
    </BrowserWindow>,

    <BrowserWindow key="7" bg="bg-[#0b101e]" text="text-[#a0b0d0]">
       <div className="w-full h-full flex flex-col gap-2">
          <div className="h-3 w-full bg-[#1a2540] rounded-sm mb-1"></div>
          <div className="flex gap-2 h-1/3">
             <div className="w-1/3 bg-gradient-to-br from-[#1a2540] to-[#0b101e] rounded-sm border border-[#1a2540] p-2 flex flex-col justify-end">
                <div className="text-lg md:text-xl font-bold text-white leading-none">99%</div>
             </div>
             <div className="w-2/3 bg-gradient-to-br from-[#1a2540] to-[#0b101e] rounded-sm border border-[#1a2540] relative overflow-hidden">
                <div className="absolute bottom-0 w-full h-1/2 bg-blue-500/20 blur-xl"></div>
             </div>
          </div>
          <div className="h-1/3 w-full bg-[#1a2540] rounded-sm flex items-center p-3 mt-1">
            <img src="/avatar.jpg" alt="Avatar" className="w-6 h-6 md:w-8 md:h-8 rounded-full mr-3 shrink-0 object-cover bg-[#0b101e] border border-white/10" />
            <div className="flex flex-col gap-1 w-full">
              <div className="h-1.5 w-1/2 bg-white/20 rounded"></div>
              <div className="h-1.5 w-1/4 bg-white/10 rounded"></div>
            </div>
          </div>
       </div>
    </BrowserWindow>
  ];

  const cardsData = [...originalCardsData, ...originalCardsData];
  const offsetAngle = useTransform(scrollProgress, [0, 1], [0, 280]);

  return (
    <div className="absolute inset-0 w-full h-full z-10 pointer-events-none overflow-hidden" style={{ perspective: '2000px' }}>
      <div className="absolute top-1/2 right-[-250px] md:right-[-450px] lg:right-[-550px] w-0 h-0 translate-y-[-15%]">
        {cardsData.map((CardElement, i) => (
          <CardWrapper 
            key={i} 
            CardElement={CardElement} 
            i={i} 
            offsetAngle={offsetAngle} 
            R={R} 
          />
        ))}
      </div>
    </div>
  );
};

export default WebsiteMockups;
