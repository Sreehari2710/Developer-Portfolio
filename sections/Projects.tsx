"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects, type Project } from "@/lib/data";

function PortalContent({
  project,
  style,
  delay,
}: {
  project: Project;
  style: React.CSSProperties;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="absolute flex flex-col"
      style={style}
    >
      {/* Realm label */}
      <div className="flex items-center gap-[4px] px-[3%]" style={{ height: "16%" }}>
        <span
          style={{
            color: project.glow,
            fontSize: "clamp(5px, 0.45vw, 7px)",
            opacity: 0.9,
            textShadow: `0 0 10px ${project.glow}`,
          }}
        >
          ♦
        </span>
        <span
          className="font-pixel tracking-widest"
          style={{
            color: project.glow,
            fontSize: "clamp(5px, 0.45vw, 7px)",
            textShadow: `0 0 12px ${project.glow}, 0 0 24px ${project.glow}66`,
          }}
        >
          {project.realm}
        </span>
        <span
          style={{
            color: project.glow,
            fontSize: "clamp(5px, 0.45vw, 7px)",
            opacity: 0.9,
            textShadow: `0 0 10px ${project.glow}`,
          }}
        >
          ♦
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-blocky text-white px-[3%] mb-[4%]"
        style={{
          fontSize: "clamp(8px, 1.05vw, 16px)",
          lineHeight: 1.2,
          textShadow: `0 0 18px rgba(255,255,255,0.6), 0 0 36px ${project.glow}55`,
        }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        className="font-pixel px-[3%] mb-[4%]"
        style={{
          fontSize: "clamp(5px, 0.5vw, 8px)",
          lineHeight: 1.6,
          color: "rgba(220,220,255,0.85)",
          width: "70%",
          textShadow: `0 0 8px rgba(180,180,255,0.35)`,
        }}
      >
        {project.description}
      </p>

      {/* Button — only for projects with a live link */}
      {project.href && (
        <div
          className="pb-[6%]"
          style={{
            paddingLeft: project.id === "pathora" ? "6%" : "9%",
            marginTop: project.id === "crm" ? "8%" : "7%",
          }}
        >
          <motion.a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="font-blocky inline-block cursor-pointer"
            whileHover={{
              scale: 1.08,
              filter: `drop-shadow(0 0 6px ${project.glow}) drop-shadow(0 0 12px ${project.glow})`,
            }}
            transition={{ duration: 0.2 }}
            style={{
              fontSize: "clamp(7px, 0.7vw, 11px)",
              color: project.glow,
              textShadow: `0 0 14px ${project.glow}, 0 0 28px ${project.glow}88`,
            }}
          >
            ENTER WORLD →
          </motion.a>
        </div>
      )}
    </motion.div>
  );
}

const portalPositions: React.CSSProperties[] = [
  { left: "16%", top: "17%", width: "38%", height: "34%" },
  { left: "57%", top: "17%", width: "38%", height: "34%" },
  { left: "16%", top: "55%", width: "38%", height: "34%" },
  { left: "57%", top: "55%", width: "38%", height: "34%" },
];

export function Projects() {
  return (
    <section id="projects" className="relative w-full bg-deep">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative w-full"
        style={{ aspectRatio: "1700 / 925" }}
      >
        <Image
          src="/project.png"
          alt="Portal worlds selection chamber"
          fill
          priority
          className="object-cover pointer-events-none select-none"
        />

        {/* top fade for heading legibility */}
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
            04. PROJECTS
          </h2>
          <div className="flex items-center gap-2 md:gap-3 mt-1">
            <span className="h-px w-6 md:w-10 bg-green-400/50" />
            <span className="font-blocky text-[8px] md:text-xs text-green-400 tracking-widest">
              WORLDS VISITED
            </span>
            <span className="h-px w-6 md:w-10 bg-green-400/50" />
          </div>
        </motion.div>

        {/* Portal content overlays */}
        {projects.map((project, i) => (
          <PortalContent
            key={project.id}
            project={project}
            style={portalPositions[i]}
            delay={0.3 + i * 0.18}
          />
        ))}
      </motion.div>
    </section>
  );
}
