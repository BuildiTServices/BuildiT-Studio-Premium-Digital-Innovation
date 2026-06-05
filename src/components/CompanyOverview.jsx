import React from 'react';

const CompanyOverview = () => {
  return (
    <section id="about" className="-mt-[100vh] sticky top-0 w-full min-h-screen flex flex-col justify-center px-6 md:px-16 bg-[#F5F5F5] text-black overflow-hidden rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.8)] z-10 py-24">
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <p className="text-xs font-bold tracking-[0.3em] uppercase mb-10 text-black/60">
          [ WHO WE ARE ]
        </p>
        
        <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-heavy leading-[1.1] tracking-tight max-w-5xl mx-auto mb-8 text-black" style={{ fontFamily: 'Pin Sans MacOS, sans-serif' }}>
          BuildiT is a premium digital innovation startup studio that crafts software for ambitious brands.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 mt-8 md:mt-12 text-left">
          <div className="p-8 bg-white rounded-3xl border border-black/10 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-black">Vision</h3>
            <p className="text-black/80 text-sm md:text-base leading-relaxed">To build digital products that not only function flawlessly but evoke emotion and drive true business growth.</p>
          </div>
          <div className="p-8 bg-white rounded-3xl border border-black/10 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-black">Approach</h3>
            <p className="text-black/80 text-sm md:text-base leading-relaxed">We blend high-end design aesthetics with robust engineering to create scalable, modern web and mobile applications.</p>
          </div>
          <div className="p-8 bg-white rounded-3xl border border-black/10 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-4 text-black">Execution</h3>
            <p className="text-black/80 text-sm md:text-base leading-relaxed">From blank canvas to production deployment, we deliver complete solutions with zero compromises on quality.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
