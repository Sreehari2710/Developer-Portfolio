"use client";

import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="w-full bg-transparent py-4 px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <span className="font-pixel text-[8px] text-white/20 tracking-widest uppercase">
          © {new Date().getFullYear()} Sreehari T — All rights reserved
        </span>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="font-pixel text-[8px] text-white/20 hover:text-orange-400 transition-colors tracking-wide"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-pixel text-[8px] text-white/20 hover:text-orange-400 transition-colors tracking-wide"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="font-pixel text-[8px] text-white/20 hover:text-orange-400 transition-colors tracking-wide"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
