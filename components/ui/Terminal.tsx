"use client";

import { useEffect, useRef, useState } from "react";
import { terminalLines } from "@/lib/data";

export function Terminal({ active }: { active: boolean }) {
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [charCount, setCharCount] = useState<number>(0);
  const started = useRef(false);

  useEffect(() => {
    if (!active || started.current) return;
    started.current = true;

    let line = 0;
    let char = 0;

    const tick = () => {
      const current = terminalLines[line];
      if (!current) return;
      if (char <= current.length) {
        setCharCount(char);
        char++;
        setTimeout(tick, 28);
      } else {
        line++;
        char = 0;
        setVisibleLines(line);
        if (line < terminalLines.length) {
          setTimeout(tick, 220);
        }
      }
    };
    setTimeout(tick, 400);
  }, [active]);

  return (
    <div className="glass-panel voxel-border rounded-xl p-5 md:p-7 font-mono text-sm w-full max-w-xl">
      <div className="flex items-center gap-2 mb-4">
        <span className="w-3 h-3 rounded-full bg-red-400/70" />
        <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
        <span className="w-3 h-3 rounded-full bg-green-400/70" />
        <span className="ml-3 text-muted text-xs font-pixel">sreehari@portfolio</span>
      </div>
      <div className="space-y-1.5 min-h-[180px]">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="text-blue-glow">
            <span className="text-purple-glow">✓</span> {line}
          </div>
        ))}
        {visibleLines < terminalLines.length && (
          <div className="text-blue-glow">
            <span className="text-purple-glow">✓</span>{" "}
            {terminalLines[visibleLines]?.slice(0, charCount)}
            <span className="inline-block w-2 h-4 bg-purple-glow align-middle ml-1 animate-pulse" />
          </div>
        )}
        {visibleLines >= terminalLines.length && (
          <div className="text-foreground mt-2">
            <span className="text-purple-glow">$</span>{" "}
            <span className="animate-pulse">_</span>
          </div>
        )}
      </div>
    </div>
  );
}
