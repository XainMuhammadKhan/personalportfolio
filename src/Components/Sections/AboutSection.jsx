import React, { useRef, useEffect, useState } from 'react';
import { FaUserGraduate, FaBriefcase, FaCertificate } from "react-icons/fa";

const AboutSection = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  // Card Data
  const cards = [
    {
      id: 1,
      title: "Education",
      icon: <FaUserGraduate />,
      lines: ["Bachelor's in Computer Science", "University of Karachi"]
    },
    {
      id: 2,
      title: "Experience",
      icon: <FaBriefcase />,
      lines: ["3+ Years in Development", "Multiple Successful Projects"]
    },
    {
      id: 3,
      title: "Certifications",
      icon: <FaCertificate />,
      lines: ["Flutter Development", "Web Development", "AI & Machine Learning"]
    }
  ];

  return (
    <section id="about" ref={ref} className="min-h-screen flex items-center bg-theme-black text-white py-20 relative overflow-hidden">

      {/* Background decorative glow (subtle, theme-colored) */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>

      <div
        className={`container mx-auto px-6 sm:px-12 lg:px-24 transition-all duration-1000 ease-out transform ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="col-span-1 lg:col-span-6 space-y-8">
            {/* Styled Header with Underline */}
            <div className="relative">
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-white mb-2">
                About Me
                </h2>
                <div className="h-1 w-24 bg-theme-accent-gray"></div>
            </div>

            <div className="text-theme-accent-gray leading-relaxed text-lg space-y-6 font-light">
              <p>
                Hi, I'm <span className="text-white font-bold">Xain Muhammad Khan</span>, a passionate developer with expertise in multiple domains. With a strong foundation in both front-end and back-end development, I create innovative solutions that make a difference.
              </p>
              <p>
                My journey in technology began with a deep curiosity for creating things that could impact people's lives. Today, I specialize in developing cutting-edge applications that combine creativity with technical excellence.
              </p>
              <p>
                I believe in continuous learning and staying at the forefront of technology. My approach combines technical expertise with creative problem-solving to deliver exceptional results.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Info Cards */}
          <div className="col-span-1 lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {cards.map((card) => (
                <div 
                  key={card.id} 
                  className={`
                    group relative p-8 bg-theme-gray/60 border border-white/5 rounded-2xl transition-all duration-300 hover:-translate-y-2 white-glow
                    ${card.id === 3 ? 'md:col-span-2 md:w-2/3 md:mx-auto' : ''} 
                  `} 
                  /* Logic above: If it's the 3rd card, center it on larger screens to match image layout */
                >
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="text-4xl text-white mb-4 icon-glow">
                      {card.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-wider">
                      {card.title}
                    </h3>
                    {card.lines.map((line, i) => (
                      <p key={i} className="text-sm text-theme-accent-gray font-medium">
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;