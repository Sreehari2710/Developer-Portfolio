"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
      className={`fixed top-0 inset-x-0 z-50 border-b transition-colors duration-300 ${
        scrolled || menuOpen
          ? "bg-[rgba(10,14,26,0.62)] backdrop-blur-md border-purple-glow/25 md:bg-void md:backdrop-blur-none md:border-white/10"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-16 py-5">
        <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
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

        {/* mobile hamburger toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
          className="md:hidden text-foreground text-xl p-1"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* mobile dropdown — expands below the header, not a side drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[rgba(10,14,26,0.7)] backdrop-blur-md border-t border-purple-glow/25"
          >
            <div className="flex flex-col px-6 py-2">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-blocky text-sm tracking-wide uppercase text-foreground/90 hover:text-purple-glow transition-colors py-3 border-b border-white/5 last:border-none"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
