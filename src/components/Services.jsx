import React from 'react';

const Services = () => {
  const services = [
    { title: "Website Development", desc: "High-performance, conversion-ready websites with cinematic interactions." },
    { title: "SaaS Platforms", desc: "Scalable product architecture, dashboards, billing flows, and admin systems." },
    { title: "UI/UX Design", desc: "Premium interfaces shaped around clarity, emotion, and business outcomes." },
    { title: "Branding", desc: "Identity systems, launch assets, pitch visuals, and expressive digital brands." },
    { title: "AI Integrations", desc: "Assistants, copilots, automation agents, and intelligent workflow layers." },
    { title: "Automation Solutions", desc: "Operational systems that remove repetition and speed up teams." },
    { title: "Mobile Apps", desc: "Polished mobile products with responsive design systems and fluid flows." },
    { title: "Cloud Solutions", desc: "Secure, observable infrastructure built for scale and reliability." }
  ];

  return (
    <section id="services" className="sticky top-0 w-full h-screen flex flex-col justify-center bg-black text-[#EBEBEB] px-6 md:px-16 rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] z-20">
      <div className="max-w-7xl mx-auto">
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase mb-10 text-center text-white/40">
          [ CORE SERVICES OFFERED ]
        </p>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-heavy text-center leading-[0.95] tracking-tighter mb-24 uppercase" style={{ fontFamily: 'Pin Sans MacOS, sans-serif' }}>
          Innovative Solutions <br/> For Modern Problems
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="p-4 md:p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white hover:text-black transition-colors duration-500 cursor-pointer flex items-center justify-center text-center h-24 md:h-32"
            >
              <h3 className="text-sm md:text-xl font-heavy tracking-tight">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
