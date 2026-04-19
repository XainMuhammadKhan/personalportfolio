import React, { useRef, useEffect, useState } from 'react';

const projects = [
  {
    title: 'Project One',
    desc: 'A concise description of a polished UI project.',
    tech: 'React / Tailwind'
  },
  {
    title: 'Project Two',
    desc: 'An interactive animation-focused showcase.',
    tech: 'Canvas / Greensock'
  },
  {
    title: 'Project Three',
    desc: 'A performant, accessible web app.',
    tech: 'React / Vite'
  }
];

const PortfolioSection = ({ github }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const itemRefs = useRef([]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.12 });
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  // Build github-driven project list when `github` prop is provided
  const githubProjects = (github && github.username && Array.isArray(github.repos) && github.repos.length)
    ? github.repos.map((r) => {
        const mappedName = github.localMap && github.localMap[r] ? github.localMap[r] : `${r}.png`;
        return ({
          slug: r,
          title: r.replace(/[-_]/g, ' '),
          desc: '',
          tech: '',
          // prefer a local asset in /public/projects/<mappedName>, fallback to GitHub opengraph
          thumbLocal: `/projects/${mappedName}`,
          thumbRemote: `https://opengraph.githubassets.com/1/${github.username}/${r}`,
          url: `https://github.com/${github.username}/${r}`,
        });
      })
    : null;

  const items = githubProjects || projects.map((p, i) => ({ slug: `local-${i}`, title: p.title, desc: p.desc, tech: p.tech }));

  // Scroll-to active item when active index changes
  useEffect(() => {
    // If user is typing in an input/textarea (e.g. contact form), avoid scrolling
    // which would move the page while the user is interacting with a form.
    try {
      const activeEl = typeof document !== 'undefined' ? document.activeElement : null;
      if (activeEl) {
        const tag = activeEl.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA' || activeEl.isContentEditable) return;
        if (activeEl.closest && activeEl.closest('#contact')) return;
      }
    } catch (e) {
      // ignore DOM access errors in non-browser environments
    }

    // Only scroll the carousel into view when the carousel itself is visible
    // (prevents the page jumping to the carousel when user is elsewhere).
    if (!visible) return;

    const el = itemRefs.current[active];
    if (el && el.scrollIntoView) {
      el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [active]);

  // autoplay
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % items.length), 4000);
    return () => clearInterval(id);
  }, [items.length]);

  const goPrev = () => setActive((a) => (a - 1 + items.length) % items.length);
  const goNext = () => setActive((a) => (a + 1) % items.length);

  return (
    <section id="portfolio" ref={ref} className="min-h-screen flex items-center bg-theme-black text-white">
      <div className={`container mx-auto px-6 sm:px-12 lg:px-24 py-16 sm:py-24 transition-all duration-700 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-white mb-2">Selected Work</h2>
              <div className="h-1 w-24 bg-theme-accent-gray"></div>
            </div>
          </div>

          {/* Carousel area */}
          <div className="relative">
            <button onClick={goPrev} aria-label="Previous" className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">◀</button>
            <div className="flex gap-6 overflow-x-auto no-scrollbar py-6 snap-x snap-mandatory scroll-smooth carousel-touch" role="list">
              {items.map((p, i) => (
                <article
                  ref={(el) => (itemRefs.current[i] = el)}
                  key={p.slug || i}
                  role="listitem"
                  className={`snap-center min-w-[260px] max-w-sm flex-shrink-0 bg-zinc-900 p-6 rounded-lg border border-white/5 transition-transform duration-300 ${i === active ? 'scale-105 white-glow' : 'opacity-70'}`}>
                  {p.thumbLocal || p.thumbRemote ? (
                    <a href={p.url || '#'} target="_blank" rel="noreferrer" className="block mb-4 overflow-hidden rounded">
                      <img
                        src={p.thumbLocal || p.thumbRemote}
                        alt={p.title}
                        className="w-full h-40 object-cover rounded"
                        loading="lazy"
                        onError={(e) => {
                          // Avoid repeatedly hitting GitHub or external hosts on error (429 rate limits).
                          // Replace the failed src with a small inline SVG placeholder instead of attempting remote fallbacks.
                          const placeholder = `data:image/svg+xml;utf8,${encodeURIComponent(
                            `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><rect width='100%' height='100%' fill='%23222'/><text x='50%' y='50%' fill='%23aaa' font-family='Arial,sans-serif' font-size='20' dominant-baseline='middle' text-anchor='middle'>No image</text></svg>`
                          )}`;
                          if (e.currentTarget.src !== placeholder) e.currentTarget.src = placeholder;
                        }}
                      />
                    </a>
                  ) : null}
                  <a href={p.url || '#'} target="_blank" rel="noreferrer">
                    <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  </a>
                  {p.desc ? <p className="text-theme-accent-gray mb-4">{p.desc}</p> : null}
                </article>
              ))}
            </div>
            <button onClick={goNext} aria-label="Next" className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">▶</button>

            {/* Dots */}
            <div className="flex items-center justify-center mt-6 space-x-2">
              {items.map((_, i) => (
                <button key={i} onClick={() => setActive(i)} className={`w-3 h-3 rounded-full ${i === active ? 'bg-white' : 'bg-zinc-700'}`} aria-label={`Go to slide ${i+1}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
