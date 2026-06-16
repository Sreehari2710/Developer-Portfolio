"use client";

import { motion } from "framer-motion";
import { GlowButton } from "@/components/ui/GlowButton";
import { FireParticles } from "@/components/ui/FireParticles";
import { missionStatement, profile } from "@/lib/data";

export function Mission() {
  return (
    <section id="mission" className="relative w-full min-h-screen py-28 px-6 md:px-16 bg-void overflow-hidden flex items-center">
      {/* night sky */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 80% 10%, rgba(232,234,242,0.08), transparent 8%), linear-gradient(180deg, #05060a 0%, #0a0a18 55%, #0a0e1a 100%)",
        }}
      />
      <div className="absolute top-16 right-[12%] w-16 h-16 rounded-full bg-[#e8eaf2] opacity-90 blur-[1px]"
        style={{ boxShadow: "0 0 60px 20px rgba(232,234,242,0.25)" }}
      />
      {/* stars */}
      <div className="absolute inset-0 opacity-60" style={{
        backgroundImage: "radial-gradient(white 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="relative z-10 max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-label mb-5">04. THE MISSION</p>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-tight">
            {missionStatement.lines[0]}
            <br />
            <span className="text-glow-purple text-purple-glow">
              {missionStatement.lines[1]}
            </span>
          </h2>
          <div className="mt-8">
            <GlowButton href={`mailto:${profile.email}`}>
              {missionStatement.cta}
            </GlowButton>
          </div>
        </motion.div>

        {/* campfire scene */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-72 flex items-end justify-center"
        >
          <FireParticles />
          {/* character silhouette sitting */}
          <div className="absolute left-[24%] bottom-9 w-14 flex flex-col items-center opacity-90">
            <div className="w-5 h-5 bg-[#1a1420] rounded-sm" />
            <div className="w-9 h-7 bg-[#1a1420] rounded-t-md -mt-0.5" />
            <div className="w-12 h-4 bg-[#1a1420] rounded-sm -mt-0.5" />
          </div>
          {/* campfire */}
          <div className="relative">
            <div
              className="w-24 h-24 rounded-full animate-pulse-glow"
              style={{
                background:
                  "radial-gradient(circle, #ffd27a 0%, #ff9d3f 35%, #c2410c 60%, transparent 80%)",
                boxShadow: "0 0 60px 20px rgba(255,150,50,0.5)",
              }}
            />
            <div className="absolute inset-x-0 -bottom-2 flex justify-center gap-1">
              <div className="w-10 h-3 bg-[#2a1d12] rotate-6 rounded-sm" />
              <div className="w-10 h-3 bg-[#2a1d12] -rotate-6 rounded-sm -ml-6" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
