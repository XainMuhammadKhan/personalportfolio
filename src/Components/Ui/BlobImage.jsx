import React from 'react';

const BlobImage = () => {
  const imageUrl = '/projects/me.png';

  return (
    <div className="relative w-[180px] h-[230px] sm:w-[280px] sm:h-[360px] md:w-[380px] md:h-[480px] z-10 mx-auto">
      {/* Animated neon border ring */}
      <div className="absolute -inset-[3px] rounded-2xl z-0"
        style={{
          background: 'linear-gradient(135deg, rgba(34,211,238,0.8), rgba(200,100,255,0.6), rgba(34,211,238,0.2), rgba(200,100,255,0.8))',
          backgroundSize: '300% 300%',
          animation: 'borderTrace 4s linear infinite',
          borderRadius: '1rem',
          padding: '2px',
        }}
      >
        <div className="absolute inset-[2px] rounded-2xl bg-[#050505]" />
      </div>

      {/* Deep colorful glow behind */}
      <div className="absolute -inset-8 rounded-2xl bg-gradient-to-tr from-cyan-400/20 via-fuchsia-400/15 to-violet-400/10 blur-[80px] -z-10"></div>

      {/* Corner HUD accents */}
      <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-cyan-300/70 z-20 rounded-tl" />
      <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-cyan-300/70 z-20 rounded-tr" />
      <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-fuchsia-400/70 z-20 rounded-bl" />
      <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-fuchsia-400/70 z-20 rounded-br" />

      {/* Image */}
      <img
        src={imageUrl}
        alt="Profile"
        className="absolute inset-0 w-full h-full object-cover rounded-2xl z-10 contrast-[1.05]"
        loading="lazy"
        onError={(e) => {
          e.currentTarget.src = `data:image/svg+xml;utf8,${encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='800'><rect width='100%' height='100%' fill='%23111'/><text x='50%' y='50%' fill='%2322d3ee' font-family='monospace' font-size='14' dominant-baseline='middle' text-anchor='middle'>// no image</text></svg>`
          )}`;
        }}
      />

      {/* HUD label */}
      <div className="absolute -bottom-7 left-0 right-0 flex justify-center z-20">
        <span className="text-[9px] uppercase tracking-[0.4em] text-cyan-300/60 font-mono">[ XAIN.EXE ]</span>
      </div>
    </div>
  );
};

export default BlobImage;