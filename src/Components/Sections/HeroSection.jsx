import React, { useEffect, useState } from 'react';
import { HiArrowLongDown } from "react-icons/hi2";
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
            <div className="grid grid-cols-12 w-full items-center">
                
                {/* Left Column: Number and Image */}
                <div className="col-span-12 md:col-span-5 relative flex items-end justify-center md:justify-end">
                     {/* Big Number Indicator */}
                        {/* section number is displayed by SectionIndicator */}
                                        <div className="w-full max-w-xs md:max-w-none flex justify-center md:justify-end md:pr-6">
                                            <BlobImage />
                                        </div>
                </div>

                 {/* Right Column: Text Content */}
                                <div className="col-span-12 md:col-span-7 md:pl-16 pl-4 text-left flex flex-col items-start">
                                         <h3 className="mb-2 tracking-wide text-center md:text-left">
                                                <span className="text-lg sm:text-2xl md:text-4xl text-theme-accent-gray font-normal">Hi I am</span>
                                                <span className="ml-3 text-white text-lg sm:text-2xl md:text-4xl font-extrabold">Xain</span>
                                         </h3>
                                        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-wider leading-tight text-center md:text-left">
                                                A CREATIVE<br/>SOFTWARE<br/>ENGINEER
                                        </h1>
                                        <div className="mt-6 w-full flex flex-col items-start">
                                            <div className="w-full max-w-md">
                                                <TypewriterSkills />
                                            </div>
                                            <a
                                                href="/XAIN-KHAN-RESUME.pdf"
                                                download="XAIN-KHAN-RESUME.pdf"
                                                className="mt-6 inline-block px-6 py-3 bg-white text-theme-black font-bold rounded-lg white-glow hover:white-glow-strong"
                                            >
                                                Download My Resume
                                            </a>
                                        </div>
                </div>
            </div>
        </div>

         {/* Right Side Scroll Indicator */}
        <div className="absolute right-12 bottom-12 flex items-center gap-2 rotate-90 origin-right z-20 text-xs font-bold tracking-widest uppercase">
            <span>Scroll Down</span>
            <HiArrowLongDown className="text-lg rotate-[-90deg]" />
        </div>
        {/* Footer removed from here so it renders after all sections */}
    </section>
  );
};

export default HeroSection;