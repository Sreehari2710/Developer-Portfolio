"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ParticleField } from "@/components/ui/ParticleField";
import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ scale: 1.03 }}
      className="glass-panel rounded-2xl overflow-hidden group relative"
    >
      <div
        className="relative h-40 w-full overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${project.palette[0]}, ${project.palette[1]}33)`,
        }}
      >
        <ParticleField count={18} color="255, 255, 255" />
        <div
          className="absolute inset-0 opacity-60 group-hover:opacity-90 transition-opacity"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${project.glow}55, transparent 60%)`,
          }}
        />
        <div className="absolute bottom-3 left-4 right-4">
          <span className="section-label" style={{ color: project.glow }}>
            {project.worldName}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-display font-bold text-lg text-foreground">
          {project.title}
        </h3>
        <p className="text-muted text-sm mt-2 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.href && (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 mt-5 text-sm font-semibold"
            style={{ color: project.glow }}
          >
            Explore World <span aria-hidden>→</span>
          </a>
        )}
      </div>

      <div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ boxShadow: `0 0 40px -5px ${project.glow}88` }}
      />
    </motion.div>
  );
}
