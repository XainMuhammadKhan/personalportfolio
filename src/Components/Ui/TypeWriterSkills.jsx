import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypewriterSkills = ({ center = false }) => {
  return (
    <div className={`text-cyan-200/80 tracking-[0.15em] sm:tracking-[0.2em] text-[11px] sm:text-sm md:text-base font-mono uppercase term-cursor ${center ? 'text-center' : 'text-left'}`}>
      <TypeAnimation
        sequence={[
          'Flutter Developer', 2000,
          'MERN Stack Developer', 2000,
          'Django Specialist', 2000,
          'AI Enthusiast', 2000,
          'SQL Expert', 2000,
        ]}
        wrapper="span"
        speed={50}
        deletionSpeed={70}
        style={{ display: 'inline-block' }}
        repeat={Infinity}
      />
    </div>
  );
};

export default TypewriterSkills;