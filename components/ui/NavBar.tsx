"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-16 py-5 transition-colors duration-300 ${
        scrolled ? "bg-void border-b border-white/10" : "bg-transparent"
      }`}
    >
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/icon1.png"
          alt="Sreehari T"
          width={56}
          height={56}
          className="rounded-md"
        />
        <span className="font-blocky text-sm md:text-lg text-foreground tracking-wide">
          SREEHARI T
        </span>
      </Link>
      <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-wide text-foreground/90 uppercase">
        {links.map((l) => (
          <a key={l.label} href={l.href} className="hover:text-purple-glow transition-colors">
            {l.label}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
