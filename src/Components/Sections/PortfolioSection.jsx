import React, { useEffect, useRef, useState } from 'react';
import { HiChevronLeft, HiChevronRight, HiOutlineSparkles } from 'react-icons/hi2';

const fallbackProjects = [
  {
    slug: 'al-furqan',
    title: 'Al Furqan',
    desc: 'An Islamic learning project with a focused, clean interface.',
    tech: 'Flutter / UI'
  },
  {
    slug: 'tasq',
    title: 'Tasq',
    desc: 'A task-focused product concept with quick navigation and a sharp visual rhythm.',
    tech: 'Product Design'
  },
  {
    slug: 'waves',
    title: 'Waves',
    desc: 'A creative build shaped around motion, contrast, and a modern layout.',
    tech: 'Frontend / Motion'
  }
];

const PortfolioSection = ({ github }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const [projects, setProjects] = useState(fallbackProjects);
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState('');
  const itemRefs = useRef([]);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.12 });
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!github || !github.username) {
      setProjects(fallbackProjects);
      return undefined;
    }

    const controller = new AbortController();

    const loadProjects = async () => {
      setIsLoading(true);
      setLoadError('');

      try {
        const response = await fetch(
          `https://api.github.com/users/${github.username}/repos?sort=pushed&direction=desc&per_page=100&type=owner`,
          {
            signal: controller.signal,
            headers: {
              Accept: 'application/vnd.github+json',
              'X-GitHub-Api-Version': '2022-11-28',
            },
          }
        );

        if (!response.ok) {
          throw new Error(`GitHub request failed with ${response.status}`);
        }

        const repos = await response.json();
        const visibleRepos = repos
          .filter((repo) => !repo.fork && !repo.archived && !repo.disabled)
          .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
          .slice(0, 6)
          .map((repo) => {
            const mappedName = github.localMap && github.localMap[repo.name] ? github.localMap[repo.name] : `${repo.name}.png`;
            return {
              slug: repo.name,
              title: repo.name.replace(/[-_]/g, ' '),
              desc: repo.description || 'Freshly pushed from GitHub and ready to review.',
              tech: [repo.language, repo.topics?.[0]].filter(Boolean).join(' / '),
              stars: repo.stargazers_count,
              updatedAt: repo.pushed_at,
              thumbLocal: `/projects/${mappedName}`,
              thumbRemote: `https://opengraph.githubassets.com/1/${github.username}/${repo.name}`,
              url: repo.homepage || repo.html_url,
            };
          });

        setProjects(visibleRepos.length ? visibleRepos : fallbackProjects);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setProjects(fallbackProjects);
          setLoadError('Using the local showcase because the GitHub feed could not be loaded.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    loadProjects();

    const refreshId = setInterval(loadProjects, 10 * 60 * 1000);
    const onFocus = () => loadProjects();
    window.addEventListener('focus', onFocus);

    return () => {
      controller.abort();
      clearInterval(refreshId);
      window.removeEventListener('focus', onFocus);
    };
  }, [github]);

  const items = projects;

  // Scroll-to active item when active index changes
  useEffect(() => {
    if (!items.length) return;
    if (active >= items.length) setActive(0);

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
  }, [active, items.length, visible]);

  // autoplay
  useEffect(() => {
    if (!items.length) return undefined;
    const id = setInterval(() => setActive((a) => (a + 1) % items.length), 4000);
    return () => clearInterval(id);
  }, [items.length]);

  const goPrev = () => {
    if (!items.length) return;
    setActive((a) => (a - 1 + items.length) % items.length);
  };

  const goNext = () => {
    if (!items.length) return;
    setActive((a) => (a + 1) % items.length);
  };

  return (
    <section
      id="portfolio"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(0,255,209,0.12),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_24%),linear-gradient(180deg,_#050505_0%,_#090909_50%,_#050505_100%)] text-white"
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.14] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black_30%,transparent_85%)]"></div>
      <div className={`container mx-auto px-6 sm:px-12 lg:px-24 py-16 sm:py-24 transition-all duration-700 ease-out transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_0_80px_rgba(0,255,209,0.08)] backdrop-blur-xl p-6 sm:p-8 lg:p-10">
          <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent"></div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-cyan-100/80 mb-4">
                <HiOutlineSparkles className="text-base" />
                Live GitHub feed
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-[0.28em] text-white mb-2">Selected Work</h2>
              <div className="h-px w-28 bg-gradient-to-r from-cyan-300 to-transparent"></div>
            </div>
            <div className="text-sm text-theme-accent-gray max-w-xl sm:text-right">
              {isLoading ? 'Syncing the latest pushes from GitHub.' : 'Fresh pushes are pulled automatically, so the showcase stays current.'}
              {loadError ? <div className="mt-2 text-cyan-200/80">{loadError}</div> : null}
            </div>
          </div>

          <div className="relative">
            <button
              onClick={goPrev}
              aria-label="Previous"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur hover:border-cyan-300/50 hover:text-cyan-200 transition-colors"
            >
              <HiChevronLeft className="text-2xl" />
            </button>

            <div className="flex gap-5 overflow-x-auto no-scrollbar py-4 snap-x snap-mandatory scroll-smooth carousel-touch" role="list">
              {items.map((p, i) => (
                <article
                  ref={(el) => (itemRefs.current[i] = el)}
                  key={p.slug || i}
                  role="listitem"
                  className={`group snap-center min-w-[280px] max-w-sm flex-shrink-0 rounded-[1.5rem] border bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4 sm:p-5 transition-all duration-300 ${i === active ? 'scale-[1.03] border-cyan-300/40 shadow-[0_0_50px_rgba(34,211,238,0.16)]' : 'border-white/10 opacity-75 hover:opacity-100'}`}
                >
                  <div className="overflow-hidden rounded-[1rem] border border-white/10 bg-black/40">
                    <a href={p.url || '#'} target="_blank" rel="noreferrer" className="block relative">
                      <img
                        src={p.thumbLocal || p.thumbRemote}
                        alt={p.title}
                        className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        loading="lazy"
                        onError={(e) => {
                          const placeholder = `data:image/svg+xml;utf8,${encodeURIComponent(
                            `<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400'><defs><linearGradient id='g' x1='0' x2='1'><stop offset='0%' stop-color='%230f172a'/><stop offset='100%' stop-color='%23111827'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23g)'/><circle cx='78%' cy='22%' r='90' fill='%2306b6d4' fill-opacity='.12'/><text x='50%' y='52%' fill='%23d1d5db' font-family='Arial,sans-serif' font-size='20' dominant-baseline='middle' text-anchor='middle'>No image available</text></svg>`
                          )}`;
                          if (e.currentTarget.src !== placeholder) e.currentTarget.src = placeholder;
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                    </a>
                  </div>

                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <a href={p.url || '#'} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                        <h3 className="text-xl font-bold tracking-wide text-white group-hover:text-cyan-200 transition-colors">{p.title}</h3>
                      </a>
                      {p.tech ? <p className="mt-2 text-xs uppercase tracking-[0.3em] text-cyan-100/60">{p.tech}</p> : null}
                    </div>
                    {typeof p.stars === 'number' ? (
                      <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-theme-accent-gray">
                        {p.stars} stars
                      </div>
                    ) : null}
                  </div>

                  {p.desc ? <p className="mt-4 text-sm leading-6 text-theme-accent-gray">{p.desc}</p> : null}
                  {p.updatedAt ? <p className="mt-4 text-[11px] uppercase tracking-[0.28em] text-white/35">Updated {new Date(p.updatedAt).toLocaleDateString()}</p> : null}
                </article>
              ))}
            </div>

            <button
              onClick={goNext}
              aria-label="Next"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex h-12 w-12 translate-x-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white backdrop-blur hover:border-cyan-300/50 hover:text-cyan-200 transition-colors"
            >
              <HiChevronRight className="text-2xl" />
            </button>

            <div className="mt-6 flex items-center justify-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${i === active ? 'w-10 bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.5)]' : 'w-2.5 bg-white/25 hover:bg-white/45'}`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
