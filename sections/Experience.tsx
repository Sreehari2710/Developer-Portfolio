"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

// Red = left frame border colour, Blue = right frame border colour
const RED  = "#ef4444";
const BLUE = "#60a5fa";

export function Experience() {
  const exp = experiences[0];

  return (
    <section id="experience" className="relative w-full bg-deep">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative w-full"
        style={{ aspectRatio: "1700 / 925" }}
      >
        <Image
          src="/expirience2.png"
          alt="Underground cave quest archive"
          fill
          priority
          className="object-cover pointer-events-none select-none"
        />

        {/* top fade */}
        <div className="absolute inset-x-0 top-0 h-[18%] bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute"
          style={{ left: "5%", top: "3.5%" }}
        >
          <h2 className="font-blocky text-xl md:text-3xl lg:text-4xl text-glow-purple text-purple-glow tracking-wide">
            05. EXPERIENCE
          </h2>
          <div className="flex items-center gap-2 md:gap-3 mt-1">
            <span className="h-px w-6 md:w-10" style={{ background: `${RED}80` }} />
            <span
              className="font-blocky text-[8px] md:text-xs tracking-widest"
              style={{ color: RED }}
            >
              QUEST LOG
            </span>
            <span className="h-px w-6 md:w-10" style={{ background: `${RED}80` }} />
          </div>
        </motion.div>

        {/* Content — single column inside the central frame */}
        <div
          className="absolute flex flex-col"
          style={{ left: "23%", top: "25.5%", width: "55%", height: "72%", gap: "2%" }}
        >
          {/* ── Company info (top block) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col"
            style={{ height: "34%" }}
          >
            {/* Quest badge */}
            <div className="flex items-center gap-[5px] mb-[4%]">
              <span
                className="font-pixel tracking-widest"
                style={{
                  fontSize: "clamp(7px, 0.6vw, 10px)",
                  color: RED,
                  textShadow: `0 0 10px ${RED}, 0 0 20px ${RED}66`,
                }}
              >
                ✦ QUEST ACTIVE ✦
              </span>
            </div>

            {/* Role */}
            <h3
              className="font-blocky text-white mb-[2%]"
              style={{
                fontSize: "clamp(12px, 1.5vw, 24px)",
                lineHeight: 1.2,
                textShadow: `0 0 20px rgba(255,255,255,0.55), 0 0 40px ${RED}44`,
              }}
            >
              {exp.role}
            </h3>

            {/* Company + duration */}
            <div className="flex items-center gap-[8px] mb-[4%]">
              <span
                className="font-blocky"
                style={{
                  fontSize: "clamp(10px, 1.1vw, 18px)",
                  color: RED,
                  textShadow: `0 0 12px ${RED}, 0 0 24px ${RED}66`,
                }}
              >
                @ {exp.company}
              </span>
              <span
                className="font-pixel"
                style={{
                  fontSize: "clamp(7px, 0.6vw, 10px)",
                  color: "rgba(200,200,255,0.55)",
                }}
              >
                · {exp.duration}
              </span>
            </div>

            {/* Summary */}
            <p
              className="font-pixel"
              style={{
                fontSize: "clamp(7px, 0.65vw, 11px)",
                lineHeight: 1.7,
                color: "rgba(220,220,255,0.8)",
                textShadow: "0 0 8px rgba(180,180,255,0.3)",
                width: "80%",
              }}
            >
              {exp.summary}
            </p>
          </motion.div>

          {/* ── Achievements (bottom block) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col"
            style={{ height: "58%" }}
          >
            {/* Label — blue to match right frame */}
            <div className="flex items-center gap-[5px] mb-[4%]">
              <span
                className="font-pixel tracking-widest"
                style={{
                  fontSize: "clamp(7px, 0.6vw, 10px)",
                  color: BLUE,
                  textShadow: `0 0 10px ${BLUE}, 0 0 20px ${BLUE}66`,
                }}
              >
                ✦ ACHIEVEMENTS UNLOCKED ✦
              </span>
            </div>

            {/* Bullets */}
            <div className="flex flex-col gap-[3.5%]">
              {exp.bullets.map((bullet, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.55 + i * 0.1 }}
                  className="flex items-start gap-[6px]"
                >
                  <span
                    style={{
                      color: BLUE,
                      fontSize: "clamp(7px, 0.6vw, 10px)",
                      marginTop: "1px",
                      flexShrink: 0,
                      textShadow: `0 0 8px ${BLUE}`,
                    }}
                  >
                    ▸
                  </span>
                  <p
                    className="font-pixel"
                    style={{
                      fontSize: "clamp(7px, 0.62vw, 10px)",
                      lineHeight: 1.6,
                      color: "rgba(220,220,255,0.85)",
                      textShadow: "0 0 6px rgba(160,200,255,0.2)",
                    }}
                  >
                    {bullet}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
