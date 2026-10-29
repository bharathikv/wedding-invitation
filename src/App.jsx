import { useCallback, useEffect, useRef, useState } from "react";
import { Petals, Mandala } from "./components/Decor";
import { GodDefs } from "./components/Gods";
import Splash from "./components/Splash";
import TouchFx from "./components/TouchFx";
import {
  Hero,
  Invitation,
  Blessings,
  Couple,
  Events,
  Venue,
  Hosts,
  Rsvp,
  Footer,
} from "./components/Sections";

const WORD = { ta: "தமிழ்", en: "English" };

export default function App() {
  const [lang, setLang] = useState("ta");
  const [veil, setVeil] = useState(null); // { x, y, phase, to }
  const busy = useRef(false);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.body.dataset.lang = lang;
  }, [lang]);

  /* scroll progress bar */
  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const p = h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight);
        h.style.setProperty("--p", Math.min(1, Math.max(0, p)).toFixed(4));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* animated Tamil ⇄ English transition:
       golden veil blooms from the button → text swaps underneath →
       veil dissolves while every line of text re-materialises */
  const switchLang = useCallback(
    (e) => {
      if (busy.current) return;
      busy.current = true;
      const to = lang === "ta" ? "en" : "ta";
      const r = e.currentTarget.getBoundingClientRect();
      const x = r.left + r.width / 2;
      const y = r.top + r.height / 2;
      setVeil({ x, y, phase: "in", to });
      setTimeout(() => {
        setLang(to);
        document.body.classList.add("swapping");
        window.scrollBy(0, 0);
      }, 620);
      setTimeout(() => setVeil((v) => v && { ...v, phase: "out" }), 1000);
      setTimeout(() => {
        setVeil(null);
        document.body.classList.remove("swapping");
        busy.current = false;
      }, 1900);
    },
    [lang],
  );

  return (
    <>
      <GodDefs />
      <div className="progress" aria-hidden />
      <Petals />
      <TouchFx />
      <Splash onChoose={setLang} />

      <button
        className={`lang-toggle ${lang}`}
        onClick={switchLang}
        aria-label="Switch language / மொழி மாற்று"
      >
        <span className="thumb" />
        <span className="opt">தமிழ்</span>
        <span className="opt">EN</span>
      </button>

      {veil && (
        <div
          className={`veil ${veil.phase}`}
          style={{ "--x": `${veil.x}px`, "--y": `${veil.y}px` }}
          aria-hidden
        >
          <Mandala className="veil-mandala" size={520} />
          <span className="veil-om">ॐ</span>
          <span className="veil-word" key={veil.to}>
            {WORD[veil.to]}
          </span>
        </div>
      )}

      <main>
        <Hero lang={lang} />
        <Invitation lang={lang} />
        <Blessings lang={lang} />
        <Couple lang={lang} />
        <Events lang={lang} />
        <Venue lang={lang} />
        <Hosts lang={lang} />
        <Rsvp lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
