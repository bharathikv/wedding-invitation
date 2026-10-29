import { useEffect, useState } from "react";
import { Ganesha } from "./Gods";

/* Temple-door intro. Pick a language → the doors swing open. */
export default function Splash({ onChoose }) {
  const [phase, setPhase] = useState("closed"); // closed → open → gone

  useEffect(() => {
    if (phase === "gone") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [phase]);

  const open = (lang, e) => {
    onChoose(lang);
    setPhase("open");
    window.dispatchEvent(
      new CustomEvent("fx:shower", {
        detail: { x: window.innerWidth / 2, y: window.innerHeight * 0.35 },
      }),
    );
    setTimeout(() => setPhase("gone"), 2300);
    e.stopPropagation();
  };

  if (phase === "gone") return null;

  return (
    <div className={`splash ${phase}`} role="dialog" aria-label="Welcome">
      <div className="door l" />
      <div className="door r" />
      <div className="splash-core">
        <div className="splash-arch">
          <span className="splash-glow" />
          <Ganesha />
        </div>
        <p className="splash-om">|| ஸ்ரீ கணேசாய நமஃ ||</p>
        <h1 className="splash-title">திருமண அழைப்பிதழ்</h1>
        <p className="splash-title-en">Wedding Invitation</p>
        <p className="splash-names">தங்கராஜ் &amp; விகிதா</p>
        <div className="splash-btns">
          <button className="splash-btn" onClick={(e) => open("ta", e)}>
            தமிழ்
          </button>
          <button className="splash-btn" onClick={(e) => open("en", e)}>
            English
          </button>
        </div>
        <p className="splash-hint">தொட்டு திறக்கவும் · Tap to open</p>
      </div>
    </div>
  );
}
