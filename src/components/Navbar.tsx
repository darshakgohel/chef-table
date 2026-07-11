import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useScrolled } from "../hooks/useScrolled";
import { NAV_LINKS, RESTAURANT } from "../data/restaurant";
import { Button } from "./Button";
import logoEmblem from "../assets/brand/logo-emblem.png";

export function Navbar() {
  const scrolled = useScrolled(40);
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 sm:mt-5 sm:px-8 ${
          scrolled
            ? "glass-panel shadow-[var(--shadow-deep)]"
            : "border border-transparent bg-transparent"
        }`}
      >
        <a href="#home" className="flex items-center gap-2.5" aria-label="Chef's Table home">
          <img
            src={logoEmblem}
            alt="Chef's Table Restaurant emblem"
            className="h-10 w-10 rounded-full border border-[var(--color-gold)]/50 object-cover"
          />
          <span className="font-display text-lg tracking-wide text-[var(--color-ivory)]">
            Chef&apos;s Table
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-[var(--color-ivory-dim)] transition-colors hover:text-[var(--color-gold)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            href={`tel:${RESTAURANT.phone.replace(/\s/g, "")}`}
            icon={<Phone size={15} />}
            ariaLabel="Call Chef's Table now"
          >
            Call Now
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-obsidian-line)] text-[var(--color-ivory)] lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="glass-panel mx-4 mt-3 flex flex-col gap-1 rounded-[var(--radius-lux-sm)] p-4 lg:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-body text-sm font-medium text-[var(--color-ivory-dim)] transition-colors hover:bg-white/5 hover:text-[var(--color-gold)]"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 px-2">
              <Button
                href={`tel:${RESTAURANT.phone.replace(/\s/g, "")}`}
                icon={<Phone size={15} />}
                className="w-full"
                ariaLabel="Call Chef's Table now"
              >
                Call Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
