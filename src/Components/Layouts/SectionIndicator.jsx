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
    <div className="fixed left-4 lg:left-12 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center gap-4">
      <div className="text-white text-4xl font-black leading-none">{String(active + 1).padStart(2, '0')}</div>
      <div className="flex flex-col gap-3 mt-2">
        {sections.map((s, i) => (
          <div key={s} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === active ? 'bg-white scale-125' : 'bg-white/30'}`}></div>
        ))}
      </div>
    </div>
  );
};

export default SectionIndicator;
