"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GlowSpot, Embers, LavaGlow, LightRay } from "@/components/ui/AmbientFX";
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
    <section id="contact" className="relative w-full bg-deep scroll-mt-[88px]">
      {/* ---------- Desktop (unchanged) ---------- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative w-full hidden md:block"
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

        {/* ambient: lava pools pulse on both edges */}
        <LavaGlow style={{ left: "0%", top: "74%", width: "20%", height: "26%" }} duration={3.4} />
        <LavaGlow style={{ left: "80%", top: "74%", width: "20%", height: "26%" }} duration={2.8} delay={0.9} />

        {/* ambient: hanging lanterns + braziers flicker */}
        <GlowSpot left="17.3%" top="45%" size={110} color="rgba(249,115,22,0.5)" duration={1.8} />
        <GlowSpot left="82%" top="45.5%" size={110} color="rgba(249,115,22,0.5)" duration={2.3} delay={0.4} />
        <GlowSpot left="25.4%" top="63.5%" size={90} color="rgba(249,115,22,0.4)" duration={2.6} delay={0.7} />
        <GlowSpot left="74.6%" top="63.5%" size={90} color="rgba(249,115,22,0.4)" duration={2.1} delay={1.2} />

        {/* ambient: embers rising off each lava pool */}
        <Embers left="0%" top="66%" width="18%" height="32%" color="#f97316" count={6} size={2.5} />
        <Embers left="82%" top="66%" width="18%" height="32%" color="#f97316" count={6} size={2.5} />

        {/* ambient: molten seams in the pillars glow upward */}
        <LightRay left="8.6%" bottom="47%" height="27%" width={22} color="rgba(249,115,22,0.55)" duration={4.6} />
        <LightRay left="26.5%" bottom="45%" height="21%" width={20} color="rgba(249,115,22,0.5)" duration={5.4} delay={1.4} />
        <LightRay left="73.4%" bottom="45%" height="23%" width={20} color="rgba(249,115,22,0.5)" duration={4.1} delay={0.7} />
        <LightRay left="91.3%" bottom="47%" height="32%" width={22} color="rgba(249,115,22,0.55)" duration={5} delay={2.1} />

        {/* ambient: distant molten valley breathes through the archway */}
        <GlowSpot left="50%" top="55%" size={420} color="rgba(239,68,68,0.16)" duration={6.5} anim="pulse" />

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

      {/* ---------- Mobile ---------- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative w-full block md:hidden"
        style={{ aspectRatio: "941 / 1672" }}
      >
        <Image
          src="/contact-mobile.png"
          alt="Nether fortress — final mission"
          fill
          className="object-cover pointer-events-none select-none"
        />

        {/* top fade */}
        <div className="absolute inset-x-0 top-0 h-[10%] bg-gradient-to-b from-black/70 to-transparent pointer-events-none" />

        {/* ambient: lava pools pulse on both edges */}
        <LavaGlow style={{ left: "0%", top: "80%", width: "18%", height: "20%" }} duration={3.4} />
        <LavaGlow style={{ left: "82%", top: "80%", width: "18%", height: "20%" }} duration={2.8} delay={0.9} />

        {/* ambient: hanging lanterns + braziers flicker */}
        <GlowSpot left="8.5%" top="49%" size={80} color="rgba(249,115,22,0.5)" duration={1.8} />
        <GlowSpot left="91.5%" top="49%" size={80} color="rgba(249,115,22,0.5)" duration={2.3} delay={0.4} />
        <GlowSpot left="14%" top="70%" size={70} color="rgba(249,115,22,0.4)" duration={2.6} delay={0.7} />
        <GlowSpot left="86%" top="70%" size={70} color="rgba(249,115,22,0.4)" duration={2.1} delay={1.2} />

        {/* ambient: embers rising off each lava pool */}
        <Embers left="0%" top="72%" width="16%" height="26%" color="#f97316" count={5} size={2.5} />
        <Embers left="84%" top="72%" width="16%" height="26%" color="#f97316" count={5} size={2.5} />

        {/* Section heading */}
        <div className="absolute" style={{ left: "6%", top: "1.5%" }}>
          <h2 className="font-blocky text-2xl text-glow-purple text-purple-glow tracking-wide">
            06. CONTACT
          </h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="h-px w-6" style={{ background: `${LAVA}80` }} />
            <span
              className="font-blocky text-[9px] tracking-widest"
              style={{ color: LAVA }}
            >
              SEND A RAVEN
            </span>
            <span className="h-px w-6" style={{ background: `${LAVA}80` }} />
          </div>
        </div>

        {/* Centered content inside the archway */}
        <div
          className="absolute flex flex-col items-center"
          style={{ left: "15%", top: "29%", width: "70%", gap: "0" }}
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
                fontSize: "clamp(14px, 4.6vw, 22px)",
                lineHeight: 1.3,
                textShadow: `0 0 24px rgba(255,255,255,0.5), 0 0 48px ${LAVA}44`,
                marginBottom: "3%",
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
            className="w-[40%] h-px my-[4%]"
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
              fontSize: "clamp(9px, 2.4vw, 12px)",
              color: "rgba(255,200,160,0.85)",
              textShadow: `0 0 12px ${LAVA}66`,
              marginBottom: "7%",
            }}
          >
            {missionStatement.cta}
          </motion.p>

          {/* Contact buttons — stacked on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.95 }}
            className="flex flex-col items-center"
            style={{ gap: "10px" }}
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
                  fontSize: "clamp(13px, 3.6vw, 18px)",
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
