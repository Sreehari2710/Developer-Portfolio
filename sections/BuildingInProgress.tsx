"use client";

import { useEffect, useRef, useState } from "react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Terminal } from "@/components/ui/Terminal";
import { registerGsap } from "@/lib/gsap";

export function BuildingInProgress() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const caveRef = useRef<HTMLDivElement>(null);
  const [terminalActive, setTerminalActive] = useState(false);

  useEffect(() => {
    const { gsap, ScrollTrigger } = registerGsap();
    if (!sectionRef.current || !caveRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        caveRef.current,
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "top 45%",
            scrub: true,
            onEnter: () => setTerminalActive(true),
          },
        }
      );

      gsap.utils.toArray<HTMLElement>(".cave-decor").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: i * 0.1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="cave"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-deep py-28 px-6 md:px-16 overflow-hidden"
    >
      {/* cave gradient backdrop */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, #1a1330 0%, #0a0a14 55%, #05060a 100%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(124,58,237,0.12),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(56,189,248,0.08),transparent_40%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionLabel index="01" title="Building in Progress" />

        <div
          ref={caveRef}
          className="relative grid md:grid-cols-2 gap-10 items-center mt-10"
        >
          {/* terminal */}
          <Terminal active={terminalActive} />

          {/* nether portal + decor */}
          <div className="relative h-[320px] flex items-center justify-center">
            <div className="cave-decor absolute left-4 bottom-6 text-4xl">🛠️</div>
            <div className="cave-decor absolute right-6 bottom-4 text-4xl">🔥</div>
            <div className="cave-decor absolute left-10 top-2 text-3xl animate-flicker">🏮</div>
            <div className="cave-decor absolute right-10 top-6 text-3xl animate-flicker">🏮</div>

            <div className="relative w-40 h-64 rounded-[40%] animate-pulse-glow"
              style={{
                background:
                  "radial-gradient(ellipse at center, #d8b4fe 0%, #a855f7 35%, #6d28d9 65%, transparent 80%)",
                boxShadow: "0 0 80px 20px rgba(168,85,247,0.55), 0 0 160px 60px rgba(124,58,237,0.3)",
              }}
            />
            <div
              className="absolute border-4 border-[#1a1212] rounded-[35%]"
              style={{ width: "11rem", height: "17rem" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
