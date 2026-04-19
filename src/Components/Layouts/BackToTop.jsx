import React, { useEffect, useState } from 'react';
import { HiChevronUp } from 'react-icons/hi';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      aria-label="Back to top"
      onClick={handleClick}
      className="fixed right-6 bottom-6 z-60 w-12 h-12 rounded-full flex items-center justify-center bg-white text-theme-dark shadow-lg white-glow hover:scale-105 transition-transform duration-200 focus:outline-none"
    >
      <HiChevronUp className="w-6 h-6 text-black" />
    </button>
  );
};

export default BackToTop;
