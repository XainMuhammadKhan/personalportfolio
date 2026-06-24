import React, { useEffect, useState } from 'react';

const sections = ['hero', 'about', 'skills', 'portfolio', 'contact'];

const SectionIndicator = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const elems = sections.map((id) => document.getElementById(id));
    const options = { threshold: [0.25, 0.5, 0.75] };
    if (elems.length === 0) return;

    const obs = new IntersectionObserver((entries) => {
      // pick the entry with largest intersectionRatio
      let best = { ratio: 0, id: null };
      entries.forEach((e) => {
        if (e.intersectionRatio > best.ratio) best = { ratio: e.intersectionRatio, id: e.target.id };
      });
      if (best.id) {
        const idx = sections.indexOf(best.id);
        if (idx !== -1) setActive(idx);
      }
    }, options);

    elems.forEach((el) => { if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="fixed left-3 lg:left-10 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-4 rounded-full border border-white/10 bg-black/40 px-3 py-4 backdrop-blur-xl">
      <div className="text-cyan-200 text-3xl font-black leading-none">{String(active + 1).padStart(2, '0')}</div>
      <div className="flex flex-col gap-3 mt-2 items-center">
        {sections.map((s, i) => (
          <div key={s} className={`transition-all duration-300 ${i === active ? 'w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.7)] scale-125' : 'w-2 h-2 rounded-full bg-white/25'}`}></div>
        ))}
      </div>
    </div>
  );
};

export default SectionIndicator;
