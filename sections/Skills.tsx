"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaSearch,
  FaServer,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiGoogleanalytics,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BsStars } from "react-icons/bs";
import { MdSearch } from "react-icons/md";
import type { IconType } from "react-icons";
import { skillPanels, type Skill, type SkillPanel } from "@/lib/data";

const levelXpColor: Record<number, string> = {
  5: "#4ade80",  // green  — mastered
  4: "#60a5fa",  // blue   — proficient
  3: "#f97316",  // orange — familiar
};

const iconMap: Record<string, IconType> = {
  react: FaReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  nodejs: FaNodeJs,
  postgresql: SiPostgresql,
  prisma: SiPrisma,
  api: TbApi,
  git: FaGitAlt,
  github: FaGithub,
  supabase: SiSupabase,
  gemini: BsStars,
  analytics: SiGoogleanalytics,
  searchconsole: FaSearch,
  jobs: FaServer,
  seo: MdSearch,
};

function XpBar({
  color,
  segments = 18,
  filled = 18,
  animDelay = 0,
}: {
  color: string;
  segments?: number;
  filled?: number;
  animDelay?: number;
}) {
  // moment the last segment lands — the spark fires right after
  const fillDone = animDelay + filled * 0.035 + 0.06;

  return (
    <div className="relative flex gap-[1.5px] mt-[10px]">
      {Array.from({ length: segments }).map((_, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-[1px]"
          initial={i < filled ? { opacity: 0, scaleX: 0 } : {}}
          whileInView={i < filled ? { opacity: 1, scaleX: 1 } : {}}
          viewport={{ once: true }}
          transition={
            i < filled
              ? { duration: 0.06, delay: animDelay + i * 0.035, ease: "easeOut" }
              : {}
          }
          style={{
            height: "3px",
            backgroundColor: i < filled ? color : "rgba(255,255,255,0.1)",
            transformOrigin: "left",
          }}
        />
      ))}
      {/* level-up spark at the tip of the fill */}
      <motion.span
        className="absolute rounded-full pointer-events-none"
        initial={{ opacity: 0, scale: 0.4 }}
        whileInView={{ opacity: [0, 1, 0], scale: [0.4, 1.6, 0.6] }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: fillDone, times: [0, 0.35, 1] }}
        style={{
          left: `calc(${(filled / segments) * 100}% - 4px)`,
          top: "-2.5px",
          width: "8px",
          height: "8px",
          background: color,
          boxShadow: `0 0 10px ${color}, 0 0 20px ${color}`,
        }}
      />
    </div>
  );
}

function SkillRow({
  skill,
  compact = false,
  delay = 0,
}: {
  skill: Skill;
  compact?: boolean;
  delay?: number;
}) {
  const Icon = iconMap[skill.icon] ?? FaServer;

  const segments = compact ? 14 : 18;
  const filled = Math.round((skill.level / 5) * segments);
  const xpColor = levelXpColor[skill.level] ?? skill.xpColor;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      className="flex items-start gap-[5px]"
    >
      {/* Icon — left column */}
      <Icon
        style={{
          color: skill.color,
          width: compact ? "clamp(11px, 3.4vw, 17px)" : "clamp(16px, 1.3vw, 20px)",
          height: compact ? "clamp(11px, 3.4vw, 17px)" : "clamp(16px, 1.3vw, 20px)",
          flexShrink: 0,
          marginTop: "1px",
        }}
      />
      {/* Name + LVL + XP bar — right column */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-1">
          <span
            className="font-pixel truncate"
            style={{
              fontSize: compact ? "clamp(5px, 1.4vw, 8px)" : "clamp(6px, 0.58vw, 9px)",
              color: "rgba(235,235,255,0.9)",
              lineHeight: 1,
            }}
          >
            {skill.name}
          </span>
          <span
            className="font-pixel shrink-0"
            style={{
              fontSize: compact ? "clamp(4px, 1.15vw, 7px)" : "clamp(5px, 0.48vw, 7px)",
              color: "#a855f7",
              lineHeight: 1,
            }}
          >
            LVL {skill.level}
          </span>
        </div>
        <XpBar
          color={xpColor}
          segments={segments}
          filled={filled}
          animDelay={delay + 0.15}
        />
      </div>
    </motion.div>
  );
}

function PanelContent({
  panel,
  style,
  baseDelay,
  titleShiftPx,
  rowsShiftPx,
  rowsShiftXPx,
  rowsCompact,
  rowsScale,
  hideDiamonds = false,
  titleFontSize,
}: {
  panel: SkillPanel;
  style: React.CSSProperties;
  baseDelay: number;
  titleShiftPx?: number | string;
  rowsShiftPx?: number | string;
  rowsShiftXPx?: number | string;
  rowsCompact?: boolean;
  rowsScale?: number;
  hideDiamonds?: boolean;
  titleFontSize?: string;
}) {
  const asLen = (v: number | string) => (typeof v === "number" ? `${v}px` : v);
  const rowsTransform = [
    rowsShiftXPx ? `translateX(${asLen(rowsShiftXPx)})` : "",
    rowsShiftPx ? `translateY(${asLen(rowsShiftPx)})` : "",
    rowsScale ? `scale(${rowsScale})` : "",
  ]
    .filter(Boolean)
    .join(" ") || undefined;
  const isTwoCol = panel.cols === 2;

  return (
    <div className="absolute flex flex-col" style={style}>
      {/* Panel title bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: baseDelay }}
        className="shrink-0 flex items-center justify-center gap-1"
        style={{
          height: "14%",
          transform: titleShiftPx ? `translateY(${asLen(titleShiftPx)})` : undefined,
        }}
      >
        {!hideDiamonds && (
          <span style={{ fontSize: "clamp(11px, 1vw, 15px)", color: "#a855f7", opacity: 0.7 }}>
            ♦
          </span>
        )}
        <span
          className="font-blocky tracking-widest"
          style={{ fontSize: titleFontSize || "clamp(10px, 1vw, 14px)", color: "#a855f7" }}
        >
          {panel.title}
        </span>
        {!hideDiamonds && (
          <span style={{ fontSize: "clamp(11px, 1vw, 15px)", color: "#a855f7", opacity: 0.7 }}>
            ♦
          </span>
        )}
      </motion.div>

      {/* Skill rows */}
      {isTwoCol ? (
        <div
          className="flex-1 grid grid-cols-2 gap-x-[4%] px-[4%] pb-[4%]"
          style={{
            gridAutoRows: "1fr",
            transform: rowsTransform,
            transformOrigin: "top left",
          }}
        >
          {panel.skills.map((skill, i) => (
            <SkillRow
              key={skill.name}
              skill={skill}
              compact
              delay={baseDelay + i * 0.06}
            />
          ))}
        </div>
      ) : (
        <div
          className="flex-1 flex flex-col justify-start gap-[20%] px-[6%] pt-[10%] pb-[4%]"
          style={{ transform: rowsTransform, transformOrigin: "top left" }}
        >
          {panel.skills.map((skill, i) => (
            <SkillRow
              key={skill.name}
              skill={skill}
              compact={rowsCompact}
              delay={baseDelay + i * 0.15}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative w-full bg-deep scroll-mt-[88px]">
      {/* ---------- Desktop (unchanged) ---------- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="relative w-full hidden md:block"
        style={{ aspectRatio: "1700 / 925" }}
      >
        <Image
          src="/skills.png"
          alt="Enchanting room skill board"
          fill
          priority
          className="object-cover pointer-events-none select-none"
        />

        {/* Top fade for heading legibility */}
        <div className="absolute inset-x-0 top-0 h-[18%] bg-gradient-to-b from-black/55 to-transparent pointer-events-none" />

        {/* Section heading */}
        <div className="absolute" style={{ left: "5%", top: "3.5%" }}>
          <h2 className="font-blocky text-xl md:text-3xl lg:text-4xl text-glow-purple text-purple-glow tracking-wide">
            03. SKILLS
          </h2>
          <div className="flex items-center gap-2 md:gap-3 mt-1">
            <span className="h-px w-6 md:w-10 bg-blue-glow/50" />
            <span className="font-blocky text-[8px] md:text-xs text-blue-glow tracking-widest">
              CHARACTER ATTRIBUTES
            </span>
            <span className="h-px w-6 md:w-10 bg-blue-glow/50" />
          </div>
        </div>

        {/* Panel 1 — FRONTEND */}
        <PanelContent
          panel={skillPanels[0]}
          style={{ left: "9.5%", top: "25%", width: "23.5%", height: "58%" }}
          baseDelay={0.1}
        />

        {/* Panel 2 — BACKEND */}
        <PanelContent
          panel={skillPanels[1]}
          style={{ left: "38.5%", top: "25%", width: "23.5%", height: "58%" }}
          baseDelay={0.2}
        />

        {/* Panel 3 — TOOLS & MAGIC */}
        <PanelContent
          panel={skillPanels[2]}
          style={{ left: "67%", top: "25%", width: "23.5%", height: "58%" }}
          baseDelay={0.3}
        />
      </motion.div>

      {/* ---------- Mobile ---------- */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="relative w-full block md:hidden"
        style={{ aspectRatio: "941 / 1672" }}
      >
        <Image
          src="/skills-mobile2.png"
          alt="Enchanting room skill board"
          fill
          className="object-cover pointer-events-none select-none"
        />

        {/* Top fade for heading legibility */}
        <div className="absolute inset-x-0 top-0 h-[10%] bg-gradient-to-b from-black/55 to-transparent pointer-events-none" />

        {/* Section heading */}
        <div className="absolute" style={{ left: "6%", top: "0%" }}>
          <h2 className="font-blocky text-2xl text-glow-purple text-purple-glow tracking-wide">
            03. SKILLS
          </h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="h-px w-6 bg-blue-glow/50" />
            <span className="font-blocky text-[9px] text-blue-glow tracking-widest">
              CHARACTER ATTRIBUTES
            </span>
            <span className="h-px w-6 bg-blue-glow/50" />
          </div>
        </div>

        {/* Panel 1 — FRONTEND */}
        <PanelContent
          panel={skillPanels[0]}
          style={{ left: "10%", top: "9%", width: "80%", height: "22.5%" }}
          baseDelay={0.1}
          titleShiftPx="3.3vw"
          rowsShiftPx="-1.7vw"
          rowsShiftXPx="7.2vw"
          rowsCompact
          rowsScale={0.77}
          hideDiamonds={true}
          titleFontSize="clamp(7px, 2.2vw, 11px)"
        />

        {/* Panel 2 — BACKEND */}
        <PanelContent
          panel={skillPanels[1]}
          style={{ left: "10%", top: "39%", width: "80%", height: "22.5%" }}
          baseDelay={0.2}
          rowsShiftPx="-1.7vw"
          rowsCompact
          titleFontSize="clamp(9px, 2.8vw, 13px)"
        />

        {/* Panel 3 — TOOLS & MAGIC */}
        <PanelContent
          panel={skillPanels[2]}
          style={{ left: "10%", top: "63.5%", width: "80%", height: "22.5%" }}
          baseDelay={0.3}
          titleShiftPx="-1.7vw"
          rowsShiftPx="-1.7vw"
          rowsCompact
          titleFontSize="clamp(9px, 2.8vw, 13px)"
        />
      </motion.div>
    </section>
  );
}
