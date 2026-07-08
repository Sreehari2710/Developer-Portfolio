"use client";

// Deterministic pseudo-random so SSR and client render identical particles
const rand = (i: number, salt: number) => ((i * 73 + salt * 31) % 97) / 97;

/** A soft flickering point of light — torches, lanterns, braziers. */
export function GlowSpot({
  left,
  top,
  size = 60,
  color,
  duration = 2.4,
  delay = 0,
}: {
  left: string;
  top: string;
  size?: number;
  color: string;
  duration?: number;
  delay?: number;
}) {
  return (
    <div
      className="fx-anim absolute rounded-full pointer-events-none"
      style={{
        left,
        top,
        width: size,
        height: size,
        transform: "translate(-50%, -50%)",
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        mixBlendMode: "screen",
        animation: `torch-flicker ${duration}s ease-in-out ${delay}s infinite`,
      }}
    />
  );
}

/** Small glowing dots rising and fading inside a region — embers, dust. */
export function Embers({
  left,
  top,
  width,
  height,
  color,
  count = 6,
  size = 3,
}: {
  left: string;
  top: string;
  width: string;
  height: string;
  color: string;
  count?: number;
  size?: number;
}) {
  return (
    <div
      className="absolute overflow-hidden pointer-events-none"
      style={{ left, top, width, height }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="fx-anim absolute rounded-full"
          style={{
            left: `${8 + rand(i, 1) * 84}%`,
            bottom: "-4px",
            width: size,
            height: size,
            background: color,
            boxShadow: `0 0 6px ${color}`,
            animation: `ember-rise ${3.2 + rand(i, 2) * 2.4}s linear ${
              rand(i, 3) * 4
            }s infinite`,
          }}
        />
      ))}
    </div>
  );
}

/** Slow-rotating energy swirl clipped to a portal frame, screen-blended. */
export function PortalEnergy({
  style,
  glow,
  duration = 9,
}: {
  style: React.CSSProperties;
  glow: string;
  duration?: number;
}) {
  return (
    <div
      className="absolute overflow-hidden pointer-events-none"
      style={{
        ...style,
        borderRadius: "12px",
        mixBlendMode: "screen",
        opacity: 0.3,
      }}
    >
      <div
        className="fx-anim absolute"
        style={{
          inset: "-45%",
          background: `conic-gradient(from 0deg, transparent 0deg, ${glow} 55deg, transparent 140deg, ${glow} 215deg, transparent 300deg, ${glow} 360deg)`,
          filter: "blur(28px)",
          animation: `portal-spin ${duration}s linear infinite`,
          willChange: "transform",
        }}
      />
    </div>
  );
}

/** Pulsing molten glow over a lava-pool region of the background art. */
export function LavaGlow({
  style,
  duration = 3,
  delay = 0,
}: {
  style: React.CSSProperties;
  duration?: number;
  delay?: number;
}) {
  return (
    <div
      className="fx-anim absolute pointer-events-none"
      style={{
        ...style,
        background:
          "radial-gradient(ellipse at 50% 80%, rgba(249,115,22,0.9) 0%, rgba(239,68,68,0.5) 40%, transparent 75%)",
        mixBlendMode: "screen",
        filter: "blur(10px)",
        animation: `lava-pulse ${duration}s ease-in-out ${delay}s infinite`,
      }}
    />
  );
}
