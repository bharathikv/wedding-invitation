import { useEffect, useRef } from "react";

/*  Touch / click magic
 *  - tap anywhere  → ring + marigold & rose petal burst + gold sparkles
 *  - drag / swipe  → glittering trail
 *  - god cards     → petal shower (fx:shower event)
 *  - .tilt cards   → 3D tilt + glare following the finger / cursor
 */
const COLORS = ["#ffb300", "#ff8f00", "#ffd36a", "#e53953", "#ff9bb0", "#f3dc92"];
const rand = (a, b) => a + Math.random() * (b - a);

export default function TouchFx() {
  const ref = useRef(null);

  useEffect(() => {
    const cv = ref.current;
    const ctx = cv.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0,
      H = 0,
      raf = 0,
      last = 0,
      lastTrail = 0;
    const parts = [];
    const rings = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      cv.width = W * dpr;
      cv.height = H * dpr;
      cv.style.width = W + "px";
      cv.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const petal = (x, y, speed, lift = 0) => {
      const a = rand(0, Math.PI * 2);
      const v = speed * rand(0.4, 1.1);
      parts.push({
        t: "petal",
        x,
        y,
        vx: Math.cos(a) * v,
        vy: Math.sin(a) * v - lift,
        life: rand(1.1, 1.9),
        age: 0,
        s: rand(6, 11),
        r: rand(0, 6.28),
        vr: rand(-6, 6),
        c: COLORS[(Math.random() * COLORS.length) | 0],
        sw: rand(0, 6.28),
      });
    };
    const spark = (x, y, speed = 90) => {
      const a = rand(0, Math.PI * 2);
      const v = rand(0.2, 1) * speed;
      parts.push({
        t: "spark",
        x,
        y,
        vx: Math.cos(a) * v,
        vy: Math.sin(a) * v,
        life: rand(0.45, 0.9),
        age: 0,
        s: rand(3, 7),
        r: 0,
        vr: rand(-3, 3),
        c: Math.random() > 0.5 ? "#fff3b8" : "#ffd36a",
      });
    };

    const ensure = () => {
      if (!raf) {
        last = performance.now();
        raf = requestAnimationFrame(tick);
      }
    };

    const burst = (x, y, big = false) => {
      if (reduce) return;
      rings.push({ x, y, r: 6, max: big ? 90 : 56, age: 0, life: 0.6 });
      const n = big ? 26 : 14;
      for (let i = 0; i < n; i++) petal(x, y, big ? 300 : 210, 60);
      for (let i = 0; i < (big ? 18 : 10); i++) spark(x, y, 190);
      if (parts.length > 420) parts.splice(0, parts.length - 420);
      ensure();
    };

    const shower = (x, y) => {
      if (reduce) return;
      for (let i = 0; i < 46; i++) {
        petal(x + rand(-90, 90), y - rand(10, 120), 40, -20);
      }
      for (let i = 0; i < 16; i++) spark(x + rand(-70, 70), y + rand(-10, 70), 60);
      rings.push({ x, y: y + 60, r: 10, max: 120, age: 0, life: 0.9 });
      try {
        navigator.vibrate?.([12, 40, 12]);
      } catch {
        /* ignore */
      }
      ensure();
    };

    function tick(now) {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      ctx.clearRect(0, 0, W, H);

      for (let i = rings.length - 1; i >= 0; i--) {
        const g = rings[i];
        g.age += dt;
        const k = g.age / g.life;
        if (k >= 1) {
          rings.splice(i, 1);
          continue;
        }
        ctx.globalAlpha = 1 - k;
        ctx.strokeStyle = "#ffd36a";
        ctx.lineWidth = 2.2 * (1 - k) + 0.6;
        ctx.beginPath();
        ctx.arc(g.x, g.y, g.r + (g.max - g.r) * (1 - Math.pow(1 - k, 3)), 0, 6.283);
        ctx.stroke();
      }

      for (let i = parts.length - 1; i >= 0; i--) {
        const p = parts[i];
        p.age += dt;
        if (p.age >= p.life || p.y > H + 30) {
          parts.splice(i, 1);
          continue;
        }
        if (p.t === "petal") {
          p.vy += 320 * dt;
          p.vx *= 0.985;
          p.vy *= 0.985;
          p.sw += dt * 5;
          p.x += (p.vx + Math.sin(p.sw) * 26) * dt;
        } else {
          p.vx *= 0.95;
          p.vy *= 0.95;
          p.x += p.vx * dt;
        }
        p.y += p.vy * dt;
        p.r += p.vr * dt;
        const fade = Math.min(1, (p.life - p.age) / 0.35);
        ctx.globalAlpha = Math.max(0, fade);
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.r);
        if (p.t === "petal") {
          ctx.fillStyle = p.c;
          ctx.beginPath();
          ctx.moveTo(0, -p.s);
          ctx.bezierCurveTo(p.s * 0.9, -p.s * 0.5, p.s * 0.7, p.s * 0.6, 0, p.s);
          ctx.bezierCurveTo(-p.s * 0.7, p.s * 0.6, -p.s * 0.9, -p.s * 0.5, 0, -p.s);
          ctx.fill();
        } else {
          ctx.fillStyle = p.c;
          ctx.shadowColor = "#ffd36a";
          ctx.shadowBlur = 8;
          const s = p.s;
          ctx.beginPath();
          ctx.moveTo(0, -s);
          ctx.quadraticCurveTo(0, 0, s, 0);
          ctx.quadraticCurveTo(0, 0, 0, s);
          ctx.quadraticCurveTo(0, 0, -s, 0);
          ctx.quadraticCurveTo(0, 0, 0, -s);
          ctx.fill();
        }
        ctx.restore();
      }
      ctx.globalAlpha = 1;
      raf = parts.length || rings.length ? requestAnimationFrame(tick) : 0;
    }

    /* ---------- tilt ---------- */
    let tilted = null;
    const untilt = () => {
      if (!tilted) return;
      tilted.classList.remove("active");
      tilted.style.removeProperty("--rx");
      tilted.style.removeProperty("--ry");
      tilted = null;
    };
    const tilt = (el, x, y) => {
      if (tilted && tilted !== el) untilt();
      const r = el.getBoundingClientRect();
      const px = (x - r.left) / r.width;
      const py = (y - r.top) / r.height;
      el.style.setProperty("--ry", `${((px - 0.5) * 16).toFixed(2)}deg`);
      el.style.setProperty("--rx", `${((0.5 - py) * 16).toFixed(2)}deg`);
      el.style.setProperty("--gx", `${(px * 100).toFixed(1)}%`);
      el.style.setProperty("--gy", `${(py * 100).toFixed(1)}%`);
      el.classList.add("active");
      tilted = el;
    };

    /* ---------- events ---------- */
    const onDown = (e) => {
      const tag = e.target?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      burst(e.clientX, e.clientY, !!e.target.closest?.(".god-card"));
      try {
        navigator.vibrate?.(8);
      } catch {
        /* ignore */
      }
      const el = e.target.closest?.(".tilt");
      if (el) tilt(el, e.clientX, e.clientY);
    };
    const onMove = (e) => {
      const el = e.target.closest?.(".tilt");
      if (el) tilt(el, e.clientX, e.clientY);
      else untilt();
      if (reduce) return;
      const pressed = e.pointerType !== "mouse" || e.buttons > 0;
      const now = performance.now();
      if (now - lastTrail < (pressed ? 28 : 70)) return;
      lastTrail = now;
      spark(e.clientX, e.clientY, pressed ? 70 : 34);
      if (pressed) spark(e.clientX, e.clientY, 70);
      ensure();
    };
    const onUp = (e) => {
      if (e.pointerType !== "mouse") setTimeout(untilt, 450);
    };
    const onShower = (e) => shower(e.detail.x, e.detail.y);
    const onBurst = (e) => burst(e.detail.x, e.detail.y, true);

    window.addEventListener("resize", resize);
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    window.addEventListener("fx:shower", onShower);
    window.addEventListener("fx:burst", onBurst);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("fx:shower", onShower);
      window.removeEventListener("fx:burst", onBurst);
    };
  }, []);

  return <canvas ref={ref} className="fx-canvas" aria-hidden />;
}
