import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import type { TechIcon } from "@/lib/data";

const iconMap = {
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  typescript: SiTypescript,
  postgresql: SiPostgresql,
  tailwind: SiTailwindcss,
};

export function TechIconTile({ tech }: { tech: TechIcon }) {
  const Icon = iconMap[tech.icon];
  return (
    <div
      title={tech.name}
      className="w-11 h-11 rounded-lg border border-white/15 bg-white/5 flex items-center justify-center"
      style={{ filter: `drop-shadow(0 0 6px ${tech.color}99)` }}
    >
      <Icon size={22} color={tech.color} />
    </div>
  );
}
