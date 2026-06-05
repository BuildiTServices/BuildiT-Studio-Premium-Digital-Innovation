import React, { useEffect } from 'react';
import HeroCTA from './components/HeroCTA';
import Marquee from './components/Marquee';
import CompanyOverview from './components/CompanyOverview';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import ValueProps from './components/ValueProps';
import Testimonials from './components/Testimonials';
import FooterContact from './components/FooterContact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const revealOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      });
    }, revealOptions);

    revealElements.forEach(element => {
      revealObserver.observe(element);
    });

    return () => revealObserver.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <div className="relative">
        <HeroCTA />
        <CompanyOverview />
        <Services />
        <Portfolio />
        <Marquee />
        <ValueProps />
        <Testimonials />
        
        {/* GSAP-Style Pinned Footer Overlap */}
        <div className="relative w-full z-50">
          {/* This section stays pinned to the top as the next section slides over it */}
          <div className="sticky top-0 w-full z-0">
            <FooterContact />
          </div>
          {/* This section is the overlapping 'curtain' */}
          <div className="relative w-full z-10">
            <Footer />
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
