import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypewriterSkills = ({ center = false }) => {
  return (
    <div className={`text-theme-accent-gray tracking-[0.2em] text-sm sm:text-lg mt-4 font-light uppercase ${center ? 'text-center' : 'text-left'}`}>
      <TypeAnimation
        sequence={[
          'Flutter Developer',
          2000,
          'MERN Stack Developer',
          2000,
          'Django Specialist',
          2000,
          'AI Enthusiast',
          2000,
          'SQL Expert',
          2000,
        ]}
        wrapper="span"
        speed={50}
        style={{ display: 'inline-block' }}
        repeat={Infinity}
      />
    </div>
  );
};

export default TypewriterSkills;