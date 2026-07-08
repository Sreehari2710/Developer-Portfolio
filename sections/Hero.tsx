"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ParticleField } from "@/components/ui/ParticleField";
import { TechIconTile } from "@/components/ui/TechIconTile";
import { heroTech, profile } from "@/lib/data";

export function Hero() {
  const [scrolled, setScrolled] = useState(false);

  // mouse parallax — background layer only, ±10px, spring-smoothed
  const parallaxX = useMotionValue(0);
  const parallaxY = useMotionValue(0);
  const springX = useSpring(parallaxX, { stiffness: 50, damping: 20 });
  const springY = useSpring(parallaxY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });

    const onMouseMove = (e: MouseEvent) => {
      parallaxX.set((e.clientX / window.innerWidth - 0.5) * -20);
      parallaxY.set((e.clientY / window.innerHeight - 0.5) * -14);
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, [parallaxX, parallaxY]);

  return (
    <section className="hero-viewport relative w-full overflow-hidden bg-void">
      <motion.div
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        {/* oversized so the parallax shift never exposes an edge */}
        <motion.div
          className="absolute -inset-6"
          style={{ x: springX, y: springY }}
        >
          <Image
            src="/Hero.png"
            alt="Minecraft-inspired fantasy landscape with a developer avatar overlooking a kingdom"
            fill
            priority
            className="object-cover hidden md:block"
          />
          <Image
            src="/Hero-mobile.png"
            alt="Minecraft-inspired fantasy landscape with a developer avatar overlooking a kingdom"
            fill
            priority
            className="object-cover block md:hidden"
          />
        </motion.div>
      </motion.div>

      <ParticleField count={50} color="200, 170, 255" />

      {/* fog layers for depth */}
      <div className="fog-layer" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-void via-void/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-void/70 via-transparent to-transparent" />

      {/* content */}
      <div className="relative z-10 h-full px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute left-6 md:left-16 top-[42%] md:top-[52%] -translate-y-1/2 max-w-xl"
        >
          <p className="text-foreground/90 text-base md:text-lg mb-2">Hi, I&apos;m</p>
          <h1 className="font-blocky text-6xl md:text-7xl font-bold leading-[1.15] text-white tracking-wide">
            {profile.name}
          </h1>
          <p className="font-blocky text-purple-glow text-glow-purple text-base md:text-lg mt-4 tracking-wide">
            {profile.role}
          </p>
          <p className="mt-5 text-foreground/85 text-base md:text-lg max-w-md leading-relaxed">
            {profile.tagline}
          </p>

          <div className="flex items-center gap-3 mt-7 flex-wrap">
            {heroTech.map((t) => (
              <TechIconTile key={t.name} tech={t} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: scrolled ? 0 : 1 }}
          transition={
            scrolled ? { duration: 0.3 } : { duration: 1, delay: 1.4 }
          }
          className="absolute left-6 md:left-16 bottom-10 pointer-events-none"
        >
          <span className="text-xs tracking-widest font-blocky text-foreground">
            SCROLL TO EXPLORE
          </span>
        </motion.div>
      </div>
    </section>
  );
}
