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

const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  w.venue.mapQuery,
)}`;
const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(w.venue.mapQuery)}&output=embed`;

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
        <div className="hero-ganesha">
          <GodArt name="ganesha" alt="Lord Ganesha" />
        </div>
        <p className="ganesh">{t.ganesh}</p>
        <p className="god">{t.god}</p>
        <Divider />
        <h2 className="hero-sub">{t.invite}</h2>
        <h1 className="hero-names">
          <span>{w.groom.first[lang]}</span>
          <i className="amp">&amp;</i>
          <span>{w.bride.first[lang]}</span>
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
        <GodArt name={g.key} alt={g.name} />
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

/* ---------- Venue ---------- */
export function Venue({ lang }) {
  const t = T[lang];
  return (
    <section className="section maroon" id="venue">
      <Reveal>
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
      <Reveal>
        <h2 className="section-title dark">{t.hosts}</h2>
        <Divider />
        <ul className="hosts">
          {w.hosts.map((h) => (
            <li key={h.en}>{h[lang]}</li>
          ))}
        </ul>
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
export function Rsvp({ lang }) {
  const t = T[lang];
  const [name, setName] = useState("");
  const [guests, setGuests] = useState(1);
  const [attend, setAttend] = useState("yes");
  const [note, setNote] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const msg = t.rsvpMsg(name, attend === "yes" ? t.yes : t.no, guests, note);
    window.open(
      `https://wa.me/91${w.rsvpWhatsApp}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  const share = async () => {
    const url = w.siteUrl || window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: t.invite, text: t.shareMsg, url });
        return;
      } catch {
        /* user cancelled */
      }
    }
    window.open(
      `https://wa.me/?text=${encodeURIComponent(`${t.shareMsg}\n${url}`)}`,
      "_blank",
    );
  };

  return (
    <section className="section maroon" id="rsvp">
      <Reveal>
        <h2 className="section-title">{t.rsvp}</h2>
        <Divider />
        <p className="rsvp-sub">{t.rsvpSub}</p>
        <form className="rsvp" onSubmit={submit}>
          <label>
            {t.name}
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <div className="row2">
            <label>
              {t.guests}
              <input
                type="number"
                min="1"
                max="20"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </label>
            <label>
              {t.attend}
              <select
                value={attend}
                onChange={(e) => setAttend(e.target.value)}
              >
                <option value="yes">{t.yes}</option>
                <option value="no">{t.no}</option>
              </select>
            </label>
          </div>
          <label>
            {t.note}
            <textarea
              rows="3"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </label>
          <button className="btn gold" type="submit">
            💬 {t.send}
          </button>
        </form>
        <button className="btn outline light" onClick={share}>
          🔗 {t.share}
        </button>
      </Reveal>
    </section>
  );
}

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
