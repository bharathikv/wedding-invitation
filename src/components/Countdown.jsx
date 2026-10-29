import { useEffect, useState } from "react";
import { wedding } from "../data/wedding";
import { T } from "../data/content";

const target = new Date(wedding.muhurtham.start).getTime();

function diff() {
  const ms = Math.max(0, target - Date.now());
  return {
    ms,
    d: Math.floor(ms / 86400000),
    h: Math.floor((ms / 3600000) % 24),
    m: Math.floor((ms / 60000) % 60),
    s: Math.floor((ms / 1000) % 60),
  };
}

export default function Countdown({ lang }) {
  const t = T[lang];
  const [v, setV] = useState(diff);
  useEffect(() => {
    const id = setInterval(() => setV(diff()), 1000);
    return () => clearInterval(id);
  }, []);

  if (v.ms === 0) return <p className="cd-done">{t.cdDone}</p>;

  return (
    <div className="countdown">
      <p className="cd-title">{t.countdownTitle}</p>
      <div className="cd-row">
        {["d", "h", "m", "s"].map((k) => (
          <div className="cd-box" key={k}>
            <b>{String(v[k]).padStart(2, "0")}</b>
            <span>{t.cd[k]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
