"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/data";

export function WorldsBuilt() {
  return (
    <section
      id="worlds"
      className="relative w-full py-28 px-6 md:px-16 bg-void overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(56,189,248,0.08),transparent_45%),radial-gradient(circle_at_10%_70%,rgba(168,85,247,0.1),transparent_45%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionLabel index="02" title="Worlds I've Built" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
