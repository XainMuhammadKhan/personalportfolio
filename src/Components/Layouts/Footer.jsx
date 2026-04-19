import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; 

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-theme-gray py-12 text-center text-white/70">
      <div className="container mx-auto px-6">
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-8 text-3xl">
          <a 
            href="https://github.com/XainMuhammadKhan" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white hover:scale-110 transition-transform duration-300"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/xain-muhammad-khan-8a746b319/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white hover:scale-110 transition-transform duration-300"
          >
            <FaLinkedinIn />
          </a>
          <a 
            href="https://www.instagram.com/xaiiiiiiin" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white hover:scale-110 transition-transform duration-300"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-sm tracking-wide">
          © {currentYear} | Xain Muhammad Khan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;