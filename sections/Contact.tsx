"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { profile, missionStatement } from "@/lib/data";

const LAVA   = "#f97316";
const RED    = "#ef4444";

const contactLinks = [
  { label: "✉ EMAIL", href: `mailto:${profile.email}`, color: LAVA },
  { label: "in LINKEDIN", href: profile.linkedin, color: RED },
  { label: "⌥ GITHUB", href: profile.github, color: "#fbbf24" },
];

export function Contact() {
  return (
    <section id="contact" className="relative w-full bg-deep">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative w-full"
        style={{ aspectRatio: "1700 / 925" }}
      >
        <Image
          src="/contact.png"
          alt="Nether fortress — final mission"
          fill
          priority
          className="object-cover pointer-events-none select-none"
        />

        {/* top fade */}
        <div className="absolute inset-x-0 top-0 h-[18%] bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />

        {/* Section heading — top left */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute"
          style={{ left: "5%", top: "3.5%" }}
        >
          <h2 className="font-blocky text-xl md:text-3xl lg:text-4xl text-glow-purple text-purple-glow tracking-wide">
            06. CONTACT
          </h2>
          <div className="flex items-center gap-2 md:gap-3 mt-1">
            <span className="h-px w-6 md:w-10" style={{ background: `${LAVA}80` }} />
            <span
              className="font-blocky text-[8px] md:text-xs tracking-widest"
              style={{ color: LAVA }}
            >
              SEND A RAVEN
            </span>
            <span className="h-px w-6 md:w-10" style={{ background: `${LAVA}80` }} />
          </div>
        </motion.div>

        {/* Centered content inside the archway */}
        <div
          className="absolute flex flex-col items-center"
          style={{ left: "25%", top: "31%", width: "50%", gap: "0" }}
        >
          {/* Mission lines */}
          {missionStatement.lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 + i * 0.18 }}
              className="font-blocky text-center text-white"
              style={{
                fontSize: "clamp(12px, 1.8vw, 28px)",
                lineHeight: 1.25,
                textShadow: `0 0 24px rgba(255,255,255,0.5), 0 0 48px ${LAVA}44`,
                marginBottom: "2%",
              }}
            >
              {line}
            </motion.p>
          ))}

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.72 }}
            className="w-[40%] h-px my-[3%]"
            style={{ background: `linear-gradient(to right, transparent, ${LAVA}99, transparent)` }}
          />

          {/* CTA subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.82 }}
            className="font-pixel text-center"
            style={{
              fontSize: "clamp(7px, 0.75vw, 12px)",
              color: "rgba(255,200,160,0.85)",
              textShadow: `0 0 12px ${LAVA}66`,
              marginBottom: "5%",
            }}
          >
            {missionStatement.cta}
          </motion.p>

          {/* Contact buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="flex items-center justify-center"
            style={{ gap: "clamp(8px, 2vw, 32px)" }}
          >
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="font-blocky inline-block cursor-pointer"
                whileHover={{
                  scale: 1.1,
                  filter: `drop-shadow(0 0 6px ${link.color}) drop-shadow(0 0 14px ${link.color})`,
                }}
                transition={{ duration: 0.2 }}
                style={{
                  fontSize: "clamp(12px, 1.4vw, 22px)",
                  color: link.color,
                  textShadow: `0 0 14px ${link.color}, 0 0 28px ${link.color}88`,
                }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
