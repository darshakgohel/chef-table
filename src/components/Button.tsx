import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  icon?: ReactNode;
  className?: string;
  ariaLabel?: string;
};

const styles = {
  primary:
    "bg-[var(--color-gold)] text-[var(--color-obsidian)] hover:bg-[var(--color-gold-bright)] shadow-[var(--shadow-gold-soft)]",
  secondary:
    "glass-panel text-[var(--color-ivory)] hover:border-[var(--color-gold)]",
  ghost:
    "border border-[var(--color-obsidian-line)] text-[var(--color-ivory-dim)] hover:text-[var(--color-gold)] hover:border-[var(--color-gold)]",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon,
  className = "",
  ariaLabel,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-body text-sm font-semibold tracking-wide transition-colors duration-300 ${styles[variant]} ${className}`;

  const content = (
    <motion.span
      whileHover={{ scale: 1.035 }}
      whileTap={{ scale: 0.97 }}
      className={classes}
    >
      {children}
      {icon}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} aria-label={ariaLabel} type="button">
      {content}
    </button>
  );
}
