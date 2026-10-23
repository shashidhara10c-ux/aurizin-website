import logoMark from "@/assets/logo-mark.png";

const PARTICLES = [
  { top: "10%", left: "16%", size: 4, delay: "0s", dur: "7s", opacity: 0.55 },
  { top: "20%", left: "82%", size: 3, delay: "1.2s", dur: "8s", opacity: 0.45 },
  { top: "34%", left: "8%", size: 5, delay: "0.6s", dur: "9s", opacity: 0.4 },
  { top: "62%", left: "12%", size: 3, delay: "2.1s", dur: "7.5s", opacity: 0.5 },
  { top: "72%", left: "86%", size: 4, delay: "0.9s", dur: "8.5s", opacity: 0.45 },
  { top: "18%", left: "48%", size: 2, delay: "1.8s", dur: "6.5s", opacity: 0.5 },
  { top: "84%", left: "40%", size: 3, delay: "0.3s", dur: "9.5s", opacity: 0.4 },
  { top: "46%", left: "92%", size: 3, delay: "2.6s", dur: "8s", opacity: 0.5 },
  { top: "8%", left: "68%", size: 2, delay: "1.5s", dur: "7s", opacity: 0.45 },
  { top: "56%", left: "4%", size: 2, delay: "3s", dur: "8.5s", opacity: 0.4 },
  { top: "90%", left: "64%", size: 3, delay: "0.7s", dur: "9s", opacity: 0.45 },
  { top: "30%", left: "70%", size: 2, delay: "2.3s", dur: "7.5s", opacity: 0.5 },
];

export function HeroLogo() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[640px] select-none">
      {/* Background particles */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="aurizin-anim absolute rounded-full bg-primary"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
              ["--p-opacity" as string]: p.opacity,
              boxShadow: "0 0 8px rgba(37,99,235,0.8)",
              animation: `aurizin-float ${p.dur} ease-in-out ${p.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* Glowing blue light behind logo */}
      <div
        aria-hidden
        className="aurizin-anim absolute left-1/2 top-[40%] h-[58%] w-[58%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40 blur-[90px]"
        style={{ animation: "aurizin-pulse-glow 6s ease-in-out infinite" }}
      />

      {/* Orbit rings + rotating dots (tilted 3D plane) */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[40%] h-[94%] w-[94%] -translate-x-1/2 -translate-y-1/2"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0"
          style={{ transform: "rotateX(74deg)", transformStyle: "preserve-3d" }}
        >
          {/* Outer orbit */}
          <div
            className="aurizin-anim absolute inset-0"
            style={{ animation: "aurizin-spin 24s linear infinite" }}
          >
            <div className="absolute inset-0 rounded-full border border-primary/25" />
            <span
              className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
              style={{ boxShadow: "0 0 14px rgba(37,99,235,1)" }}
            />
            <span
              className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-sky-300"
              style={{ boxShadow: "0 0 12px rgba(125,211,252,0.9)" }}
            />
          </div>
          {/* Inner orbit (counter-rotating) */}
          <div
            className="aurizin-anim absolute inset-[16%]"
            style={{ animation: "aurizin-spin-rev 30s linear infinite" }}
          >
            <div className="absolute inset-0 rounded-full border border-primary/15" />
            <span
              className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
              style={{ boxShadow: "0 0 12px rgba(37,99,235,0.9)" }}
            />
          </div>
        </div>
      </div>

      {/* Holographic platform with pulsing rings */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[73%] h-[42%] w-[62%] -translate-x-1/2 -translate-y-1/2"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute inset-0"
          style={{ transform: "rotateX(76deg)", transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 rounded-full border border-primary/30 bg-primary/[0.06]" />
          <div className="absolute inset-[22%] rounded-full border border-primary/20" />
          <div
            className="aurizin-anim absolute inset-0 rounded-full border-2 border-primary/50"
            style={{ animation: "aurizin-ring-pulse 4s ease-out infinite" }}
          />
          <div
            className="aurizin-anim absolute inset-0 rounded-full border-2 border-primary/50"
            style={{ animation: "aurizin-ring-pulse 4s ease-out 2s infinite" }}
          />
          <div className="absolute left-1/2 top-1/2 h-1/3 w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/60 blur-xl" />
        </div>
      </div>

      {/* Soft blue reflection under logo */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[62%] h-[10%] w-[40%] -translate-x-1/2 rounded-[50%] bg-primary/40 blur-2xl"
      />

      {/* Floating + slowly rotating logo */}
      <div className="absolute left-1/2 top-[40%] z-10 w-[44%] -translate-x-1/2 -translate-y-1/2 [perspective:1000px]">
        <div
          className="aurizin-anim"
          style={{ animation: "aurizin-logo-float 6s ease-in-out infinite" }}
        >
          <img
            src={logoMark}
            alt="Aurizin logo"
            className="aurizin-anim w-full drop-shadow-[0_10px_30px_rgba(37,99,235,0.5)]"
            style={{
              animation: "aurizin-logo-rotate 9s ease-in-out infinite",
              transformStyle: "preserve-3d",
            }}
          />
        </div>
      </div>
    </div>
  );
}
