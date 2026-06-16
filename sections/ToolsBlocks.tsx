"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { oreBlocks } from "@/lib/data";

const OreBlock3D = dynamic(() => import("@/components/three/OreBlock3D"), {
  ssr: false,
});

export function ToolsBlocks() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="blocks" className="relative w-full py-28 px-6 md:px-16 bg-deep overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(168,85,247,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <SectionLabel index="03" title="Tools & Blocks" />

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 md:gap-8 mt-12">
          {oreBlocks.map((block) => (
            <div
              key={block.name}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHovered(block.name)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="w-20 h-20 md:w-24 md:h-24">
                <OreBlock3D
                  color={block.color}
                  emissive={block.emissive}
                  hovered={hovered === block.name}
                />
              </div>
              <span className="font-pixel text-[9px] mt-2 text-muted text-center">
                {block.name}
              </span>

              <AnimatePresence>
                {hovered === block.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.9 }}
                    className="absolute -top-14 z-20 glass-panel rounded-lg px-3 py-2 text-xs whitespace-nowrap"
                    style={{ color: block.emissive }}
                  >
                    {block.description}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
