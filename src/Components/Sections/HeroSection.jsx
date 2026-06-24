import React, { useEffect, useState } from 'react';
import { HiArrowLongDown, HiMiniBolt, HiMiniSparkles } from "react-icons/hi2";
import BackgroundElements from '../Layouts/BackgroundElement';
import Navbar from '../Layouts/Navbar';
import BlobImage from '../Ui/BlobImage';
import TypewriterSkills from '../Ui/TypeWriterSkills';

const HeroSection = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 40);
        return () => clearTimeout(t);
    }, []);

    return (
    <section className="relative h-screen w-full bg-theme-black overflow-visible flex items-center">
        <BackgroundElements />
        <Navbar />

        {/* Left-side pagination moved to global SectionIndicator */}

        {/* Main Content Grid */}
        <div className={`container mx-auto h-full flex items-center relative z-10 px-6 sm:px-12 lg:px-24 transition-all duration-700 ease-out transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="grid grid-cols-12 w-full items-center gap-10 lg:gap-16">
                
                {/* Left Column: Number and Image */}
                <div className="col-span-12 md:col-span-5 relative flex items-end justify-center md:justify-end">
                     {/* Big Number Indicator */}
                        {/* section number is displayed by SectionIndicator */}
                                        <div className="w-full max-w-xs md:max-w-none flex justify-center md:justify-end md:pr-6">
                                            <BlobImage />
                                        </div>
                </div>

                 {/* Right Column: Text Content */}
                                <div className="col-span-12 md:col-span-7 md:pl-16 pl-4 pt-14 md:pt-10 text-left flex flex-col items-start">
                                                                                 <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[11px] uppercase tracking-[0.4em] text-cyan-100/85 mb-6 backdrop-blur-xl neon-outline self-start">
                                           <HiMiniSparkles className="text-sm" />
                                           Future-ready developer
                                         </div>
                                         <h3 className="mb-4 tracking-wide text-center md:text-left">
                                                <span className="text-lg sm:text-2xl md:text-4xl text-theme-accent-gray font-normal">Hi I am</span>
                                                <span className="ml-3 text-white text-lg sm:text-2xl md:text-4xl font-extrabold">Xain</span>
                                         </h3>
                                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-[0.08em] leading-[0.92] text-center md:text-left futuristic-title max-w-[11ch]">
                                                A CREATIVE<br/>SOFTWARE<br/>ENGINEER
                                        </h1>
                                        <p className="mt-6 max-w-xl text-sm sm:text-base text-white/70 leading-7">
                                          I build sharp, interactive digital experiences with modern motion, strong contrast, and production-focused engineering.
                                        </p>
                                        <div className="mt-8 w-full flex flex-col items-start gap-6">
                                            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl cyber-panel">
                                                <TypewriterSkills />
                                            </div>
                                            <div className="flex flex-wrap gap-4">
                                              <a
                                                  href="/XAIN-KHAN-RESUME.pdf"
                                                  download="XAIN-KHAN-RESUME.pdf"
                                                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-300 text-black font-bold uppercase tracking-[0.22em] shadow-[0_0_30px_rgba(34,211,238,0.35)] hover:scale-[1.02] transition-transform"
                                              >
                                                  <HiMiniBolt className="text-lg" />
                                                  Download Resume
                                              </a>
                                              <a
                                                  href="#portfolio"
                                                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white font-bold uppercase tracking-[0.22em] hover:border-cyan-300/40 hover:text-cyan-100 transition-colors backdrop-blur-xl"
                                              >
                                                  View Projects
                                              </a>
                                            </div>
                                        </div>
                </div>
            </div>
        </div>

         {/* Right Side Scroll Indicator */}
        <div className="absolute right-8 bottom-10 flex items-center gap-3 rotate-90 origin-right z-20 text-xs font-bold tracking-[0.35em] uppercase text-white/65">
            <span>Scroll Down</span>
            <HiArrowLongDown className="text-lg rotate-[-90deg] text-cyan-200" />
        </div>
        {/* Footer removed from here so it renders after all sections */}
    </section>
  );
};

export default HeroSection;