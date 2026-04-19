import React, { useRef, useEffect, useState } from 'react';
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiVite,
  SiDjango,
  SiHtml5,
  SiCss3,
  SiCplusplus,
  SiMysql,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiRedux,
  SiFlutter,
  SiPython,
  SiDart,
  SiGit,
  SiFigma,
  SiDocker,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import getxImg from '../../assets/getx.png';
import providerImg from '../../assets/provider.png';
import riverpodImg from '../../assets/riverpod.png';
import blocImg from '../../assets/bloc.png';

const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Vite', icon: SiVite, color: '#646CFF' },
  { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
  { name: 'CSS', icon: SiCss3, color: '#1572B6' },
  { name: 'C++', icon: SiCplusplus, color: '#00599C' },
  { name: 'Java', icon: DiJava, color: '#007396' },

  // Backend / Databases
  { name: 'Django', icon: SiDjango, color: '#092E20' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },

  // Cloud & BaaS
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E' },

  // State & Architecture (some of these don't have official icons in react-icons)
  { name: 'Redux', icon: SiRedux, color: '#764ABC' },

  // Languages / Tools
  { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
  { name: 'Dart', icon: SiDart, color: '#00B4FF' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED' },
  // Flutter state management / mobile state libs (local icons)
  { name: 'GetX', icon: getxImg, color: '#00BFA5' },
  { name: 'Provider', icon: providerImg, color: '#43A047' },
  { name: 'Riverpod', icon: riverpodImg, color: '#4F46E5' },
  { name: 'Bloc', icon: blocImg, color: '#EF5350' },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.12 });
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="min-h-[60vh] flex items-center bg-theme-black text-white">
      <div className={`container mx-auto px-6 sm:px-12 lg:px-24 py-16 sm:py-20 transition-all duration-700 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          <div className="col-span-1 lg:col-span-6">
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-white mb-2">Skills & Tools</h2>
              <div className="h-1 w-24 bg-theme-accent-gray"></div>
            </div>
            <p className="text-theme-accent-gray mt-4">Technologies and tools I use frequently — comfortable working across front-end, tooling and build systems.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 w-full">
          {skills.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className="flex flex-col items-center gap-2 p-3 bg-zinc-900/40 rounded-lg border border-white/5 hover:scale-105 transition-transform duration-200 white-glow hover:white-glow-strong"
              >
                {Icon ? (
                  typeof Icon === 'string' ? (
                    <div className={`w-10 h-10 rounded-full bg-white/5 flex items-center justify-center icon-glow`}>
                      <img
                        src={Icon}
                        alt={`${s.name} icon`}
                        className={`${s.name === 'Provider' ? 'w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 transform scale-[1.85] sm:scale-[2.1] md:scale-[2.4]' : 'w-6 h-6 sm:w-8 sm:h-8 md:w-8 md:h-8'} object-contain`} 
                      />
                    </div>
                  ) : (
                    <div className="p-3 rounded-full bg-white/5 text-white text-xl sm:text-2xl icon-glow">
                      <Icon aria-hidden="true" style={{ color: s.color }} />
                    </div>
                  )
                ) : (
                  <div className="glow-badge" style={{ background: s.color }}>
                    {s.name.match(/\b(\w)/g).slice(0,2).join('')}
                  </div>
                )}
                <span className="text-xs text-theme-accent-gray">{s.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;