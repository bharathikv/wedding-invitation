import { useMemo, useState } from "react";
import { wedding as w } from "../data/wedding";
import { T } from "../data/content";
import { Reveal, Mandala, Divider } from "./Decor";
import Countdown from "./Countdown";
import { Bell, Corners, Diya, GodArt, Kalasam, Skyline } from "./Gods";

/* ---------- helpers ---------- */
const icsDate = (iso) =>
  new Date(iso).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

function downloadICS(lang) {
  const t = T[lang];
  const ev = (title, s, e, uid) =>
    [
      "BEGIN:VEVENT",
      `UID:${uid}@wedding-invite`,
      `DTSTAMP:${icsDate(new Date().toISOString())}`,
      `DTSTART:${icsDate(s)}`,
      `DTEND:${icsDate(e)}`,
      `SUMMARY:${title}`,
      `LOCATION:${w.venue.lines.en.join(", ")}`,
      "END:VEVENT",
    ].join("\r\n");
  const body = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Wedding Invite//EN",
    ev(
      "Thangaraj & Vikitha - Wedding Muhurtham",
      w.muhurtham.start,
      w.muhurtham.end,
      "m1",
    ),
    ev(
      "Thangaraj & Vikitha - Pre-wedding Ceremony",
      w.prewedding.start,
      w.prewedding.end,
      "p1",
    ),
    "END:VCALENDAR",
  ].join("\r\n");
  const url = URL.createObjectURL(new Blob([body], { type: "text/calendar" }));
  const a = document.createElement("a");
  a.href = url;
  a.download = "wedding-thangaraj-vikitha.ics";
  a.click();
  URL.revokeObjectURL(url);
}

const mapsLink = "https://maps.app.goo.gl/sxBG7iKAHm7wac1x8";

// Use the actual place name/address for the embedded map
const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  "Ayyampalayam, Athiyanthal, Tiruvannamalai, Tamil Nadu",
)}&output=embed`;

/* ---------- Hero ---------- */
export function Hero({ lang }) {
  const t = T[lang];
  const stars = useMemo(
    () =>
      Array.from({ length: 44 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 80,
        s: 1 + Math.random() * 2.2,
        d: Math.random() * 5,
        t: 2.5 + Math.random() * 3.5,
      })),
    [],
  );
  return (
    <header className="hero" id="top">
      <div className="toran" aria-hidden />
      <Bell className="hero-bell l" />
      <Bell className="hero-bell r" />
      <div className="stars" aria-hidden>
        {stars.map((s) => (
          <i
            key={s.id}
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.s,
              height: s.s,
              animationDelay: `${s.d}s`,
              animationDuration: `${s.t}s`,
            }}
          />
        ))}
      </div>
      <Mandala className="hero-mandala" size={900} />
      <div className="hero-frame">
        <Corners only="bottom" />
        <div className="splash-arch1">
          <span className="splash-glow" />

          <img
            src="/images/ganesha-logo.png"
            alt="Lord Ganesha"
            className="splash-ganesha1"
          />
        </div>
        <p className="ganesh">{t.ganesh}</p>
        <p className="god">{t.god}</p>
        <Divider />
        <h2 className="hero-sub">{t.invite}</h2>
        <h1 className="hero-names">
          <span className="hero-name-title">{w.groom.first[lang]}</span>
          <i className="amp">&amp;</i>
          <span className="hero-name-title">{w.bride.first[lang]}</span>
        </h1>
        <p className="hero-date">{t.heroDate}</p>
        <p className="hero-tamil">{t.heroTamilDate}</p>
        <p className="hero-place">{t.heroPlace}</p>
        <Countdown lang={lang} />
        <a href="#invite" className="scroll">
          <span>{t.scroll}</span>
          <i>⌄</i>
        </a>
      </div>
      <Skyline className="hero-skyline" />
    </header>
  );
}

/* ---------- Invitation text ---------- */
export function Invitation({ lang }) {
  const t = T[lang];
  return (
    <section className="section paper" id="invite">
      <Reveal>
        <div className="card-frame tilt">
          <Corners />
          <span className="om-seal">ॐ</span>
          <p className="eyebrow">{t.greet}</p>
          <Divider />
          <p className="lead">{t.intro}</p>
          <p className="lead">{t.invitation}</p>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------- Divine blessings ---------- */
function GodCard({ g }) {
  const [on, setOn] = useState(false);
  const bless = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    window.dispatchEvent(
      new CustomEvent("fx:shower", {
        detail: { x: r.left + r.width / 2, y: r.top + 10 },
      }),
    );
    setOn(true);
    setTimeout(() => setOn(false), 2400);
  };
  return (
    <button className={`god-card tilt ${on ? "blessed" : ""}`} onClick={bless}>
      <div className="niche">
        <span className="aura" />

        <div className="splash-arch">
          <span className="splash-glow" />

          <img src={g.image} alt={g.name} className="god-image" />
        </div>
      </div>
      <h3>{g.name}</h3>
      <p className="god-sub">{g.sub}</p>
      <p className="mantra">{g.mantra}</p>
    </button>
  );
}

export function Blessings({ lang }) {
  const t = T[lang];
  return (
    <section className="section saffron" id="blessings">
      <Reveal>
        <h2 className="section-title dark">{t.blessTitle}</h2>
        <Divider />
        <p className="bless-sub">{t.blessSub}</p>
      </Reveal>
      <div className="gods-grid">
        {t.gods.map((g, i) => (
          <Reveal key={g.key} delay={i * 120} className="god-wrap">
            <GodCard g={g} />
          </Reveal>
        ))}
      </div>
      <Reveal delay={200}>
        <p className="tap-hint">{t.tapHint}</p>
      </Reveal>
    </section>
  );
}

/* ---------- Couple ---------- */
function Person({ p, label, parentsLabel, lang, delay }) {
  const initial = p.first.en[0];
  return (
    <Reveal delay={delay} className="person">
      <div className="avatar tilt">
        {p.photo ? (
          <img src={p.photo} alt={p.full[lang]} />
        ) : (
          <span>{initial}</span>
        )}
      </div>
      <p className="person-label">{label}</p>
      <h3>{p.full[lang]}</h3>
      <p className="person-role">{p.role[lang]}</p>
      {p.parents[lang] && (
        <p className="person-parents">
          {parentsLabel} {p.parents[lang]}
        </p>
      )}
    </Reveal>
  );
}

export function Couple({ lang }) {
  const t = T[lang];
  return (
    <section className="section maroon" id="couple">
      <Reveal>
        <h2 className="section-title">{t.couple}</h2>
        <Divider />
      </Reveal>
      <div className="couple-grid">
        <Person
          p={w.groom}
          label={t.groom}
          parentsLabel={t.sonOf}
          lang={lang}
          delay={0}
        />
        <div className="heart" aria-hidden>
          <Kalasam />
        </div>
        <Person
          p={w.bride}
          label={t.bride}
          parentsLabel={t.daughterOf}
          lang={lang}
          delay={150}
        />
      </div>
    </section>
  );
}

/* ---------- Events ---------- */
function EventCard({ ev, icon, delay }) {
  return (
    <Reveal delay={delay} className="event-wrap">
      <div className="event tilt">
        <Corners />
        <div className="event-icon">{icon}</div>
        <h3>{ev.title}</h3>
        <p className="event-date">
          {ev.day}, {ev.date}
        </p>
        <p className="event-tamil">{ev.tamil}</p>
        <p className="event-time">🕰 {ev.time}</p>
        <p className="event-note">{ev.note}</p>
      </div>
    </Reveal>
  );
}

export function Events({ lang }) {
  const t = T[lang];
  return (
    <section className="section paper" id="events">
      <Reveal>
        <h2 className="section-title dark">{t.events}</h2>
        <Divider />
      </Reveal>
      <div className="events-grid">
        <EventCard ev={t.ev1} icon={<Diya />} delay={0} />
        <EventCard ev={t.ev2} icon={<Kalasam />} delay={150} />
      </div>
      <Reveal>
        <button className="btn gold" onClick={() => downloadICS(lang)}>
          📅 {t.addCal}
        </button>
      </Reveal>
    </section>
  );
}
function MahalIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      width="70"
      height="70"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 54h50M12 49V29h40v20M8 29L32 9l24 20H8Z" />
      <path d="M25 19v-6h14v6M19 35v14M32 35v14M45 35v14" />
      <path d="M28 49V39a4 4 0 0 1 8 0v10" />
      <path d="M4 54v4h56v-4" />
    </svg>
  );
}
/* ---------- Venue ---------- */
export function Venue({ lang }) {
  const t = T[lang];
  return (
    <section className="section maroon" id="venue">
      <Reveal>
        <div>
          <MahalIcon />
        </div>
        <h2 className="section-title">{t.venue}</h2>
        <Divider />
        <div className="venue-text">
          <h3>{w.venue.name[lang]}</h3>
          {w.venue.lines[lang].map((l) => (
            <p key={l}>{l}</p>
          ))}
        </div>
      </Reveal>
      <Reveal delay={100}>
        <div className="map-wrap">
          <iframe
            title="map"
            src={mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <a
          className="btn gold"
          href={mapsLink}
          target="_blank"
          rel="noreferrer"
        >
          📍 {t.openMaps}
        </a>
      </Reveal>
    </section>
  );
}

/* ---------- Hosts ---------- */
export function Hosts({ lang }) {
  const t = T[lang];

  return (
    <section className="section paper" id="hosts">
      <div className="welcome-icon">
        <svg
          viewBox="0 0 120 120"
          width="110"
          height="110"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="welcome-icon"
        >
          <style>{`
    .welcome-float {
      animation: welcomeFloat 3s ease-in-out infinite;
      transform-origin: center;
    }

    .welcome-hands {
      animation: namaste 2.5s ease-in-out infinite;
      transform-origin: 60px 80px;
    }

    .welcome-lotus {
      animation: lotusBloom 3s ease-in-out infinite;
      transform-origin: 60px 64px;
    }

    .welcome-sparkle {
      animation: sparkle 2s ease-in-out infinite;
    }

    .welcome-sparkle:nth-of-type(2) {
      animation-delay: .6s;
    }

    .welcome-sparkle:nth-of-type(3) {
      animation-delay: 1.2s;
    }

    @keyframes welcomeFloat {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-4px); }
    }

    @keyframes namaste {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-2px); }
    }

    @keyframes lotusBloom {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.06); }
    }

    @keyframes sparkle {
      0%, 100% { opacity: .25; transform: scale(.7); }
      50% { opacity: 1; transform: scale(1.3); }
    }

    @media (prefers-reduced-motion: reduce) {
      .welcome-icon * {
        animation: none !important;
      }
    }
  `}</style>

          <g className="welcome-float">
            {/* Top lotus */}
            <g className="welcome-lotus">
              <path d="M60 8 C48 24 48 35 60 43 C72 35 72 24 60 8Z" />
              <path d="M60 43 C35 17 22 30 39 52 C46 59 53 62 60 64" />
              <path d="M60 43 C85 17 98 30 81 52 C74 59 67 62 60 64" />
              <path d="M60 64 C30 48 20 61 43 77 L60 84 L77 77 C100 61 90 48 60 64Z" />
            </g>

            {/* Folded hands */}
            <g className="welcome-hands">
              <path d="M57 29 C54 39 50 51 47 62 C45 69 40 74 34 78" />
              <path d="M63 29 C66 39 70 51 73 62 C75 69 80 74 86 78" />
              <path d="M57 29 C55 20 57 14 60 11 C63 14 65 20 63 29" />
              <path d="M57 30 L54 60 C53 69 56 76 60 80" />
              <path d="M63 30 L66 60 C67 69 64 76 60 80" />

              {/* Fingers */}
              <path d="M57 32 L55 54" />
              <path d="M60 29 L60 54" />
              <path d="M63 32 L65 54" />

              {/* Bangles */}
              <path d="M43 65 Q49 72 55 73" />
              <path d="M41 70 Q47 77 54 78" />
              <path d="M77 65 Q71 72 65 73" />
              <path d="M79 70 Q73 77 66 78" />
            </g>

            {/* Decorative leaves */}
            <path d="M12 83 Q25 70 39 82 Q25 91 12 83Z" />
            <path d="M108 83 Q95 70 81 82 Q95 91 108 83Z" />

            {/* Bottom lotus */}
            <g className="welcome-lotus">
              <path d="M60 91 C49 78 43 87 60 104 C77 87 71 78 60 91Z" />
              <path d="M60 91 C42 84 35 94 60 108 C85 94 78 84 60 91Z" />
            </g>
          </g>
        </svg>
      </div>
      <Reveal>
        <h2 className="section-title dark">{t.hosts}</h2>

        <Divider />

        <h3 className="welcome-tamil">{t.welcome}</h3>

        <p className="welcome-message">{t.welcomeMessage1}</p>

        <p className="welcome-message">{t.welcomeMessage2}</p>

        <p className="welcome-signoff">🙏 {t.welcomeSignoff} 🙏</p>

        <Divider />

        <p className="call-label">{t.call}</p>

        <div className="call-row">
          {w.contacts.map((c) => (
            <a key={c} className="btn outline" href={`tel:+91${c}`}>
              📞 {c}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
/* ---------- RSVP ---------- */
// export function Rsvp({ lang }) {
//   const t = T[lang];
//   const [name, setName] = useState("");
//   const [guests, setGuests] = useState(1);
//   const [attend, setAttend] = useState("yes");
//   const [note, setNote] = useState("");

//   const submit = (e) => {
//     e.preventDefault();
//     const msg = t.rsvpMsg(name, attend === "yes" ? t.yes : t.no, guests, note);
//     window.open(
//       `https://wa.me/91${w.rsvpWhatsApp}?text=${encodeURIComponent(msg)}`,
//       "_blank",
//     );
//   };

//   const share = async () => {
//     const url = w.siteUrl || window.location.href;
//     if (navigator.share) {
//       try {
//         await navigator.share({ title: t.invite, text: t.shareMsg, url });
//         return;
//       } catch {
//         /* user cancelled */
//       }
//     }
//     window.open(
//       `https://wa.me/?text=${encodeURIComponent(`${t.shareMsg}\n${url}`)}`,
//       "_blank",
//     );
//   };

//   return (
//     <section className="section maroon" id="rsvp">
//       <Reveal>
//         <h2 className="section-title">{t.rsvp}</h2>
//         <Divider />
//         <p className="rsvp-sub">{t.rsvpSub}</p>
//         <form className="rsvp" onSubmit={submit}>
//           <label>
//             {t.name}
//             <input
//               required
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </label>
//           <div className="row2">
//             <label>
//               {t.guests}
//               <input
//                 type="number"
//                 min="1"
//                 max="20"
//                 value={guests}
//                 onChange={(e) => setGuests(e.target.value)}
//               />
//             </label>
//             <label>
//               {t.attend}
//               <select
//                 value={attend}
//                 onChange={(e) => setAttend(e.target.value)}
//               >
//                 <option value="yes">{t.yes}</option>
//                 <option value="no">{t.no}</option>
//               </select>
//             </label>
//           </div>
//           <label>
//             {t.note}
//             <textarea
//               rows="3"
//               value={note}
//               onChange={(e) => setNote(e.target.value)}
//             />
//           </label>
//           <button className="btn gold" type="submit">
//             💬 {t.send}
//           </button>
//         </form>
//         <button className="btn outline light" onClick={share}>
//           🔗 {t.share}
//         </button>
//       </Reveal>
//     </section>
//   );
// }

/* ---------- Footer ---------- */
export function Footer({ lang }) {
  const t = T[lang];
  return (
    <footer className="footer">
      <div className="toran" aria-hidden />
      <Mandala className="footer-mandala" size={260} />
      <p className="quote">{t.quote}</p>
      <div className="footer-names-row">
        <Diya className="footer-diya" />
        <p className="footer-names">
          {w.groom.first[lang]} &amp; {w.bride.first[lang]}
        </p>
        <Diya className="footer-diya" />
      </div>
      <p className="footer-line">{t.footer}</p>
      <div className="credit">
        <span className="credit-label">{w.credit.label[lang]}</span>
        {w.credit.link ? (
          <a
            className="credit-name"
            href={w.credit.link}
            target="_blank"
            rel="noreferrer"
          >
            {w.credit.name[lang]}
          </a>
        ) : (
          <span className="credit-name">{w.credit.name[lang]}</span>
        )}
        <span className="credit-role">{w.credit.role[lang]}</span>
      </div>
      <p className="made">{t.made} ♥!</p>
    </footer>
  );
}
