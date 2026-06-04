import React from 'react';
import { Zap, MonitorSmartphone, Layers, Sparkles, Headset, Banknote } from 'lucide-react';

const ValueProps = () => {
  const props = [
    { title: "Fast Delivery", icon: <Zap size={32} /> },
    { title: "Modern Tech Stack", icon: <MonitorSmartphone size={32} /> },
    { title: "Scalable Architecture", icon: <Layers size={32} /> },
    { title: "Premium UI/UX", icon: <Sparkles size={32} /> },
    { title: "Dedicated Support", icon: <Headset size={32} /> },
    { title: "Startup Friendly Pricing", icon: <Banknote size={32} /> }
  ];

  return (
    <section id="features" className="sticky top-0 w-full h-screen flex flex-col justify-center bg-[#111111] text-[#EBEBEB] px-6 md:px-16 rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] z-40">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-xs font-bold tracking-[0.2em] uppercase mb-16 text-white/50">
          [ WHY CHOOSE BUILDIT ]
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {props.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group cursor-pointer">
              <div className="w-14 h-14 bg-white text-black rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
