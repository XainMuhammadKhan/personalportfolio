import React, { useEffect, useState } from 'react';
import { HiArrowLongDown, HiMiniBolt, HiMiniSparkles } from "react-icons/hi2";
import BackgroundElements from '../Layouts/BackgroundElement';
import Navbar from '../Layouts/Navbar';
import BlobImage from '../Ui/BlobImage';
import TypewriterSkills from '../Ui/TypeWriterSkills';

const HeroSection = () => {
    const [mounted, setMounted] = useState(false);
    const [barDone, setBarDone] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setMounted(true), 40);
        const b = setTimeout(() => setBarDone(true), 2700);
        return () => { clearTimeout(t); clearTimeout(b); };
    }, []);

    return (
        <section className="relative min-h-screen w-full bg-theme-black overflow-hidden flex items-center pt-24 pb-12 md:py-0">
            <BackgroundElements />
            <Navbar />

            {/* HUD loading bar */}
            {!barDone && (
                <div className="fixed top-0 left-0 right-0 z-[9999] overflow-hidden">
                    <div className="hud-bar" />
                </div>
            )}

            {/* Main Content */}
            <div className={`container mx-auto h-full flex items-center relative z-10 px-4 sm:px-12 lg:px-24 transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <div className="w-full flex flex-col md:grid md:grid-cols-12 items-center gap-10 lg:gap-16">

                    {/* IMAGE — top on mobile, left on desktop */}
                    <div className="w-full md:col-span-5 flex justify-center md:justify-end order-first">
                        <BlobImage />
                    </div>

                    {/* TEXT — below image on mobile, right on desktop */}
                    <div className="w-full md:col-span-7 md:pl-16 flex flex-col items-center md:items-start text-center md:text-left">

                        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[11px] uppercase tracking-[0.4em] text-cyan-100/85 mb-6 backdrop-blur-xl neon-outline self-center md:self-start">
                            <HiMiniSparkles className="text-sm" />
                            Future-ready developer
                        </div>

                        <h3 className="mb-4 w-full flex justify-center md:justify-start">
                            <span className="text-lg sm:text-2xl md:text-4xl text-theme-accent-gray font-normal">Hi I am</span>
                            <span className="ml-3 text-white text-lg sm:text-2xl md:text-4xl font-extrabold">Xain</span>
                        </h3>

                        {/* Glitch headline */}
                        <h1
                            data-text="A CREATIVE SOFTWARE ENGINEER"
                            className="glitch-title futuristic-title text-4xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-[0.08em] leading-[0.92] text-center md:text-left md:max-w-[11ch] w-full mb-0"
                        >
                            A CREATIVE <br /> SOFTWARE <br /> ENGINEER
                        </h1>

                        <p className="mt-6 max-w-xl text-sm sm:text-base text-white/70 leading-7 text-center md:text-left mx-auto md:mx-0">
                            I build sharp, interactive digital experiences with modern motion, strong contrast, and production-focused engineering.
                        </p>

                        <div className="mt-8 w-full flex flex-col items-center md:items-start gap-6">
                            {/* Typewriter card */}
                            <div className="w-full max-w-md rounded-2xl border border-cyan-300/20 bg-white/5 px-4 md:px-5 py-4 backdrop-blur-xl cyber-panel overflow-hidden neon-border-anim">
                                <span className="text-[10px] uppercase tracking-[0.3em] text-cyan-300/60 mb-1 block">// Current Role</span>
                                <TypewriterSkills />
                            </div>

                            {/* CTAs */}
                            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start w-full">
                                <a
                                    href="/XAIN-KHAN-RESUME.pdf"
                                    download="XAIN-KHAN-RESUME.pdf"
                                    className="neon-border-anim inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full bg-cyan-300 text-black font-bold uppercase tracking-[0.22em] shadow-[0_0_30px_rgba(34,211,238,0.45)] hover:shadow-[0_0_60px_rgba(34,211,238,0.7)] hover:scale-[1.03] transition-all text-xs sm:text-sm"
                                >
                                    <HiMiniBolt className="text-lg" />
                                    Download Resume
                                </a>
                                <a
                                    href="#portfolio"
                                    className="neon-border-anim inline-flex justify-center items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white font-bold uppercase tracking-[0.22em] hover:border-cyan-300/50 hover:text-cyan-100 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] transition-all backdrop-blur-xl text-xs sm:text-sm"
                                >
                                    View Projects
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="hidden md:flex absolute right-8 bottom-10 items-center gap-3 rotate-90 origin-right z-20 text-xs font-bold tracking-[0.35em] uppercase text-white/65">
                <span>Scroll Down</span>
                <HiArrowLongDown className="text-lg rotate-[-90deg] text-cyan-200" />
            </div>
        </section>
    );
};

export default HeroSection;