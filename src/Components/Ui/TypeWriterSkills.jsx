import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const TypewriterSkills = () => (
  <div className="typewriter-role">
    <TypeAnimation
      sequence={[
        'Flutter Developer', 1800,
        'Full-Stack Engineer', 1800,
        'Django Developer', 1800,
        'Creative Problem Solver', 1800,
      ]}
      wrapper="span"
      speed={45}
      deletionSpeed={65}
      repeat={Infinity}
    />
  </div>
);

export default TypewriterSkills;
