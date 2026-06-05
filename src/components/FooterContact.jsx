import React, { useState } from 'react';

const FooterContact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleEmailClick = () => {
    const { name, email, phone, message } = formData;
    const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0A%0AMessage:%0A${message}`;
    window.location.href = `mailto:connect.buildit@gmail.com?subject=New Project Inquiry from ${name || 'Website'}&body=${body}`;
  };

  return (
    <footer id="contact" className="relative w-full min-h-screen flex flex-col justify-center bg-[#111111] text-[#EBEBEB] rounded-t-[40px] z-[60] overflow-hidden">
      
      {/* GSAP Pinned Wrapper */}
      <div className="max-w-7xl mx-auto flex flex-col justify-between h-full w-full py-12 md:py-20 px-6 md:px-16">
        
        {/* Top Section: Heading (Left) & Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 w-full items-start">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <h2 
              className="text-4xl md:text-7xl font-heavy leading-none tracking-tighter text-white mb-6 md:mb-8"
              style={{ fontFamily: 'Pin Sans MacOS, sans-serif' }}
            >
              Let's build<br/>something great.
            </h2>
          </div>

          {/* Right Column: Minimal Form */}
          <div className="lg:col-span-6 lg:col-start-7 w-full flex flex-col justify-center">
            <form className="flex flex-col gap-5 md:gap-8 w-full font-mono text-sm">
              
              {/* Top Row: Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
                <input 
                  type="text" 
                  placeholder="Name"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-transparent border-b border-white/30 focus:border-white outline-none pb-2 md:pb-3 text-white transition-colors placeholder:text-white/40"
                />
                <input 
                  type="email" 
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-transparent border-b border-white/30 focus:border-white outline-none pb-2 md:pb-3 text-white transition-colors placeholder:text-white/40"
                />
              </div>

              {/* Phone Number Field */}
              <input 
                type="tel" 
                placeholder="Phone Number"
                value={formData.phone}
                onChange={e => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-transparent border-b border-white/30 focus:border-white outline-none pb-2 md:pb-3 text-white transition-colors placeholder:text-white/40 md:mt-2"
              />

              {/* Message */}
              <textarea 
                rows="1"
                placeholder="Tell us about your project..."
                value={formData.message}
                className="w-full bg-transparent border-b border-white/30 focus:border-white outline-none pb-2 md:pb-3 text-white transition-colors resize-none overflow-hidden placeholder:text-white/40 mt-2 md:mt-4"
                onInput={(e) => {
                  e.target.style.height = 'auto';
                  e.target.style.height = e.target.scrollHeight + 'px';
                  setFormData({...formData, message: e.target.value});
                }}
              />

              {/* Submit */}
              <div className="mt-2 md:mt-4 flex justify-end">
                <button 
                  type="button" 
                  onClick={handleEmailClick}
                  className="bg-white text-black font-bold uppercase tracking-widest px-8 py-2 md:px-10 md:py-3 hover:bg-white/80 transition-colors shadow-lg"
                >
                  Send
                </button>
              </div>
              
            </form>
          </div>
        </div>

        {/* Bottom Section: Horizontal Contact Details */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-8 font-mono text-[10px] md:text-xs text-white/60 tracking-widest uppercase border-t border-white/10 pt-6 md:pt-8 mt-8 md:mt-12 w-full mb-8 md:mb-32">
          <div>
            <p className="text-white mb-1 font-bold">Email</p>
            <p>connect.buildit@gmail.com</p>
          </div>
          <div>
            <p className="text-white mb-1 font-bold">Phone</p>
            <p>+91 8260540773 / +91 8917696616</p>
          </div>
          <div>
            <p className="text-white mb-1 font-bold">Address</p>
            <p>Bhubaneswar, Odisha, india</p>
          </div>
        </div>

      </div>

    </footer>
  );
};

export default FooterContact;
