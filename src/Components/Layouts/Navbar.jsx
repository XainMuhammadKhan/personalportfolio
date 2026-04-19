import React, { useState, useRef, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

// Array of navigation links
const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isOverlayMounted, setIsOverlayMounted] = useState(false);
    const closeTimeoutRef = useRef(null);
    const toggleButtonRef = useRef(null);
    const closeButtonRef = useRef(null);

    // --- Menu Logic ---
    const openMenu = () => {
        if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
        setIsOverlayMounted(true);
        requestAnimationFrame(() => setIsMenuOpen(true));
    };

    const closeMenu = (e) => {
        // Prevent default action for anchor tags if triggered by an event
        if (e && e.preventDefault) {
            e.preventDefault();
            // Manually trigger navigation after closing the menu
            // This prevents the anchor hash from immediately jumping before the menu closes
            if (e.currentTarget.href) {
                const targetId = e.currentTarget.href.split('#')[1];
                setTimeout(() => {
                    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                }, 320); // Wait for the menu transition (300ms) + a buffer
            }
        }

        setIsMenuOpen(false);
        closeTimeoutRef.current = setTimeout(() => {
            setIsOverlayMounted(false);
            try { toggleButtonRef.current?.focus(); } catch (e) {}
            closeTimeoutRef.current = null;
        }, 320);
    };

    const toggleMenu = () => {
        if (isMenuOpen) closeMenu();
        else openMenu();
    };

    // --- Side Effects ---
    useEffect(() => {
        if (isMenuOpen) {
            try { closeButtonRef.current?.focus(); } catch (e) {}
            const onKey = (e) => {
                if (e.key === 'Escape') closeMenu();
            };
            document.addEventListener('keydown', onKey);
            return () => document.removeEventListener('keydown', onKey);
        }
    }, [isMenuOpen]);

    useEffect(() => {
        return () => {
            if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        };
    }, []);

    // --- Link Component for Reuse ---
    const NavLink = ({ name, href, isMobile = false }) => (
        // Added 'group' class to the <li>/<a> wrapper to enable underline on hover
        <li className="group transition-transform duration-200" key={name}>
            <a 
                href={href} 
                onClick={isMobile ? closeMenu : null} // Use closeMenu for mobile links
                className={`
                    relative 
                    transition-all 
                    duration-300 
                    transform 
                    hover:scale-[1.05] 
                    ${isMobile ? 'py-2 px-4 text-2xl' : 'py-1'}
                `}
            >
                {name}
                {/* Underline Element */}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 group-focus:scale-x-100"></span>
            </a>
        </li>
    );

    return (
        <nav className="absolute top-0 left-0 right-0 py-4 px-4 sm:py-8 sm:px-12 flex justify-between items-center z-50 uppercase tracking-wider text-sm font-semibold text-white">
            
            {/* Logo Placeholder */}
            <div className="flex items-center gap-2">
                <div className="w-6 h-6 border border-white rotate-45 flex items-center justify-center white-glow p-1 rounded-sm">
                    <div className="w-3 h-3 bg-white"></div>
                </div>
                <span className="hidden sm:inline">Xain's Portfolio</span>
            </div>

            {/* Navigation Links (desktop) */}
            <ul className="hidden sm:flex gap-6 text-xs">
                {navLinks.map((link) => (
                    <NavLink key={link.name} {...link} />
                ))}
            </ul>

            {/* Mobile Hamburger */}
            <div className="sm:hidden">
                <button
                    ref={toggleButtonRef}
                    onClick={toggleMenu}
                    aria-expanded={isMenuOpen}
                    aria-label="Toggle menu"
                    className="relative z-60 text-white text-3xl transition-transform duration-300 hover:scale-110 hover:text-theme-accent-gray focus:outline-none"
                >
                    <div className={`transform transition-transform duration-300 ${isMenuOpen ? 'rotate-90 scale-95' : 'rotate-0'}`}>
                        {isMenuOpen ? <HiX /> : <HiMenu />}
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOverlayMounted && (
                <div
                    aria-hidden={!isOverlayMounted}
                    // Ensure transition classes are correctly defined for slide-in/slide-out
                    className={`fixed inset-0 bg-theme-black/95 z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
                >
                    {/* Close button inside overlay (top-right) */}
                    <button
                        ref={closeButtonRef}
                        onClick={closeMenu}
                        aria-label="Close menu"
                        tabIndex={isMenuOpen ? 0 : -1}
                        className="absolute top-5 right-5 text-white text-3xl z-50 p-2 transition-transform duration-200 hover:scale-110 focus:outline-none"
                    >
                        <HiX />
                    </button>

                    <ul className="h-full flex flex-col items-center justify-center gap-8 text-2xl">
                        {navLinks.map((link) => (
                            <NavLink key={link.name} {...link} isMobile={true} />
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;