import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-black py-12 text-center text-white/70 border-t border-white/10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent"></div>
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8 text-3xl">
          <a 
            href="https://github.com/XainMuhammadKhan" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyan-200 hover:scale-110 transition-transform duration-300"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/xain-muhammad-khan-8a746b319/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyan-200 hover:scale-110 transition-transform duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a 
            href="https://www.instagram.com/xaiiiiiiin" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-cyan-200 hover:scale-110 transition-transform duration-300"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-sm tracking-[0.28em] uppercase text-white/55">
          © {currentYear} | Xain Muhammad Khan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;