import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'services', 'work', 'features', 'contact'];
      let current = '';
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = section;
          }
        }
      });
      
      if (current) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on mount to set initial state
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#work' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-out flex items-center justify-between overflow-hidden ${
          scrolled
            ? 'top-4 w-[95%] max-w-5xl border border-white/10 py-3 px-8 rounded-full shadow-2xl bg-black/90 backdrop-blur-md'
            : 'top-0 w-full bg-transparent py-6 px-8 md:px-12'
        }`}
      >
        <div className="text-xl font-black tracking-tight cursor-pointer transition-colors duration-500 text-white">
          BuildiT.
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a 
                key={link.name} 
                href={link.href} 
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute left-0 -bottom-[4px] w-full h-[2px] bg-white rounded-full"></span>
                )}
              </a>
            );
          })}
        </div>

        <button
          className="md:hidden transition-colors text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      <div className={`fixed inset-0 bg-black z-40 transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'} flex flex-col items-center justify-center space-y-8`}>
        {links.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)} 
              className={`relative text-2xl font-bold transition-colors ${
                isActive ? 'text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              {link.name}
              {isActive && (
                <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-white rounded-full"></span>
              )}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
