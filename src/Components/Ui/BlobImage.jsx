import React from 'react';

const BlobImage = () => {
  // Use local profile image if present in public/projects/me.png
  const imageUrl = '/projects/me.png';

  return (
    <div className="relative w-[220px] h-[280px] sm:w-[320px] sm:h-[420px] md:w-[400px] md:h-[500px] z-10 mx-auto sm:mx-0">
      {/* Large colorful glow behind the image */}
      <div className="absolute -inset-6 rounded-2xl bg-gradient-to-tr from-indigo-400/30 via-pink-300/20 to-yellow-300/10 blur-[90px] scale-105 -z-20"></div>

      {/* Secondary softer glow for depth */}
      <div className="absolute inset-0 rounded-2xl bg-white/10 blur-[40px] -z-10" ></div>

      {/* Slight vignette overlay for contrast */}
      <div className="absolute inset-0 rounded-2xl bg-black/10 mix-blend-overlay -z-5"></div>

      {/* Full image shown on top with rounded corners and subtle contrast */}
      <img
        src={imageUrl}
        alt="Profile"
        className="absolute inset-0 w-full h-full object-cover rounded-2xl z-10 grayscale-0 contrast-110"
        loading="lazy"
        onError={(e) => {
          // fallback to a neutral placeholder if user image is missing
          e.currentTarget.src = `data:image/svg+xml;utf8,${encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='800'><rect width='100%' height='100%' fill='%23222'/><text x='50%' y='50%' fill='%23aaa' font-family='Arial,sans-serif' font-size='20' dominant-baseline='middle' text-anchor='middle'>No image</text></svg>`
          )}`;
        }}
      />
    </div>
  );
};

export default BlobImage;