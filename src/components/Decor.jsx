import { useEffect, useMemo, useRef, useState } from "react";

/* Fade/slide in when scrolled into view */
export function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${seen ? "in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* Falling flower petals */
export function Petals({ count = 22 }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 10 + Math.random() * 14,
        dur: 12 + Math.random() * 14,
        delay: -Math.random() * 20,
        drift: (Math.random() - 0.5) * 160,
        hue: Math.random() > 0.5 ? "marigold" : "rose",
      })),
    [count]
  );
  return (
    <div className="petals" aria-hidden>
      {petals.map((p) => (
        <span
          key={p.id}
          className={`petal ${p.hue}`}
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
            "--drift": `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
}

/* Gold mandala (pure SVG) */
export function Mandala({ size = 600, className = "" }) {
  const arr = Array.from({ length: 16 });
  return (
    <svg
      viewBox="-100 -100 200 200"
      width={size}
      height={size}
      className={className}
      aria-hidden
    >
      <g fill="none" stroke="currentColor" strokeWidth="0.5">
        {[96, 90, 62, 40, 22, 8].map((r) => (
          <circle key={r} r={r} />
        ))}
        {arr.map((_, i) => (
          <g key={i} transform={`rotate(${i * 22.5})`}>
            <path d="M0 -62 C 11 -74, 11 -86, 0 -96 C -11 -86, -11 -74, 0 -62Z" />
            <path d="M0 -40 C 7 -48, 7 -56, 0 -62 C -7 -56, -7 -48, 0 -40Z" />
            <path d="M0 -22 C 4 -28, 4 -34, 0 -40 C -4 -34, -4 -28, 0 -22Z" />
            <circle cy="-92" r="1.1" fill="currentColor" />
            <circle cy="-66" r="0.8" fill="currentColor" />
          </g>
        ))}
        {Array.from({ length: 32 }).map((_, i) => (
          <line key={i} x1="0" y1="-90" x2="0" y2="-96" transform={`rotate(${i * 11.25})`} />
        ))}
      </g>
    </svg>
  );
}

/* Lotus + line divider */
export function Divider() {
  return (
    <div className="divider" aria-hidden>
      <span className="line" />
      <svg viewBox="-30 -20 60 40" width="54" height="36">
        <g fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
          <path d="M0 14 C -6 6, -6 -4, 0 -14 C 6 -4, 6 6, 0 14Z" />
          <path d="M0 14 C -14 12, -22 2, -24 -6 C -14 -6, -6 2, 0 14Z" />
          <path d="M0 14 C 14 12, 22 2, 24 -6 C 14 -6, 6 2, 0 14Z" />
          <path d="M-14 16 H14" />
        </g>
      </svg>
      <span className="line" />
    </div>
  );
}
