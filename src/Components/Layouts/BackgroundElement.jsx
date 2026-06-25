import React from 'react';

const PARTICLES = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 15}s`,
  duration: `${10 + Math.random() * 20}s`,
  size: Math.random() > 0.7 ? 3 : 2,
  opacity: 0.3 + Math.random() * 0.5,
}));

const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Single grid layer */}
      <div className="absolute inset-0 opacity-[0.14] bg-[linear-gradient(rgba(34,211,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.1)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(circle_at_center,black_20%,transparent_80%)]"></div>

      {/* Glow orbs */}
      <div className="absolute -top-24 left-8 w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-cyan-400/10 blur-[90px] animate-[auroraShift_14s_ease-in-out_infinite]"></div>
      <div className="absolute top-28 right-8 w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-fuchsia-400/10 blur-[110px] animate-[glowPulse_10s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-16 left-1/4 w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-white/5 blur-[140px] animate-[floatSlow_12s_ease-in-out_infinite]"></div>
      {/* Purple accent — adds cyberpunk depth */}
      <div className="absolute bottom-32 right-1/3 w-60 h-60 rounded-full bg-violet-500/8 blur-[100px] animate-[auroraShift_18s_ease-in-out_infinite_reverse]"></div>

      {/* Floating particles */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="particle hidden sm:block"
          style={{
            left: p.left,
            bottom: '-4px',
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}

      {/* Decorative circles — hidden on mobile */}
      <div className="hidden sm:block absolute top-24 left-14 w-24 h-24 rounded-full border border-cyan-200/20 rotate-45"></div>
      <div className="hidden sm:block absolute top-48 right-20 w-36 h-36 rounded-full border border-white/10 rotate-12"></div>
      <div className="hidden sm:block absolute bottom-24 right-1/4 w-48 h-48 rounded-full border border-cyan-200/10 -rotate-12"></div>
    </div>
  );
};

export default BackgroundElements;