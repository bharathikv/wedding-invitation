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
  // Rsvp,
  Footer,
} from "./components/Sections";

const WORD = {
  ta: "தமிழ்",
  en: "English",
};

export default function App() {
  const [lang, setLang] = useState("ta");
  const [veil, setVeil] = useState(null);

  const busy = useRef(false);

  // Persistent audio reference
  const musicRef = useRef(null);

  // Play wedding background music
  const playWeddingMusic = useCallback(() => {
    const audio = musicRef.current;

    if (!audio) return;

    audio.volume = 0.5;

    audio.play().catch((error) => {
      console.log("Audio playback failed:", error);
    });
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.body.dataset.lang = lang;
  }, [lang]);

  /* Scroll progress bar */
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

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  /* Animated Tamil ⇄ English transition */
  const switchLang = useCallback(
    (e) => {
      if (busy.current) return;

      busy.current = true;

      const to = lang === "ta" ? "en" : "ta";

      const r = e.currentTarget.getBoundingClientRect();

      const x = r.left + r.width / 2;
      const y = r.top + r.height / 2;

      setVeil({
        x,
        y,
        phase: "in",
        to,
      });

      setTimeout(() => {
        setLang(to);
        document.body.classList.add("swapping");
        window.scrollBy(0, 0);
      }, 620);

      setTimeout(() => {
        setVeil((v) => (v ? { ...v, phase: "out" } : null));
      }, 1000);

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
      {/* Background music stays mounted after Splash disappears */}
      <audio ref={musicRef} src="/audio/blessing.mp3" preload="auto" loop />

      <GodDefs />

      <div className="progress" aria-hidden />

      <Petals />

      <TouchFx />

      <Splash onChoose={setLang} onPlayMusic={playWeddingMusic} />

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
          style={{
            "--x": `${veil.x}px`,
            "--y": `${veil.y}px`,
          }}
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

        {/* <Rsvp lang={lang} /> */}
      </main>

      <Footer lang={lang} />
    </>
  );
}
