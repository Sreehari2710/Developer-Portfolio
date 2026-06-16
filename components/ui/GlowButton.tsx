import { ReactNode } from "react";

export function GlowButton({
  children,
  variant = "purple",
  href,
  onClick,
  className = "",
}: {
  children: ReactNode;
  variant?: "purple" | "ghost";
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const base =
    "btn-glow inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm cursor-pointer";
  const styles =
    variant === "purple"
      ? "bg-gradient-to-r from-purple-deep to-blue-deep text-white shadow-[0_0_30px_-5px_rgba(168,85,247,0.7)] hover:shadow-[0_0_45px_-5px_rgba(168,85,247,0.9)]"
      : "border border-purple-glow/40 text-foreground bg-white/5 hover:bg-white/10 hover:border-purple-glow/70";

  if (href) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}
