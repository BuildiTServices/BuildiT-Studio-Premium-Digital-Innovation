import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#EBEBEB] text-black pt-32 pb-32 px-6 z-10 mt-[80vh] rounded-t-[40px] shadow-[0_-20px_50px_rgba(0,0,0,0.2)]">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-xs font-bold tracking-[0.2em] uppercase text-black/50 mb-8">
          [ COMPANY OVERVIEW ]
        </p>
        
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-relaxed max-w-4xl mx-auto mb-12">
          BuildiT is a premium digital innovation startup studio that crafts world-class software and premium digital experiences for ambitious brands.
        </h2>
        
      </div>
    </section>
  );
};

export default About;
