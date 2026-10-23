const PARTICLES = Array.from({ length: 28 }, (_, i) => {
  const seed = (n: number) => ((Math.sin(i * 99.7 + n) + 1) / 2);
  return {
    left: `${(seed(1) * 100).toFixed(2)}%`,
    top: `${(seed(2) * 100).toFixed(2)}%`,
    size: 1 + seed(3) * 2.5,
    opacity: 0.25 + seed(4) * 0.5,
    duration: 9 + seed(5) * 14,
    delay: -seed(6) * 18,
  };
});

const STREAKS = [
  { top: "18%", width: "38%", duration: 11, delay: 0 },
  { top: "52%", width: "26%", duration: 14, delay: 4 },
  { top: "78%", width: "32%", duration: 17, delay: 8 },
];

export function HomeBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* ===================== LIGHT MODE ===================== */}
      <div className="absolute inset-0 dark:hidden">
        {/* Base soft gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(125%_125%_at_50%_-10%,#eaf0ff_0%,#f5f8ff_45%,#ffffff_100%)]" />
        {/* Soft blue glows */}
        <div className="absolute -top-1/4 right-[-10%] h-[70vh] w-[70vh] rounded-full bg-[radial-gradient(circle,rgba(79,116,244,0.12),transparent_65%)] blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle,rgba(45,90,220,0.10),transparent_65%)] blur-3xl" />
        {/* Blueprint grid */}
        <div
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(37,99,235,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.08) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 90% 70% at 50% 35%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 70% at 50% 35%, black 30%, transparent 80%)",
          }}
        />
      </div>

      {/* ===================== DARK MODE ===================== */}
      <div className="absolute inset-0 hidden dark:block">
        {/* Base deep black-to-navy gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(125%_125%_at_50%_-10%,#0a1330_0%,#060a1c_45%,#03050f_100%)]" />

        {/* Ambient blue radial glows */}
        <div className="absolute -top-1/4 right-[-10%] h-[80vh] w-[80vh] rounded-full bg-[radial-gradient(circle,rgba(79,116,244,0.22),transparent_65%)] blur-3xl aurizin-anim" style={{ animation: "aurizin-pulse-glow 9s ease-in-out infinite" }} />
        <div className="absolute bottom-[-20%] left-[-10%] h-[70vh] w-[70vh] rounded-full bg-[radial-gradient(circle,rgba(45,90,220,0.18),transparent_65%)] blur-3xl aurizin-anim" style={{ animation: "aurizin-pulse-glow 11s ease-in-out infinite 2s" }} />

        {/* Nebula fog blobs (desktop only — heavy blur) */}
        <div className="absolute left-1/4 top-1/3 hidden h-[55vh] w-[55vh] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.14),transparent_70%)] blur-[100px] md:block aurizin-anim" style={{ animation: "aurizin-drift 26s ease-in-out infinite" }} />
        <div className="absolute right-1/4 top-2/3 hidden h-[45vh] w-[45vh] rounded-full bg-[radial-gradient(circle,rgba(56,130,246,0.12),transparent_70%)] blur-[90px] md:block aurizin-anim" style={{ animation: "aurizin-drift 32s ease-in-out infinite reverse" }} />

        {/* Digital blueprint grid */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(79,116,244,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(79,116,244,0.5) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(ellipse 90% 70% at 50% 35%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 70% at 50% 35%, black 30%, transparent 80%)",
          }}
        />
        {/* Fine sub-grid */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(120,150,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(120,150,255,0.4) 1px, transparent 1px)",
            backgroundSize: "14px 14px",
            maskImage:
              "radial-gradient(ellipse 70% 55% at 50% 30%, black 20%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 55% at 50% 30%, black 20%, transparent 75%)",
          }}
        />

        {/* Glowing orbital rings */}
        <div className="absolute left-1/2 top-[38%] hidden -translate-x-1/2 -translate-y-1/2 md:block">
          <div className="h-[60vh] w-[60vh] rounded-full border border-[#4f74f4]/15 aurizin-anim" style={{ animation: "aurizin-spin 60s linear infinite" }} />
          <div className="absolute inset-[12%] rounded-full border border-[#6b8cff]/10 aurizin-anim" style={{ animation: "aurizin-spin-rev 45s linear infinite" }} />
          <div className="absolute inset-[26%] rounded-full border border-dashed border-[#4f74f4]/10 aurizin-anim" style={{ animation: "aurizin-spin 80s linear infinite" }} />
        </div>

        {/* Faint light streaks (desktop only) */}
        {STREAKS.map((s, i) => (
          <div
            key={i}
            className="absolute hidden h-px md:block aurizin-anim"
            style={{
              top: s.top,
              left: "10%",
              width: s.width,
              background:
                "linear-gradient(90deg, transparent, rgba(120,160,255,0.7), transparent)",
              animation: `aurizin-streak ${s.duration}s ease-in-out infinite`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}

        {/* Floating particles (fewer on mobile for performance) */}
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-[#9db4ff] aurizin-anim${i % 2 === 1 ? " hidden md:block" : ""}`}
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              ["--p-opacity" as string]: p.opacity,
              boxShadow: "0 0 6px rgba(120,160,255,0.8)",
              animation: `aurizin-float ${p.duration}s ease-in-out infinite`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}

        {/* Fine noise texture */}
        <div className="aurizin-noise absolute inset-0 opacity-[0.04] mix-blend-overlay" />

        {/* Vignette for readability */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(2,4,12,0.55)_100%)]" />
      </div>
    </div>
  );
}
