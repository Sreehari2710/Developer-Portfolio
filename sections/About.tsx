"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AboutRow } from "@/components/ui/AboutRow";
import { GlowSpot, Embers } from "@/components/ui/AmbientFX";
import { aboutStats, profile } from "@/lib/data";

export function About() {
  const portalsRef = useRef<HTMLDivElement>(null);
  const portalsInView = useInView(portalsRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative w-full bg-deep">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="relative w-full"
        style={{ aspectRatio: "1700 / 925" }}
      >
        <Image
          src="/about.png"
          alt="Player profile panel"
          fill
          priority
          className="object-cover pointer-events-none select-none"
        />

        {/* top fade for heading legibility */}
        <div className="absolute inset-x-0 top-0 h-[20%] bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

        {/* ambient: torchlight flicker over the stats panel + drifting dust */}
        <GlowSpot left="57%" top="40%" size={340} color="rgba(77,208,196,0.16)" duration={4.2} />
        <GlowSpot left="22%" top="35%" size={260} color="rgba(56,189,248,0.12)" duration={5.1} delay={0.8} />
        <Embers left="8%" top="30%" width="84%" height="55%" color="#4dd0c4" count={5} size={2} />

        {/* heading overlay, on the image */}
        <div className="absolute" style={{ left: "5%", top: "4%" }}>
          <h2 className="font-blocky text-xl md:text-3xl lg:text-4xl text-glow-purple text-purple-glow tracking-wide">
            02. ABOUT ME
          </h2>
          <div className="flex items-center gap-2 md:gap-3 mt-2">
            <span className="h-px w-6 md:w-10 bg-blue-glow/50" />
            <span className="font-blocky text-[8px] md:text-xs text-blue-glow tracking-widest">
              PLAYER PROFILE
            </span>
            <span className="h-px w-6 md:w-10 bg-blue-glow/50" />
          </div>
        </div>

        {/* profile picture inside left frame */}
        <div
          className="absolute"
          style={{ left: "4.2%", top: "1%", width: "38%", height: "67%" }}
        >
          <Image
            src="/profile.png"
            alt="Sreehari T"
            fill
            className="object-contain object-bottom"
          />
        </div>

        {/* stat rows inside right card (icons are baked into the art) */}
        <div
          className="absolute flex flex-col"
          style={{ left: "41.18%", top: "16.54%", width: "31.6%", height: "52.82%" }}
        >
          {aboutStats.map((stat) => (
            <div key={stat.label} className="flex-1 w-full">
              <AboutRow stat={stat} />
            </div>
          ))}
        </div>

        {/* portals label */}
        <div
          className="absolute flex items-center justify-center"
          style={{ left: "0%", top: "68%", width: "100%", height: "10.5%" }}
        >
          <span className="font-blocky text-[9px] md:text-[11px] text-blue-glow tracking-widest">
            PORTALS
          </span>
        </div>

        {/* portal links */}
        <div
          ref={portalsRef}
          className="absolute overflow-hidden"
          style={{ left: "0%", top: "78.8%", width: "100%", height: "13.08%" }}
        >
          {/* converging light pulses travelling from each edge toward the links, once when scrolled into view */}
          {portalsInView && (
            <>
              <div
                className="absolute top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-blue-glow blur-xl animate-travel-left-once pointer-events-none"
                style={{ left: "-4%", boxShadow: "0 0 40px 10px rgba(56,189,248,0.8)" }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-blue-glow blur-xl animate-travel-right-once pointer-events-none"
                style={{ right: "-4%", boxShadow: "0 0 40px 10px rgba(56,189,248,0.8)" }}
              />
            </>
          )}

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="absolute flex items-center justify-center gap-2 font-blocky text-foreground/90 hover:text-purple-glow transition-colors text-xs md:text-base"
            style={{ left: "18.1%", width: "25.7%", top: "10%", height: "80%" }}
          >
            <FaGithub size={20} />
            <span className="truncate">github.com/Sreehari2710</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="absolute flex items-center justify-center gap-2 font-blocky text-foreground/90 hover:text-blue-glow transition-colors text-xs md:text-base"
            style={{ left: "51.1%", width: "25.5%", top: "10%", height: "80%" }}
          >
            <FaLinkedin size={20} />
            <span className="truncate">linkedin.com/in/sreeharit27</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
