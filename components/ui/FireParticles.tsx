"use client";

import { useEffect, useRef } from "react";

type Ember = {
  x: number;
  y: number;
  r: number;
  speed: number;
  drift: number;
  life: number;
  maxLife: number;
};

export function FireParticles({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const embers: Ember[] = [];
    const spawn = () => {
      embers.push({
        x: width / 2 + (Math.random() - 0.5) * 30,
        y: height - 10,
        r: Math.random() * 2.5 + 1,
        speed: Math.random() * 1.2 + 0.6,
        drift: (Math.random() - 0.5) * 0.6,
        life: 0,
        maxLife: Math.random() * 60 + 60,
      });
    };

    let frame: number;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      if (Math.random() < 0.5) spawn();

      for (let i = embers.length - 1; i >= 0; i--) {
        const e = embers[i];
        e.y -= e.speed;
        e.x += e.drift;
        e.life++;
        const alpha = 1 - e.life / e.maxLife;
        if (alpha <= 0) {
          embers.splice(i, 1);
          continue;
        }
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.r, 0, Math.PI * 2);
        const hue = e.life < e.maxLife * 0.4 ? "255, 180, 80" : "168, 85, 247";
        ctx.fillStyle = `rgba(${hue}, ${alpha})`;
        ctx.shadowColor = `rgba(${hue}, 0.9)`;
        ctx.shadowBlur = 8;
        ctx.fill();
      }
      frame = requestAnimationFrame(render);
    };
    render();

    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
