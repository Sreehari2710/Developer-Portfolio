"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { PortalEnergy } from "@/components/ui/AmbientFX";
import { projects, type Project } from "@/lib/data";

function PortalContent({
  project,
  style,
  delay,
  mobile = false,
}: {
  project: Project;
  style: React.CSSProperties;
  delay: number;
  mobile?: boolean;
}) {
  // vw-based sizes on mobile so text scales with the art on every phone width
  const fs = mobile
    ? {
        realm: "clamp(7px, 1.9vw, 10px)",
        title: "clamp(11px, 3.6vw, 17px)",
        desc: "clamp(7px, 2.1vw, 11px)",
        btn: "clamp(9px, 2.6vw, 13px)",
        descWidth: "90%",
      }
    : {
        realm: "clamp(5px, 0.45vw, 7px)",
        title: "clamp(8px, 1.05vw, 16px)",
        desc: "clamp(5px, 0.5vw, 8px)",
        btn: "clamp(7px, 0.7vw, 11px)",
        descWidth: "70%",
      };

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
            fontSize: fs.realm,
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
            fontSize: fs.realm,
            textShadow: `0 0 12px ${project.glow}, 0 0 24px ${project.glow}66`,
          }}
        >
          {project.realm}
        </span>
        <span
          style={{
            color: project.glow,
            fontSize: fs.realm,
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
          fontSize: fs.title,
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
          fontSize: fs.desc,
          lineHeight: 1.6,
          color: "rgba(220,220,255,0.85)",
          width: fs.descWidth,
          textShadow: `0 0 8px rgba(180,180,255,0.35)`,
        }}
      >
        {project.description}
      </p>

      {/* Button — only for projects with a live link */}
      {project.href && (
        <div
          className="pb-[6%]"
          style={
            mobile
              ? { paddingLeft: "3%", marginTop: "1%" }
              : {
                  paddingLeft: project.id === "pathora" ? "6%" : "9%",
                  marginTop: project.id === "crm" ? "8%" : "7%",
                }
          }
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
              fontSize: fs.btn,
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

// glowing interiors of the four frames in project.png
const portalFrames: React.CSSProperties[] = [
  { left: "15.6%", top: "15.7%", width: "29.1%", height: "30.8%" },
  { left: "55.8%", top: "15.7%", width: "29.1%", height: "31.4%" },
  { left: "15%", top: "51.9%", width: "30%", height: "31.9%" },
  { left: "56.1%", top: "51.9%", width: "29.1%", height: "31.4%" },
];

// content boxes inside the 4 stacked frames of project-mobile.png
const portalPositionsMobile: React.CSSProperties[] = [
  { left: "22%", top: "7%", width: "56%", height: "16.5%" },
  { left: "22%", top: "30%", width: "56%", height: "16.5%" },
  { left: "22%", top: "53%", width: "56%", height: "16.5%" },
  { left: "22%", top: "75.5%", width: "56%", height: "16.5%" },
];

// glowing interiors of the 4 frames (for the energy swirl)
const portalFramesMobile: React.CSSProperties[] = [
  { left: "20.2%", top: "5.7%", width: "59%", height: "18.2%" },
  { left: "20.2%", top: "28.7%", width: "59%", height: "18.5%" },
  { left: "20.2%", top: "51.7%", width: "59%", height: "18%" },
  { left: "20.2%", top: "74.5%", width: "59%", height: "18.5%" },
];

export function Projects() {
  return (
    <section id="projects" className="relative w-full bg-deep scroll-mt-[88px]">
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

        {/* ambient: slow energy swirl inside each portal frame */}
        {projects.map((project, i) => (
          <PortalEnergy
            key={`energy-${project.id}`}
            style={portalFrames[i]}
            glow={project.glow}
            duration={8 + i * 1.5}
          />
        ))}

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
          src="/project-mobile.png"
          alt="Portal worlds selection chamber"
          fill
          className="object-cover pointer-events-none select-none"
        />

        {/* top fade for heading legibility */}
        <div className="absolute inset-x-0 top-0 h-[10%] bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

        {/* Section heading */}
        <div className="absolute" style={{ left: "6%", top: "1.5%" }}>
          <h2 className="font-blocky text-2xl text-glow-purple text-purple-glow tracking-wide">
            04. PROJECTS
          </h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="h-px w-6 bg-green-400/50" />
            <span className="font-blocky text-[9px] text-green-400 tracking-widest">
              WORLDS VISITED
            </span>
            <span className="h-px w-6 bg-green-400/50" />
          </div>
        </div>

        {/* ambient: slow energy swirl inside each portal frame */}
        {projects.map((project, i) => (
          <PortalEnergy
            key={`energy-mobile-${project.id}`}
            style={portalFramesMobile[i]}
            glow={project.glow}
            duration={8 + i * 1.5}
          />
        ))}

        {/* Portal content overlays */}
        {projects.map((project, i) => (
          <PortalContent
            key={`mobile-${project.id}`}
            project={project}
            style={portalPositionsMobile[i]}
            delay={0.3 + i * 0.18}
            mobile
          />
        ))}
      </motion.div>
    </section>
  );
}
