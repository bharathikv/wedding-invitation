import { useState } from "react";

/* ------------------------------------------------------------------
   Shared gradients (rendered once in <GodDefs/>, used by every SVG)
------------------------------------------------------------------- */
export function GodDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden>
      <defs>
        <radialGradient id="gd-halo" cx="50%" cy="48%" r="50%">
          <stop offset="0" stopColor="#fff3b8" stopOpacity=".95" />
          <stop offset=".55" stopColor="#f3dc92" stopOpacity=".35" />
          <stop offset="1" stopColor="#f3dc92" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="gd-skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffb85c" />
          <stop offset="1" stopColor="#e2661a" />
        </linearGradient>
        <linearGradient id="gd-skin2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f19a3a" />
          <stop offset="1" stopColor="#c9540f" />
        </linearGradient>
        <linearGradient id="gd-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff1b0" />
          <stop offset=".5" stopColor="#d9ae4f" />
          <stop offset="1" stopColor="#8a6a1f" />
        </linearGradient>
        <linearGradient id="gd-pink" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffe3ec" />
          <stop offset="1" stopColor="#e0457b" />
        </linearGradient>
        <linearGradient id="gd-flame" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#e03a00" />
          <stop offset=".5" stopColor="#ff8a00" />
          <stop offset="1" stopColor="#ffe08a" />
        </linearGradient>
        <linearGradient id="gd-stone" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#1a1a24" />
          <stop offset=".45" stopColor="#4a4a5c" />
          <stop offset="1" stopColor="#14141c" />
        </linearGradient>
        <linearGradient id="gd-teal" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#0b6b4f" />
          <stop offset="1" stopColor="#25c0a0" />
        </linearGradient>
        <linearGradient id="gd-clay" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d9743a" />
          <stop offset="1" stopColor="#8d3510" />
        </linearGradient>
        <linearGradient id="gd-leaf" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#58b858" />
          <stop offset="1" stopColor="#1e6b2c" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ------------------------------------------------------------------
   Lord Ganesha
------------------------------------------------------------------- */
const GEar = () => (
  <g>
    <path
      d="M64 78 C 22 44, 4 98, 26 134 C 40 156, 60 136, 64 112 Z"
      fill="url(#gd-skin2)"
      stroke="#8a3d0e"
      strokeWidth="1.5"
    />
    <path
      d="M60 86 C 32 62, 20 100, 34 124 C 44 138, 56 126, 58 108 Z"
      fill="#ffc9a0"
      opacity=".75"
    />
    <path
      d="M54 92 C 42 82, 36 100, 42 114"
      fill="none"
      stroke="#c1122f"
      strokeWidth="1.2"
      opacity=".6"
    />
  </g>
);
const GEye = () => (
  <g>
    <path
      d="M77 96 Q86 88 95 96 Q86 102 77 96Z"
      fill="#fff"
      stroke="#3a1a1a"
      strokeWidth="1.2"
    />
    <circle cx="86" cy="96" r="2.7" fill="#1a0a0a" />
    <path d="M75 88 Q86 80 97 88" fill="none" stroke="#5a2308" strokeWidth="1.6" />
  </g>
);

export function Ganesha() {
  return (
    <svg viewBox="0 0 200 240" className="god-svg" role="img" aria-label="Lord Ganesha">
      <circle cx="100" cy="108" r="98" fill="url(#gd-halo)" />
      <circle
        cx="100"
        cy="108"
        r="90"
        fill="none"
        stroke="url(#gd-gold)"
        strokeWidth="1.4"
        strokeDasharray="2 5"
      />
      {/* ears */}
      <GEar />
      <g transform="translate(200 0) scale(-1 1)">
        <GEar />
      </g>
      {/* body */}
      <path
        d="M36 240 C 36 178, 68 152, 100 152 C 132 152, 164 178, 164 240 Z"
        fill="url(#gd-skin)"
        stroke="#8a3d0e"
        strokeWidth="1.5"
      />
      <path
        d="M46 214 Q100 188 154 214 L158 240 L42 240Z"
        fill="#b3122b"
        stroke="url(#gd-gold)"
        strokeWidth="2.5"
      />
      <path d="M50 224 Q100 200 150 224" fill="none" stroke="#f3dc92" strokeWidth="1" strokeDasharray="1 4" />
      {/* necklace */}
      <path d="M62 166 Q100 210 138 166" fill="none" stroke="url(#gd-gold)" strokeWidth="5" strokeLinecap="round" />
      <path d="M72 164 Q100 196 128 164" fill="none" stroke="#c1122f" strokeWidth="2" strokeDasharray="1 5" strokeLinecap="round" />
      <circle cx="100" cy="196" r="6" fill="url(#gd-gold)" stroke="#8a6a1f" />
      <circle cx="100" cy="196" r="2.4" fill="#c1122f" />
      {/* blessing hand (abhaya) */}
      <g stroke="#8a3d0e" strokeWidth="1.2" fill="url(#gd-skin2)">
        <ellipse cx="160" cy="190" rx="14" ry="18" />
        <ellipse cx="150" cy="168" rx="3.6" ry="10" />
        <ellipse cx="157" cy="165" rx="3.6" ry="11" />
        <ellipse cx="164" cy="166" rx="3.6" ry="10" />
        <ellipse cx="171" cy="170" rx="3.4" ry="9" />
        <ellipse cx="144" cy="188" rx="3.4" ry="9" transform="rotate(-30 144 188)" />
      </g>
      <circle cx="160" cy="190" r="4.5" fill="#c1122f" />
      <circle cx="160" cy="190" r="1.6" fill="#ffd36a" />
      {/* modak bowl */}
      <path d="M26 206 Q46 232 66 206Z" fill="url(#gd-gold)" stroke="#8a6a1f" />
      <path d="M46 180 C 56 192, 58 200, 46 206 C 34 200, 36 192, 46 180Z" fill="#ffe08a" stroke="#c98a1c" />
      <path d="M46 180 q2 -6 0 -9" stroke="#c98a1c" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* head */}
      <ellipse cx="100" cy="98" rx="42" ry="46" fill="url(#gd-skin)" stroke="#8a3d0e" strokeWidth="1.5" />
      <ellipse cx="86" cy="70" rx="15" ry="8" fill="#fff" opacity=".22" />
      {/* crown */}
      <path
        d="M62 66 C 64 42, 80 26, 100 10 C 120 26, 136 42, 138 66 Z"
        fill="url(#gd-gold)"
        stroke="#8a6a1f"
        strokeWidth="1.2"
      />
      <path d="M72 62 C 76 44, 88 32, 100 22 C 112 32, 124 44, 128 62" fill="none" stroke="#8a6a1f" strokeWidth="1" />
      <path d="M60 66 Q100 54 140 66 L140 74 Q100 62 60 74Z" fill="url(#gd-gold)" stroke="#8a6a1f" strokeWidth="1.2" />
      {[78, 100, 122].map((x) => (
        <circle key={x} cx={x} cy={65} r="3.4" fill="#c1122f" stroke="#fff1b0" strokeWidth=".8" />
      ))}
      <circle cx="100" cy="9" r="4" fill="url(#gd-gold)" />
      <circle cx="100" cy="9" r="1.6" fill="#c1122f" />
      {/* tilak */}
      <path d="M84 76 Q100 86 116 76" fill="none" stroke="#c1122f" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="100" cy="82" r="2.6" fill="#c1122f" />
      {/* eyes */}
      <GEye />
      <g transform="translate(200 0) scale(-1 1)">
        <GEye />
      </g>
      {/* tusks */}
      <path d="M82 124 C 66 132, 62 150, 72 158 C 74 150, 80 142, 90 134Z" fill="#fff8e6" stroke="#c9b88a" />
      <path d="M118 126 C 130 132, 134 144, 130 150 C 122 146, 118 140, 112 134Z" fill="#fff8e6" stroke="#c9b88a" />
      {/* trunk */}
      <ellipse cx="100" cy="106" rx="13" ry="12" fill="url(#gd-skin)" />
      <path
        d="M100 108 C 101 132, 99 152, 90 168 C 82 182, 64 180, 64 168 C 64 160, 76 160, 76 168"
        fill="none"
        stroke="#8a3d0e"
        strokeWidth="21"
        strokeLinecap="round"
      />
      <path
        d="M100 108 C 101 132, 99 152, 90 168 C 82 182, 64 180, 64 168 C 64 160, 76 160, 76 168"
        fill="none"
        stroke="#ee7b22"
        strokeWidth="18"
        strokeLinecap="round"
      />
      <path
        d="M100 108 C 101 132, 99 152, 90 168 C 82 182, 64 180, 64 168 C 64 160, 76 160, 76 168"
        fill="none"
        stroke="#8a3d0e"
        strokeWidth="14"
        strokeLinecap="round"
        strokeDasharray="1 6"
        opacity=".55"
      />
      <path d="M96 112 C 97 134, 95 150, 87 164" fill="none" stroke="#fff" strokeWidth="3" opacity=".25" strokeLinecap="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------
   Goddess Lakshmi
------------------------------------------------------------------- */
const Lotus = ({ x, y, s = 1 }) => (
  <g transform={`translate(${x} ${y}) scale(${s})`}>
    <path d="M0 8 C -8 0, -8 -10, 0 -18 C 8 -10, 8 0, 0 8Z" fill="url(#gd-pink)" stroke="#b2285c" strokeWidth=".8" />
    <path d="M0 8 C -14 6, -20 -4, -20 -10 C -10 -10, -3 -2, 0 8Z" fill="url(#gd-pink)" stroke="#b2285c" strokeWidth=".8" />
    <path d="M0 8 C 14 6, 20 -4, 20 -10 C 10 -10, 3 -2, 0 8Z" fill="url(#gd-pink)" stroke="#b2285c" strokeWidth=".8" />
    <circle cy="-4" r="2.2" fill="#ffd36a" />
  </g>
);

export function Lakshmi() {
  const seat = [-70, -38, 0, 38, 70];
  return (
    <svg viewBox="0 0 200 240" className="god-svg" role="img" aria-label="Goddess Lakshmi">
      <circle cx="100" cy="112" r="98" fill="url(#gd-halo)" />
      <circle cx="100" cy="100" r="64" fill="none" stroke="url(#gd-gold)" strokeWidth="2" />
      {/* lotus seat */}
      {seat.map((a) => (
        <path
          key={a}
          transform={`rotate(${a} 100 232)`}
          d="M100 234 C 82 214, 82 190, 100 178 C 118 190, 118 214, 100 234Z"
          fill="url(#gd-pink)"
          stroke="#b2285c"
          strokeWidth="1"
        />
      ))}
      {/* body */}
      <path
        d="M62 214 C 56 164, 76 138, 100 134 C 124 138, 144 164, 138 214 Z"
        fill="#b3122b"
        stroke="url(#gd-gold)"
        strokeWidth="2.4"
      />
      <path d="M78 140 C 96 160, 120 176, 138 192" fill="none" stroke="url(#gd-gold)" strokeWidth="6" />
      <path d="M66 196 Q100 182 134 196" fill="none" stroke="url(#gd-gold)" strokeWidth="4" />
      {/* arms */}
      <g fill="none" stroke="#f0c08a" strokeWidth="9" strokeLinecap="round">
        <path d="M76 148 C 54 160, 48 182, 52 198" />
        <path d="M124 148 C 146 160, 152 182, 148 198" />
        <path d="M80 140 C 54 136, 44 124, 44 112" />
        <path d="M120 140 C 146 136, 156 124, 156 112" />
      </g>
      <g fill="none" stroke="url(#gd-gold)" strokeWidth="2.4">
        <path d="M60 154 q-8 12 -6 28" />
        <path d="M140 154 q8 12 6 28" />
      </g>
      <Lotus x={44} y={104} s={0.95} />
      <Lotus x={156} y={104} s={0.95} />
      {/* coins pouring */}
      <g className="coins">
        {[
          [50, 208],
          [58, 218],
          [46, 226],
          [54, 234],
        ].map(([x, y], i) => (
          <g key={i} style={{ animationDelay: `${i * 0.35}s` }}>
            <circle cx={x} cy={y} r="4.6" fill="url(#gd-gold)" stroke="#8a6a1f" />
            <circle cx={x} cy={y} r="1.8" fill="none" stroke="#8a6a1f" strokeWidth=".8" />
          </g>
        ))}
      </g>
      {/* abhaya palm */}
      <ellipse cx="148" cy="204" rx="8" ry="10" fill="#f0c08a" stroke="#c98a1c" />
      <circle cx="148" cy="204" r="2.6" fill="#c1122f" />
      {/* neck + face */}
      <rect x="94" y="120" width="12" height="18" fill="#e9b27c" />
      <path d="M72 98 C 66 60, 88 52, 100 52 C 112 52, 134 60, 128 98 C 122 78, 112 70, 100 70 C 88 70, 78 78, 72 98Z" fill="#2a120e" />
      <ellipse cx="100" cy="98" rx="24" ry="29" fill="#f4c99a" stroke="#c98a1c" strokeWidth=".8" />
      <path d="M76 98 C 74 72, 90 62, 100 62 C 110 62, 126 72, 124 98 C 118 80, 110 74, 100 74 C 90 74, 82 80, 76 98Z" fill="#2a120e" />
      {/* crown */}
      <path d="M74 68 L80 40 L90 56 L100 28 L110 56 L120 40 L126 68 Z" fill="url(#gd-gold)" stroke="#8a6a1f" strokeWidth="1.2" />
      <path d="M72 70 Q100 62 128 70 L128 76 Q100 68 72 76Z" fill="url(#gd-gold)" stroke="#8a6a1f" />
      <circle cx="100" cy="44" r="3.4" fill="#c1122f" stroke="#fff1b0" strokeWidth=".8" />
      <circle cx="82" cy="52" r="2" fill="#e0457b" />
      <circle cx="118" cy="52" r="2" fill="#e0457b" />
      {/* face details */}
      <path d="M82 94 Q89 89 96 94" fill="none" stroke="#2a120e" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M104 94 Q111 89 118 94" fill="none" stroke="#2a120e" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M80 87 Q89 82 97 87" fill="none" stroke="#2a120e" strokeWidth="1.4" />
      <path d="M103 87 Q111 82 120 87" fill="none" stroke="#2a120e" strokeWidth="1.4" />
      <circle cx="100" cy="82" r="2.6" fill="#c1122f" />
      <path d="M100 96 L98 106 Q100 108 102 106" fill="none" stroke="#c98a1c" strokeWidth="1.2" />
      <path d="M92 114 Q100 120 108 114 Q100 111 92 114Z" fill="#c1122f" />
      <circle cx="75" cy="106" r="3.4" fill="url(#gd-gold)" />
      <circle cx="125" cy="106" r="3.4" fill="url(#gd-gold)" />
      <circle cx="75" cy="113" r="2" fill="#c1122f" />
      <circle cx="125" cy="113" r="2" fill="#c1122f" />
      {/* necklace */}
      <path d="M82 134 Q100 158 118 134" fill="none" stroke="url(#gd-gold)" strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="100" cy="152" r="4.2" fill="#c1122f" stroke="#fff1b0" />
    </svg>
  );
}

/* ------------------------------------------------------------------
   Lord Annamalaiyar — the sacred fire lingam of Tiruvannamalai
------------------------------------------------------------------- */
const Prong = () => (
  <g fill="none" stroke="url(#gd-gold)" strokeWidth="3" strokeLinecap="round">
    <path d="M32 48 V212" />
    <path d="M32 92 C 14 92, 14 62, 20 52" />
    <path d="M32 92 C 50 92, 50 62, 44 52" />
    <path d="M32 48 L26 62 M32 48 L38 62" />
    <path d="M32 100 l-7 8 M32 100 l7 8 M32 116 l-6 7 M32 116 l6 7" strokeWidth="2" />
  </g>
);

export function Shiva() {
  return (
    <svg viewBox="0 0 200 240" className="god-svg" role="img" aria-label="Lord Annamalaiyar">
      <circle cx="100" cy="112" r="98" fill="url(#gd-halo)" />
      <g transform="translate(4 0)">
        <Prong />
      </g>
      <g transform="translate(200 0) scale(-1 1) translate(4 0)">
        <Prong />
      </g>
      {/* flame */}
      <g className="flame">
        <path
          d="M100 34 C 134 74, 158 104, 148 150 C 142 180, 58 180, 52 150 C 42 104, 66 74, 100 34Z"
          fill="url(#gd-flame)"
          opacity=".95"
        />
        <path
          d="M100 72 C 120 100, 130 120, 124 150 C 120 168, 80 168, 76 150 C 70 120, 80 100, 100 72Z"
          fill="#ffe9a0"
          opacity=".75"
        />
      </g>
      {/* crescent moon */}
      <path d="M108 8 A16 16 0 1 0 108 40 A12.5 12.5 0 1 1 108 8Z" fill="url(#gd-gold)" stroke="#8a6a1f" strokeWidth=".8" />
      {/* lingam */}
      <rect x="78" y="80" width="44" height="98" rx="22" fill="url(#gd-stone)" />
      <rect x="78" y="120" width="44" height="58" fill="url(#gd-stone)" />
      <path d="M82 110 Q100 118 118 110" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <path d="M80 122 Q100 130 120 122" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <path d="M80 134 Q100 142 120 134" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
      <circle cx="100" cy="152" r="4.5" fill="#c1122f" />
      <path d="M86 92 C 88 84, 94 82, 98 84" fill="none" stroke="#fff" strokeWidth="2.4" opacity=".28" strokeLinecap="round" />
      {/* garland */}
      <path d="M78 96 Q100 122 122 96" fill="none" stroke="#2f7d3a" strokeWidth="3" />
      {[84, 91, 100, 109, 116].map((x, i) => (
        <circle key={x} cx={x} cy={[104, 110, 113, 110, 104][i]} r="3.6" fill="#ffb300" stroke="#c76a00" strokeWidth=".6" />
      ))}
      {/* pedestal (avudaiyar) */}
      <path d="M44 178 C 44 168, 156 168, 156 178 L148 198 L52 198 Z" fill="url(#gd-stone)" stroke="url(#gd-gold)" strokeWidth="1.6" />
      <path d="M150 184 H178 L172 196 H148Z" fill="url(#gd-stone)" stroke="url(#gd-gold)" strokeWidth="1.2" />
      <rect x="40" y="198" width="120" height="14" rx="3" fill="url(#gd-gold)" stroke="#8a6a1f" />
      <rect x="32" y="212" width="136" height="12" rx="3" fill="#7a5a1a" stroke="#c9a24b" />
      {/* bilva leaves */}
      {[-1, 1].map((d) => (
        <g key={d} transform={`translate(${100 + d * 48} 188)`}>
          <path d="M0 0 C 6 -10, 12 -10, 14 0 C 8 4, 4 4, 0 0Z" fill="url(#gd-leaf)" transform={d < 0 ? "scale(-1 1)" : ""} />
        </g>
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------
   Lord Murugan — Vel & peacock feathers
------------------------------------------------------------------- */
const Feather = ({ a }) => (
  <g transform={`rotate(${a} 100 206)`}>
    <ellipse cx="100" cy="128" rx="13" ry="78" fill="url(#gd-teal)" stroke="#e8c15a" strokeWidth=".9" />
    <path d="M100 206 V54" stroke="#e8c15a" strokeWidth=".8" />
    <ellipse cx="100" cy="64" rx="9" ry="13" fill="#1b4aa8" stroke="#e8c15a" strokeWidth=".9" />
    <ellipse cx="100" cy="64" rx="5.6" ry="8.6" fill="#0b8f6a" />
    <ellipse cx="100" cy="64" rx="2.6" ry="4.2" fill="#ffd36a" />
  </g>
);

export function Murugan() {
  const angles = [-44, -33, -22, -11, 0, 11, 22, 33, 44];
  return (
    <svg viewBox="0 0 200 240" className="god-svg" role="img" aria-label="Lord Murugan's Vel">
      <circle cx="100" cy="112" r="98" fill="url(#gd-halo)" />
      <g className="fan">
        {angles.map((a) => (
          <Feather key={a} a={a} />
        ))}
      </g>
      {/* vel */}
      <rect x="97" y="96" width="6" height="128" rx="3" fill="url(#gd-gold)" stroke="#8a6a1f" strokeWidth=".8" />
      <path
        d="M100 6 C 124 36, 124 74, 100 100 C 76 74, 76 36, 100 6Z"
        fill="url(#gd-gold)"
        stroke="#8a6a1f"
        strokeWidth="1.2"
      />
      <path d="M100 16 C 108 40, 108 70, 100 92" fill="none" stroke="#8a6a1f" strokeWidth="1.2" />
      <path d="M100 16 C 92 40, 92 70, 100 92" fill="none" stroke="#fff1b0" strokeWidth="1" opacity=".8" />
      <rect x="88" y="100" width="24" height="6" rx="3" fill="url(#gd-gold)" stroke="#8a6a1f" />
      <rect x="92" y="108" width="16" height="5" rx="2.5" fill="url(#gd-gold)" stroke="#8a6a1f" />
      <circle cx="100" cy="214" r="6" fill="#c1122f" stroke="url(#gd-gold)" strokeWidth="1.5" />
      <path d="M100 220 q-6 10 -3 18 M100 220 q6 10 3 18" fill="none" stroke="#c1122f" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

/* ------------------------------------------------------------------
   Smaller sacred symbols
------------------------------------------------------------------- */
export function Diya({ className = "" }) {
  return (
    <svg viewBox="0 0 100 90" className={`diya ${className}`} aria-hidden>
      <circle cx="50" cy="30" r="26" fill="url(#gd-halo)" />
      <path
        className="flame"
        d="M50 44 C 38 30, 46 16, 50 4 C 54 16, 62 30, 50 44Z"
        fill="url(#gd-flame)"
      />
      <path d="M50 42 C 45 34, 48 26, 50 20 C 52 26, 55 34, 50 42Z" fill="#fff4c4" />
      <path d="M8 48 Q50 92 92 48 Q50 58 8 48Z" fill="url(#gd-clay)" stroke="url(#gd-gold)" strokeWidth="2" />
      <path d="M10 49 Q50 58 90 49" fill="none" stroke="#ffd36a" strokeWidth="1.6" />
      <path d="M22 62 Q50 76 78 62" fill="none" stroke="#ffd36a" strokeWidth="1" strokeDasharray="2 4" />
    </svg>
  );
}

export function Kalasam({ className = "" }) {
  return (
    <svg viewBox="0 0 100 140" className={`kalasam ${className}`} aria-hidden>
      {[-52, -26, 0, 26, 52].map((a) => (
        <path
          key={a}
          transform={`rotate(${a} 50 62)`}
          d="M50 62 C 40 50, 40 30, 50 14 C 60 30, 60 50, 50 62Z"
          fill="url(#gd-leaf)"
          stroke="#14501f"
          strokeWidth=".8"
        />
      ))}
      <ellipse cx="50" cy="38" rx="14" ry="17" fill="#8a5a2b" stroke="#5a3a18" />
      <path d="M40 30 Q50 22 60 30" fill="none" stroke="#c99a5a" strokeWidth="2" opacity=".7" />
      {[44, 50, 56].map((x, i) => (
        <circle key={x} cx={x} cy={[44, 40, 44][i]} r="1.6" fill="#3a2410" />
      ))}
      <rect x="34" y="60" width="32" height="9" rx="3" fill="url(#gd-gold)" stroke="#8a6a1f" />
      <path
        d="M30 70 C 10 88, 16 128, 50 130 C 84 128, 90 88, 70 70 Z"
        fill="url(#gd-gold)"
        stroke="#8a6a1f"
        strokeWidth="1.4"
      />
      <path d="M22 92 Q50 104 78 92" fill="none" stroke="#8a6a1f" strokeWidth="1.4" />
      <path d="M20 106 Q50 118 80 106" fill="none" stroke="#8a6a1f" strokeWidth="1.4" />
      <path d="M50 74 V88 M44 80 H56" stroke="#c1122f" strokeWidth="3" strokeLinecap="round" />
      <circle cx="50" cy="118" r="3" fill="#c1122f" />
    </svg>
  );
}

export function Bell({ className = "" }) {
  return (
    <svg viewBox="-24 0 48 82" className={`bell ${className}`} aria-hidden>
      <path d="M0 0 V14" stroke="url(#gd-gold)" strokeWidth="2" />
      <circle cy="16" r="4" fill="url(#gd-gold)" />
      <path
        d="M0 20 C -14 20, -16 42, -22 58 L22 58 C 16 42, 14 20, 0 20Z"
        fill="url(#gd-gold)"
        stroke="#8a6a1f"
        strokeWidth="1.2"
      />
      <path d="M-20 52 H20" stroke="#8a6a1f" strokeWidth="1" />
      <path d="M-12 36 Q0 42 12 36" fill="none" stroke="#fff1b0" strokeWidth="1.2" opacity=".8" />
      <circle cy="64" r="5" fill="url(#gd-gold)" stroke="#8a6a1f" />
    </svg>
  );
}

/* Temple-tower skyline — Annamalaiyar-style gopurams */
export function Skyline({ className = "" }) {
  const base = 170;
  const towers = [
    [600, 210, 150, 8],
    [390, 128, 100, 6],
    [810, 128, 100, 6],
    [205, 84, 66, 5],
    [995, 84, 66, 5],
    [72, 58, 46, 4],
    [1128, 58, 46, 4],
  ];
  let d = "";
  const dots = [];
  const wins = [];
  towers.forEach(([cx, w, h, n], ti) => {
    const th = (h * 0.78) / n;
    for (let i = 0; i < n; i++) {
      const wb = w * (1 - i * 0.1);
      const wt = wb * 0.92;
      const yb = base - i * th;
      const yt = yb - th;
      d += `M${cx - wb / 2} ${yb}L${cx - wt / 2} ${yt}L${cx + wt / 2} ${yt}L${cx + wb / 2} ${yb}Z`;
      d += `M${cx - wt / 2 - 3} ${yt}h${wt + 6}v3h${-(wt + 6)}Z`;
      const k = Math.max(1, Math.round(wb / 34));
      for (let j = 0; j < k; j++) {
        const wx = cx - wb / 2 + (wb / k) * (j + 0.5);
        wins.push(
          <rect
            key={`${ti}-${i}-${j}`}
            x={wx - 3}
            y={yt + th * 0.28}
            width="6"
            height={th * 0.46}
            rx="3"
            fill="rgba(59,7,15,.3)"
          />,
        );
      }
    }
    const wr = w * (1 - n * 0.1) * 0.5 + 6;
    const yr = base - n * th;
    d += `M${cx - wr} ${yr}A${wr} ${th * 0.95} 0 0 1 ${cx + wr} ${yr}Z`;
    [-1, 0, 1].forEach((o) => {
      const kx = cx + o * wr * 0.6;
      const ky = yr - th * 0.95 - (o === 0 ? 2 : -2);
      dots.push(<circle key={`${ti}k${o}`} cx={kx} cy={ky} r={Math.max(2, w / 40)} />);
      d += `M${kx - 1.4} ${ky}L${kx} ${ky - Math.max(5, w / 20)}L${kx + 1.4} ${ky}Z`;
    });
  });
  for (let x = 0; x < 1200; x += 36) {
    d += `M${x} ${base - 16}a14 12 0 0 1 28 0Z`;
  }
  return (
    <svg
      viewBox="0 0 1200 170"
      preserveAspectRatio="xMidYMax slice"
      className={`skyline ${className}`}
      aria-hidden
    >
      <g fill="currentColor">
        <path d={d} />
        {dots}
        <rect x="0" y={base - 18} width="1200" height="19" />
      </g>
      {wins}
    </svg>
  );
}

/* Corner flourishes for framed cards */
export function Corners({ only }) {
  const all = ["tl", "tr", "bl", "br"];
  const list = only === "bottom" ? ["bl", "br"] : all;
  return (
    <>
      {list.map((c) => (
        <svg key={c} className={`corner ${c}`} viewBox="0 0 60 60" aria-hidden>
          <g fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
            <path d="M3 58 V18 Q3 3 18 3 H58" />
            <path d="M11 58 V24 Q11 11 24 11 H58" opacity=".55" />
            <path d="M18 18 q9 0 9 9 q0 9 -9 9" />
            <path d="M18 18 q0 -8 8 -8" />
          </g>
          <circle cx="3" cy="3" r="2.6" fill="currentColor" />
          <circle cx="58" cy="3" r="1.6" fill="currentColor" />
          <circle cx="3" cy="58" r="1.6" fill="currentColor" />
        </svg>
      ))}
    </>
  );
}

/* ------------------------------------------------------------------
   <GodArt/> — shows YOUR real image if you drop one in public/gods/,
   otherwise falls back to the built-in artwork above.
   e.g. public/gods/ganesha.png  lakshmi.png  shiva.png  murugan.png
------------------------------------------------------------------- */
const ART = { ganesha: Ganesha, lakshmi: Lakshmi, shiva: Shiva, murugan: Murugan };

export function GodArt({ name, alt = "" }) {
  const [broken, setBroken] = useState(false);
  const Fallback = ART[name];
  if (broken) return <Fallback />;
  const base = import.meta.env.BASE_URL || "/";
  return (
    <img
      className="god-photo"
      src={`${base}gods/${name}.png`}
      alt={alt}
      onError={() => setBroken(true)}
      draggable="false"
    />
  );
}
