import React from 'react';

const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.25),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.12),_transparent_20%)]"></div>
      <div className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:88px_88px] [mask-image:radial-gradient(circle_at_center,black_30%,transparent_85%)]"></div>

      <div className="absolute -top-24 left-8 w-72 h-72 rounded-full bg-cyan-400/10 blur-[90px] animate-[auroraShift_14s_ease-in-out_infinite]"></div>
      <div className="absolute top-28 right-8 w-80 h-80 rounded-full bg-fuchsia-400/10 blur-[110px] animate-[glowPulse_10s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-16 left-1/4 w-96 h-96 rounded-full bg-white/5 blur-[140px] animate-[floatSlow_12s_ease-in-out_infinite]"></div>

      <div className="absolute top-24 left-14 w-24 h-24 rounded-full border border-cyan-200/20 rotate-45"></div>
      <div className="absolute top-48 right-20 w-36 h-36 rounded-full border border-white/10 rotate-12"></div>
      <div className="absolute bottom-24 right-1/4 w-48 h-48 rounded-full border border-cyan-200/10 -rotate-12"></div>
    </div>
  );
};

export default BackgroundElements;