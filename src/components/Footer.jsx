import React from 'react';

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#F5F5F5] text-black py-2 px-6 md:px-16 rounded-t-[20px] shadow-[0_-10px_30px_rgba(0,0,0,0.15)] z-[70]">
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        
        {/* Top Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-[10px] md:text-xs text-black/60">
          <div className="flex flex-col gap-2">
            <h4 className="text-black font-bold mb-2 uppercase tracking-widest">Navigation</h4>
            <a href="#home" className="hover:text-black transition-colors">Home</a>
            <a href="#about" className="hover:text-black transition-colors">Company</a>
            <a href="#services" className="hover:text-black transition-colors">Services</a>
            <a href="#work" className="hover:text-black transition-colors">Work</a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-black font-bold mb-2 uppercase tracking-widest">Socials</h4>
            <a href="https://www.linkedin.com/in/buildit-services-1a7852411" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-black transition-colors">Twitter / X</a>
            <a href="https://www.instagram.com/buildit.co.in/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Instagram</a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-black font-bold mb-2 uppercase tracking-widest">Legal</h4>
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Cookie Policy</a>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-black font-bold mb-2 uppercase tracking-widest">Location</h4>
            <p>Bhubaneswar,</p>
            <p>Odisha, india</p>
          </div>
        </div>

        {/* Bottom Section: Clean Branding */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center pt-2 border-t border-black/10">
          <h2 className="text-xl font-heavy tracking-tighter mb-1 md:mb-0" style={{ fontFamily: 'Pin Sans MacOS, sans-serif' }}>
            BuildiT.
          </h2>
          <div className="font-mono text-[10px] text-black/40 uppercase tracking-widest flex gap-4">
            <span>© 2026 BuildiT Studio.</span>
            <span className="hidden md:inline">All Rights Reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
