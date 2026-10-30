import { useEffect, useState } from "react";

/* Temple-door intro. Pick a language → the doors swing open. */
export default function Splash({ onChoose, onPlayMusic }) {
  const [phase, setPhase] = useState("closed");

  useEffect(() => {
    if (phase === "gone") return;

    const prev = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prev;
    };
  }, [phase]);

  const open = (lang, e) => {
    e.stopPropagation();

    // Select language
    onChoose(lang);

    // Start wedding music on button click
    onPlayMusic?.();

    // Open temple doors
    setPhase("open");

    // Flower shower effect
    window.dispatchEvent(
      new CustomEvent("fx:shower", {
        detail: {
          x: window.innerWidth / 2,
          y: window.innerHeight * 0.35,
        },
      }),
    );

    // Remove Splash after door animation
    setTimeout(() => {
      setPhase("gone");
    }, 2300);
  };

  if (phase === "gone") return null;

  return (
    <div className={`splash ${phase}`} role="dialog" aria-label="Welcome">
      <div className="door l" />

      <div className="door r" />

      <div className="splash-core">
        <div className="splash-arch1">
          <span className="splash-glow" />

          <img
            src="/images/ganesha-logo.png"
            alt="Lord Ganesha"
            className="splash-ganesha1"
          />
        </div>

        <p className="splash-om">|| ஸ்ரீ கணேசாய நமஹ ||</p>

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
