import React, { useEffect, useRef, useState } from 'react';

const CursorGlow = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);
    const [hovering, setHovering] = useState(false);
    const pos = useRef({ x: -100, y: -100 });
    const ring = useRef({ x: -100, y: -100 });
    const raf = useRef(null);

    useEffect(() => {
        // Only on non-touch devices
        if (window.matchMedia('(hover: none)').matches) return;

        const onMove = (e) => {
            pos.current = { x: e.clientX, y: e.clientY };
            if (dotRef.current) {
                dotRef.current.style.left = `${e.clientX}px`;
                dotRef.current.style.top = `${e.clientY}px`;
            }
        };

        const onEnter = (e) => {
            const tag = e.target.tagName;
            if (['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(tag) || e.target.closest('a, button')) {
                setHovering(true);
            }
        };
        const onLeave = () => setHovering(false);

        const lerp = (a, b, t) => a + (b - a) * t;

        const tick = () => {
            ring.current.x = lerp(ring.current.x, pos.current.x, 0.12);
            ring.current.y = lerp(ring.current.y, pos.current.y, 0.12);
            if (ringRef.current) {
                ringRef.current.style.left = `${ring.current.x}px`;
                ringRef.current.style.top = `${ring.current.y}px`;
            }
            raf.current = requestAnimationFrame(tick);
        };
        raf.current = requestAnimationFrame(tick);

        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseover', onEnter);
        document.addEventListener('mouseout', onLeave);

        return () => {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseover', onEnter);
            document.removeEventListener('mouseout', onLeave);
            cancelAnimationFrame(raf.current);
        };
    }, []);

    // Don't render on touch devices at all
    if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return null;

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div ref={ringRef} className={`cursor-ring ${hovering ? 'hovering' : ''}`} />
        </>
    );
};

export default CursorGlow;