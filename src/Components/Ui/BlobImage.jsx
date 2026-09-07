import React from 'react';

const BlobImage = () => (
  <div className="portrait-stage">
    <div className="portrait-orbit orbit-one" aria-hidden="true" />
    <div className="portrait-orbit orbit-two" aria-hidden="true" />
    <div className="portrait-glow" aria-hidden="true" />
    <div className="portrait-frame">
      <div className="portrait-index">01</div>
      <img src="/projects/me.png" alt="Xain Muhammad Khan" />
      <div className="portrait-scan" aria-hidden="true" />
      <div className="portrait-caption">
        <span>Based in Karachi</span>
        <span className="live-dot">Live</span>
      </div>
    </div>
  </div>
);

export default BlobImage;
