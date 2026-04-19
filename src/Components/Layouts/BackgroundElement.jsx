import React from 'react';

const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Subtle Geometric Overlay */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      {/* Floating Colorful Blobs */}
      {/* Top Left Green */}
      <div className="absolute top-10 left-20 w-12 h-4 bg-[#4ADE80] rounded-full rotate-45 blur-[1px] opacity-70"></div>
      
      {/* Top Right Purple */}
      <div className="absolute top-20 right-32 w-10 h-4 bg-[#A855F7] rounded-full -rotate-12 blur-[1px] opacity-70"></div>
      
      {/* Bottom Right Orange */}
      <div className="absolute bottom-40 right-10 w-12 h-4 bg-[#FB923C] rounded-full rotate-12 blur-[1px] opacity-70"></div>

      {/* Bottom Left Green */}
      <div className="absolute bottom-20 left-32 w-10 h-4 bg-[#4ADE80] rounded-full -rotate-45 blur-[1px] opacity-70"></div>

      {/* Large faint triangles (simulated) */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 border-2 border-white/5 rotate-45 transform origin-bottom-left"></div>
    </div>
  );
};

export default BackgroundElements;